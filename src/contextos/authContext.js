import { createContext, useContext, useEffect, useState } from "react";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithRedirect,
    sendPasswordResetEmail
} from 'firebase/auth';

import { auth } from "../firebase/firebaseConfig";

export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    if(!context) throw new Error("No hay un provider")
    return context
}

export function AuthProvider ({children}) {
   
    const [user, setUser] = useState (null);
    const [loading, setLoading] = useState(true)

    const signup = (email, password) => 
        createUserWithEmailAndPassword(auth, email, password);
    
    const login = async (email, password) => 
        await signInWithEmailAndPassword(auth, email, password);
    
    const logout = () => signOut(auth);

    const loginWithGoogle = () => {
        const googleProvider  = new GoogleAuthProvider()
        return signInWithRedirect (auth, googleProvider)
    }

    const resetPasword = (email) => {
        sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })

        return () => unsuscribe();
    }, [])
    
    return(
        <authContext.Provider value={{ signup, login, user, logout, loading, loginWithGoogle, resetPasword }}> {children} </authContext.Provider>
    );    
}