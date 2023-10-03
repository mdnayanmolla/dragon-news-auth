import React, { Children, createContext, useEffect, useState } from 'react';
export  const AuthContext = createContext(null)
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config'
const auth = getAuth(app);


const AuthProviders = ({children}) => {
    const [ user , setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUser = (email,password)=>{
        setLoading(true)
      return  createUserWithEmailAndPassword(auth,email,password)
    }
    const singIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
const logOut = ()=>{
    setLoading(true)
    return signOut(auth)
}
    useEffect(()=>{
     const unSubscribe =  onAuthStateChanged(auth,currentUser =>{
            console.log('user in the auth state,',currentUser)
            setUser(currentUser)
            setLoading(false)
        });
        return () =>{
            unSubscribe()
        }
    },[])

    const authInfo = {user,createUser,singIn,logOut,loading}
    return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;