import { Link } from "react-router-dom";
import React from 'react';
import Header from "./../../components/Header/Header";
function Apply_service() {
  return (
    <div>
      <Header title="서비스 신청" />
      <div>서비스 신청 페이지</div>
      <Link to="/apply_service_select_date">
        <button>달력</button>
      </Link>
    </div>
  );
}

export default Apply_service;
