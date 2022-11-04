import React from "react";
import trollImg from "../images/troll-face.svg";

function Header(props) {
    return (
        <header className="header">
            <img src={trollImg}></img>
            <h2>Header component</h2>
            <h4>React Course Project 3</h4>
        </header >
    );
}

export default Header;