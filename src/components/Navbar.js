import React from "react";
import "../style.css"
import reactLogo from "../images/react-logo.png"

export default function Navbar() {
    return (
        <nav className="nav-bar">
            <img className="logoImage" src={reactLogo}/>
            <h1 className="Name">ReactFacts</h1>
            <h2 className="Name2">React Course - Project 1</h2>
        </nav>
    )
}