import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const googleAuthProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);

    // create user email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // sign in user with email and password
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // sign in with google
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleAuthProvider);
    }
    // sign in with github
    const signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider);
    }
    // sign Out 
    const logOut = () =>{
        return signOut(auth);
    }

    // on change auth observed
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
            console.log("logged in user inside auth state observer", loggedUser);
            setUser(loggedUser);
        });
        return () =>{
            unsubscribe();
        }
        
    },[])

    const authInfo = {user, createUser, signInUser, signInWithGoogle, signInWithGithub, logOut};
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;