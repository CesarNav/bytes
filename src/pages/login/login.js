import React from "react";
import './login.css';
import Title from "./components/title/title";
import Label from "./components/label/label";
import Input from "./components/input/input";

const Login = () => {
    return (
        <body>
            <div className = 'loginContainer'>
            <Title text='Ventas'/>
            <Label text='Usuario'/>
            <Input 
            attribute= {{
                id: 'usuario',
                type: 'text',
                placeholder: 'Ingrese su usuario',
            }}
            />
            <Label text='Contraseña'/>
            <Input 
            attribute= {{
                id: 'contrasena',
                type: 'password',
                placeholder: 'Ingrese su contraseña',
            }}
            />
            <button className= 'loginContainer_buttonIngresar'>
                Ingresar
            </button>
            <h6>Olvide mi contraseña</h6>
            <button className="loginContainer_googleLogin">
                <figure>
                    <img src="/src/commons/google_logo.png" alt="Google logo"></img>
                </figure>
            </button>
            </div>
        </body>
        
    )
};

export default Login;