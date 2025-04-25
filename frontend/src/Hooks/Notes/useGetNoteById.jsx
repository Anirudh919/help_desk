import { useState } from "react"

import {toast} from 'react-hot-toast'
import { useDispatch } from "react-redux"
import { setTickets } from "../../Store/Actions/ticketActions"
import { setNotes } from "../../Store/Actions/notesActions"



export function useGetNoteById(){

    
    const [loading,setLoading]=useState(false)
    
    
    const dispatch=useDispatch()  

const getNoteById=async(id)=>{

  

    setLoading(true)

    try {
        const res=await fetch(`/api/notes/${id}`)
        let {note,success,error=""}=await res.json()
        if(!note || !success) throw new Error(error);
        
        else
        {  
            // setTickets(myTickets);
            dispatch(setNotes(note))
            
            
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


return{getNoteById,loading}



}