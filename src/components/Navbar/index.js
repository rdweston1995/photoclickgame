import React from "react";
import "./style.css";

function Navbar(props){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul>
                <li className="brand"><a href="/">Obi-Wan Clicky Game</a></li>
                <li className="clickImage">Click an image to begin!</li>
                <li className="navScore">
                    Score:
                    {props.score}
                    <br />Top Score 
                     {props.highScore}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;