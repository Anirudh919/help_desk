import { useState } from "react"

import {toast} from 'react-hot-toast'
import { useDispatch } from "react-redux"
import { setTickets } from "../../Store/Actions/ticketActions"

import {setAllUsers} from '../../Store/Actions/userActions'
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
export function useGetUserbyId(){

    
    const [loading,setLoading]=useState(false)
    const [user,setUser]=useState()
    

    
    
    const dispatch=useDispatch()  

const getUserById=async(id)=>{

  

    setLoading(true)

    try {
        const res=await fetch(`/api/auth/users/${id}`)
        let {user,success,error=""}=await res.json()
        if(!user || !success) throw new Error(error);
        
        else
        {  
            // setTickets(myTickets);
            setUser(user)
            
            
            // localStorage.setItem("authInfo",JSON.stringify(user))
            
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
              
            },
          )
      
        return error.message
        
    }
    finally{
        setLoading(false)
    }
  

}


return{getUserById,user,loading}



}