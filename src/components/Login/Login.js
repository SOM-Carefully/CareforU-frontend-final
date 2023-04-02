import './Login.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// 로그인 페이지
function Login(){
    const navigate = useNavigate();

    // 변수 설정
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    // 로그인 버튼 클릭 시
    const onSubmitHandler = (event) => {
        // 버튼만 누르면 리로드 되는것을 막아줌
        event.preventDefault();

        // POST 요청으로 로그인
        axios({
            method: "post",
            url: "http://54.180.210.232:8080/api/v1/login",
            headers: {
                "Content-Type": `application/json`,
            },
            data: {
                "username": Email,
                "password": Password,
            },

        })
            .then((res) => {
                // 로그인 성공 시 토큰을 로컬스토리지에 저장 후 메인 페이지로 이동
                localStorage.clear();
                alert('로그인에 성공하였습니다.');
                localStorage.setItem('accessToken', res.data.result.accessToken);
                localStorage.setItem('refreshToken', res.data.result.refreshToken);
                console.log(localStorage.getItem('accessToken'));
                navigate('/main');})
            .catch((error) => {
                // 로그인 실패(아이디 및 비밀번호 존재 확인)
                alert('로그인에 실패하였습니다. 아이디와 비밀번호를 확인해주세요.');
                console.log(error);
            });
    }

    const onMoveForgot = () => {
        navigate('/forgot');
    }

    // 회원가입 페이지로 이동
    const onMoveSignup = (e) => {
        navigate('/select');
    }

    return (
        <div className="bodyWrap">
            <div className="loginForm">
                <div id="welcomeText">WELCOME, 케어풀리👋🏻</div>
                <div id="inputText">아이디와 비밀번호를 입력해주세요!</div>
                <input id="loginEmail" type='email' value={Email} onChange={onEmailHandler} placeholder="abcdefg@gmail.com"></input>
                <input id="loginPw" type={showPassword ? "text" : "password"} value={Password} onChange={onPasswordHandler} placeholder="************"></input>
                <div id="loginSubText">
                    <div onClick={() => setShowPassword(prevState => !prevState)}> {showPassword ? "Hide Password" : "Show Password"}</div>
                    <div onClick={onMoveForgot}>Forgot Password/id?</div>
                </div>
                <button id="loginBt" type="button" onClick={onSubmitHandler}>Login</button>
                <button id="signupBt" type="button" onClick={onMoveSignup}>Sign Up</button>
            </div>
        </div>
    );
};

export default Login;