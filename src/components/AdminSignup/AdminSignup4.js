import React, { useState } from 'react';
import './AdminSignup.css';
import { useNavigate } from 'react-router-dom';
import Title from '../Title/Title';
import axios from 'axios';

// 관리자 회원 가입 페이지 - 비밀번호 입력
function AdminSignup4() {
    const navigate = useNavigate();

    // 비밀번호 보이기/숨기기 기능을 위한 변수
    const [showPassword, setShowPassword] = useState(false);
    // 비밀번호 변수
    const [password, setPassword] = useState("");
    // 비밀번호 보이기/숨기기 기능
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
        localStorage.setItem('password', password);
    }

    // 버튼 클릭 시 로컬 스토리지에 정보 저장, 다음페이지로 이동
    const onSubmitHandler = (event) => {
        event.preventDefault();
        // 회원가입 신청 확인 창 띄우기
        var signupYN = window.confirm('회원 가입을 신청하시겠습니까 ?');
        if (signupYN) {
            // POST 요청으로 관리자 회원가입 신청
            axios({
                method: "post",
                url: "http://54.180.210.232:8080/api/v1/admins/signup",
                headers: {
                    "Content-Type": `application/json`,
                },
                data: {
                    "identificationNumber": String(localStorage.getItem('identificationNumber')),
                    "name": String(localStorage.getItem('name')),
                    "password": String(password),
                    "phoneNumber": String(localStorage.getItem('phoneNumber')),
                    "username": String(localStorage.getItem('username')),
                },
            })
                // 회원가입 성공
                .then((res) => {
                    alert('회원가입이 신청되었습니다. 관리자의 승인이 날 때까지 기다려주세요 :)');
                    navigate('/');
                })
                // 에러
                .catch((error) => {
                    console.log(error);
                    alert("회원가입 과정 중 오류가 발생했습니다. 다시 시도해주세요");
                    navigate('/');
                });
        }
    }

    return (
        <div className="AdminSignup-form">
            <Title title="" />
            <h1>비밀번호를 입력해주세요</h1>
            <h3>신중하게 입력 바랍니다</h3>
            <div id="password">
                <input type={showPassword ? "text" : "password"} name="password" value={password} onChange={onPasswordHandler}></input>
            </div>
            <div id="loginSubText">
                <div onClick={() => setShowPassword(prevState => !prevState)}> {showPassword ? "Hide Password" : "Show Password"}</div>
            </div>
            <div className="Signup-Btn">
                <button id="Signup-Btn" type="button" onClick={onSubmitHandler}>회원가입</button>
            </div>
        </div>
    )
}

export default AdminSignup4;