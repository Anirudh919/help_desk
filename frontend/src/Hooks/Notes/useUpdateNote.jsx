import { useState } from "react"
import { updateNote } from "../../Store/Actions/notesActions"
import {toast} from 'react-hot-toast'
import { useDispatch } from "react-redux"
import {addTicket, updateTicket} from '../../Store/Actions/ticketActions'
import {useNavigate} from 'react-router-dom'
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
export function useUpdateNote(){

    
    const [loading,setLoading]=useState(false)
    
    const navigate=useNavigate()
    const dispatch=useDispatch()
    
    

const updateNote=async(id,payload)=>{
    console.log(payload)
    

    setLoading(true)

    try {
        const res=await fetch(`/api/notes/update/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(payload)
        })
        let {updatedNote,success,message}=await res.json()
        if(!updatedNote || !success) throw new Error(message);
        
        else
        {   
            toast.success("Ticket Updated Successfully")
            dispatch(updateNote(updatedNote))
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


return{updateNote,loading}



}