import Header from "./../../components/Header/Header.js";
import React from 'react';
import Notice_header from "./../../components/Notice_header/Notice_header.js";
import Notice_list from "./../../components/Notice_list/Notice_list.js";

function Test() {
  return (
    <div>
      <div className="display">
        <Header title="내가 작성한 글" />
        <div className="display_container">
          <Notice_header t1="번호" t2="제목" t3="글쓴이" t4="작성일" />
          <Notice_list
            num="01"
            title="대학 수학 과제 범위?"
            name="김동민"
            date="03/10"
          />
          <Notice_list
            num="01"
            title="대학 수학 과제 범위?"
            name="김동민"
            date="03/10"
          />
          <Notice_list
            num="01"
            title="대학 수학 과제 범위?"
            name="김동민"
            date="03/10"
          />
          <Notice_list
            num="01"
            title="대학 수학 과제 범위?"
            name="김동민"
            date="03/10"
          />
        </div>
      </div>
    </div>
  );
}

export default Test;

// //////////
// import Header from "../../components/Header/Header";
// function Test() {
//   return (
//     <div>
//       <Header title="마이페이지2" />
//       <div>mypage2</div>
//     </div>
//   );
// }

// export default Test;
