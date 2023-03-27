
import "./board_header.scss";
function Board_header2(props) {
    return (
        <div className="board_header2_container">
            <h4>{props.t1}</h4>
            <h4>{props.t2}</h4>
            <h4>{props.t3}</h4>
            <h4>{props.t4}</h4>
        </div>
    );
}

export default Board_header2;
