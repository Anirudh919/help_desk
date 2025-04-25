import { useState } from "react"

import {toast} from 'react-hot-toast'
import { useDispatch } from "react-redux"
import { setTickets } from "../../Store/Actions/ticketActions"


// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
export function useGetMyTickets(){

    
    const [loading,setLoading]=useState(false)
    // const [tickets,setTickets]=useState([])
    
    const dispatch=useDispatch()  

const getMyTickets=async()=>{

  

    setLoading(true)

    try {
        const res=await fetch("/api/tickets/my-tickets")
        let {myTickets,success,error=""}=await res.json()
        if(!myTickets || !success) throw new Error(error);
        
        else
        {  
            // setTickets(myTickets);
            dispatch(setTickets(myTickets))
            
            localStorage.setItem("my-tickets",JSON.stringify(myTickets))
            
            
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


return{getMyTickets,loading}



}