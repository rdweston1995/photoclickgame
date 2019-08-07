import React from "react";
import "./style.css";

function Navbar(props){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul>
                <li className="brand"><a href="/">TBD</a></li>
                <li className="clickImage">CLick an image to begin!</li>
                <li className="navScore">
                    Score:
                     {props.score}
                    | Top Score 
                     {props.highScore}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;