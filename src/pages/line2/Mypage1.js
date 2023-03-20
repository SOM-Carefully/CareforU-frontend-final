import { Link } from "react-router-dom";
import React from 'react';
import Header from "./../../components/Header/Header";
function Test() {
  return (
    <div>
      <Header title="마이페이지1" />
      <div>mypage1</div>
      <Link to="/my_post_list">
        <button>내가 작성한 글</button>
      </Link>
    </div>
  );
}

export default Test;
