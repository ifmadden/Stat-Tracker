import React from 'react';
import { useGoogleLogin } from 'react-google-login';

import {refreshTokenSetup} from '../auth_tok/refreshTokenSetup';

const clientId = process.env.CLIENT_ID;

const GoogleLoginHook = () => {
    const onSuccess = (res) => {
        console.log('Login successful: currentuser: ', res.profileObj);
        refreshTokenSetup(res);
    };

    const onFailure = (res) => { 
        console.log('Login failed: res: ', res);
    }

    const {signIn} = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn: true,
        accessType: 'offline',
    });
    
    return (
        <button onClick={signIn} className="button">
            
        </button>
    );
}

