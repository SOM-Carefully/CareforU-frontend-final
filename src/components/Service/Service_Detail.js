import React, {useEffect, useState} from "react";
import axios from "axios";
import Title from "../Title/Title";
import ServiceBtn from './Service_Button';
import {useNavigate} from "react-router-dom";
// import './My_Post.css';

function ServiceDetail() {
    const navigate = useNavigate();
    const token = localStorage.getItem('accessToken');
    const [content, setContent] = useState('');
    const serviceNum = localStorage.getItem('detailBookingId');
    useEffect(() => {
        axios({
            method: "get",
            url: "http://54.180.210.232:8080/api/v1/services/" + localStorage.getItem('businessType') + '/' + localStorage.getItem('detailBookingId'),
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
        }).then((res) => {
            setContent(res.data.result);
        }).catch((error) => {
            alert("확인할 수 없습니다.");
        });
    },[])

    // const downloadFile = (url) => {
    //     url = content.userFileUrl;
    //
    //     fetch(url, { method: 'GET' })
    //         .then((res) => {
    //             return res.blob();
    //         })
    //         .then((blob) => {
    //             const url = window.URL.createObjectURL(blob);
    //             const a = document.createElement('a');
    //             a.href = url;
    //             a.download = "파일명";
    //             document.body.appendChild(a);
    //             a.click();
    //             setTimeout((_) => {
    //                 window.URL.revokeObjectURL(url);
    //             }, 60000);
    //             a.remove();
    //             setOpen(false);
    //         })
    //         .catch((err) => {
    //             console.error('err: ', err);
    //         });
    // };

    function acceptService(){
        axios({
            method: "PATCH",
            url: "http://54.180.210.232:8080/api/v1/services/accept/" + serviceNum,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
            data:{
                adminFileUrl: "https://picsum.photos/seed/picsum/200/300",
                content: content.userContent
            }
        }).then((res) => {
            alert('서비스 승인이 완료되었습니다.');
            navigate('/service_home');
        }).catch((error) => {
            alert("확인할 수 없습니다.");
        });
    }

    function completeService(){
        axios({
            method: "PATCH",
            url: "http://54.180.210.232:8080/api/v1/services/complete/" + serviceNum,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
            data:{
                adminFileUrl: "https://picsum.photos/seed/picsum/200/300",
                content: content.userContent
            }
        }).then((res) => {
            alert('서비스가 완료되었습니다.');
            navigate('/service_home');
        }).catch((error) => {
            alert("확인할 수 없습니다.");
        });
    }

    function ongoingService(){
        axios({
            method: "PATCH",
            url: "http://54.180.210.232:8080/api/v1/services/ongoing/" + serviceNum,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
            data:{
                adminFileUrl: "https://picsum.photos/seed/picsum/200/300",
                content: content.userContent
            }
        }).then((res) => {
            alert('서비스가 진행중임이 확인되었습니다.');
            navigate('/service_home');
        }).catch((error) => {
            alert("확인할 수 없습니다.");
        });
    }

    function cancelService(){
        axios({
            method: "PATCH",
            url: "http://54.180.210.232:8080/api/v1/services/cancel/" + serviceNum,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
            data:{
                adminFileUrl: "https://picsum.photos/seed/picsum/200/300",
                content: content.userContent
            }
        }).then((res) => {
            alert('서비스 거절이 완료되었습니다.');
            navigate('/service_home');
        }).catch((error) => {
            alert("확인할 수 없습니다.");
        });
    }

    return (
        <div>
            <div className={"Service_Top_Wrap"}>
                <div className="ServiceWrap">
                    <Title title="서비스 내용" />
                    {
                        localStorage.getItem('businessType') === 'dwellings' ?
                            <div>
                                <h3 id="categoryTitle">카테고리</h3>
                                <div className="lastCategoryBox">
                                    <ServiceBtn content={'주거'} isSelected={true}/>
                                </div>
                                <h3 id="categoryTitle">매매</h3>
                                <div className="lastCategoryBox">
                                <ServiceBtn content={content.numberOfRoomsRequest == 'ONEROOM' ? '원룸' : content.numberOfRoomsRequest == 'TWOROOM' ? '투룸' : '투베이'} isSelected={true}/>
                                <ServiceBtn content={content.transactionMethodRequest == 'CHARTER' ? '전세' : '월세'} isSelected={true}/>
                                </div>
                                <h3 id="categoryTitle">가격</h3>
                                <div className="lastCategoryBox">
                                    <ServiceBtn content={content.price} isSelected={true}/>
                                </div>
                            </div>
                        : localStorage.getItem('businessType') === 'communications' ?
                            <div>
                                <h3 id="categoryTitle">카테고리</h3>
                                <div className="lastCategoryBox">
                                    <ServiceBtn content={'통신'} isSelected={true}/>
                                </div>
                                <h3 id="categoryTitle">모델명</h3>
                                <div className="lastCategoryBox">
                                    <ServiceBtn content={content.modelName} isSelected={true}/>
                                </div>
                                <h3 id="categoryTitle">유심칩 여부</h3>
                                <div className="lastCategoryBox">
                                    <ServiceBtn content={content.usim == true ? '있음' : '없음'} isSelected={true}/>
                                </div>
                            </div>
                        : localStorage.getItem('businessType') === 'educations' ?
                            <div>
                                <h3 id="categoryTitle">카테고리</h3>
                                <div className="lastCategoryBox">
                                    <ServiceBtn content={'교육'} isSelected={true}/>
                                </div>
                                <h3 id="categoryTitle">학위</h3>
                                <div className="lastCategoryBox">
                                    <ServiceBtn content={content.degreeRequest == 'MASTER' ? '석사' : '박사'} isSelected={true}/>
                                </div>
                                <h3 id="categoryTitle">서비스 내용</h3>
                                <div className="lastCategoryBox">
                                    <ServiceBtn content={content.educationContentRequest == 'CONSULTING' ? '컨설팅' : content.educationContentRequest == 'CORRECTION' ? '교정교열' : '번역' } isSelected={true}/>
                                </div>
                            </div>
                        : localStorage.getItem('businessType') === 'traffics' ?
                            <div>
                                <h3 id="categoryTitle">카테고리</h3>
                                <div className="lastCategoryBox">
                                    <ServiceBtn content={'교통'} isSelected={true}/>
                                </div>
                                <h3 id="categoryTitle">중고차</h3>
                                <div className="lastCategoryBox">
                                    <ServiceBtn content={content.carTypeRequest == 'COMPACT' ? '소형' : content.carTypeRequest == 'MIDSIZE' ? '중형' : '대형'} isSelected={true}/>
                                </div>
                                <h3 id="categoryTitle">가격</h3>
                                <div className="lastCategoryBox">
                                    <ServiceBtn content={content.price + '원'} isSelected={true}/>
                                </div>
                            </div> : <div></div>
                    }
                    <h3 id="categoryTitle">첨부파일</h3>
                    <div id="fileUrl"><a href={content.userFileUrl} download>{content.userFileUrl}</a></div>
                    <h3 id="categoryTitle">추가요청사항</h3>
                    <div className={"Service_content_box"}>
                        {content.userContent == '' ? '추가 요청 사항 없음' : content.userContent}
                    </div>
                </div>
                {
                    localStorage.getItem('userrole') === 'all'
                        ? <div className="admin_btn_wrap">
                            <div className="admin_bt" onClick={acceptService}>승인</div>
                            <div className="deny_bt" onClick={ongoingService}>진행중</div>
                            <div className="deny_bt" onClick={completeService}>완료</div>
                            <div className="admin_bt" onClick={cancelService}>거절</div>
                          </div> : ''
                }

            </div>
        </div>
    );
}

export default ServiceDetail;
