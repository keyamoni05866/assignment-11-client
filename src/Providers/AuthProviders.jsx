import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
 export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProviders = ({children}) => {
 const [user, setUser] = useState(null);
 const [loading, setLoading] = useState(true);

 const createUser = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
 }

 const logIn = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
 }

 const SignUpOrLoginWithGoogle =() =>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
 }
 const logOut = () =>{
    setLoading(true);
    return signOut(auth);
 }
 const userProfileUpdate = (currentUser, photo) =>{
    setLoading(true);
    return updateProfile(currentUser, photo)
 }
 useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser);
        setLoading(false)
    });
    return () =>{
        return unsubscribe();
    }
 },[])
    const authInfo ={
    user,
    loading,
    createUser,
    logIn,
    SignUpOrLoginWithGoogle,
    userProfileUpdate,
    logOut
    }
    return (
        <AuthContext.Provider value={authInfo}> 
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;