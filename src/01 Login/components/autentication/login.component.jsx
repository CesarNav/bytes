import React from 'react';
import { useGoogleAuth } from "../providers/autentication.provider";
import './login.css';
//import useUsers from '../users/hooks/users.hooks';
// esta seccion activa la autenticacion con google
const Logi = () =>{
    const { signIn } = useGoogleAuth();
    //const {signInUser} = useUsers();
    const HandleClick = async () =>{
        //persistencia provisional
        const { tokenId } = await signIn();
        //window.sesionStorage.setItem('tokenId', tokenId)
        //signInUser(tokenId);
    };

    return (
        <button onClick={HandleClick} className="loginContainer_googleLogin">
                <figure>
                    <img src="/src/commons/google_logo.png" alt="Google logo"></img>
                </figure>
            </button>
    );
};

export default Logi;