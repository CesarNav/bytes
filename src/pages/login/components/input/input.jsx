import React from "react";
import "./input.css"

const Input = ({attribute}) => {
    return (
        <div className = 'loginContainer__input'>
            <input
            id = {attribute.id}
            name = {attribute.name}
            placeholder = {attribute.placeholder}
            type = {attribute.type}
            className = {attribute.className}
            >
            </input>
        </div>
    )
}

export default Input; 