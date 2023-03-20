import "./notice_list.scss";
import React from 'react';

function Notice_list(props) {
  return (
    <div className="notice_list_container">
      <span>{props.num}</span>
      <span>{props.title}</span>
      <span>{props.name}</span>
      <span>{props.date}</span>
    </div>
  );
}

export default Notice_list;
