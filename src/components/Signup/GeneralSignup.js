import './Signup.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Title from './../Title/Title';
  
function GeneralSignup(){

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [userName, setUserName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [major, setMajor] = useState("");
    const [university, setUniversity] = useState("");
    const [foreignerNumber, setForeignerNumber] = useState("");
    const [address, setAddress] = useState("");

    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    const onGenderHandler = (event) => {
        setGender(event.currentTarget.value);
    }

    const onUserNameHandler = (event) => {
        setUserName(event.currentTarget.value);
    }

    const onPhoneNumberHandler = (event) => {
        setPhoneNumber(event.currentTarget.value);
    }

    const onMajorHandler = (event) => {
        setMajor(event.currentTarget.value);
    }

    const onUniversityHandler = (event) => {
        setUniversity(event.currentTarget.value);
    }

    const onForeignerNumberHandler = (event) => {
        setForeignerNumber(event.currentTarget.value);
    }

    const onAddressHandler = (event) => {
        setAddress(event.currentTarget.value);
    }

    const onSubmitHandler = (event) => {
        // 버튼만 누르면 리로드 되는것을 막아줌
        event.preventDefault();
        const role = "USER";

        console.log('역할', role);
        console.log('유저이름', name);
        console.log('이메일', userName);
        console.log('비밀번호', password);
        console.log('성별', gender);
        console.log('전화번호', phoneNumber);
        console.log('전공', major);
        console.log('대학', university);
        console.log('외국인등록번호', foreignerNumber);
        console.log('주소', address);
        
        axios({
            method: "post",
            url: "http://54.180.210.232:8080/api/v1/signup",
            headers: {
                "Content-Type": `application/json`,
            },
            data: {
                "address": {
                  "details": String(address),
                },
                "foreignerNumber": String(foreignerNumber),
                "gender": String(gender),
                "major": String(major),
                "name": String(name),
                "password": String(password),
                "phoneNumber": String(phoneNumber),
                "role": String(role),
                "university": String(university),
                "username": String(userName)
            },
        })
        .then((res) => {
            console.log(res);
            navigate('/');
        })
        .catch((error) => {
            console.log(error);
        });
    }
    return (
        <form className="SignUpForm">
            <Title title="SIGN UP" />
            <div className="inputForm">
                <div id="name">
                    <label for="name">이름</label>
                    <input type="text" name="name" value={name} onChange={onNameHandler} required placeholder="실명을 입력하세요."></input>
                </div>
                <div id="username">
                    <label for="email">이메일</label>
                    <input type="email" name="userName" value={userName} onChange={onUserNameHandler} placeholder="abcdefg@gmail.com"></input>
                </div>
                <div id="password">
                    <label for="password">비밀번호</label>
                    <input type="password" name="password" value={password} onChange={onPasswordHandler} placeholder="**********"></input>
                </div>
                <div id="gender">
                    <label for="gender">성별</label>
                    <select value={gender} name="gender" onChange={onGenderHandler}>
                        <option value="default">선택</option>
                        <option value="WOMAN">여자</option>
                        <option value="MAN">남자</option>
                    </select>
                </div>
                <div id="phoneNumber">
                    <label for="phoneNumber">전화번호</label>
                    <input type="text" name="phoneNumber" value={phoneNumber} onChange={onPhoneNumberHandler} placeholder="'-' 구분없이 입력하세요."></input>
                </div>
                <div id="major">
                    <label for="major">전공</label>
                    <input type="text" name="major" value={major} onChange={onMajorHandler} placeholder="전공을 입력하세요."></input>
                </div>
                <div id="university">
                    <label for="university">대학</label>
                    <input type="text" name="university" value={university} onChange={onUniversityHandler} placeholder="대학교를 입력하세요."></input>
                </div>
                <div id="foreignerNumber">
                    <label for="foreignerNumber">외국인등록번호</label>
                    <input type="text" name="foreignerNumber" value={foreignerNumber} placeholder="000-0000" onChange={onForeignerNumberHandler}></input>
                </div>
                <div id="address">
                    <label for="address">주소</label>
                    <input type="text" name="address" value={address} onChange={onAddressHandler} placeholder="현지 주소를 입력하세요."></input>
                </div>
                <div className="signupBt">
                    <button id="signupBt" type="button" onClick={onSubmitHandler}>Sign Up</button>
                </div>
            </div>
        </form>
    );
}

export default GeneralSignup;