import { useState, React } from "react";
import "./../../styles/admin/modal_setName.scss"
function Modal_setName({ setModal }) {
    const [categoryName, setCategoryName] = useState("")
    const token = localStorage.getItem('accessToken');
    const onChange = (event) => {
        setCategoryName(event.target.value);
        console.log(categoryName);
    };

    function post() {
        console.log("카테고리 이름:", categoryName);

        fetch("http://54.180.210.232:8080/api/v1/category", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({

                categoryName: categoryName
            }),
        })
            .then((response) => response.json())
    }

    const onClick = () => {
        console.log("확인버튼 눌렀다");
        post();
        setModal(false);
        alert(categoryName + " 게시판이 생성되었습니다!");
        window.location.reload();

    };

    return (
        <div className="modal_setName_bg">
            <div className="modal_container">
                <div className="modal_top">
                    <p>게시판 이름을 설정해주세요.</p>
                </div>
                <div className="modal_middle">
                    <input className="input" value={categoryName} onChange={onChange}></input>
                </div>
                <div className="modal_bottom">
                    <button className="cancleBtn" onClick={() => setModal(false)}>취소</button>
                    <button className="confirmBtn" onClick={onClick}>확인</button>
                </div>
            </div>
        </div>
    );
}

export default Modal_setName;
