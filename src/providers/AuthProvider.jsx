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

    const creatUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const updateUserProfile =(name, image)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:image,
        });
    }
    const singIN=(email,password)=>{
  return signInWithEmailAndPassword(auth,email,password)
    }
    const googleLogIn =()=>{
        return signInWithPopup(auth,provider)
    }
    const gitHublogin =()=>{
        return  signInWithPopup(auth,gitpro)
    }
    const logOut =()=>{
        return signOut(auth)
    }

useEffect(()=>{
   const unSubscribe= onAuthStateChanged(auth,currentUser=>{
        console.log('user in the state changed', currentUser);
        setUser(currentUser)
    })
    return()=>{
        unSubscribe();
    }
} ,[])

    const authInfo={
        user,
      
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