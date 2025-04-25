import { useState } from "react"

import {toast} from 'react-hot-toast'
import { useDispatch } from "react-redux"
import { deleteTicket, setTickets } from "../../Store/Actions/ticketActions"
import { useNavigate } from "react-router-dom"


// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
export function useDeleteTicketById(){

    
    const [loading,setLoading]=useState(false)
    // const [tickets,setTickets]=useState([])
    
    const dispatch=useDispatch() 
    const navigate=useNavigate() 

const deleteTicketById=async(id)=>{

  

    setLoading(true)

    try {
        const res=await fetch(`/api/tickets/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        })
        let {deletedTicket,success,error}=await res.json()
        if(!deletedTicket || !success) throw new Error(error);
        
        else
        {  
            // setTickets(myTickets);
            dispatch(deleteTicket(payload))
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


return{deleteTicketById,loading}



}