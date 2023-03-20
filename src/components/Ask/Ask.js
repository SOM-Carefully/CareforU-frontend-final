import './Ask.css';
import Title from './../Title/Title';
import MenuBar from './../MenuBar/MenuBar';
import React, { useState } from 'react';
import axios from 'axios';
import $ from 'jquery';
// import axios from 'axios';

const Ask = () => {
    const [ask, setAsk] = useState("");    
    const onAskHandler = (event) => {
        setAsk(event.currentTarget.value);
    }

    const submitAsk = () => {
        $('.center-text').append('<div className="ask-text"><p>' + ask + '</p></div>');
        axios({
            method: "post",
            url: "",
            headers: {
                "Content-Type" : 'application/json',
            },
            data: {
                "" : ask
            }
        }).then((res) => {
            alert('문의가 등록되었습니다.');
            $('.center-text').html('<br/><div className="ask-text"><p>' + ask + '</p></div');
        }).catch((error) => {
            alert(error);
        });
    }

    return (
        <div>
        <Title title="문의" />
        <div className="ask-wrap">
            <div className="center-text">
                <div className="admin-img"></div>
                <div className="admin-text"><p>안녕하세요. 케어풀리 고객센터입니다.</p></div>
            </div>
            <div className="ask-input">
                <div>
                    <input id="askInput" type="text" name="ask" value={ask} onChange={onAskHandler}></input>
                </div>
                <div>
                    <button type="button" id="askBt" onClick={submitAsk}>문의하기</button>
                </div>
            </div>
        </div>
        <MenuBar />
        </div>
    )
}

export default Ask;