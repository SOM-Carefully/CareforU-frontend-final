import React from 'react';
import './Title.css';
import back from './../../img/back.png';
import { useNavigate, userNavigate } from 'react-router-dom';

function Title(props){

    const navigate = useNavigate();

    const onMoveBack = () => {
        navigate(-1);
    }

    return (
        <div className="Title">
            <img src={back} onClick={onMoveBack}/>
            <h2>{props.title}</h2>
        </div>
    );
}

export default Title;