import React, { useState } from 'react';
import './GeneralSignup.css';
import { useNavigate } from 'react-router-dom';
import Title from '../Title/Title';

// 일반 회원 가입 - 비밀번호 입력
function GeneralSignup5() {
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

    // 입력 완료 시 로컬 스토리지에 정보 저장, 다음페이지로 이동
    const onSubmitHandler = (event) => {
        event.preventDefault();
        localStorage.setItem('password', password);
        navigate('/generalSignup6');
    }

    return (
        <div className="GeneralSignup2-form-wrap">
            <Title title="" />
            <div className="GeneralSignup-form">
                <h1>비밀번호를 입력해주세요</h1>
                <h3 id="signupH3">신중하게 입력 바랍니다</h3>
                <div id="password">
                    <input type={showPassword ? "text" : "password"} name="password" value={password} onChange={onPasswordHandler}></input>
                </div>
                <div id="loginSubText">
                    <div onClick={() => setShowPassword(prevState => !prevState)}> {showPassword ? "Hide Password" : "Show Password"}</div>
                </div>
                <div className="Signup-Btn">
                    <button id="Signup-Btn" type="button" onClick={onSubmitHandler}>입력 완료</button>
                </div>
            </div>
        </div>
    )
}

export default GeneralSignup5;