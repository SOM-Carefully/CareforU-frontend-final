import Header from "./../../components/Header/Header";
import Btn from "../../components/Btn/Btn.js";
import Board_header from "../../components/Board_header2/Board_header";
import Board_list from "../../components/Board_list2/Board_list";
//import Board_list from "../../components/Board_list/Board_list.js";

import { useState, useEffect, React } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


function Board_lists(props) {
  const [header_title, setHeader_title] = useState("")
  const [category_names, setCategory_names] = useState("")
  const [content, setContent] = useState("");
  const token = localStorage.getItem('accessToken');
  const { id } = useParams();


  //카테고리 이름 list get
  function Get() {
    fetch("http://54.180.210.232:8080/api/v1/category", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
    }) //method get 은 생략 가능
      .then((res) => res.json())
      //.then((res) => console.log("여기:", res.result.categoryResponses
      // .then((res) => setCategory_names(res.result.categoryResponses
      // ))
      .then((res) => setHeader_title(res.result.categoryResponses[id - 1].categoryName
      ))

    //console.log("function test")
  }


  useEffect(() => {
    Get()
  }, []);

  console.log("useParams id:" + id)

  function testGet() {
    fetch(`http://54.180.210.232:8080/api/v1/posts?role=FREE&category=${id}&page=0`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
    }) //method get 은 생략 가능
      .then((res) => res.json())
      .then((res) => setContent(res.result))

    console.log("function test")
  }

  useEffect(() => {
    testGet()
  }, []);



  console.log("11:", content);
  console.log("객체?:", content === Object(content));
  console.log("map:", content.content);




  return (
    <div>

      <Header title={header_title} />
      <div className="display_container">
        <Btn url={`/add_post/${id}`} />

        <Board_header t1="번호" t2="제목" t3="글쓴이" />
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
        {/* <Pagination_box /> */}
      </div>
    </div>

  );
}

export default Board_lists;
