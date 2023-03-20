import React from 'react';
import './Join.css';
import face from './../../img/faceLogin.png'
import finger from './../../img/fingerprint.png';

const Join = () => {
  return (
    <div className="Join">
        <div className="JoinTitleWrap">
            <h2>Welcome Back!</h2>
            <p>Please login</p>
        </div>
        <div className="JoinBodyWrap">
            <img src={face} />
            <p>OR</p>
            <img src={finger} />
            <p>LOGIN WITH USERFACE & PASSWORD</p>
        </div>
    </div>
  );
}

export default Join;
