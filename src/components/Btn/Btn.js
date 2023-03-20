import "./btn.scss";
import React from 'react';
import { Link } from "react-router-dom";
import icon from './add_post_btn.png';
function Btn(props) {
  return (
    <div className="wrapper">
      <div className="post_btn_box">
        <Link to={props.url}>
          <img className="post_btn" src={icon}></img>

        </Link>
      </div>
    </div>

  );
}

export default Btn;
