import React from "react";
import './title.css';

const Title = ({text}) => {
    return (
        <h1 className = "loginContainer__title">
            <label className = "titleContainer__label" >{text}</label>
        </h1>
    )
};

export default Title;