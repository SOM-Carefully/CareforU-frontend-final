import { Link } from "react-router-dom";
import React from 'react';
function Test() {
  return (
    <div>
      <div>line3 2page 가입 승인 화면</div>
      <div>가입이 승인되었습니다~~~~~</div>
      <Link to="/">
        <button>서비스사용하러가보기</button>
      </Link>
    </div>
  );
}

export default Test;
