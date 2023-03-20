import React, { useState } from 'react';
import './GeneralSignup.css';
import { useNavigate } from 'react-router-dom';
import Title from '../Title/Title';
import axios from 'axios';

// 일반 회원 가입
function GeneralSignup6() {
    const navigate = useNavigate();

    // 회원가입 신청 메시지
    const [content, setContent] = useState("");
    const onContentHandler = (event) => {
        setContent(event.currentTarget.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        // 회원가입 신청 확인 창 띄우기
        var signupYN = window.confirm('회원 가입을 신청하시겠습니까 ?');
        if (signupYN) {
            // POST 요청으로 일반 회원 가입 신청
            axios({
                method: "post",
                url: "http://54.180.210.232:8080/api/v1/users/signup",
                headers: {
                    "Content-Type": `application/json`,
                },
                data: {
                    "address": String(localStorage.getItem('address')),
                    "advisorName": String(localStorage.getItem('advisorName')),
                    "educationRequest": String(localStorage.getItem('educationRequest')),
                    "genderRequest": String(localStorage.getItem('genderRequest')),
                    "identificationNumber": String(localStorage.getItem('identificationNumber')),
                    "major": String(localStorage.getItem('major')),
                    "name": String(localStorage.getItem('name')),
                    "nationality": String(localStorage.getItem('nationality')),
                    "password": String(localStorage.getItem('password')),
                    "phoneNumber": String(localStorage.getItem('phoneNumber')),
                    "universityName": String(localStorage.getItem('universityName')),
                    "username": String(localStorage.getItem('username')),
                    "content": String(content),
                },
            }).then((res) => {
                    // 회원가입 성공
                    alert('회원가입 신청이 정상적으로 완료되었습니다. 관리자의 승인이 날 때까지 기다려주세요 :)');
                    navigate('/');
            }).catch((error) => {
                console.log(error);
                alert("회원가입 과정 중 오류가 발생했습니다. 다시 시도해주세요");
                navigate('/');
            });
        }
    }

    return (
        <div className="GeneralSignup-form">
            <Title title="" />
            <h1>회원 가입 신청</h1>
            <h3>회원가입 신청 시 관리자에게 보이는 한 마디를 써주세요(??)</h3>
            <div id="content">
                <input type={"text"} name="content" value={content} onChange={onContentHandler}></input>
            </div>
            <div className="Signup-Btn">
                <button id="Signup-Btn" type="button" onClick={onSubmitHandler}>회원가입</button>
            </div>
        </div>
    )
}

export default GeneralSignup6;