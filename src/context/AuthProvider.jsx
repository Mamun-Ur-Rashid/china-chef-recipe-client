import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);
const googleAuthProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);

    // create user email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // sign in user with email and password
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // sign in with google
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleAuthProvider);
    }
    // sign in with github
    const signInWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }
    // sign Out 
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    // update profile
    const profileUpdate = () =>{
        
    }

    // on change auth observed
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
            console.log("logged in user inside auth state observer", loggedUser);
            setUser(loggedUser);
            setLoading(false);
        });
        return () =>{
            unsubscribe();
        }
        
    },[])

    const authInfo = {user, createUser, signInUser, signInWithGoogle, signInWithGithub, logOut ,loading,profileUpdate};
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;