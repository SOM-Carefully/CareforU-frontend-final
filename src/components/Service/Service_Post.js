import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';
import Title from './../Title/Title';
import ServiceBtn from './Service_Button';
import ServiceComplete from './Service_Complete';
import FileUploader from "../FileUploader/FileUploader";
import axios from 'axios';
import profile from "../../img/profile.png";

function Service_Post() {
  //
  const [message, setMessage] = useState('');

  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  const token = localStorage.getItem('accessToken');
  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };

  // 완료 메시지
  const handleMessageChange = event => {
    // 👇️ access textarea value
    setMessage(event.target.value);
  };

  // 2초 후 페이지 이동
  const timeout = () => {
    showModal(true);
    setTimeout(() => {
      navigate('/main');
    }, 2000);
  };

  // 사용자가 첨부할 파일 저장하는 위치 선언
  const [image, setImage] = useState({
    image_file: "",
    preview_URL: profile,
  });

  //사용자가 첨부한 파일을 url 형식으로 변경하는 코드
  const sendImageToServer = (e) => {
    if (image.image_file) {
      const formData = new FormData();
      formData.append('file', image.image_file);
      axios.post('http://54.180.210.232:8080/api/v1/file', formData, {
        headers: {
          "Content-Type": `multipart/form-data`,
          Authorization: 'Bearer ' + token,
        },
      }).then((res) => {
        alert("파일이 등록되었습니다.");
        setImage({
          image_file: res.data.result[0],
          preview_URL: "img/default_image.png",
        });
        localStorage.setItem('profileUrl', res.data.result[0]);
      }).catch((error) => {
        alert('파일을 업로드해주세요.');
        console.log(error);
      });
    }
  }
  let inputRef;

  // 사용자가 첨부한 파일을 저장하고 url로 변경하는 코드
  const saveImage = (e) => {
    e.preventDefault();
    const fileReader = new FileReader();

    if (e.target.files[0]) {
      fileReader.readAsDataURL(e.target.files[0])
    }
    fileReader.onload = () => {
      setImage ({
        image_file: e.target.files[0],
        preview_URL: fileReader.result
      })
    }
  }

  // 카테고리에 따른 post url 변경 및 보내는 data 변경
  const ApplyService = e => {
    switch (selectedCategory) {
      case '교육':
        axios({
          method: 'post',
          url: 'http://54.180.210.232:8080/api/v1/services/educations',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
          data: {
            content: message,
            degreeRequest:
              selectedEducation === '박사'
                ? 'MASTER'
                : selectedEducation === '석사'
                ? 'DOCTOR'
                : '',
            educationContentRequest:
              selectedEducationDetail === '컨설팅'
                ? 'CONSULTING'
                : selectedEducationDetail === '교정교열'
                ? 'CORRECTION'
                : selectedEducationDetail === '번역'
                ? 'TRANSLATION'
                : '',
            userFileUrl: image.image_file,
          },
        })
          .then(res => {
            timeout();
          })
          .catch(error => {
            alert('서비스 신청이 완료되었습니다!');
          });

        return;
      case '생활':
        switch (selectedEducation) {
          case '교통':
            axios({
              method: 'post',
              url: 'http://54.180.210.232:8080/api/v1/services/traffics',
              headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
              },
              data: {
                content: message,
                carTypeRequest:
                  selectedEducationDetail === '소형'
                    ? 'COMPACT'
                    : selectedEducationDetail === '중형'
                    ? 'MIDSIZE'
                    : selectedEducationDetail === 'SUV'
                    ? 'SUV'
                    : '',
                price,
                userFileUrl: image.image_file,
              },
            })
              .then(res => {
                timeout();
              })
              .catch(error => {
                alert('어쩌지이... ? 안 뜨는데에..');
              });

            return;
          case '통신':
            axios({
              method: 'post',
              url: 'http://54.180.210.232:8080/api/v1/services/communications',
              headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
              },
              data: {
                content: message,
                modelName,
                usim: isUsim,
                userFileUrl: image.image_file,
              },
            })
              .then(res => {
                timeout();
              })
              .catch(error => {
                alert('어쩌지이... ? 안 뜨는데에..');
              });

            return;
          case '주거':
            axios({
              method: 'post',
              url: 'http://54.180.210.232:8080/api/v1/services/dwellings',
              headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
              },
              data: {
                content: message,
                numberOfRoomsRequest:
                  selectedHouseType === '원룸'
                    ? 'ONEROOM'
                    : selectedHouseType === '투룸'
                    ? 'TWOROOM'
                    : selectedHouseType === '투베이'
                    ? 'TWOBAY'
                    : '',
                price,
                transactionMethodRequest:
                  selectedEducationDetail === '전세'
                    ? 'CHARTER'
                    : selectedEducationDetail === '월세'
                    ? 'MONTHLY'
                    : '',
                userFileUrl: image.image_file,
              },
            })
              .then(res => {
                timeout();
              })
              .catch(error => {
                alert('어쩌지이... ? 안 뜨는데에..');
              });

            return;
          default:
            return;
        }
      default:
        return;
    }
  };

  // 사용자가 선택할 카테고리 저장
  const [keyword, setKeyword] = useState('학위');
  const [secondKeyword, setSecondKeyword] = useState('서비스 내용');

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedEducation, setSelectedEducation] = useState('');
  const [selectedEducationDetail, setSelectedEducationDetail] = useState('');
  const [selectedHouseType, setSelectedHouseType] = useState(true);
  const [modelName, setModelName] = useState('');
  const [isUsim, setIsUsim] = useState(true);
  const [price, setPrice] = useState(0);

  const categoryArr = ['교육', '생활'];
  const houseArr = ['원룸', '투룸', '투베이'];
  const [educationArr, setEducationArr] = useState(['박사', '석사']);
  const [educationDetailArr, setIsEducationDetailArr] = useState([
    '컨설팅',
    '교정교열',
    '번역',
  ]);

  //생활-> 주거 선택 시 [원룸 투룸 투베이] 선택하면 true로 변경
  const houseCategoryClick = idx => {
    setSelectedHouseType(
      idx === 0 ? '원룸' : idx === 1 ? '투룸' : idx === 2 ? '투베이' : '',
    );
  };

  //첫번째 카테고리 선택 시 두번째 카테고리 제목 변경 -> 그 후 아래의 리스트 변경
  const categoryClick = idx => {
    switch (idx) {
      case 0:
        setKeyword('학위');
        setSelectedCategory('교육');
        setEducationArr(['박사', '석사']);
        setSecondKeyword('서비스 내용');
        setIsEducationDetailArr(['컨설팅', '교정교열', '번역']);

        return;
      case 1:
        setKeyword('생활');
        setSelectedCategory('생활');
        setEducationArr(['교통', '통신', '주거']);
        setIsEducationDetailArr(['소형', '중형', 'SUV']);

        return;
      default:
        return;
    }
  };

  //위 코드와 마찬가지 코드 -> 근데 박사 클릭 시 secondCategory 값 영어로 변경하기
  const educationCategoryClick = idx => {
    switch (selectedCategory) {
      case '교육':
        setSecondKeyword('서비스 내용');
        setSelectedEducation(idx === 0 ? '박사' : idx === 1 ? '석사' : '');

        return;

      case '생활':
        setPrice(0);

        switch (idx) {
          case 0:
            setSelectedEducation('교통');
            setIsEducationDetailArr(['소형', '중형', 'SUV']);
            setSecondKeyword('중고차');

            return;
          case 1:
            setSelectedEducation('통신');
            setSecondKeyword('모델명 입력');

            return;
          case 2:
            setSelectedEducation('주거');
            setIsEducationDetailArr(['전세', '월세']);
            setSecondKeyword('매매');

            return;
          default:
            break;
        }

        return;

      default:
        return;
    }
  };

  //교육 클릭 시 컨설팅, 교정교열  그 외 일 때 백엔드에 전달할 값으로 thirdCategory 값 변경하기
  const educationDetailCategoryClick = idx => {
    if (selectedCategory === '교육') {
      setSelectedEducationDetail(
        idx === 0 ? '컨설팅' : idx === 1 ? '교정교열' : idx === 2 ? '번역' : '',
      );

      return;
    }

    switch (selectedEducation) {
      case '교통':
        setSelectedEducationDetail(
          idx === 0 ? '소형' : idx === 1 ? '중형' : idx === 2 ? 'SUV' : '',
        );

        return;
      case '주거':
        setSelectedEducationDetail(
          idx === 0 ? '전세' : idx === 1 ? '월세' : '',
        );

        return;
      default:
        return;
    }
  };

  const changeModelName = e => {
    setModelName(e.target.value);
  };

  const changeIsUsim = isUsim => () => {
    setIsUsim(isUsim);
  };

  const changePrice = e => {
    setPrice(e.target.valueAsNumber);
  };

  return (
    <div className="Service_Top_Wrap">
      <div className="ServiceWrap">
        <Title title="서비스 신청" />
        <h3 id="categoryTitle">카테고리</h3>
        <div className="categoryBtnWrap">
          {categoryArr.map((elm, index) => (
            <ServiceBtn
              key={index}
              isSelected={selectedCategory === elm}
              handleClick={categoryClick}
              elementIndex={index}
              content={elm}
            />
          ))}
        </div>
        <div className="categoryBox">
          <h3>{keyword}</h3>
          <div className="categorySpecialBox">
            <div className="secondCategoryBtnWrap">
              {educationArr.map((elm, index) => (
                <ServiceBtn
                  key={index}
                  isSelected={selectedEducation === elm}
                  handleClick={educationCategoryClick}
                  elementIndex={index}
                  content={elm}
                />
              ))}
            </div>
            <div className="categoryBox">
              <h3>{secondKeyword}</h3>
              {keyword === '생활' ? (
                secondKeyword === '중고차' ? (
                  <div className="lastCategoryBoxWrap">
                    <div className="lastCategoryBox">
                      {educationDetailArr.map((elm, index) => (
                        <ServiceBtn
                          key={index}
                          isSelected={selectedEducationDetail === elm}
                          handleClick={educationDetailCategoryClick}
                          elementIndex={index}
                          content={elm}
                        />
                      ))}
                    </div>
                    <h3 id="categoryTitle">가격</h3>
                    <div className="carPriceCategoryWrap">
                      <input type="number" onChange={changePrice} min={0} />
                    </div>
                  </div>
                ) : secondKeyword === '모델명 입력' ? (
                  <div>
                    <div className="secondCategoryBtnWrap">
                      <input type="text" onChange={changeModelName} />
                    </div>
                    <div>
                      <h3 id="categoryTitle">유심칩 여부</h3>
                      <button
                        type="button"
                        id="usimOk"
                        className={isUsim ? 'isSelected' : ''}
                        onClick={changeIsUsim(true)}
                      >
                        O
                      </button>
                      <button
                        type="button"
                        id="usimNo"
                        className={isUsim ? '' : 'isSelected'}
                        onClick={changeIsUsim(false)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="lastCategoryBoxWrap">
                    <div className="lastCategoryBox">
                      {educationDetailArr.map((elm, index) => (
                        <ServiceBtn
                          key={index}
                          isSelected={selectedEducationDetail === elm}
                          handleClick={educationDetailCategoryClick}
                          elementIndex={index}
                          content={elm}
                        />
                      ))}
                    </div>
                    <div>
                      <h3 id="categoryTitle">매매</h3>
                      <div className="lastCategoryBox">
                        {houseArr.map((elm, index) => (
                          <ServiceBtn
                            key={index}
                            isSelected={selectedHouseType === elm}
                            handleClick={houseCategoryClick}
                            elementIndex={index}
                            content={elm}
                          />
                        ))}
                      </div>
                    </div>
                    <h3 id="categoryTitle">가격</h3>
                    <div className="carPriceCategoryWrap">
                      <input type="number" onChange={changePrice} min={0} />
                    </div>
                  </div>
                )
              ) : (
                <div className="lastCategoryBox">
                  {educationDetailArr.map((elm, index) => (
                    <ServiceBtn
                      key={index}
                      isSelected={selectedEducationDetail === elm}
                      handleClick={educationDetailCategoryClick}
                      elementIndex={index}
                      content={elm}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="categoryBox">
          <h3>추가 요청 사항</h3>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleMessageChange}
          />
        </div>

        <input type="file"
               onChange={saveImage}
               onClick={(e)=>e.target.value = null}
               ref={refParam => inputRef = refParam}
        />
        <button onClick={sendImageToServer}>
          Upload
        </button>
      </div>
      <div className="apply_btn_wrap" onClick={ApplyService}>
        신청하기
      </div>
      <div>
        {
          modalOpen ? <ServiceComplete /> : null //기계역할
        }
      </div>
    </div>
  );
}

export default Service_Post;
