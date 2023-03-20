//import Add_post from "../..///pages/Add_post";
import "./btn_2.scss";
import React from 'react';
import { Link } from "react-router-dom";

function Btn_2(props) {
  return (
    <div className="btn_2_container">
      <Link to="/board_list">
        <button className="btn">{props.btn1}</button>
      </Link>
      <button onClick={props.onClick} className="btn">
        {props.btn2}
      </button>
    </div>
  );
}

export default Btn_2;
