import './WithDraw.css';
import Title from './../Title/Title';
import MenuBar from './../MenuBar/MenuBar';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// 회원 탈퇴 페이지
const WithDraw = () => {

    const navigate = useNavigate();

    const token = localStorage.getItem('accessToken');

    // 회원 탈퇴 시 비밀번호 입력을 위한 변수 설정
    const [users, setUsers] = useState([]);
    const [Password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    // 탈퇴 함수
    const onWithDraw = (e) => {
        // 탈퇴 확인 창 띄운 후
        var withDrawYn = window.confirm('정말 탈퇴하시겠습니까?');
        if (withDrawYn){
            // POST 요청으로 탈퇴 처리
            axios({
                method: "post",
                url: "http://54.180.210.232:8080/api/v1/sign-out",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token
                },
                data: {
                    "password" : Password
                },
            }).then((res) => {
                // 탈퇴 정상 처리
                alert('회원님의 탈퇴 신청이 정상적으로 처리되었습니다.')
                navigate('/');
            }).catch((error) => {
                alert("회원 탈퇴 과정 중 오류가 발생했습니다.");
            });
        }else{
            navigate('/');
        }
    }
    return (
        <div className="withdraw-top-wrap">
            <Title title="회원탈퇴"/>
            <div className="withdraw-wrap">
                <div className="userName">
                    <p>
                        탈퇴를 위해
                        <br/>비밀번호를 입력해주세요.
                    </p>
                </div>
                <div className="withdraw-input-wrap">
                    <input className="withdraw-pw-input" type={showPassword ? "text" : "password"} value={Password} onChange={onPasswordHandler}>

                    </input>
                    <div id="loginSubText" onClick={() => setShowPassword(prevState => !prevState)}> {showPassword ? "Hide Password" : "Show Password"}</div>
                </div>
                <div className="withdraw-bt-wrap">
                    <button type="button" onClick={onWithDraw}>탈퇴하기</button>
                </div>
            </div>
        </div>
    )
}

export default WithDraw;