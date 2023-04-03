import React, { useState } from 'react';
import './GeneralSignup.css';
import { useNavigate } from 'react-router-dom';

// 일반 회원 가입 - 휴대폰 번호 입력
function GeneralSignup() {
    const navigate = useNavigate();

    // 휴대폰 변수 설정
    const [phoneNumber, setPhoneNumber] = useState("");
    const onPhoneNumberHandler = (event) => {
        setPhoneNumber(event.currentTarget.value);
    }

    // 입력 완료 시 로컬 스토리지에 정보 저장, 다음페이지로 이동
    const onSubmitHandler = (event) => {
        event.preventDefault();
        localStorage.setItem('phoneNumber', phoneNumber);
        navigate('/generalSignup2');
    }

    return (
        <div className="GeneralSignup-form">
            <h1>휴대폰 번호를 입력해주세요</h1>
            <h3 id="signupH3">회원 가입 시 필수입니다</h3>
            <div id="phoneNumber">
                <input type="text" name="phoneNumber" value={phoneNumber} onChange={onPhoneNumberHandler}></input>
            </div>
            <div className="Signup-Btn">
                <button id="Signup-Btn" type="button" onClick={onSubmitHandler}>입력 완료</button>
            </div>
        </div>
    )
}

export default GeneralSignup;