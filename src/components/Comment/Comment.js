
import React from 'react'; import "./comment.scss"
function Comment(props) {

    return (
        <div>
            <div className="cmt_wrapper">
                <div className="cmt_top">
                    <div className="user_info">
                        <img className="user_img" src="/userImg.png"></img>
                        <div className="user_name">익명</div>
                    </div>
                    <div className="cmt_icon_wrapper">
                        <div className="re_icon"><img className="icon" src="/re_cmt.png"></img></div>
                        <div className="menu_icon"><img className="icon" src="/menu.png"></img></div>
                    </div>

                </div>
                <div className="cmt_middle">
                    {props.content}
                </div>
                <div className="cmt_bottom">
                    <div className="createdAt">{props.createdAt}</div>
                </div>
            </div>
        </div>
    );
}

export default Comment;
