import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header(){
return(
    <div className="header">
     <img src="./header-arrow1.jpg" alt=""></img>
    <div className="header-title">
    <h1>STARTUPZA  </h1>
    <h1> The Home for Entrepreneur</h1>
    <h1> Let's Started  </h1>
    <div className="header-btn">
    <button className="btn-login"> <span> <Link to="/Login">Log In</Link></span></button>
    <button className="btn"> <span> <Link to="/Signup">Sign Up </Link></span></button>
    </div>
    </div>
    </div>
)
}

