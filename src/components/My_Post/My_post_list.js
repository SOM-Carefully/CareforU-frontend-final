import React, {useEffect, useState} from "react";
import axios from "axios";
import Board_header from "../Board_header2/Board_header";
import Title from "../Title/Title";
import Board_list from "../Board_list2/Board_list";
import './My_Post.css';

function Test() {
  const [content, setContent] = useState('');
  const token = localStorage.getItem('accessToken');
  useEffect(() => {
    axios({
      method: "get",
      url: "http://54.180.210.232:8080/api/v1/services/my",
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
      alert("어쩌지이... ? 안 뜨는데에..");
    });
  },[])

  return (
    <div>
      <div className={"my_post_list_wrap"}>
        <Title title="내가 신청한 서비스" />
        <Board_header t1="번호" t2="글쓴이" t3="신청일" t4="상태"/>
        <ul>
          {content.contentsCount !== 0 && content
              ? content.content.map((content, index) => (
                  <li key={index}>
                    <Board_list num={index+1} username={content.userUsername} posttime={content.createdAt[0] + '.' + content.createdAt[1] + '.' + content.createdAt[2]}  status={'대기중'} />
                  </li>
            ))
            : "신청한 글이 없습니다"}
        </ul>
      </div>
    </div>
  );
}

export default Test;
