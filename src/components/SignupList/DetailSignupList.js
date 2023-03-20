import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios, {request} from 'axios';
import './SignupList.css';
import Title from "../Title/Title";

// 회원 가입 신청자 상세 정보 및 수락/거절
function DetailSignupList() {
    const navigate = useNavigate();

    // 변수 설정
    const [role, setRole] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [gender, setGender] = useState("");
    const [nationality, setNationality] = useState("");
    const [address, setAddress] = useState("");
    const [university, setUniversity] = useState("");
    const [major, setMajor] = useState("");
    const [education, setEducation] = useState("");
    const [advisorName, setAdvisorName] = useState("");

    const token = localStorage.getItem('accessToken');
    const membershipId = localStorage.getItem('membershipId');

    // 회원 가입 거절 함수
    const onRejectHandler = (e) => {
        e.preventDefault();
        // 거절 확인 창 띄운 후
        var rejectYN = window.confirm(name+' 회원의 가입 요청을 거절하시겠습니까?');
        if (rejectYN) {
            // PATCH 요청으로 회원가입 거절
            axios({
                method: "patch",
                url: "http://54.180.210.232:8080/api/v1/memberships/reject/"+membershipId,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                },
            }).then((res) => {
                // 회원가입 거절 완료
                alert(name+" 회원의 가입 요청이 거절되었습니다.")
                navigate('/signupList')
            }).catch((error) => {
                // 에러 발생
                console.log(error);
                alert("회원 가입 거절 요청 처리 중 오류가 발생하였습니다. 다시 시도해주세요.");
            });
        }
    }

    // 회원 가입 승인 함수
    const onAcceptHandler = (e) => {
        e.preventDefault();
        // 승인 확인 창 띄운 후
        var acceptYN = window.confirm(name+' 회원의 가입 요청을 승인하시겠습니까?');
        if (acceptYN) {
            // PATCH 요청으로 회원가입 승인
            axios({
                method: "patch",
                url: "http://54.180.210.232:8080/api/v1/memberships/accept/"+membershipId,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                },
            }).then((res) => {
                // 회원 가입 승인
                alert(name+" 회원의 가입 요청이 정상적으로 승인되었습니다.")
                navigate('/signupList')
            }).catch((error) => {
                // 에러
                console.log(error);
                alert("회원가입 승인 요청 처리 중 오류가 발생했습니다. 다시 시도해주세요.");
            });
        }
    }

    // GET 요청으로 회원 상세 정보 불러오기
    window.onload = axios({
            method: "get",
            url: "http://54.180.210.232:8080/api/v1/users?username="+String(localStorage.getItem('requestUsername')),
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
        }).then((res) => {
            // 상세 정보 세팅
            setRole(res.data.result.role);
            setName(res.data.result.name);
            setPhoneNumber(res.data.result.phoneNumber);
            setGender(res.data.result.gender);
            setNationality(res.data.result.nationality);
            setAddress(res.data.result.address);
            setUniversity(res.data.result.universityName);
            setMajor(res.data.result.major);
            setEducation(res.data.result.education);
            setAdvisorName(res.data.result.advisorName);
        }).catch((error) => {
            console.log(error);
            alert('회원 정보 조회 중 오류가 발생했습니다.');
            navigate(-1);
    });

    // 회원 등급
    var levels;
    levels = {
        LEVEL1 : <p id="userinfo">기본회원</p>,
        LEVEL2 : <p id="userinfo">유료회원 등급1</p>,
        LEVEL3 : <p id="userinfo">유료회원 등급2</p>,
        LEVEL4 : <p id="userinfo">유료회원 등급3</p>,
        LEVEL5 : <p id="userinfo">유료회원 등급4</p>,
        ADMIN : <p id="userinfo">관리자</p>
    }
    // 성별
    var genders;
    genders = {
        MAN: <p id="userinfo">남성</p>,
        WOMAN: <p id="userinfo">여성</p>
    };

    // 학력
    var educations;
    educations = {
        UNDERGRADUATE: <p id="userinfo">학부</p>,
        BACHELOR: <p id="userinfo">학사</p>,
        MASTER: <p id="userinfo">석사</p>,
        DOCTOR: <p id="userinfo">박사</p>
    };

    return (
        <div className="SignupList-form">
            <Title title={name} />
            <div className="user-info-form">
                <div id="info-wrap">
                    <label htmlFor="name">등급</label>
                    <p id="userinfo">{levels[role]}</p>
                </div>
                <div id="info-wrap">
                    <label htmlFor="name">이름</label>
                    <p id="userinfo">{name}</p>
                </div>
                <div id="info-wrap">
                    <label htmlFor="phoneNumber">전화번호</label>
                    <p id="userinfo">{phoneNumber}</p>
                </div>
                <div id="info-wrap">
                    <label htmlFor="gender">성별</label>
                    {genders[gender]}
                </div>
                <div id="info-wrap">
                    <label htmlFor="nationality">국적</label>
                    <p id="userinfo">{nationality}</p>
                </div>
                <div id="info-wrap">
                    <label htmlFor="address">주소</label>
                    <p id="userinfo">{address}</p>
                </div>
                <div id="info-wrap">
                    <label htmlFor="university">대학교</label>
                    <p id="userinfo">{university}</p>
                </div>
                <div id="info-wrap">
                    <label htmlFor="major">전공</label>
                    <p id="userinfo">{major}</p>
                </div>
                <div id="info-wrap">
                    <label htmlFor="education">학력</label>
                    <p id="userinfo">{educations[education]}</p>
                </div>
                <div id="info-wrap">
                    <label htmlFor="advisorName">지도교수</label>
                    <p id="userinfo">{advisorName}</p>
                </div>

            </div>
            <div className="Access-Btn">
                <button id="Accept-Btn" type="button" onClick={onAcceptHandler}>승인</button>
                <button id="Reject-Btn" type="button" onClick={onRejectHandler}>거절</button>
            </div>
        </div>

    )
}

export default DetailSignupList;