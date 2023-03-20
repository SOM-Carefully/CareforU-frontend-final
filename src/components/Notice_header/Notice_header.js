import "./notice_header.scss";
import React from 'react';
function Notice_header(props) {
  return (
    <div className="notice_header_container">
      <h4 className="text">{props.t1}</h4>
      <h4 className="text">{props.t2}</h4>
      <h4 className="text">{props.t3}</h4>
      <h4 className="text">{props.t4}</h4>
    </div>
  );
}

export default Notice_header;
