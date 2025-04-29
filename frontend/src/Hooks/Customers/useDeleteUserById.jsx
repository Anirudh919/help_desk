import { useState } from "react"

import {toast} from 'react-hot-toast'
import { useDispatch } from "react-redux"
import { deleteTicket, setTickets } from "../../Store/Actions/ticketActions"
import { useNavigate } from "react-router-dom"


// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
export function useDeleteUserById(){

    
    const [loading,setLoading]=useState(false)
    // const [tickets,setTickets]=useState([])
    
    const dispatch=useDispatch() 
    const navigate=useNavigate() 

const deleteUserById=async(id)=>{

  

    setLoading(true)

    try {
        const res=await fetch(`http://localhost:5000/api/auth/users/delete/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        })
        
        let {deletedUser,success,message,error}=await res.json()
        if(!deletedUser || !success) throw new Error(error);
        
        else
        {  
            // setTickets(myTickets);
            // dispatch(deleteTicket(payload))
            toast.success(message)
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


return{deleteUserById,loading}



}