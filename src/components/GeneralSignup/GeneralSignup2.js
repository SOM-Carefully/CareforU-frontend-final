import React, { useState } from 'react';
import './GeneralSignup.css';
import { useNavigate } from 'react-router-dom';
import Title from './../Title/Title';

// 일반 회원 가입 - 기본 정보 입력
function GeneralSignup2() {
    const navigate = useNavigate();

    // 이름 변수
    const [name, setName] = useState("");
    const onNameHandler = (e) => {
        setName(e.currentTarget.value);
    }
    // 외국인 등록번호
    const [identificationNumber, setIdentificationNumber] = useState("");
    const onIdentificationNumberHandler = (e) => {
        setIdentificationNumber(e.currentTarget.value);
    }
    // 성별
    const [genderRequest, setGender] = useState("");
    const onGenderHandler = (e) => {
        setGender(e.currentTarget.value);
    }
    // 국적
    const [nationality, setNationality] = useState("");
    const onNationalityHandler = (e) => {
        setNationality(e.currentTarget.value);
    }
    // 주소
    const [address, setAddress] = useState("");
    const onAddressHandler = (e) => {
        setAddress(e.currentTarget.value);
    }

    // 입력 완료 시 로컬 스토리지에 정보 저장, 다음페이지로 이동
    const onSubmitHandler = (event) => {
        event.preventDefault();
        localStorage.setItem('name', name);
        localStorage.setItem('identificationNumber', identificationNumber);
        localStorage.setItem('genderRequest', genderRequest);
        localStorage.setItem('nationality', nationality);
        localStorage.setItem('address', address);
        navigate('/generalSignup3');
    }

    return (
        <div className="GeneralSignup2-form-wrap">
            <Title title=""/>
            <div className="GeneralSignup2-form">
                <div id="name">
                    <label htmlFor="name">이름</label>
                    <input id="secondInput" type="text" name="name" value={name} onChange={onNameHandler}></input>
                </div>
                <div id="identificationNumber">
                    <label htmlFor="identificationNumber">외국인등록번호</label>
                    <input id="secondInput" type="text" name="identificationNumber" value={identificationNumber}
                           onChange={onIdentificationNumberHandler}></input>
                </div>
                <div id="genderRequest">
                    <label htmlFor="genderRequest">성별</label>
                    <select value={genderRequest} name="genderRequest" onChange={onGenderHandler}>
                        <option value="NA">선택</option>
                        <option value="MAN">남</option>
                        <option value="WOMAN">여</option>
                    </select>
                </div>
                <div id="nationality">
                    <label htmlFor="nationality">국적</label>
                    <input type="text" id="secondInput" name="nationality" value={nationality}
                           onChange={onNationalityHandler}></input>
                </div>
                <div id="address">
                    <label htmlFor="address">주소</label>
                    <input type="text" id="secondInput" name="address" value={address}
                           onChange={onAddressHandler}></input>
                </div>
                <div className="Signup-Btn">
                    <button id="Signup-Btn" type="button" onClick={onSubmitHandler}>입력 완료</button>
                </div>
            </div>
        </div>
    )
}

export default GeneralSignup2;