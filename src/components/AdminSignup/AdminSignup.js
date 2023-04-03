import React, { useState } from 'react';
import './AdminSignup.css';
import { useNavigate } from 'react-router-dom';

// 관리자 회원 가입 페이지
function AdminSignup() {
    const navigate = useNavigate();

    // 핸드폰 번호 변수
    const [phoneNumber, setPhoneNumber] = useState("");
    const onPhoneNumberHandler = (event) => {
        setPhoneNumber(event.currentTarget.value);
    }

    // 버튼 클릭 시 로컬 스토리지에 정보 저장, 다음페이지로 이동
    const onSubmitHandler = (event) => {
        event.preventDefault();
        localStorage.setItem('phoneNumber', phoneNumber);
        navigate('/adminSignup2');
    }

    return (
        <div className="AdminSignup-form">
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

export default AdminSignup;