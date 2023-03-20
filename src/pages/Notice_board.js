import Header from "./../components/Header/Header.js";
import Search_box from "./../components/Search_box/Search_box";
import Notice_header from "./../components/Notice_header/Notice_header";
import Notice_list from "./../components/Notice_list/Notice_list";
import Pagination from "react-js-pagination"; //API
import Pagination_box from "../components/Pagination_box/Pagination_box.js";
import Btn from "../components/Btn/Btn";
import React from "react";
import { Link } from "react-router-dom";
function Notice_board() {
  return (
    <div>
      <div className="display">
        <Header title="NOTICE" />
        <div className="display_container">
          <Search_box />
          <Notice_header t1="번호" t2="제목" t3="글쓴이" t4="작성일" />
          <Notice_list num="01" title="공지사항 1" name="관리자" date="03/10" />
          <Notice_list num="02" title="공지사항 2" name="관리자" date="03/10" />
          <Notice_list num="03" title="공지사항 3" name="관리자" date="03/10" />
          <Notice_list num="04" title="공지사항 4" name="관리자" date="03/10" />
          <Notice_list num="05" title="공지사항 5" name="관리자" date="03/10" />
          <Notice_list num="06" title="공지사항 6" name="관리자" date="03/10" />
          <Notice_list num="07" title="공지사항 7" name="관리자" date="03/10" />
          <Pagination_box />
          <Link to="/add_notice">
            <Btn btn_txt="작성하기" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Notice_board;
