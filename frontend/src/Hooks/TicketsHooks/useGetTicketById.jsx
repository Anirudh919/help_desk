import { useState } from "react"

import {toast} from 'react-hot-toast'
import { useDispatch } from "react-redux"
import { setTickets } from "../../Store/Actions/ticketActions"


// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
export function useGetTicketById(){

    
    const [loading,setLoading]=useState(false)
    const [editTicket,setEditTicket]=useState([])
    
    const dispatch=useDispatch()  

const getTicketById=async(id)=>{

  

    setLoading(true)

    try {
        const res=await fetch(`/api/tickets/${id}`)
        let {ticket,success,error=""}=await res.json()
        if(!ticket || !success) throw new Error(error);
        
        else
        {  
            // setTickets(myTickets);
            setEditTicket(ticket)
            dispatch(setTickets(ticket))
            
            
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


return{getTicketById,editTicket,loading}



}