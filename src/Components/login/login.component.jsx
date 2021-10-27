import React from 'react';
import { useGoogleAuth } from 'providers/authentication.provider';

const Login = () => {
    const { signIn } = useGoogleAuth();
    const handleClick = () =>{
        signIn();
    };

    return (
        <button onClick={handleClick}>Ingresar con google</button>
    );
};

export default Login;
