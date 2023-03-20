import Header from "./../../components/Header/Header";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import { useParams } from "react-router-dom";
import "./../../styles/post/add_post.scss"
import React from 'react';

const uploader = Uploader({
  apiKey: "free"
});

function Add_post(props) {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [img, setImg] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const token = localStorage.getItem('accessToken');
  const MyButtonComponent = () =>
    <UploadButton uploader={uploader}         // Required.
      //options={options}           // Optional.
      onComplete={files => {      // Optional.
        if (files.length === 0) {
          console.log('No files selected.')
        } else {
          console.log('Files uploaded:');
          console.log("1.img:", files.map(f => f.fileUrl));
          setImg(files.map(f => f.fileUrl));

        }
      }}>
      {({ onClick }) =>
        <div onClick={onClick}>
          <img className="icon" src="/camera.png"></img>
        </div>
      }
    </UploadButton>

  const onChange = (event) => {
    setPostTitle(event.target.value);
    console.log(postTitle);
  };

  const onChange2 = (event) => {
    setPostContent(event.target.value);
    console.log(postContent);
  };



  function post() {
    console.log("제목:", postTitle);
    console.log("내용:", postContent);
    console.log("2.img:", img);
    fetch(`http://54.180.210.232:8080/api/v1/posts?category=${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        title: postTitle,
        content: postContent,
        imgUrl: img[0]
      }),
    })
      .then((response) => response.json())
  }
  const onClick = () => {
    console.log("등록버튼 눌렀다");
    //localStorage.setItem('access-token', "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0ZXN0QHRlc3QuY29tIiwiYXV0aCI6IlJPTEVfQ0xBU1NJQyIsImV4cCI6MTY3MTcwNjQwNX0.PkFOCYl5m6uIGz3XhYbqCgaULAzo4RsvXp0AsgkRoYFDnryAwCNmBXjjaovbOzQI1ZwbjqbwW4db0VpfH91jaA");
    post();
    navigate(`/board_list/${id}`);
    alert("게시글이 등록되었습니다!");
  };

  return (
    <div>
      {/* <Board_lists postTitles={postTitles}></Board_lists> */}


      {/* <Header title="글 작성" /> */}
      <Header title={props.header_title} />
      <div className="display_container">

        <div className="input_title_wrapper">
          <input className="input_title" onChange={onChange}
            value={postTitle}
            placeholder="제목"
          ></input>
        </div>
        <div className="input_content_wrapper">
          <textarea className="input_content" onChange={onChange2}
            value={postContent} placeholder="내용을 입력하세요."></textarea>
        </div>

      </div>
      <div className="bottom_btn_wrapper">
        <div className="camera_icon">
          <MyButtonComponent></MyButtonComponent></div>
        <div className="submit_btn" onClick={onClick}>등록</div>

      </div>
    </div>

  );
}

export default Add_post;
