import { useState } from "react";
import "./../../styles/admin/test.scss";
import Modal from "./Modal";
import React from 'react';
function Test() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="App">
      <div>click button to open modal</div>

      <button className="openModalBtn" onClick={() => { setOpenModal(true); }}>open</button>

      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  );
}

export default Test;
