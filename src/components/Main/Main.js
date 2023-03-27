import './Main.css';
import Title from '../Title/Title';
import MenuBar from '../MenuBar/MenuBar';
import Board_header from "../Board_header2/Board_header";
import Board_list from "../Board_list2/Board_list";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Board_header2 from "../Board_header2/Board_header2";
import Board_list2 from "../Board_list2/Board_list2";
import {Link, useParams} from "react-router-dom";
import Category from "../Category/Category";
function Main(){
    const [content, setContent] = useState('');
    const [freeContent, setFreeContent] = useState('');
    const [free, setFree] = useState('');
    const [notice, setNotice] = useState('');

    const token = localStorage.getItem('accessToken');

    const { id } = useParams();
    useEffect(() => {
        axios({
            method: "get",
            url: "http://54.180.210.232:8080/api/v1/posts?role=FREE&category=1&page=0",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
        }).then((res) => {
            setFreeContent(res.data.result);
            setFree(freeContent.slice(0,2));
            console.log(free);
        }).catch((error) => {
            console.log("자유게시판을 가져올 수 없습니다.");
        });
    },[]);

    useEffect(() => {
        axios({
            method: "get",
            url: "http://54.180.210.232:8080/api/v1/posts?role=FREE&category=2&page=0",
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
            console.log("공지사항을 가져올 수 없습니다.");
        });
        // console.log(content);
        // //
        // setNotice(content.content.slice(0,2));
        // console.log(notice);
    },[]);


    return(
        <div>
            <Title title="메인페이지" />
            <div className="main_notice_wrap">
                <h3>공지사항</h3>
                <ul>
                    {content === Object(content)
                        ? content.content.map((content, index) => (
                            <li key={index}>

                                <Link to={`/post/${id}/${content.postId}`} style={{ textDecoration: 'none', color: "black" }}>

                                    <Board_list id={content.postId} num={content.postId} title={content.title} name={content.writer} />
                                </Link>

                            </li>
                        ))
                        : "등록된 글이 없습니다"}
                </ul>
            </div>
            <div className="main_free_wrap">
                <h3>자유게시판</h3>
                <ul>
                    {freeContent === Object(freeContent)
                        ? freeContent.content.map((freeContent, index) => (
                            <li key={index}>

                                <Link to={`/post/${id}/${freeContent.postId}`} style={{ textDecoration: 'none', color: "black" }}>

                                    <Board_list id={freeContent.postId} num={freeContent.postId} title={freeContent.title} name={freeContent.writer} />
                                </Link>

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