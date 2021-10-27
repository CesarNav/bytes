import React from 'react';
import { useGoogleAuth } from 'providers/authentication.provider';

const Logout = () => {
    const { signOut, googleUser } = useGoogleAuth();
    console.log(googleUser);
    const handleClick = () =>{
        signOut();
    };

    return (
        <>
        {googleUser.profileObj.name}
        <button onClick={handleClick}>Salir</button>
    </>
    );
};

export default Logout;
