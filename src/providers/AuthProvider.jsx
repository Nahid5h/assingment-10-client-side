import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebaseConfig";
import { GoogleAuthProvider,GithubAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
const gitpro = new GithubAuthProvider();


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const creatUser =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const updateUserProfile =(name, image)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:image,
        });
    }
    const singIN=(email,password)=>{
        setLoading(true)
  return signInWithEmailAndPassword(auth,email,password)
    }
    const googleLogIn =()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }
    const gitHublogin =()=>{
        setLoading(true)
        return  signInWithPopup(auth,gitpro)
    }
    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }

useEffect(()=>{
   const unSubscribe= onAuthStateChanged(auth,currentUser=>{
        console.log('user in the state changed', currentUser);
        setUser(currentUser)
        setLoading(false)
    })
    return()=>{
        unSubscribe();
    }
} ,[])

    const authInfo={
        user,
      loading,
        creatUser,
        updateUserProfile,
        googleLogIn,
        gitHublogin ,
        singIN,
        logOut,
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;