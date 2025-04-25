import React from 'react'
import { FaBell } from "react-icons/fa";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { MdPending } from "react-icons/md";
import { useParams } from 'react-router-dom';
import Admindashboard from '../Components/Admindashboard';
import Tickets from '../Components/Tickets';
import Customers from '../Components/Customers';
import Agents from '../Components/Agents';

import {useSelector} from 'react-redux'
const Adminpage = () => {

  const selectedMenu=useSelector(state=>state.SelectedMenu)

  


  return (
    <div className=' mt-4 border-green-500 flex flex-col'>


      <div className='flex flex-col items-center border-b  border-gray-700 '>
        <h2 className='font-semibold capitalize text-3xl'>hello, Admin</h2>
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

  Active 
  <span className='font-semibold '> 100</span></div>
  
  </div>




  <div className='flex flex-col border border-gray-700 px-10 rounded-xl py-2 gap-2 items-center'>

  <div className='flex gap-2 items-center'>


  <span><MdPending className='fill-[#ec4899]'/></span>
  Pending
  <span className='font-semibold '> 200</span></div>
  
  </div>

<div className='flex flex-col   border-gray-700 border px-10 rounded-xl py-2 gap-2 items-center'>


{/* sthird div */}
<div className='flex gap-2 items-center '>

<span><MdOutlineSettingsSuggest className='fill-[#6366f1]'/></span>
  Efficiency<span className='font-semibold '> 300</span>
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

export default Adminpage
