import React from "react";
import './login.css';
import Title from "./components/title/title";
import Label from "./components/label/label";
import Input from "./components/input/input";
import Logi from './components/autentication/login.component';
import Logi from './components/autentication/logout.component';

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
            <section>
            {isInitialized && (isSignedIn ? <></> : <Logi />)}
            </section>
            </div>
        </body>
        
    )
};

export default Login;