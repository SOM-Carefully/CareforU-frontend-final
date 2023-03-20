import "./plus_btn.scss";
import { Navigate, useNavigate } from 'react-router-dom';
import plusBtn from '../../img/plusBt.png';

function PlusBtn(props) {
    const navigate = useNavigate();
    const onMoveAddNotice = (e) => {
        navigate('/add_notice');
    }
  return (
    <div className="post_btn_box">
        <img className="post_plus_btn" src={plusBtn} onClick={onMoveAddNotice}></img>
    </div>
  );
}

export default PlusBtn;
