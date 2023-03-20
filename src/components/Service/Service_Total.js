import './Service.css';
import axios from 'axios';
import Board_header from "../Board_header2/Board_header";
import Title from './../Title/Title';
import Board_list from "../Board_list2/Board_list.js";
import ServiceBtn from './Service_Button';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Service_Total(){

    const token = localStorage.getItem('accessToken');

    const [content, setContent] = useState('');

    useEffect( () => {
        axios({
            method: 'get',
            url: 'http://54.180.210.232:8080/api/v1/services/all',
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
        }).then((res) => {
            setContent(res.data.result);
            console.log(content);
        }).catch((error) => {
            alert("글을 확인할 수 없습니다. 관리자에게 문의하세요.");
        });
    }, [])

    window.onload = axios({
        method: "get",
        url: "http://54.180.210.232:8080/api/v1/users/my",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
        },
    }).then((res) => {
        localStorage.setItem('userrole', 'my');
    }).catch((error) => {
        localStorage.setItem('userrole', 'all');
    });

    function moveServicePost(){
        navigate('/service_post');
    }
    function moveServiceMyPost(){
        navigate('/service_mine');
    }

    const navigate = useNavigate();

    const onMoveDetailServiceContent = (id, type, e) => {
        localStorage.setItem('detailBookingId', id);
        localStorage.setItem('businessTypeResponse', type);
        if(localStorage.getItem('businessTypeResponse') == 'COMMUNICATION'){
            localStorage.setItem('businessType', 'communications');
            navigate('/service_detail');
        }
        if(localStorage.getItem('businessTypeResponse') == 'EDUCATION'){
            localStorage.setItem('businessType', 'educations');
            navigate('/service_detail');
        }
        if(localStorage.getItem('businessTypeResponse') == 'TRAFFIC'){
            localStorage.setItem('businessType', 'traffics');
            navigate('/service_detail');
        }
        if(localStorage.getItem('businessTypeResponse') == 'DWELLING'){
            localStorage.setItem('businessType', 'dwellings');
            navigate('/service_detail');
        }
    }

    //사용자가 관리자면 전체서비스만 조회 가능, 일반회원이면

    return(
        <div className="Service_Top_Wrap">
            <Title title="전체 서비스" />
            <Board_header t1="번호" t2="글쓴이" t3="신청일" t4="상태"/>
            <ul>
                {content===Object(content)
                    ? content.content.map((content, index) => (
                        <li id={content.businessTypeResponse} key={index} onClick={e =>onMoveDetailServiceContent(content.bookingId, content.businessTypeResponse, e)} >
                            <Board_list num={index+1} username={content.userUsername} posttime={content.createdAt[0] + '.' + content.createdAt[1] + '.' + content.createdAt[2]}  status={content.bookingStatus == 'ACCEPT' ? '승인됨' : content.bookingStatus == 'WAITING' ? '대기중' : content.bookingStatus == 'CANCEL' ? '취소됨' : '완료'} / >
                        </li>
                    ))
                    : "등록된 글이 없습니다"}
            </ul>
            {
                localStorage.getItem('userrole') == 'my' ? <div><button onClick={moveServicePost}>서비스 신청하기</button><button onClick={moveServiceMyPost}>내가 신청한 서비스 확인하기</button></div> : ''
            }
        </div>
    )
}

export default Service_Total;