import './MyPage.css';
import Title from './../Title/Title';
import MenuBar from './../MenuBar/MenuBar';
import profile from '../../img/profile.png';
import React, { useEffect, useState } from 'react';
import {Form, useNavigate} from 'react-router-dom';
import axios from 'axios';

// 관리자 회원 마이페이지
const AdminMyPage = () => {

    const navigate = useNavigate();

    const token = localStorage.getItem('accessToken');
    // 문의하기 페이지로 이동
    const onMoveAsk = (e) => {
        // navigate('/ask');
        alert('이동할 수 없는 페이지입니다.');
    }

    // 내가 쓴 글 리스트로 이동
    const onMoveLookList = (e) => {
        navigate('/service_home');
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

    const refreshToken = localStorage.getItem('refreshToken');

    // 비밀번호 변경 페이지로 이동
    const onEditPasswordHandler = (e) => {
        navigate('/editPassword');
    }

    const onMoveBoard = (e) => {
        navigate('/admin_select_category');
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
                Authorization: "Bearer " + token
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

    // GET 요청으로 관리자 회원 정보 불러오기
    window.onload = axios({
        method: "get",
        url: "http://54.180.210.232:8080/api/v1/admins/my",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
        },
    }).then((res) => {
        // 정보 설정
        setUsers(res.data.result.name);
        setRoles(res.data.result.role);
        setNicknames(res.data.result.nickname);
        setProfileUrls(res.data.result.profileUrl);
        localStorage.setItem('nickname', nicknames);
        localStorage.setItem('profileUrl', profileUrls);
    }).catch((error) => {
        alert("정보를 가져올 수 없습니다");
    });

    // 관리자 회원 정보 수정 페이지로 이동
    const onMoveEditInfo = (e) => {
        if(roles == 'ADMIN'){
            navigate('/editAdminInfo');
        }
        // 관리자 회원이 아닌 경우 오류 발생
        else{
            alert('정보를 수정할 수 없는 사용자입니다.');
            navigate('/');
        }
    }


    return (
        <div>
            <Title title="마이 페이지(관리자)" />
            <div className="profile-wrap">
                <div className="profile-info">
                    <div className="profile-name">
                        {profileUrls===null?<img src={profile}/>:<img src={profileUrls}/>}
                        {nicknames===null?<p>{users} 님</p>:<p>{nicknames} 님</p>}
                    </div>
                    <div>
                        <button type="button" id="logoutBt" onClick={onLogoutHandler}>LOGOUT</button>
                    </div>
                </div>
                <div className="underBar"></div>
                <div className="profile-service">
                    <h4>서비스 수락 설정</h4>
                    <p id="cursorNeed" onClick={onMoveLookList}>서비스 내역 보기</p>
                </div>
                <div className="underBar"></div>
                <div className="profile-user">
                    <h4>사용자 설정</h4>
                    <p id="cursorNeed"onClick={onMoveEditInfo}>관리자 정보 수정</p>
                    <p id="cursorNeed" onClick={onEditPasswordHandler}>비밀번호 변경</p>
                </div>
                <div className="underBar"></div>
                <div className="profile-andSoOn">
                    <h4>기타</h4>
                    <p id="cursorNeed" onClick={onMoveBoard}>게시판 관리하기</p>
                    <p id="cursorNeed" onClick={onMoveAsk}>문의 내역 보기</p>
                    <p id="cursorNeed" onClick={onMoveWithDraw}>탈퇴하기</p>
                </div>
            </div>
        </div>
    )
}

export default AdminMyPage;