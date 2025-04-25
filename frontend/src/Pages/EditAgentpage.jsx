import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";
import { useGetUserbyId } from "../Hooks/Customers/useGetUserById";
import { useGetMyTickets } from "../Hooks/TicketsHooks/useGetMyTickets";
import { useSelector } from "react-redux";
import { useUpdateUserById } from "../Hooks/Customers/useUpdateUser";



export default function EditAgentForm({ onSubmit })
 {

  const {getUserById,user}=useGetUserbyId()
  const [formData, setFormData] = useState({
    name: user?.name|| "",
    email: "",
    phone: "",
    department: "",
    status: "active",
    ticketsAssigned: 0,
    ticketsCompleted: 0,
    role:""
  });
  const [isEditOpen,setIsEditOpen]=useState(false)
  const {id}=useParams()

  
  const {getMyTickets}=useGetMyTickets()
  const {updateUserById}=useUpdateUserById()

  const myTickets=useSelector(state=>state.TicketReducer)

  console.log(user)
  


  useEffect(()=>{
    getMyTickets()
    getUserById(id)
  },[])

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    updateUserById(id,formData);
    setFormData({
      username: "",
      email: "",
      phone: "",
      department: "",
      status: "active",
      ticketsAssigned: 0,
      ticketsCompleted: 0,
    });
  };

  return (<div className="flex items-start justify-center ">





{/* left side */}

<div className="min-h-screen bg-gray-900 p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Agent Details</h1>
        
        </header>
  
        <div className="bg-gray-900 rounded-2xl shadow p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-xl font-bold">{user?._id}</h2>
              <div className="flex items-center gap-4 mt-2">
  
                <img src="https://i.pravatar.cc/40?img=5" alt="Arlene McCoy" className="rounded-full" />
                <span className="font-medium">{user?.name}</span>
                <span className=" text-sm bg-gray-900 px-2 py-1 rounded-full capitalize">Role:<strong>{user?.role}</strong></span>
  
                <div className="  ml-auto flex items-center w-1/3 gap-3">
           
           <div className=" w-full"
            onClick={()=>setIsEditOpen(!isEditOpen)}>
{isEditOpen? (
  <button
  className="w-full border px-10 rounded cursor-pointer hover:text-gray-300 mx-auto text-center">Cancel</button>
):(
  <button  
           className="w-full border  px-10 rounded cursor-pointer hover:text-gray-300 text-center">Edit</button>
)}



           </div>
         
            <button className="w-full px-3 border text-red-600  rounded cursor-pointer hover:text-red-400">Delete</button>
          </div>
              </div>
  
  
            
  
            </div>
  
            <div>
              <h3 className="text-md font-semibold mb-2 text-emerald-500">Active</h3>
              <p><strong>Active Since:</strong>{new Date(user?.updatedAt).toLocaleTimeString()}</p>
              <p>{user?.email}</p>
            </div>
  
            <div>
              <h3 className="text-md font-semibold mb-2">Tickets History</h3>
         
  
  <table className="w-full text-sm text-left">
            <thead  className=''>
              <tr className="">
                <th># id</th>
                <th>Date</th>
                <th>Subject</th>
                {/* <th>Service</th> */}
                <th >Created By</th><th>Status</th>
                
              </tr>
            </thead>
            <tbody>
              {myTickets.map((ticket, index) => (
                <tr key={index} className="border-b  border-gray-800 h-10  ">
                 
                  <td>
                      <Link to={`/admin/view-ticket/${ticket?._id}`} className="cursor-pointer text-blue-400 underline">{ticket?._id}</Link>
                    </td>
                  <td>{new Date(ticket?.createdAt).toLocaleTimeString()}</td>
                  <td>{ticket?.subject}</td>
                  
                
                  {/* <td>{ticket.service}</td> */}
                  <td > {ticket?.createdBy?ticket?.createdBy : "###"} </td>
                  
                  <td className={`${ticket.status=="pending"?`text-red-500`:`${ticket.status=='open'?`text-blue-500`:`text-green-500`}`} capitalize`}>{ticket?.status}</td>
                
                </tr>
              ))}
            </tbody>
          </table>
             </div> 
  
           
          
  
      
  
      </div>
  
      </div>
      
      
      
      
      
      
      
      
   
        
      
      
      
      
      </div>



  
 
  
  {/* ----------------------right side ------------------*/}
  


  <AnimatePresence>

  </AnimatePresence>

{
  isEditOpen && (
    <motion.form
    initial={{ opacity: 0, x: 10 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 10 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    
    
     className="max-w-xl mx-auto bg-gray-900 p-6 rounded-xl shadow space-y-4">
      <h2 className="text-xl font-semibold text-center">Edit Agent</h2>


<div className="flex items-center justify-center gap-5 ">
<div className=" w-1/2">
        <label className="block text-sm font-medium ">Username </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border border-gray-400 rounded"
        />
      </div>

      <div className=" w-1/2">
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border border-gray-400 rounded"
        />
      </div>

      </div>

      <div>
        <label className="block text-sm font-medium">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border border-gray-400 rounded"
        />
      </div>

 

      <div className="flex items-center justify-center gap-5 ">

      <div className=" w-1/2">
        <label className="block mb-1 text-sm font-medium">Department</label>
        <select
        onChange={handleChange}
          type="text"
          name="department"
          value={formData.department}
        //   disabled
          className="w-full bg-gray-900 border border-gray-400 rounded px-3 py-2 cursor-pointer"
        >
        {/* <option value="customer">Customer</option> */}
        <option value="general-support">General Support</option>
        <option value="hardware-issue">Hardware Issues</option>
        <option value="billing-payments">Billing & Payments</option>
        <option value="returns-cancellations">Returns & Cancellations</option>
        <option value="technical-support">Technical Support</option>

        
        </select>
      </div>

      <div className=" w-1/2">
        <label className="block mb-1 text-sm font-medium">Role</label>
        <select
        onChange={handleChange}
          type="text"
          name="role"
          value={formData.role}
        //   disabled
          className="w-full bg-gray-900 border border-gray-400 rounded px-3 py-2 cursor-pointer"
        >
        {/* <option value="customer">Customer</option> */}
        <option value="agent">Agent</option>
        <option value="admin">Admin</option>
        {/* <option value="admin">Admin</option> */}
        </select>
      </div>

      </div>





      <div>
        <label className="block text-sm font-medium">Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-400 rounded bg-gray-900"
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      {/* <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Tickets Assigned</label>
          <input
            type="number"
            name="ticketsAssigned"
            value={formData.ticketsAssigned}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-400 rounded"
            min={0}
          />
        </div> */}

        {/* <div>
          <label className="block text-sm font-medium">Tickets Completed</label>
          <input
            type="number"
            name="ticketsCompleted"
            value={formData.ticketsCompleted}
            onChange={handleChange}
            className="mt-1 p-2 w-full border  border-gray-400rounded"
            min={0}
          />
        </div>
      </div> */}

      <button 
      onClick={(e)=>handleSubmit(e)}
       className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer">
        Save Changes
      </button>
    </motion.form>
  )
}









  
  
     
   </div> )}











