
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { createTicket } from '../redux/actions';
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from 'react-router-dom';
import { useGetTicketById } from '../Hooks/TicketsHooks/useGetTicketById';

import { useDeleteTicketById } from '../Hooks/TicketsHooks/useDeleteTicketById';
import { useUpdateTicket } from '../Hooks/TicketsHooks/useUpdateTicket';

export default function EditTicketpage(){
  const dispatch = useDispatch();

  
  const {id}=useParams()
  

  const [isEditOpen,setIsEditOpen]=useState(true)

  const {getTicketById,editTicket}=useGetTicketById()
const {deleteTicketById} = useDeleteTicketById()

  const {updateMyTicket}=useUpdateTicket()

  const ticket=useSelector(state=>state.TicketReducer)
  console.log(ticket)


  const [formData, setFormData] = useState({
    title:editTicket?.subject,
    description: editTicket?.description ,
    category: editTicket?.category ,
    createdBy:editTicket?.createdBy?.name ,
    priority:editTicket?.priority ,
    status:editTicket?.status ,
    assignedTo:editTicket?.assignedTo ,
  });



  const categories = ['Bug', 'Feature Request', 'Support', 'Other'];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(()=>{
   getTicketById(id)
    
  },[id])

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMyTicket(id,formData);
    setFormData({ title: '', description: '', category: '',priority:"",status:"" });
  };

  // setTimeout(()=>{

  // })

  return (
<div className="flex items-start justify-center ">

    <motion.div 
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: -10 }}
        exit={{ opacity: 0, x: 0 }}
        transition={{ duration: .3, delay: 0.1, ease:"easeInOut" }}
    
     className="w-1/2 mx-auto p-4 shadow rounded bg-gray-900">
      <h2 className="text-xl font-bold mb-4">Ticket Details</h2>

      <div className="mb-3">
        <label className="block mb-1">Title</label>
        <p
         
          
          className="cursor-not-allowed w-full border-b border-gray-600 p-2 "
          
        >
          {ticket?.subject}</p>
      </div>
      <div className="mb-3">
        <label className="block mb-1">Created By</label>
        <p className="w-full cursor-not-allowed  p-2 border-b border-gray-600 rounded">
          {ticket?.createdBy?.name}</p>
      </div>

      <div className="mb-3">
        <label className="block mb-1">Description</label>
        <p
         
          
          className="w-full cursor-not-allowed border-b border-gray-600 p-2 rounded"
          
        >
          {ticket?.description}</p>
      </div>


      <div className="mb-3">
        <label className="block mb-1">Status</label>
        <p
         
          
         className="w-full border-b cursor-not-allowed border-gray-600 p-2 rounded"
         
       >
         {ticket?.status}</p>
      </div>

      <div className="mb-3">
        <label className="block mb-1">Assigned To:</label>
        <p
         
          
          className="w-full border-b cursor-not-allowed border-gray-600 p-2 rounded"
          
        >
          {ticket?.assignedTo}</p>
      </div>



      <div className="mb-3">
        <label className="block mb-1">Department</label>
        <p
         
          
         className="w-full border-b cursor-not-allowed border-gray-600 p-2 rounded"
         
       >
         {ticket?.category}</p>
      </div>




      <div className="mb-3">
        <label className="block mb-1">Priority</label>
        <p
         
          
         className="w-full border-b cursor-not-allowed border-gray-600 p-2 rounded"
         
       >
         {ticket?.priority}</p>
      </div>


      <div className="w-full   flex items-center justify-center gap-8 ">

      <div className=" w-full  border-red-500 "
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
      onClick={()=>deleteTicketById(id)}
      type="submit" 
      className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 cursor-pointer">
        Delete
      </button>


      </div>
  
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
  <h2 className="text-xl font-bold mb-4">Edit Ticket </h2>

  <div className="mb-3">
    <label className="block mb-1">Title</label>
    <input
      type="text"
      name="title"
      value={formData.title}
      onChange={handleChange}
      className="w-full border p-2 rounded border-gray-600"
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
      className="w-full border p-2 border-gray-600 rounded"
      required
    />
  </div>


  <div className="mb-3">
        <label className="block mb-1">Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full border p-2 border-gray-600 rounded bg-gray-900"
        >
       <option value="pending">Pending</option>
       <option value="open">Open</option>
       <option value="closed">Closed</option>
        </select>
      </div>

  <div className="mb-3">
    <label className="block mb-1">Assigned To:</label>
    <select
      name="description"
      value="hazer"
      onChange={handleChange}
      className="w-full border p-2 rounded border-gray-600 bg-gray-900"
      required
    >

      <option value="hazer">Hazer</option>
      <option value="john">John</option>
      <option value="alvert">Alvert</option>



      </select>
  </div>



  <div className="mb-3">
    <label className="block mb-1">Department</label>
    <select
      name="category"
      value={formData.department}
      onChange={handleChange}
      className="w-full border p-2 rounded border-gray-600 bg-gray-900"
    >
      {categories.map((cat) => (
        <option key={cat} value={cat}>{cat}</option>
      ))}
    </select>
  </div>




  <div className="mb-3">
    <label className="block mb-1">Priority</label>
    <select
      name="category"
      value={formData.priority}
      onChange={handleChange}
      className="w-full border  border-gray-600 p-2 rounded bg-gray-900"
    >

<option value={"high"}>High</option>
<option  value={"medim"}>Medium</option>
<option value={"low"}>Low</option>


    </select>
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


