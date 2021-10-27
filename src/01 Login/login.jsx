import React from "react";
import './login.css';
import Title from "./components/title/title";
import Label from "./components/label/label";
import Input from "./components/input/input";
import { useGoogleAuth } from "providers/authentication.provider";
import Login from '01 Login/components/login/login.component';
import Logout from '01 Login/components/logout/logout.component';


const Login = () => {
    const { isInitialized, isSignedIn } = useGoogleAuth();
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
            <button {isInitialized && (isSignedIn ? <Logout /> : <Login />)}
                <figure>
                    <img src="/src/commons/google_logo.png" alt="Google logo"></img>
            </figure>
                <button>Ingresar con google</button>
            </div>
        </body>
        
    )
};

export default Login;
