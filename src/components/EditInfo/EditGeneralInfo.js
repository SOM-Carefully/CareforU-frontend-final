import './EditInfo.css';
import Title from './../Title/Title';
import profile from '../../img/profile.png';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// 일반 회원 정보 수정
const EditGeneralInfo = () => {

    const navigate = useNavigate();

    // 변수 설정
    const [users, setUsers] = useState([]);
    const [roles, setRoles] = useState([]);

    const token = localStorage.getItem('accessToken');

    const profileUrl = localStorage.getItem('profileUrl');
    const nickname = localStorage.getItem('nickname');

    // 닉네임 변경 페이지로 이동
    const onEditNicknameHandler = (e) => {
        navigate('/editNickname');
    }

    // 프로필 이미지 업로드 페이지로 이동
    const onChangeProfileHandler = () => {
        navigate('/fileUpload');
    }

    // PATCH 요청으로 닉네임 및 프로필 이미지 변경
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios({
            method: "patch",
            url: "http://54.180.210.232:8080/api/v1/users/my",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
            data: {
                "address": "",
                "bio": "",
                "nickname": nickname,
                "profileUrl": profileUrl,
                "universityName": localStorage.getItem('university'),
                "major": localStorage.getItem('major'),
                "educationRequest": localStorage.getItem('education'),
                "advisorName": localStorage.getItem('advisorName'),
            },
        }).then((res) => {
            // 프로필 변경 성공
            alert("프로필 변경이 완료되었습니다.");
            navigate(-1);
        }).catch((error) => {
            // 닉네임이나 프로필 이미지가 null 값이면 변경 x
            console.log(localStorage.getItem('nickname'));
            if (nickname == null || profileUrl == null) {
                alert("닉네임과 프로필 설정 완료 후 버튼을 눌러주세요")
            }
        });
    }

    // GET 요청으로 유저 정보 불러옴
    window.onload = axios({
        method: "get",
        url: "http://54.180.210.232:8080/api/v1/users/my",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
        },
    }).then((res) => {
        setUsers(res.data.result.name);
        setRoles(res.data.result.role);
        console.log(nickname);
    }).catch((error) => {
        // 토큰 만료 또는 권한 없을 시 로그인 페이지로 이동
        alert("로그인이 필요합니다.");
        navigate('/');
    });

    return (
        <div>
            <Title title="회원 정보 수정" />
            <div className="profile-wrap">
                <div className="profile-info">
                    <div className="profile-name">
                        {profileUrl===null?<img src={profile}/>:<img src={{uri : profileUrl}}/>}
                        {nickname===null?<p>{users} 님</p>:<p>{nickname} 님</p>}
                    </div>
                </div>
                <div className="underBar"></div>
                <div className="profile-andSoOn">
                    <p id="cursorNeed" onClick={onChangeProfileHandler}>프로필 이미지 변경</p>
                    <p id="cursorNeed" onClick={onEditNicknameHandler}>닉네임 변경</p>

                </div>
                <div className="Signup-Btn">
                    <button id="Signup-Btn" type="button" onClick={onSubmitHandler}>변경사항 저장</button>
                </div>
            </div>
        </div>
    )
}

export default EditGeneralInfo;