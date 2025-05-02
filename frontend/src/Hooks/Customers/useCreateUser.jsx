import { useState } from "react"

import {toast} from 'react-hot-toast'
import {  useDispatch } from 'react-redux';
import { addUser } from "../../Store/Actions/userActions";
import { useNavigate } from "react-router-dom";
// import {useNavigate} from 'react-router-dom'

// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
export function useCreateUsert(){

    
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [loading,setLoading]=useState(false)
  
    
    

const createUser=async(payload)=>{
    

    setLoading(true)

    try {
        const res=await fetch("/api/auth/signup",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(payload)

        })
        // let {user,error,message}=await res.json()
    let resp=await res.json()
    if(resp?.status){
        toast.success(resp.message)
        
            dispatch(addUser(resp?.user))
            navigate("/")
            
            
            localStorage.setItem("authInfo",JSON.stringify(resp?.user))
            localStorage.setItem('token',resp.token)
    }else{
        toast.error(resp.message)
    }
       

    
        
    } catch (error) {
        console.log('akbfdasbdjhasldbasj')
        toast.error(error.message)
      
        return error.message
        
    }
    // finally{
    //     setLoading(false)
    // }
  

}


return{createUser,loading}



}