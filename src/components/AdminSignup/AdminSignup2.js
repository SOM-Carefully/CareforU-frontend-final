import React, { useState } from 'react';
import './AdminSignup.css';
import { useNavigate } from 'react-router-dom';
import Title from './../Title/Title';

// 관리자 회원 가입 페이지 - 이름, 주민번호 입력
function AdminSignup2(props) {
    const navigate = useNavigate();

    // 이름 변수
    const [name, setName] = useState("");
    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    }

    // 주민등록번호 함수
    const [identificationNumber, setIdentificationNumber] = useState("");
    const onIdentificationNumberHandler = (event) => {
        setIdentificationNumber(event.currentTarget.value);
    }

    // 버튼 클릭 시 로컬 스토리지에 정보 저장, 다음페이지로 이동
    const onSubmitHandler = (event) => {
        event.preventDefault();
        localStorage.setItem('name', name);
        localStorage.setItem('identificationNumber', identificationNumber);
        navigate('/adminSignup3');
    }

    return (
        <div className="AdminSignup2-form-wrap">
            <Title title="휴대폰 본인 인증"/>
            <div className="AdminSignup2-form">
                <div id="name">
                    <label htmlFor="name">이름</label>
                    <input id="secondInput" type="text" name="name" value={name} onChange={onNameHandler}></input>
                </div>
                <div id="identificationNumber">
                    <label htmlFor="identificationNumber">주민등록번호</label>
                    <input id="secondInput" type="text" name="identificationNumber" value={identificationNumber}
                           onChange={onIdentificationNumberHandler}></input>
                </div>
                <div className="Signup-Btn">
                    <button id="Signup-Btn" type="button" onClick={onSubmitHandler}>입력 완료</button>
                </div>
            </div>
        </div>
    )
}

export default AdminSignup2;