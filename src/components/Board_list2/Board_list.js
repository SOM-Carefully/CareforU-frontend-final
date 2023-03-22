import "./board_list.scss";
function Board_list(props) {
  return (
    <div className="board_list_container">
      <span>{props.num}</span>
      <span>{props.title}</span>
      <span>{props.name}</span>
    </div>
  );
}

export default Board_list;
