import React, { useState } from 'react';
import './GeneralSignup.css';
import { useNavigate } from 'react-router-dom';
import Title from './../Title/Title';

// 일반 회원 가입 - 이메일 입력
function GeneralSignup4() {
    const navigate = useNavigate();

    // 이메일
    const [username, setUserName] = useState("");
    const onUsernameHandler = (event) => {
        setUserName(event.currentTarget.value);
    }

    // 입력 완료 시 로컬 스토리지에 정보 저장, 다음페이지로 이동
    const onSubmitHandler = (event) => {
        event.preventDefault();
        localStorage.setItem('username', username);
        navigate('/generalSignup5');
    }

    return (
        <div className="GeneralSignup2-form-wrap">
            <Title title="" />
            <div className="GeneralSignup-form">
                <h1>이메일을 입력해주세요</h1>
                <h3>회원 가입 시 필수입니다</h3>
                <div id="username">
                    <input type="text" name="username" value={username} onChange={onUsernameHandler}></input>
                </div>
                <div className="Signup-Btn">
                    <button id="Signup-Btn" type="button" onClick={onSubmitHandler}>입력 완료</button>
                </div>
            </div>
        </div>
    )
}

export default GeneralSignup4;