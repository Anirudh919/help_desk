import { useState } from "react"

import {toast} from 'react-hot-toast'
import { useDispatch } from "react-redux"
import {addNotes} from '../../Store/Actions/notesActions'
import { useNavigate } from "react-router-dom"

// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
export function useCreateNotes(){

    
    const [loading,setLoading]=useState(false)
    // const [notes,setNotes]=useState(null)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    
    

const createNotes=async(payload)=>{
    console.log(payload)

    setLoading(true)

    try {
        const res=await fetch("/api/notes/create-notes",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(payload)
        })
        let {newNote,success,message}=await res.json()
        if(!newNote || !success) throw new Error(message);
        
        else
        {   
            toast.success("Note created Successfully")
            dispatch(addNotes(newNote))
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


return{createNotes,loading}



}