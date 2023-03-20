import Header from "./../../components/Header/Header.js";
import Search_box from "./../../components/Search_box/Search_box";
import Btn from "../../components/Btn/Btn";
import Notice_header from "./../../components/Notice_header/Notice_header.js";
import Notice_list from "./../../components/Notice_list/Notice_list.js";
import Pagination_box from "./../../components/Pagination_box/Pagination_box";
import React from 'react';
function Apply_signup_list() {
  return (
    <div>
      <div className="display">
        <Header title="가입 신청" />
        <div className="display_container">
          <Search_box />
          <Btn btn_txt="가입 신청하기" />
          <Notice_header t1="번호" t2="제목" t3="글쓴이" t4="작성일" />
          <Notice_list
            num="01"
            title="가입을 신청합니다."
            name="이혜린"
            date="03/10"
          />
          <Notice_list
            num="01"
            title="가입을 신청합니다."
            name="이혜린"
            date="03/10"
          />
          <Notice_list
            num="01"
            title="가입을 신청합니다."
            name="이혜린"
            date="03/10"
          />
          <Notice_list
            num="01"
            title="가입을 신청합니다."
            name="이혜린"
            date="03/10"
          />
          <Notice_list
            num="01"
            title="가입을 신청합니다."
            name="이혜린"
            date="03/10"
          />
          <Notice_list
            num="01"
            title="가입을 신청합니다."
            name="이혜린"
            date="03/10"
          />
          <Notice_list
            num="01"
            title="가입을 신청합니다."
            name="이혜린"
            date="03/10"
          />
          <Pagination_box />
        </div>
      </div>
    </div>
  );
}

export default Apply_signup_list;
