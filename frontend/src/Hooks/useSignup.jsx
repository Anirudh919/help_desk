import { useState } from "react"

import {toast } from 'react-hot-toast'
import { useDispatch } from "react-redux"
import { setUser } from "../Store/Actions/userActions"
export function useSignup(){

    // const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(false)
    const dispatch=useDispatch()

const signup=async(payload)=>{

    setLoading(true)

    try {
        const res=await fetch("/api/auth/signup",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(payload)
        })
        let {user,error}=await res.json()
        if(!user || error) throw new Error(error)
        else
            {
                toast.success(`Welcome ${user.name}`,{
                    duration: 6000,
                  })
            // setUser(user);
            dispatch(setUser(user))
            
            localStorage.setItem("authInfo",JSON.stringify(user))
        }
        
    } catch (error) {
        toast.error(error.message,{
            duration: 3000,
          },
            {
        
              style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
              },
              
            })
        console.log(error)
        return error.message
        
    }
    finally{
        setLoading(false)
    }
  

}


return{signup,loading}



}
