import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../Firebase/Firebase';
import { createContext, useEffect, useState } from 'react';



export const FirebaseAuthContext = createContext(null)
const FirebaseAuth = getAuth(app)
const GoogleProvider = new GoogleAuthProvider();

const FirebaseContext = ({children}) => {

    const [user,setUser]=useState();
    const [loading,setLoading]=useState(true);
    


    const createUser=(email,pass)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(FirebaseAuth,email,pass);
    }
    const GoogleLog=()=>{
        setLoading(true)
        return signInWithPopup(FirebaseAuth,GoogleProvider)
    }

    useEffect(()=>{
        const status = onAuthStateChanged(FirebaseAuth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            status()
        }
    },[])

    const SignOutUser =()=>{
        setLoading(true)
        return  signOut(FirebaseAuth)
    }
    const loginUser=(email,pass)=>{
        setLoading(true)
        return signInWithEmailAndPassword(FirebaseAuth,email,pass)
    }

    const UserUpdate = (res,name,photo)=>{
        setLoading(true)
        return updateProfile(res,{
            displayName:name,
            photoURL:photo
        })
    }



    const sharedInfo={ user,loading,UserUpdate,loginUser,SignOutUser,GoogleLog,createUser }

  return (
    <FirebaseAuthContext.Provider value={sharedInfo}>
        {children}
    </FirebaseAuthContext.Provider>
  )
}

export default FirebaseContext