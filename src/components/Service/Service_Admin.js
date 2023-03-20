import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';
import Title from './../Title/Title';
import ServiceBtn from './Service_Button';
import axios from 'axios';
import $ from 'jquery';

function Service_Admin(){
    const [message, setMessage] = useState('');

    const token = localStorage.getItem('accessToken');

    const handleMessageChange = event => {
        // 👇️ access textarea value
        setMessage(event.target.value);
    };
    const [selectSecondCategory, setSelectSecondCategory] = useState('');
    const [selectThirdCategory, setSelectThirdCategory] = useState('');

    const ApplyService = (e) => {
        if(localStorage.getItem('firstCategory') == '교육'){
            axios({
                method: "post",
                url: "http://54.180.210.232:8080/api/v1/services/education",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                },data: {
                    "content": message,
                    "degreeRequest": selectSecondCategory,
                    "educationContentRequest": selectThirdCategory,
                    "userFileUrl": "https://picsum.photos/seed/picsum/200/300"
                }
            }).then((res) => {
                alert('서비스 신청이 완료되었습니다');
                $('.Service_Top_Wrap').append("<div><img src='./../'</div>");
            }).catch((error) => {
                alert("어쩌지이... ? 안 뜨는데에..");
            });
        }
    }

    const [keyword, setKeyword] = useState('학위');
    const [secondKeyword, setSecondKeyword] = useState('서비스 내용');
    const [isCategorySelect, setIsCategorySelect] = useState(true);
    const [isEducationSelect, setIsEducationSelect] = useState(true);
    const [isEducationDetailSelect, setIsEducationDetailSelect] = useState(true);
    const [isHouseSelect, setIsHouseSelect] = useState(true);
    const categoryArr = ['교육', '생활'];
    const houseArr = ['원룸', '투룸', '투베이'];
    const [educationArr, setEducationArr] = useState(['박사', '석사']);
    const [educationDetailArr, setIsEducationDetailArr] = useState(['컨설팅', '교정교열', '번역']);

    const houseCategoryClick = (idx) => {
        const newHouseArr = Array(houseArr.length).fill(false);
        newHouseArr[idx] = true;
        setIsHouseSelect(newHouseArr);
    }

    const categoryClick = (idx) => {
        const newCategoryArr = Array(categoryArr.length).fill(false);
        newCategoryArr[idx] = true;
        setIsCategorySelect(newCategoryArr);
        newCategoryArr.map(function() {
            if(newCategoryArr[0]){
                setKeyword('학위');
                localStorage.setItem('firstCategory', '교육');
                setEducationArr(['박사', '석사']);
                setSecondKeyword('서비스 내용');
                setIsEducationDetailArr(['컨설팅', '교정교열', '번역']);
            }else{
                setKeyword('생활');
                localStorage.setItem('firstCategory', '생활');
                setEducationArr(['교통', '통신', '주거']);
                setIsEducationDetailArr(['소형', '중형', 'SUV']);
            }
        });
    }

    const educationCategoryClick = (idx) => {
        const newEducationArr = Array(educationArr.length).fill(false);
        newEducationArr[idx] = true;
        setIsEducationSelect(newEducationArr);
        localStorage.setItem('secondCategory', educationArr[idx]);
        if(localStorage.getItem('secondCategory') == '박사'){
            setSelectSecondCategory('MASTER');
        }else{
            setSelectSecondCategory('DOCTOR');
        }
        if(keyword == '교육'){
            setSecondKeyword('서비스 내용');
        }
        if(keyword == '생활'){
            if(newEducationArr[0]){
                setSecondKeyword('중고차');
            }else if(newEducationArr[1]){
                setSecondKeyword('모델명 입력');
            }else{
                setSecondKeyword('매매');
            }
        }
    }

    const educationDetailCategoryClick = (idx) => {
        const newEducationDetailArr = Array(educationDetailArr.length).fill(false);
        newEducationDetailArr[idx] = true;
        setIsEducationDetailSelect(newEducationDetailArr);
        localStorage.setItem('thirdCategory', educationDetailArr[idx]);
        if(localStorage.getItem('thirdCategory') == '컨설팅'){
            setSelectThirdCategory('CONSULTING');
        }else if(localStorage.getItem('thirdCategory') == '교정교열'){
            setSelectThirdCategory('CORRECTION');
        }else{
            setSelectThirdCategory('TRANSLATION');
        }
    }

    return (
        <div className="Service_Top_Wrap">
            <div className="ServiceWrap">
                <Title title="서비스 신청" />
                <h3 id="categoryTitle">카테고리</h3>
                <div className="categoryBtnWrap">
                    {categoryArr.map((elm, index) => {
                        return (
                            <ServiceBtn
                                isSelected={isCategorySelect[index]}
                                handleClick={categoryClick}
                                elementIndex={index}
                                content={elm}
                            />
                        );
                    })}
                </div>
                <div className="categoryBox">
                    <h3>{ keyword }</h3>
                    <div className="categorySpecialBox">
                        <div className="secondCategoryBtnWrap">
                            {educationArr.map((elm, index) => {
                                return(
                                    <ServiceBtn
                                        key={index}
                                        isSelected={isEducationSelect[index]}
                                        handleClick={educationCategoryClick}
                                        elementIndex={index}
                                        content={elm}
                                    />
                                );
                            })}
                        </div>
                        <div className="categoryBox">
                            <h3>{ secondKeyword }</h3>
                            <div>{secondKeyword == '중고차' ?
                                <div className="lastCategoryBoxWrap">
                                    <div className="lastCategoryBox">
                                        {educationDetailArr.map((elm, index) => {
                                            return(
                                                <ServiceBtn
                                                    key={index}
                                                    isSelected={isEducationDetailSelect[index]}
                                                    handleClick={educationDetailCategoryClick}
                                                    elementIndex={index}
                                                    content={elm}
                                                />)})}
                                    </div>
                                    <h3 id="categoryTitle">가격</h3>
                                    <div className="carPriceCategoryWrap">
                                        <input type="text"/>
                                        <p>~</p>
                                        <input type="text"/>
                                    </div>
                                </div> : (secondKeyword == '모델명 입력' ?
                                    <div>
                                        <div className="secondCategoryBtnWrap">
                                            {educationDetailArr.map((elm, index) => {
                                                return(
                                                    <ServiceBtn
                                                        key={index}
                                                        isSelected={isEducationDetailSelect[index]}
                                                        handleClick={educationDetailCategoryClick}
                                                        elementIndex={index}
                                                        content={elm}
                                                    />)})}
                                        </div>
                                        <div>
                                            <h3 id="categoryTitle">유심칩 여부</h3>
                                            <button type="button" id="usimOk">O</button>
                                            <button type="button" id="usimNo">X</button>
                                        </div></div>:
                                    <div className="lastCategoryBoxWrap">
                                        <div className="lastCategoryBox">
                                            {educationDetailArr.map((elm, index) => {
                                                return(
                                                    <ServiceBtn
                                                        key={index}
                                                        isSelected={isEducationDetailSelect[index]}
                                                        handleClick={educationDetailCategoryClick}
                                                        elementIndex={index}
                                                        content={elm}
                                                    />)})}
                                        </div>
                                        <h3 id="categoryTitle">매매</h3>
                                        <div className="lastCategoryBox">
                                            {houseArr.map((elm, index) => {
                                                return (
                                                    <ServiceBtn
                                                        isSelected={isHouseSelect[index]}
                                                        handleClick={houseCategoryClick}
                                                        elementIndex={index}
                                                        content={elm}
                                                    />
                                                );
                                            })}
                                        </div>
                                    </div>)
                            }</div>
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
            </div>
            <div className="admin_btn_wrap" onClick={ApplyService}>
                <div className="admin_bt">승인</div>
                <div className="deny_bt">거절</div>
            </div>
        </div>
    );
}

export default Service_Admin;
