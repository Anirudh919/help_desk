import { useState } from "react"

import {toast} from 'react-hot-toast'
import { useDispatch } from "react-redux"
import {addTicket} from '../../Store/Actions/ticketActions'
import { useNavigate } from "react-router-dom"

// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
export function useCreateTicket(){

    
    const [loading,setLoading]=useState(false)
    // const [notes,setNotes]=useState(null)
    const dispatch=useDispatch()
    
    const navigate=useNavigate()

const createTicket=async(payload)=>{
    

    setLoading(true)

    try {
        const res=await fetch("/api/tickets/create",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(payload)
        })
        let {newTicket,success,message}=await res.json()
        if(!newTicket || !success) throw new Error(message);
        
        else
        {   
            toast.success("Ticket created Successfully")
            dispatch(addTicket(newTicket))
            navigate("/")
            
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


return{createTicket,loading}



}