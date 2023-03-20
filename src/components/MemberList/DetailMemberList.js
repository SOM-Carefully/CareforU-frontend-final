import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios, {request} from 'axios';
import './MemberList.css';
import Title from "../Title/Title";

// 회원 상세 정보 페이지 - 회원 등급 변경 및 강제 탈퇴
function DetailMemberList() {
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
    const [newRole, setNewRole] = useState("");
    const onRoleHandler = (e) => {
        setNewRole(e.currentTarget.value);
    }

    const token = localStorage.getItem('accessToken');
    const membershipId = localStorage.getItem('membershipId');
    const username = localStorage.getItem('username');

    // 회원 등급 변경 함수
    const onChangeRole = (e) => {
        e.preventDefault();
        // 등급 변경 확인 창 띄운 후
        var changeYN = window.confirm(name+' 회원의 등급을 변경하시겠습니까?');
        if (changeYN) {
            // PATCH 요청으로 회원 등급 변경
            axios({
                method: "patch",
                url: "http://54.180.210.232:8080/api/v1/users/"+newRole+'?username='+username,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                },
            }).then((res) => {
                // 등급 변경 성공
                alert(name+" 회원의 등급 변경이 완료되었습니다.")
                navigate('/memberList')
            }).catch((error) => {
                // 에러
                console.log(error);
                alert("등급 변경에 실패하였습니다. 다시 시도해주세요.");
            });
        }
    }

    // 회원 강제 탈퇴 함수
    const onForcedWithdraw = (e) => {
        e.preventDefault();
        // 회원 탈퇴 확인 창 띄운 후
        var forcedWithdrawYN = window.confirm(name+' 회원을 정말로 강제 탈퇴하시겠습니까?');
        if (forcedWithdrawYN) {
            // POST 요청으로 강제 탈퇴
            axios({
                method: "post",
                url: "http://54.180.210.232:8080/api/v1/forced-withdrawal?username="+username,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                },
            }).then((res) => {
                // 탈퇴 성공
                alert(name+" 회원의 강제 탈퇴 처리가 완료되었습니다.")
                navigate('/memberList')
            }).catch((error) => {
                // 에러
                console.log(error);
                alert("탈퇴 처리 과정 중 오류가 발생하였습니다.");
            });
        }
    }

    // GET 요청으로 회원 상세 정보 불러오기
    window.onload = axios({
        method: "get",
        url: "http://54.180.210.232:8080/api/v1/users?username="+username,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    }).then((res) => {
        // 회원 정보 설정
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
        alert('회원 정보 조회 과정 중 오류가 발생하였습니다.');
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
                    <label htmlFor="role">현재 등급</label>
                    <p id="userinfo">{levels[role]}</p>
                    <select value={newRole} name="role" onChange={onRoleHandler}>
                        <option value="NA">변경 등급 선택</option>
                        <option value="LEVEL1">기본 회원</option>
                        <option value="LEVEL2">유료회원 등급1</option>
                        <option value="LEVEL3">유료회원 등급2</option>
                        <option value="LEVEL4">유료회원 등급3</option>
                        <option value="LEVEL5">유료회원 등급4</option>
                    </select>
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
                <button id="Accept-Btn" type="button" onClick={onChangeRole}>등급 변경</button>
                <button id="Reject-Btn" type="button" onClick={onForcedWithdraw}>강제 탈퇴</button>
            </div>
        </div>

    )
}

export default DetailMemberList;