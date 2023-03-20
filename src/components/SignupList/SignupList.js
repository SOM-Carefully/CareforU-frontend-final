import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios, {request} from 'axios';
import './SignupList.css';
import Title from "../Title/Title";
import Board_header from "../Board_header2/Board_header";
import Board_list from "../Board_list2/Board_list";

// 회원 가입 신청자 목록 페이지
function SignupList() {
    const navigate = useNavigate();

    // 변수 설정
    const [content, setContent] = useState();
    const token = localStorage.getItem('accessToken');

    // 회원 가입 신청자 상세 정보 페이지로 이동
    const onMoveMembershipContent = (requestUsername, membershipId, e) => {
        localStorage.setItem('requestUsername', requestUsername);
        localStorage.setItem('membershipId', membershipId);
        navigate('/detail_signupList');
    }

    // GET 요청으로 전체 회원 정보 불러오기
    useEffect(() => {
        axios({
            method: "get",
            url: "http://54.180.210.232:8080/api/v1/memberships/all",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
        }).then((res) => {
            setContent(res.data.result);
        });
    },[]);

    // 승인 상태
    var status;
    status = {
        ACCEPT : '승인',
        WAITING : '대기중',
        REJECT : '거절'
    }
    return (
        <div className="SignupList-form">
            <Title title="가입 신청" />
            <Board_header t1="번호" t2="제목" t3="글쓴이" t4="신청일" t5="상태"/>
            <ul>
                {content===Object(content) ? content.content.map((content, index) => (
                    <li key={index} onClick={e =>onMoveMembershipContent(content.requestUsername, content.membershipId, e)} >
                        <Board_list num={index+1} title={content.content} name={content.requestUsername} date={content.createdAt[0] + '.' + content.createdAt[1] + '.' + content.createdAt[2]} stateRequest={status[content.stateRequest]}/>
                    </li>
                    ))
                    : "등록된 글이 없습니다"}
            </ul>
        </div>

    )
}

export default SignupList;