import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './MemberList.css';
import Title from "../Title/Title";
import Board_header from "../Board_header2/Board_header";
import Board_list from "../Board_list2/Board_list";

// 전체 회원 목록 페이지
function MemberList() {
    const navigate = useNavigate();

    // 변수 설정
    const [content, setContent] = useState();
    const token = localStorage.getItem('accessToken');

    // 회원 상세 정보 페이지로 이동
    const onMoveMemberContent = (username, membershipId, e) => {
        localStorage.setItem('membershipId', membershipId);
        localStorage.setItem('username', username);
        navigate('/detail_memberList');
    }

    // GET 요청으로 전체 회원 조회
    useEffect(() => {
        axios({
            method: "get",
            url: "http://54.180.210.232:8080/api/v1/all",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token
            },
        }).then((res) => {
            // 회원 목록 불러오기 성공
            setContent(res.data.result);
        }).catch((error) => {
            // 에러 발생
            console.log(error);
            alert("회원 조회 과정 중 에러가 발생했습니다.");
        });
    },[]);

    // 회원 등급
    var levels;
    levels = {
        LEVEL1 : <p id="userinfo">기본회원</p>,
        LEVEL2 : <p id="userinfo">유료회원 등급1</p>,
        LEVEL3 : <p id="userinfo">유료회원 등급2</p>,
        LEVEL4 : <p id="userinfo">유료회원 등급3</p>,
        LEVEL5 : <p id="userinfo">유료회원 등급4</p>,
        ADMIN : <p id="userinfo">관리자</p>
    }

    return (
        <div className="MemberList-form">
            <Title title="회원 리스트" />
            <Board_header t1="번호" t2="회원" t3="가입일" t6="등급"/>
            <ul>
                {content===Object(content) ? content.content.map((content, index) => (
                        <li key={index} onClick={e =>onMoveMemberContent(content.username, content.membershipId, e)} >
                            <Board_list num={index+1} name={content.name} date={content.createdAt[0] + '.' + content.createdAt[1] + '.' + content.createdAt[2]} role={levels[content.role]}/>
                        </li>
                    ))
                    : "등록된 글이 없습니다"}
            </ul>
        </div>

    )
}

export default MemberList;