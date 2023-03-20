
import React from "react";
import "./../../styles/admin/modal.scss"

function Modal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button className="x_btn" onClick={() => closeModal(false)}>X</button>
        </div>
        <div className="title">
          <h1>Are you sure You want to continue?</h1>
        </div>
        <div className="body">
          <p>Next page is awesome! you should move forward you will enjoy it. </p>
        </div>
        <div className="footer">
          <button className="cancleBtn" onClick={() => closeModal(false)}>Cancle</button>
          <button className="continueBtn">Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
