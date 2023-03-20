import './MyPage.css';
import Title from './../Title/Title';
import MenuBar from './../MenuBar/MenuBar';
import profile from '../../img/profile.png';
import React, { useEffect, useState } from 'react';
import {Form, useNavigate} from 'react-router-dom';
import axios from 'axios';

// 메뉴바에서 마이페이지 클릭 시
// 관리자/일반 회원 전용 마이페이지로 이동
const MyPage = () => {

    const navigate = useNavigate();

    const token = localStorage.getItem('accessToken');

    // 일반 회원 전용 url로 먼저 get 요청 보내기
    window.onload = axios({
        method: "get",
        url: "http://54.180.210.232:8080/api/v1/users/my",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
        },
    }).then((res) => {
        // 일반 회원 마이페이지로 이동
        navigate('/generalMypage');
    }).catch((error) => {
        // 관리자 회원인 경우 일반 회원 url로 요청을 보내면 접근권한 x
        // 관리자 회원 url로 GET 요청 재전송
        window.onload =
            axios({
                method: "get",
                url: "http://54.180.210.232:8080/api/v1/admins/my",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token
                },
            }).then((res) => {
                // 관리자 전용 마이페이지로 이동
                navigate('/adminMypage');
            });
        });




    return (
        <div>
        </div>
    )
}

export default MyPage;