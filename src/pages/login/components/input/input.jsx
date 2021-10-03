import React from "react";
import "./input.css"

const Input = ({type}) => {
    return (
        <div className = 'loginContainer__input'>
            <input type= {type} />
        </div>
    )
}

export default Input; 