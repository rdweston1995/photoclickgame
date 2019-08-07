import React from "react";
import "./style.css";

function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul>
                <li class="brand"><a href="/">TBD</a></li>
                <li className="clickImage">CLick an image to begin!</li>
                <li className="navScore">
                    Score:
                    0
                    | Top Score;
                    0
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;