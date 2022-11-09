import React, { createContext, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";




export const AuthContext = createContext()
const auth = getAuth();
const AuthProvider = () => {

    //create user using email
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //log in with email
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //log out
    const logOut = () => {
        return signOut(auth);
    }

    //google log in
    const googleProvider = new GoogleAuthProvider();

    const googleLogIn = () => {
        return signInWithPopup(auth, provider);
    }






    const authInfo = {}

    return (
        <div>
            <AuthProvider value={authInfo}></AuthProvider>
        </div>
    );
};

export default AuthProvider;