import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from './firebase';
import axios from "axios";



export const Contexs = createContext(null)

const AuthPro = ({children}) => {
    // for privet loading
    const [loading,setloading]=useState(true)
    const [user,setuser]=useState(null)
    // for data loading
    const [lodings,setloadings]=useState(false)


    // google
    const provider = new GoogleAuthProvider();

    const google =()=>{
        setloading(true)
        return signInWithPopup(auth,provider)
    }
    // register 
    const register = (email,password)=>{
        setloading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // logout 
    const logout = ()=>{
        setloading(true)
        return signOut(auth)
    }


    // login 
    const logins = (email,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // author profile 
    const profile =(name,photo)=>{
        setloading(true)
        return updateProfile(auth.currentUser, {
            displayName:name,
             photoURL:photo
          })

    }
    // onauthState 
    useEffect(()=>{
        const subricribe = onAuthStateChanged(auth, (currect) => {
            const logeruser = {email:currect?.email}
            setuser(currect)
            setloading(false)
            console.log('user ',logeruser)
            if(currect){
               
                axios.post('https://assignment-pink-eight.vercel.app/jwt1',logeruser,{withCredentials:true})
                .then(res => {
                  console.log(res.data)})
            }else{
                axios.post('https://assignment-pink-eight.vercel.app/logout',logeruser,{withCredentials:true})
        
                .then(res => {
                  console.log(res.data)})
              
               }
        })
        return ()=>{
            subricribe()
        }
    },[])
    const info = {google,register,user,logout,logins,profile,loading,setloading,lodings,setloadings}

  return (
    <Contexs.Provider value={info}>
      {children}
    </Contexs.Provider>
  )
}

AuthPro.propTypes = {
   children: PropTypes.node,
}
export default AuthPro
