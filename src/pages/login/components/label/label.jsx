import React from "react";
import "./label.css"

const Label = ({text}) => {
    return (
        <div className = 'loginContainer__label'>
            {text}
        </div>
    )
}

export default Label; 