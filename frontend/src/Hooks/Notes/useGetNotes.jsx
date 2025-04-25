import { useState } from "react"

import {toast} from 'react-hot-toast'
import { useDispatch } from "react-redux"
import { setNotes } from "../../Store/Actions/notesActions"


// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
export function useGetMyNotes(){

    
    const [loading,setLoading]=useState(false)
    // const [tickets,setTickets]=useState([])
    
    const dispatch=useDispatch()  

const getMyNotes=async()=>{

  

    setLoading(true)

    try {
        const res=await fetch("/api/notes/my-notes")
        let {myNotes,success,error=""}=await res.json()
        if(!myNotes || !success) throw new Error(error);
        
        else
        {  
          
            // setTickets(newNote);
            dispatch(setNotes(myNotes))
            
            
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


return{getMyNotes,loading}



}