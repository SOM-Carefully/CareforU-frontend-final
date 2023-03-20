import "./header.scss";
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
function Header(props) {
    const navigate = useNavigate();

    return (
        <div className="header">
            <div className="icon_box" onClick={() => navigate(-1)}>
                <div className="icon_wrapper">
                    <FontAwesomeIcon className="icon" icon={faChevronLeft} />
                </div>
            </div>
            <div className="header_title_box">
                <div className="header_title">{props.title}</div>
            </div>
        </div>
    );
}

export default Header;
