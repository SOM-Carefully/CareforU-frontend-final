import './EditInfo.css';
import Title from './../Title/Title';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// 비밀번호 변경 페이지
const EditPassword = () => {

    const navigate = useNavigate();

    // 비밀번호 변경을 위한 이전/신규 비밀번호 변수
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const onOldPasswordHandler = (e) => {
        setOldPassword(e.currentTarget.value);
    }
    const onNewPasswordHandler = (e) => {
        setNewPassword(e.currentTarget.value);
    }

    const token = localStorage.getItem('accessToken');

    // PATCH 요청으로 비밀번호 변경
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios({
            method: "patch",
            url: "http://54.180.210.232:8080/api/v1/change-password",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
            data: {
                "newPassword": String(newPassword),
                "oldPassword": String(oldPassword),
            },
        }).then((res) => {
            // 비밀번호 변경 완료 후 이전 페이지로 이동
            alert("수정 완료 !!");
            navigate(-1);
        }).catch((error) => {
            // 비밀번호 변경 오류
            console.log(oldPassword, newPassword);
            alert("비밀번호를 변경할 수 없습니다. 다시 확인해주세요.");
        });
    }

    return (
        <div>
            <Title title="비밀번호 변경" />
            <div className="profile-wrap">
                <div id="name">
                    <label htmlFor="password">기존 비밀번호</label>
                    <input type="password" name="oldPassword" value={oldPassword} onChange={onOldPasswordHandler}></input>
                </div>
                <div id="name">
                    <label htmlFor="password">새 비밀번호</label>
                    <input type="password" name="newPassword" value={newPassword} onChange={onNewPasswordHandler}></input>
                </div>
                <div className="Signup-Btn">
                    <button id="Signup-Btn" type="button" onClick={onSubmitHandler}>비밀번호 변경하기</button>
                </div>
            </div>
        </div>
    )
}


export default EditPassword;