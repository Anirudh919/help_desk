import React, { useEffect } from 'react'
import { FaBell } from "react-icons/fa";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { MdPending } from "react-icons/md";
import { useParams } from 'react-router-dom';
import Admindashboard from '../Components/Admindashboard';
import Tickets from '../Components/Tickets';
import Customers from '../Components/Customers';
import Agents from '../Components/Agents';

import { useDispatch, useSelector } from 'react-redux';
import { useGetMyTickets } from '../Hooks/TicketsHooks/useGetMyTickets';
import { setTickets } from '../Store/Actions/ticketActions';


const UserPage = () => {

  const selectedMenu=useSelector(state=>state.SelectedMenu)
const authUser=useSelector(state=>state.UserReducer)
const tickets=useSelector(state=>state.TicketReducer)

console.log(tickets)
const openTickets=tickets?.filter((ticket)=>{
  if(ticket.status == "open")
  {
    return ticket
  }
})

const closedTicket=tickets.filter((ticket)=>{
  if(ticket.status == "closed")
  {
    return ticket
  }
})

const inProgressTickets=tickets.filter((ticket)=>{
  if(ticket.status == "in-progress")
  {
    return ticket
  }
})

const efficiency=closedTicket.length/ tickets.length

const dispatch=useDispatch()

const {getMyTickets}=useGetMyTickets()




useEffect(()=>{
   getMyTickets()
  // dispatch(setTickets(tickets))
},[authUser])
  


  return (
    <div className=' mt-4 border-green-500 flex flex-col'>


      <div className='flex flex-col items-center border-b  border-gray-700 '>
        <h2 className='font-semibold capitalize text-3xl'>hello, {authUser?.name}</h2>
        <p className='text-gray-400'>Track the progress here .</p>
      </div>

      <div className='flex mt-2 gap-3 items-center justify-center  border-red-500' >
     
     
     {/* ticket status */}
      <div className='flex flex-col border border-gray-700 px-10 rounded-xl py-2 gap-2 items-center'>

<div className='flex gap-2 items-center'>
    

  Ticket Status 
  </div>
  
  </div>
     
    


<div className='flex flex-col border border-gray-700 px-10 rounded-xl py-2 gap-2 items-center'>

<div className='flex gap-2 items-center'>
    <span> <FaBell className='fill-[#10b981]'/></span>

  Open
  <span className='font-semibold '> {openTickets.length}</span></div>
  
  </div>




  <div className='flex flex-col border border-gray-700 px-10 rounded-xl py-2 gap-2 items-center'>

  <div className='flex gap-2 items-center'>


  <span><MdPending className='fill-[#ec4899]'/></span>
  Inprogress
  <span className='font-semibold '> {inProgressTickets.length}</span></div>
  
  </div>

<div className='flex flex-col   border-gray-700 border px-10 rounded-xl py-2 gap-2 items-center'>


{/* sthird div */}
<div className='flex gap-2 items-center '>

<span><MdOutlineSettingsSuggest className='fill-[#6366f1]'/></span>
  Efficiency<span className='font-semibold '>{efficiency}</span>
  </div>

  </div>

      </div>
{
  selectedMenu =="dashboard"?<Admindashboard/>:
  selectedMenu =="tickets"?<Tickets/>:
  selectedMenu =="customers"?<Customers/>:
   selectedMenu =="agents"? <Agents/>:""

}

      {/*  */}
    {/*  */}
  
    {/* */}
    </div>
  )
}

export default UserPage
