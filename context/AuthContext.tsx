"use client"

import { auth } from "@/firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export default function AuthProvider(props){
    const { children } = props;
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoadingUser, setIsLoadingUser] = useState(true);

    function signUp(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout(){
        setCurrentUser(null)
        return signOut(auth)
    }

    //TODO reset password and email

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async(user) => {
            console.log("Authenticating User")
            setIsLoadingUser(true)
            try {
                setCurrentUser(user)
                if(!user){
                    throw Error("No User Found")
                }
            }
            catch(error){
                console.log(error.message)
            }
            finally {
                setIsLoadingUser(false)
            }
        })
        return unsubscribe
    }, [])


    const value = {
        currentUser,
        isLoadingUser,
        signUp, 
        login,
        logout
    }

    return (
        <>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </>
    )
}