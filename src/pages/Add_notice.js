import "./../components/Header/Header.js";
import Header from "./../components/Header/Header.js";
import Input_box from "./../components/Input_box/Input_box";
import Btn_2 from "../components/Btn_2/Btn_2";
import Board_list from "../../../../Downloads/frontend-chaehyun 2/src/components/Board_list/Board_list.js";
import Board_lists from "./Board_lists.js";
import { useState } from "react";
import { Link } from "react-router-dom";

function Add_notice(props) {
  const [postTitle, setPostTitle] = useState("");
  const [postTitles, setPostTitles] = useState([]);
  const onChange = (event) => {
    setPostTitle(event.target.value);
    console.log(postTitle);
  };
  const onClick = () => {
    console.log("등록버튼 눌렀다");
    //alert("게시글이 등록 되었습니다.");
    setPostTitles((currentArray) => [postTitle, ...currentArray]);
    setPostTitle("");
  };
  console.log("배열에 저장 되는지");
  console.log(postTitles);
  return (
    <div>
      {/* <Board_lists postTitles={postTitles}></Board_lists> */}

      <div className="display">
        <Header title="NOTICE" />
        <div className="display_container">
          <Input_box
            onChange={onChange}
            onClick={onClick}
            value={postTitle}
            input_title="제목"
            height="30px"
            place_holder="제목을 입력하세요."
          />

          <Input_box
            input_title="내용"
            height="300px"
            place_holder="내용을 입력하세요."
          />
          <Link to="/board_list">
            <Btn_2 btn1="목록" btn2="등록" />
          </Link>

          <button onClick={onClick}>등록</button>
        </div>
      </div>
    </div>
  );
}

export default Add_notice;
