import Btn from "../../components/Btn/Btn.js";
import Header from "./../../components/Header/Header.js";
import Notice_header from "./../../components/Notice_header/Notice_header.js";
import Notice_list from "./../../components/Notice_list/Notice_list.js";
import Pagination_box from "./../../components/Pagination_box/Pagination_box.js";
import Search_box from "./../../components/Search_box/Search_box.js";
import { Link } from "react-router-dom";
import React from 'react';

function Question_list() {
  return (
    <div>
      <div className="display">
        <Header title="문의" />
        <div className="display_container">
          <Search_box />
          <Notice_header t1="번호" t2="제목" t3="글쓴이" t4="작성일" />
          <Notice_list
            num="01"
            title="문의드립니다"
            name="이혜린"
            date="03/10"
          />
          <Notice_list
            num="01"
            title="문의드립니다"
            name="이혜린"
            date="03/10"
          />
          <Notice_list
            num="01"
            title="문의드립니다"
            name="이혜린"
            date="03/10"
          />
          <Notice_list
            num="01"
            title="문의드립니다"
            name="이혜린"
            date="03/10"
          />
          <Notice_list
            num="01"
            title="문의드립니다"
            name="이혜린"
            date="03/10"
          />
          <Notice_list
            num="01"
            title="문의드립니다"
            name="이혜린"
            date="03/10"
          />
          <Notice_list
            num="01"
            title="문의드립니다"
            name="이혜린"
            date="03/10"
          />
          <Pagination_box />
          <Link to="/line3_4">
            <button>작성하기</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Question_list;
