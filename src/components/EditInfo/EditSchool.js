import './EditInfo.css';
import Title from './../Title/Title';
import profile from '../../img/profile.png';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

// 학적 정보 변경 페이지
// 학적 정보를 모두 입력해야만 변경 가능
const EditSchool = () => {

    const navigate = useNavigate();

    // 변수 설정
    const profileUrl = localStorage.getItem('profileUrl');
    const nickname = localStorage.getItem('nickname');
    const address = localStorage.getItem('address');
    const [university, setUniversity] = useState([]);
    const [major, setMajor] = useState([]);
    const [advisorName, setAdvisorName] = useState([]);
    const [education, setEducation] = useState([]);

    const onUniversityHandler = (e) => {
        setUniversity(e.target.value);
    }
    const onMajorHandler = (e) => {
        setMajor(e.currentTarget.value);
    }
    const onEducationHandler = (e) => {
        setEducation(e.target.value);
    }
    const onAdvisorNameHandler = (e) => {
        setAdvisorName(e.target.value);
    }

    const token = localStorage.getItem('accessToken');

    // PATCH 요청으로 학적 정보 수정
    const onSubmitHandler = (e) => {
        e.preventDefault();
        localStorage.setItem('university', university);
        localStorage.setItem('major', major);
        localStorage.setItem('advisorName', advisorName);
        localStorage.setItem('education', education);
        axios({
            method: "patch",
            url: "http://54.180.210.232:8080/api/v1/users/my",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
            data: {
                "address": address,
                "bio": "",
                "nickname": nickname,
                "profileUrl": profileUrl,
                "universityName": university,
                "major": major,
                "educationRequest": education,
                "advisorName": advisorName,
            },
        }).then((res) => {
            // 변경 완료 후 이전 페이지로 이동
            alert("학적정보 변경이 완료되었습니다.")
            navigate(-1)
        }).catch((error) => {
            // 정보란을 모두 입력하지 않을 시 변경 x
            alert("학적 정보란을 모두 입력해주세요.")
        })
    }
    return (
        <div>
            <Title title="학적 정보 변경" />
            <div className="profile-wrap">
                <div id="info-wrap">
                    <label htmlFor="university">학교</label>
                    <input type="university" name="university" onChange={onUniversityHandler} ></input>
                </div>
                <div id="info-wrap">
                    <label htmlFor="major">전공</label>
                    <input type="major" name="major" onChange={onMajorHandler}></input>
                </div>
                <div id="info-wrap">
                    <label htmlFor="education">학력</label>
                    <select name="role" onChange={onEducationHandler}>
                        <option value="NA" selected>선택</option>
                        <option value="UNDERGRADUATE">학부</option>
                        <option value="BACHELOR">학사</option>
                        <option value="MASTER">석사</option>
                        <option value="DOCTOR">박사</option>
                    </select>
                </div>
                <div id="info-wrap">
                    <label htmlFor="advisorName">지도교수</label>
                    <input type="advisorName" name="advisorName" onChange={onAdvisorNameHandler}></input>
                </div>
                <div className="Signup-Btn">
                    <button id="Signup-Btn" type="button" onClick={onSubmitHandler}>변경하기</button>
                </div>
            </div>
        </div>
    )
}

export default EditSchool;