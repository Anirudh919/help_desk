import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";
import { useGetUserbyId } from "../Hooks/Customers/useGetUserById";
import { useGetMyTickets } from "../Hooks/TicketsHooks/useGetMyTickets";
import { useSelector } from "react-redux";
import { useUpdateUserById } from "../Hooks/Customers/useUpdateUser";

const tickets = [
  {
    number: "INC4568",
    date: "04/12/23",
    subject: "Can't sign into finance app",
    user: "Marcos.27",
    location: "Building 7",
    room: "402",
    service: "Software",
    assigned: null,
    status: "pending",
    update: "None",
  },   {
    number: "INC4568",
    date: "04/12/23",
    subject: "Can't sign into finance app",
    user: "Marcos.27",
    location: "Building 7",
    room: "402",
    service: "Software",
    assigned: "Hazer",
    status: "open",
    update: "None",
  },   {
    number: "INC4568",
    date: "04/12/23",
    subject: "Can't sign into finance app",
    user: "Marcos.27",
    location: "Building 7",
    room: "402",
    service: "Software",
    assigned: "Robert",
    status: "closed",
    update: "None",
  },
  // ... More ticket objects here
];

export default function CustomerDetailsPage({ onSubmit }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    department: "",
    status: "",
    
    
    role:""
  });
  const [isEditOpen,setIsEditOpen]=useState(false)
  const {id}=useParams()

  const {getUserById,user}=useGetUserbyId()
  const myTickets=useSelector(state=>state.TicketReducer)

  const {getMyTickets}=useGetMyTickets()
  const {updateUserById}=useUpdateUserById()
  console.log(myTickets)

  const handleChange = (e) => {
    const { username, value } = e.target;
    setFormData((prev) => ({ ...prev, [username]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserById(id,formData);
    setFormData({
      username: "",
      email: "",
      phone: "",
      
      status: "active",
      
    });
  };



  useEffect(()=>{
getUserById(id)
getMyTickets()
  },[])

  return (<div className="flex items-start justify-center ">





{/* left side */}
<AnimatePresence>
<motion.div 
    initial={{ opacity: 0, x: 0 }}
    animate={{ opacity: 1, x: -10 }}
    exit={{ opacity: 0, x: 0 }}
    transition={{ duration: .3, delay: 0.1, ease:"easeInOut" }}
    
className="min-h-screen bg-gray-900 p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Customer Details</h1>
        
        </header>
  
        <div className="bg-gray-900 rounded-2xl shadow p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-xl font-bold">{user?._id}</h2>
              <div className="flex items-center gap-4 mt-2">
  
                <img src="https://i.pravatar.cc/40?img=5" alt="Arlene McCoy" className="rounded-full" />
                <span className="font-medium">{user?.name}</span>
                <span className=" text-sm bg-gray-900 px-2 py-1 rounded-full capitalize">Role:<strong> {user?.role}</strong></span>
  
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
              <h3 className="text-md font-semibold mb-2 text-emerald-500">{user?.status}</h3>
              <p><strong>Active Since:</strong> {new Date(user?.createdAt).toDateString()}</p>
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
                <th>Service</th>
                <th>Assigned</th><th>Status</th>
                
              </tr>
            </thead>
            <tbody>
              {myTickets.map((ticket, index) => (
                <tr key={index} className="border-b  border-gray-800 h-10  ">
                 
                  <td>
                    <Link to={`/admin/view-ticket/${ticket?._id}`} className="cursor-pointer text-blue-400 underline">{ticket?._id}</Link>
                    </td>
                  <td>{new Date(ticket?.createdAt).toLocaleTimeString()}</td>
                  <td>{ticket.subject}</td>
                  
                
                  <td>{ticket?.category}</td>
                  <td > {ticket.assignedTo?ticket?.assignedTo : "###"} </td>
                  
                  <td className={`${ticket.status=="pending"?`text-red-500`:`${ticket.status=='open'?`text-blue-500`:`text-green-500`}`} capitalize`}>{ticket.status}</td>
                
                </tr>
              ))}
            </tbody>
          </table>
             </div> 
  
           
          
  
      
  
      </div>
  
      </div>
      </motion.div>

      </AnimatePresence>


 
  
  {/* ----------------------right side ------------------*/}
  


  <AnimatePresence>

  

{
  isEditOpen && (
    <motion.form
    initial={{ opacity: 0, x: 10 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 10 }}
    transition={{ duration: .3, delay: 0.1, ease:"easeInOut" }}
    
    
    onSubmit={handleSubmit} className="max-w-xl mx-auto bg-gray-900 p-6 rounded-xl shadow space-y-4">
      <h2 className="text-xl font-semibold text-center">Edit Customer</h2>


<div className="flex items-center justify-center gap-5 ">
<div className=" w-1/2">
        <label className="block text-sm font-medium ">Username </label>
        <input
          type="text"
          name="name"
          value={formData.username}
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

      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer">
        Save Changes
      </button>
    </motion.form>

    
  )
}
</AnimatePresence>









  
  
     
   </div> )}











