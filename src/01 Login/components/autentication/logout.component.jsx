import React from 'react';
import { useGoogleAuth } from "../providers/autentication.provider";
import './login.css';
//esta seccion ocurre cuando sale el cliente de la app
const Logout = () =>{
    const { signOut, googleUser: {profileObj}} = useGoogleAuth();
    const HandleClick = async () =>{
        //persistencia provisional
        await signOut();
        //window.sesionStorage.removeItem('tokenId') 
    }
    return (
        <section className="loginContainer_googleLogout">
            {profileObj.name}
            <button onClick={HandleClick}> salir </button>
        </section>
    );
};

export default Logout;