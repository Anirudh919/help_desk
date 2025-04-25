import { useState } from "react"

import {toast} from 'react-hot-toast'
import { useDispatch } from "react-redux"
import { deleteTicket, setTickets } from "../../Store/Actions/ticketActions"
import { deleteNote } from "../../Store/Actions/notesActions"
import { useNavigate } from "react-router-dom"


// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
export function useDeleteNoteById(){

    
    const [loading,setLoading]=useState(false)
    // const [tickets,setTickets]=useState([])
    
    const dispatch=useDispatch()  
    const navigate=useNavigate()

const deleteNoteById=async(id)=>{

  

    setLoading(true)

    try {
        const res=await fetch(`/api/notes/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        })
        let {deletedNote,success,error}=await res.json()
        if(!deletedNote || !success) throw new Error(error);
        
        else
        {  
            // setTickets(myTickets);
            dispatch(deleteNote(deletedNote))
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


return{deleteNoteById,loading}



}