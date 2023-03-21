import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Modify_post from "./pages/Modify_post";


import "./styles/common.scss";
import Login from "./components/Login/Login";



// line2
import Home from "./pages/line2/home";

import Mypage1 from "./pages/line2/Mypage1";
import Mypage2 from "./pages/line2/Mypage2";
import My_post_list from "./pages/line2/My_post_list";

// line3
import Apply_signup_list from "./pages/line3/Apply_signup_list";
import Line3_2 from "./pages/line3/Line3_2";
import Question_list from "./pages/line3/Question_list";
import Line3_4 from "./pages/line3/Line3_4";

import SelectType from "./components/SelectType/SelectType";

import AdminSignup from "./components/AdminSignup/AdminSignup";
import AdminSignup2 from "./components/AdminSignup/AdminSignup2";
import AdminSignup3 from "./components/AdminSignup/AdminSignup3";
import AdminSignup4 from "./components/AdminSignup/AdminSignup4";

import GeneralSignup from "./components/GeneralSignup/GeneralSignup";
import GeneralSignup2 from "./components/GeneralSignup/GeneralSignup2";
import GeneralSignup3 from "./components/GeneralSignup/GeneralSignup3";
import GeneralSignup4 from "./components/GeneralSignup/GeneralSignup4";
import GeneralSignup5 from "./components/GeneralSignup/GeneralSignup5";
import GeneralSignup6 from "./components/GeneralSignup/GeneralSignup6";

import Main from "./components/Main/Main";

import SignupList from "./components/SignupList/SignupList";
import DetailSignupList from "./components/SignupList/DetailSignupList";
import MemberList from "./components/MemberList/MemberList";
import DetailMemberList from "./components/MemberList/DetailMemberList";

import MyPage from "./components/MyPage/MyPage";
import GeneralMyPage from "./components/MyPage/GeneralMyPage";
import AdminMyPage from "./components/MyPage/AdminMyPage";
import WithDraw from "./components/WithDraw/WithDraw";
import EditAdminInfo from "./components/EditInfo/EditAdminInfo";
import EditGeneralInfo from "./components/EditInfo/EditGeneralInfo";
import EditPassword from "./components/EditInfo/EditPassword";
import EditNickname from "./components/EditInfo/EditNickname";

import FileUploader from "./components/FileUploader/FileUploader";
import EditSchool from "./components/EditInfo/EditSchool";

//post
import Post from "./pages/post/post";
import Add_post from "./pages/post/Add_post";
import Board_lists from "./pages/post/Board_lists";
import Select_category from "./pages/post/Select_category";

//admin
import Adm_select_catrgory from "./pages/admin/Adm_select_category"

//공지사항
import Add_notice from "./pages/notice/Add_notice";
import Notice_list from "./pages/notice/Notice_list";
import Notice from "./pages/notice/notice";

// service
import Total_Service from './components/Service/Service_Total';
import Admin_Service from './components/Service/Service_Admin';
import My_Service from './components/Service/My_Service';
import Detail_Service from './components/Service/Service_Detail';
import Service_Post from "./components/Service/Service_Post";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/board_list" element={<Board_lists />}></Route>
      <Route path="/add_post" element={<Add_post />}></Route>

      <Route path="/add_notice" element={<Add_notice />}></Route>

      {/*<Route path="/service_total" element={<Total_Service />}></Route>*/}
      {/* line2 */}
      {/* <Route path="/" element={<Home />}></Route> */}


      <Route path="/service_post" element={<Service_Post />}></Route>
      <Route path="/service_home" element={<Total_Service />}></Route>
      <Route path="/service_home_admin" element={<Admin_Service />}></Route>
      <Route path="/service_mine" element={<My_Service />}></Route>
      <Route path="/service_detail" element={<Detail_Service />}></Route>
      <Route path='/' element={<Login />}></Route>

      <Route path='/select' element={<SelectType />}></Route>

      <Route path='/adminSignup' element={<AdminSignup />}></Route>
      <Route path='/adminSignup2' element={<AdminSignup2 />}></Route>
      <Route path='/adminSignup3' element={<AdminSignup3 />}></Route>
      <Route path='/adminSignup4' element={<AdminSignup4 />}></Route>

      <Route path='/generalSignup' element={<GeneralSignup />}></Route>
      <Route path='/generalSignup2' element={<GeneralSignup2 />}></Route>
      <Route path='/generalSignup3' element={<GeneralSignup3 />}></Route>
      <Route path='/generalSignup4' element={<GeneralSignup4 />}></Route>
      <Route path='/generalSignup5' element={<GeneralSignup5 />}></Route>
      <Route path='/generalSignup6' element={<GeneralSignup6 />}></Route>

      <Route path='/main' element={<Main />}></Route>

      <Route path='/signupList' element={<SignupList />}></Route>
      <Route path='/detail_signupList' element={<DetailSignupList />}></Route>
      <Route path='/memberList' element={<MemberList />}></Route>
      <Route path='/detail_memberList' element={<DetailMemberList />}></Route>

      <Route path='/generalMypage' element={<GeneralMyPage />}></Route>
      <Route path='/adminMypage' element={<AdminMyPage />}></Route>
      <Route path='/mypage' element={<MyPage />}></Route>

      <Route path='/withDraw' element={<WithDraw />}></Route>

      <Route path='/editAdminInfo' element={<EditAdminInfo />}></Route>
      <Route path='/editGeneralInfo' element={<EditGeneralInfo />}></Route>
      <Route path='/editPassword' element={<EditPassword />}></Route>
      <Route path='/editNickname' element={<EditNickname />}></Route>
      <Route path='/editSchool' element={<EditSchool />}></Route>

      <Route path='/fileUpload' element={<FileUploader />}></Route>

      {/* <Route path="/add_notice" element={<Add_notice />}></Route> */}
      <Route path="/apply_signup_list" element={<Apply_signup_list />}></Route>



      {/* line2 */}
      <Route path="/" element={<Home />}></Route>


      <Route path="/mypage1" element={<Mypage1 />}></Route>
      <Route path="/mypage2" element={<Mypage2 />}></Route>
      <Route path="/my_post_list" element={<My_post_list />}></Route>
      {/* line3 */}
      <Route path="/apply_signup_list" element={<Apply_signup_list />}></Route>
      <Route path="/line3_2" element={<Line3_2 />}></Route>
      <Route path="/question_list" element={<Question_list />}></Route>
      <Route path="/line3_4" element={<Line3_4 />}></Route>
      {/* <Route path="/line3_5" element={<Line3_5 />}></Route>
      <Route path="/line3_6" element={<Line3_6 />}></Route> */}
      {/* 기타 */}

      {/* NOTICE */}
      <Route path="/add_notice" element={<Add_notice />}></Route>
      <Route path="/notice_list" element={<Notice_list />}></Route>
      <Route path="/notice" element={<Notice />}></Route>
      <Route path="/notice/:id" element={<Notice />}></Route>
      {/* POST */}
      <Route path="/board_list" element={<Board_lists header_title="자유게시판" detail="post" add_btn="/add_post" />}></Route>
      <Route path="/board_list/:id" element={<Board_lists header_title="자유게시판" detail="post" add_btn="/add_post" />}></Route>
      {/* <Route path="/add_post" element={<Add_post header_title="자유게시판" fetch_url=" http://54.180.210.232:80/api/v1/posts?category=7" after_page="/board_list" />}></Route> */}
      <Route path="/add_post" element={<Add_post header_title="자유게시판" />}></Route>
      <Route path="/add_post/:id" element={<Add_post header_title="자유게시판" />}></Route>

      {/* <Route path="/post" element={<Post fetch_url="http://54.180.210.232:80/api/v1/posts?role=FREE&category=7&page=0" />}></Route> */}
      <Route path="/post" element={<Post />}></Route>
      <Route path="/post/:id" element={<Post />}></Route>
      <Route path="/post/:categoryId/:id" element={<Post />}></Route>
      <Route path="/select_category" element={<Select_category />}></Route>

      {/* ADMIN */}
      <Route path="/admin_select_category" element={<Adm_select_catrgory />}></Route>
    </Routes>
  </Router>
);
