import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";
import { app } from '../../../Firebase/firebase.init';





export const AuthContext = createContext()
const auth = getAuth(app);
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

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
        return signInWithPopup(auth, googleProvider);
    }

    //password reset
    //reset password
    const resetPassword = () => {
        setLoading(true)
        return sendPasswordResetEmail(auth, auth.currentUser.email)
    }




    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (user == null) {
                setUser(currentUser)
                // setLoading(false)
            }
        })

        return () => {
            unsubscribe()
        }
    }, [user])

    const authInfo = {
        user,
        createUser,
        logIn,
        logOut,
        googleLogIn,
        resetPassword,
        setUser
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;