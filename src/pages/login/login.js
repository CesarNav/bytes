import React from "react";
import './login.css';
import Title from "./components/title/title";
import Label from "./components/label/label";
import Input from "./components/input/input";

const Login = () => {
    return (
        <div className = 'loginContainer'>
            <Title text='Ventas'/>
            <Label text='Usuario'/>
            <Input />
            <Label text='Contraseña'/>
            <Input type='password' />
        </div>
    )
};

export default Login;