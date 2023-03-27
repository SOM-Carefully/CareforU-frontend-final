import React from 'react';
import './Title.css';
import back from './../../img/back.png';
import { useNavigate, userNavigate, } from 'react-router-dom';
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';

function Title(props){

    const location = useLocation();
    console.log(location.pathname);
    const navigate = useNavigate();

    const onMoveBack = () => {
        if(location.pathname == '/generalMypage' || location.pathname == '/adminMypage'){
            navigate(-2);
        }else{
            navigate(-1);
        }
    }

    return (
        <div className="Title">
            <img src={back} onClick={onMoveBack}/>
            <h2>{props.title}</h2>
        </div>
    );
}

export default Title;