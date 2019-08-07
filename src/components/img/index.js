import React from "react";
import "./stylecss";

function ImgCard(props){
    return (
    <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
    </div>
    )
}

export default ImgCard;