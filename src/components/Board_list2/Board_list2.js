import "./board_list.scss";
function Board_list2(props) {
    return (
        <div className="board_list2_container">
            <span>{props.num}</span>
            <span>{props.username}</span>
            <span>{props.posttime}</span>
            <span>{props.status}</span>
        </div>
    );
}

export default Board_list2;
