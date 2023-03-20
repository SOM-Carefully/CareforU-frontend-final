import React, { useState } from 'react';
import './GeneralSignup.css';
import { useNavigate } from 'react-router-dom';
import Title from './../Title/Title';

// 일반 회원 가입 - 학적 정보 입력
function GeneralSignup3() {
    const navigate = useNavigate();

    // 학교명
    const [universityName, setUniversityName] = useState("");
    const onUniversityHandler = (e) => {
        setUniversityName(e.currentTarget.value);
    }
    // 전공
    const [major, setMajor] = useState("");
    const onMajorHandler = (e) => {
        setMajor(e.currentTarget.value);
    }
    // 지도교수
    const [advisorName, setAdvisorName] = useState("");
    const onAdvisorHandler = (e) => {
        setAdvisorName(e.currentTarget.value);
    }
    // 학력
    const [educationRequest, setEducation] = useState("");
    const onEducationHandler = (e) => {
        setEducation(e.currentTarget.value);
    }

    // 입력 완료 시 로컬 스토리지에 정보 저장, 다음페이지로 이동
    const onSubmitHandler = (event) => {
        event.preventDefault();
        localStorage.setItem('universityName', universityName);
        localStorage.setItem('major', major);
        localStorage.setItem('educationRequest', educationRequest);
        localStorage.setItem('advisorName', advisorName);
        navigate('/generalSignup4');
    }

    return (
        <div className="GeneralSignup-form">
            <Title title="" />
            <div id="universityName">
                <label for="universityName">학교</label>
                <input type="text" name="universityName" value={universityName} onChange={onUniversityHandler}></input>
            </div>
            <div id="major">
                <label for="major">전공</label>
                <input type="text" name="major" value={major} onChange={onMajorHandler}></input>
            </div>
            <div id="educationRequest">
                <label for="educationRequest">학력</label>
                <select value={educationRequest} name="educationRequest" onChange={onEducationHandler}>
                    <option value="NA">선택</option>
                    <option value="UNDERGRADUATE">학부</option>
                    <option value="BACHELOR">학사</option>
                    <option value="MASTER">석사</option>
                    <option value="DOCTOR">박사</option>
                </select>
            </div>
            <div id="advisorName">
                <label for="advisorName">지도교수</label>
                <input type="text" name="advisorName" value={advisorName} onChange={onAdvisorHandler}></input>
            </div>
            <div className="Signup-Btn">
                <button id="Signup-Btn" type="button" onClick={onSubmitHandler}>입력 완료</button>
            </div>
        </div>
    )
}

export default GeneralSignup3;