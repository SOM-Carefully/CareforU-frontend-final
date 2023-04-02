import './MyPage.css';
import Title from './../Title/Title';
import MenuBar from './../MenuBar/MenuBar';
import profile from '../../img/profile.png';
import React, { useEffect, useState } from 'react';
import {Form, useNavigate} from 'react-router-dom';
import axios from 'axios';

// 일반 회원 마이페이지
const GeneralMyPage = () => {

    const navigate = useNavigate();
    // const [users, setUsers] = useState([]);

    // 문의하기 페이지로 이동
    const onMoveAsk = (e) => {
        // navigate('/ask');
        alert('이동할 수 없는 페이지입니다.');
    }

    // 내가 쓴 글 페이지로 이동
    const onMoveLookList = (e) => {
        navigate('/service_mine');
    }

    // 탈퇴 페이지로 이동
    const onMoveWithDraw = (e) => {
        navigate('/withDraw');
    }

    // 변수 설정
    const [users, setUsers] = useState([]);
    const [roles, setRoles] = useState([]);
    const [nicknames, setNicknames] = useState([]);
    const [profileUrls, setProfileUrls] = useState();

    const token = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    const onSchoolHandler = () => {
        navigate('/editSchool');
    }

    // 비밀번호 변경 페이지로 이동
    const onEditPasswordHandler = (e) => {
        navigate('/editPassword');
    }

    // 로그아웃
    const onLogoutHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('accessToken', token);
        formData.append('refreshToken', refreshToken);
        // POST 요청으로 로그아웃
        axios.post('http://54.180.210.232:8080/api/v1/logout', formData, {
            headers: {
                "Content-Type": `multipart/form-data`,
            }
        }).then((res) => {
            // 로그아웃 성공 시 로그인 페이지로 이동
            localStorage.clear();
            alert('로그아웃 되었습니다.');
            navigate('/');
        }).catch((error) => {
            alert('로그아웃에 실패했습니다');
            console.log(error);
        });
    }

    // GET 요청으로 일반 회원 정보 불러오기
    useEffect( () => {
        axios({
            method: "get",
            url: "http://54.180.210.232:8080/api/v1/users/my",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token
            },
        }).then((res) => {
            // 정보 설정
            setUsers(res.data.result.name);
            setRoles(res.data.result.role);
            setNicknames(res.data.result.nickname);
            console.log(res.data.result.profileUrl);
            localStorage.setItem('nickname', res.data.result.nickname);
            localStorage.setItem('profileUrl', res.data.result.profileUrl);
            localStorage.setItem('university', res.data.result.universityName);
            localStorage.setItem('major', res.data.result.major);
            localStorage.setItem('advisorName', res.data.result.advisorName);
            localStorage.setItem('education', res.data.result.educationRequest);
            localStorage.setItem('address', res.data.result.address);
            setProfileUrls(res.data.result.profileUrl);
        }).catch((error) => {
            alert("정보를 가져올 수 없습니다");
        });
    }, [])


    // 일반 회원 정보 수정 페이지로 이동
    const onMoveEditInfo = (e) => {
        navigate('/editGeneralInfo');
    }

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
        <div>
            <Title title="마이 페이지(회원)" />
            <div className="profile-wrap">
                <div className="profile-info">
                    <div className="profile-name">
                        {profileUrls===null?<img src={profile}/>:<img src={profileUrls}/>}
                        {nicknames===null?<p>{users} 님</p>:<p>{nicknames} 님</p>}
                        <p id="role">{levels[roles]}</p>
                    </div>
                    <div>
                        <button type="button" id="logoutBt" onClick={onLogoutHandler}>LOGOUT</button>
                    </div>
                </div>
                <div className="underBar"></div>
                <div className="profile-service">
                    <h4>서비스 신청 설정</h4>
                    <p id="cursorNeed" onClick={onMoveLookList}>신청 내역 보기</p>
                    {/*<div className="profile-alarmWrap">*/}
                    {/*    <p>서비스 매칭 알림</p>*/}
                    {/*    <label class="switch">*/}
                    {/*        <input type="checkbox" />*/}
                    {/*        <span class="slider round"></span>*/}
                    {/*    </label>*/}
                    {/*</div>*/}
                </div>
                <div className="underBar"></div>
                <div className="profile-user">
                    <h4>사용자 설정</h4>
                    <p id="cursorNeed"onClick={onMoveEditInfo}>회원 정보 수정</p>
                    <p id="cursorNeed" onClick={onSchoolHandler}>학적 정보 변경</p>
                    <p id="cursorNeed" onClick={onEditPasswordHandler}>비밀번호 변경</p>
                </div>
                <div className="underBar"></div>
                <div className="profile-andSoOn">
                    <h4>기타</h4>
                    <p id="cursorNeed" onClick={onMoveAsk}>문의하기</p>
                    <p id="cursorNeed" onClick={onMoveAsk}>문의 내역 보기</p>
                    <p id="cursorNeed" onClick={onMoveAsk}>내 작성글 확인하기</p>
                    <p id="cursorNeed" onClick={onMoveWithDraw}>탈퇴하기</p>
                </div>
            </div>
        </div>
    )
}

export default GeneralMyPage;