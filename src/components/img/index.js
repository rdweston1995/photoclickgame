import React from "react";
import "./style.css";

function ImgCard(props){
    return (
        <div className="click-item" role="img" aria-label="click item" style={{backgroundImage: "url(https://via.placeholder.com/150)"}} onClick={props.imgOnClick} value="notClicked"></div>
        // <img src={props.image}/>
    )
}

export default ImgCard;