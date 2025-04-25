
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { createTicket } from '../redux/actions';
import { motion, AnimatePresence } from "framer-motion";
import { useGetNoteById } from '../Hooks/Notes/useGetNoteById';
import { useParams } from 'react-router-dom';
import { useUpdateNote } from '../Hooks/Notes/useUpdateNote';
import { useDeleteNoteById } from '../Hooks/Notes/useDeleteNoteById';



export default function EditNotepage(){
  const dispatch = useDispatch();
  const {updateNote}=useUpdateNote()
  const {deleteNoteById}=useDeleteNoteById()
  const {id} =useParams()
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    priority:"",
    status:""
  });

  const [isEditOpen,setIsEditOpen]=useState(false)


const {getNoteById}=useGetNoteById()


  const categories = ['Bug', 'Feature Request', 'Support', 'Other'];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


    const [files, setFiles] = useState([]);
  
    const handleFileChange = (e) => {
      setFiles(Array.from(e.target.files));
    };
  

    useEffect(()=>{
      getNoteById(id)
    },[])

const note=useSelector(state=>state.NotesReducer)
console.log(note)



  const handleSubmit = (e) => {
    e.preventDefault();
    updateNote(id,formData)
    setFormData({ title: '', description: '', category: '',priority:"",status:"" });
  };

  return (
<div className="flex items-start justify-center ">

    <motion.div 
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: -10 }}
        exit={{ opacity: 0, x: 0 }}
        transition={{ duration: .3, delay: 0.1, ease:"easeInOut" }}
    
     className="w-1/2 mx-auto p-4 shadow rounded bg-gray-900">
      <h2 className="text-xl font-bold mb-4">Notes Details</h2>

      <div className="mb-3">
        <label className="block mb-1">Title</label>
        <p className="cursor-not-allowed w-full border-b border-gray-600 p-2">
         {note?.title}</p>
      </div>
  

      <div className="mb-3">
        <label className="block mb-1">Description</label>
        <p className="cursor-not-allowed w-full border-b border-gray-600 p-2">
        {note?.description}</p>
      </div>


      <div className="mb-3">
        <label className="block mb-1">Status</label>
        <p className="cursor-not-allowed w-full border-b border-gray-600 p-2">
         {note?.status}</p>
      </div>

 

      

  <div className="mb-4">
        <label className="block mb-1 font-medium">Files Attached</label>
      
        {note?.attachments?.length > 0 ? (
          <ul className="mt-2 list-disc list-inside text-sm text-gray-400">
            {note?.attachments.map((file, i) => (
              <li key={i}>{file.name}</li>
            ))
            
         
            
            
            
            }
          </ul>
        )
        :
        (<div className='text-gray-400 text-xl'>No files Atttaced</div>)
    
    
    
    
    
    }
      </div>



      
      





      

      <div className="w-full   flex items-center justify-center gap-8 ">

      <div className="  w-full  "
            onClick={()=>setIsEditOpen(!isEditOpen)}>

{
  isEditOpen? (
    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded cursor-pointer">
        Cancel 
      </button>
  ):(<button type="submit" className="w-full bg-blue-500 text-white py-2 rounded cursor-pointer">
    Edit 
  </button>)
}



  





  </div>


  <button 
      onClick={()=>deleteNoteById(id)}
      
      type="submit" className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 cursor-pointer">
        Delete
      </button>




      </div>



  
      
 








  {/* right side edit note form */}
    </motion.div>









    <AnimatePresence>

  

{
  isEditOpen && (
    <motion.div 
    initial={{ opacity: 0, x: 0 }}
    animate={{ opacity: 1, x: -10 }}
    exit={{ opacity: 0, x: 0 }}
    transition={{ duration: .3, delay: 0.1, ease:"easeInOut" }}

 className="w-1/2 mx-auto p-4 shadow rounded bg-gray-900">
  <h2 className="text-xl font-bold mb-4">Edit Notes </h2>

  <div className="mb-3">
    <label className="block mb-1">Title</label>
    <input
      type="text"
      name="title"
      value={formData.title}
      onChange={handleChange}
      className="w-full border p-2 rounded"
      required
    />
  </div>
  {/* <div className="mb-3">
    <label className="block mb-1">Created By</label>
    <input
      type="text"
      name="title"
      value="Marcos"
      onChange={handleChange}
      className="w-full border p-2 rounded"
      required
    />
  </div> */}

  <div className="mb-3">
    <label className="block mb-1">Description</label>
    <textarea
      name="description"
      value={formData.description}
      onChange={handleChange}
      className="w-full border p-2 rounded"
      required
    />
  </div>


  <div className="mb-3">
        <label className="block mb-1">Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full border p-2 rounded bg-gray-900"
        >
       <option value="pending">Pending</option>
       <option value="open">Open</option>
       <option value="closed">Closed</option>
        </select>
      </div>




  <div className="mb-4">
        <label className="block mb-1 font-medium">Attach Files</label>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="text-gray-300 border border-gray-700 rounded px-4"
        />
        {files.length > 0 && (
          <ul className="mt-2 list-disc list-inside text-sm text-gray-400">
            {files.map((file, i) => (
              <li key={i}>{file.name}</li>
            ))}
          </ul>
        )
        
    
    
    
    }
      </div>





  











<button 
onClick={(e)=>handleSubmit(e)}
type="submit" className="w-full bg-blue-500 text-white py-2 rounded cursor-pointer">
    Save Changes 
  </button>


  

</motion.div>

    
  )
}
</AnimatePresence>













    </div>
  );
};


