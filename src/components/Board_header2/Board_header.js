import "./board_header.scss";
function Board_header(props) {
  return (
    <>
    {/* <div className="board_header_container">
      <h4>{props.t1}</h4>
      <h4>{props.t2}</h4>
      <h4>{props.t3}</h4>
      <h4>{props.t4}</h4>
    </div> */}

    <div className="board_header_wrapper">
      <span>{props.t1}</span>
      <span>{props.t2}</span>
      <span>{props.t3}</span>
    </div>
    </>
    
  );
}

export default Board_header;
