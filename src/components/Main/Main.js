import './Main.css';
import Title from '../Title/Title';
import MenuBar from '../MenuBar/MenuBar';
import Board_header from "../Board_header2/Board_header";
import Board_list from "../Board_list2/Board_list";
import React, {useEffect, useState} from "react";
import axios from "axios";
function Main(){
    const [content, setContent] = useState('');
    const [freeContent, setFreeContent] = useState('');

    const token = localStorage.getItem('accessToken');
    useEffect(() => {
        axios({
            method: "get",
            url: "http://54.180.210.232:8080/api/v1/posts",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
        }).then((res) => {
            setFreeContent(res.data.result);
            console.log(content);
        }).catch((error) => {
            console.log("어쩌지이... ? 안 뜨는데에..");
        });
    },[]);

    useEffect(() => {
        axios({
            method: "get",
            url: "http://54.180.210.232:8080/api/v1/notices",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
        }).then((res) => {
            // console.log(res.data.message);
            // console.log(res.data.result);
            setContent(res.data.result);
            console.log(content);
        }).catch((error) => {
            console.log("어쩌지이... ? 안 뜨는데에..");
        });
    },[]);

    return(
        <div>
            <Title title="메인페이지" />
            <div className="main_notice_wrap">
                <h3>공지사항</h3>
                <ul>
                    {content===Object(content)
                        ? content.content.map((content, index) => (
                            <li key={index}>
                                <span>{index}</span>
                                <span>{content.title}</span>
                            </li>
                        ))
                        : "등록된 글이 없습니다"}
                </ul>
            </div>
            <div className="main_free_wrap">
                <h3>자유게시판</h3>
                <ul>
                    {freeContent===Object(freeContent)
                        ? freeContent.content.map((freeContent, index) => (
                            <li key={index}>
                                <span>{index}</span>
                                <span>{freeContent.title}</span>
                                <span>{freeContent.writer}</span>
                            </li>
                        ))
                        : "등록된 글이 없습니다"}
                </ul>
            </div>
            <MenuBar />
        </div>

    )
}

export default Main;