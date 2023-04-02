import "./header.scss";
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
function Header(props) {
    const navigate = useNavigate();

    return (
        <>
        <div className="header_wrapper">
            <div className="icon" onClick={() => navigate(-1)}>
            <FontAwesomeIcon className="icon" icon={faChevronLeft} />
            </div>
            <div className="header_text">{props.title}</div>
        </div>
        </>

    );
}

export default Header;
