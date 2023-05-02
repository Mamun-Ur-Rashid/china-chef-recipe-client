import React, { createContext } from 'react';
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null);
const auth =(app);
const AuthProvider = ({children}) => {

    const authInfo = {}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;