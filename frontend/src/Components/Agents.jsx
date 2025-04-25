
  


import {Link} from 'react-router-dom'
import { FaEye, FaPlus } from "react-icons/fa";
import {useSelector} from 'react-redux'
import { useGetAllUsers } from '../Hooks/Customers/useGetAllUsers';
import { useEffect } from 'react';
import { useGetMyTickets } from '../Hooks/TicketsHooks/useGetMyTickets';


const Agents = () => {

      const allUsers=useSelector(state=>state.AllUsersReducer)
      
      const tickets=useSelector(state=>state.TicketReducer)
      const completedTickets=tickets.filter((ticket)=>{
        if(ticket.status=="closed")
          return ticket
      })
      const agents=allUsers.filter((user)=>{
        if(user?.role =="agent"){
          return user
        }})


        const {getAllUsers}=useGetAllUsers()
        const {getMyTickets}=useGetMyTickets()
        console.log(agents)
        console.log(tickets)
        

        useEffect(()=>{
          getAllUsers()
          getMyTickets()
        },[])

  
    return (
      <div className="bg-gray-900 p-4 rounded shadow-md overflow-auto">


            <div className="flex justify-between items-center mb-6">
            <div className="text-xl font-semibold px-2 text-[#10b981] 
             flex items-center justify-center  gap-8">Agents



<Link to="/admin/create-agent" className="" title='Create Agent'>
            <FaPlus  className="fill-white" size={16} />
            {/* <span className=" -translate-x-1/2  mb-2 px-2 py-1 text-xs rounded opacity-100 group-hover:opacity-100 transition text-white">
    Create User
  </span> */}
            </Link>




            </div>
            <input className="w-1/4 border px-4 rounded-lg border-gray-600" placeholder="Search by id/user" />
          </div>


        <table className="w-full text-sm text-left">
          <thead  className=''>
            <tr className="">
              <th># id</th>
              <th>Name</th>
              
              <th>Email</th>
              
               <th>Assigned</th>
              <th>Completed</th> 
              
            </tr>
          </thead>
          <tbody>
            {agents.map((agent, index) => (

                
              <tr key={index} className="border-b  border-gray-800 h-10  ">
                <td>{agent?._id}</td>
                <td>{agent?.name}</td>
                
                <td>{agent?.email}</td>
                
                <td>{tickets?.length}</td>
                <td>{completedTickets?.length}</td>
                {/* <td>{new Date(customer.createdAt).toLocaleDateString()}</td> */}
                 <Link to={`/admin/edit-agent/${agent?._id}`} className='relative rounded-lg hover:bg-gray-800  top-3 px-4 left-5 '>
                 <span>View</span>  </Link>
                
                {/* <td className={`${customer.status=="pending"?`text-red-500`:`${customer.status=='open'?`text-blue-500`:`text-green-500`}`} capitalize`}>{customer.status}</td> */}
              
              </tr>
              
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Agents;
  