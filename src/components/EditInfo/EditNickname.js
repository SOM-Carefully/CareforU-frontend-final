import './EditInfo.css';
import Title from './../Title/Title';
import profile from '../../img/profile.png';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// 닉네임 수정 페이지
const EditNickname = () => {

    const navigate = useNavigate();

    // 닉네임 변수
    const [nickname, setNickname] = useState([]);
    const onNicknameHandler = (e) => {
        setNickname(e.currentTarget.value);
    }

    const token = localStorage.getItem('accessToken');

    // 닉네임 변경 완료 시 로컬스토리지에 저장 후 이전 페이지로 이동
    const onSubmitHandler = () => {
        localStorage.setItem('nickname', nickname);
        console.log(localStorage.getItem('nickname'));
        navigate(-1);
    }

    return (
        <div>
            <Title title="닉네임 설정" />
            <div className="profile-wrap">
                <div id="name">
                    <label htmlFor="nickname">새 닉네임</label>
                    <input type="nickname" name="nickname" value={nickname} onChange={onNicknameHandler}></input>
                </div>
                <div className="Signup-Btn">
                    <button id="Signup-Btn" type="button" onClick={onSubmitHandler}>변경하기</button>
                </div>
            </div>
        </div>
    )
}

export default EditNickname;