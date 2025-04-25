import React, { useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useGetMyNotes } from "../Hooks/Notes/useGetNotes";




const data = [
  { name: "Desktops", stock: 60 },
  { name: "Laptops", stock: 40 },
  { name: "Tablets", stock: 25 },
];

export default function Admindashboard() {

const tickets=useSelector(state=>state.TicketReducer)


const notes=useSelector(state=>state.NotesReducer)
const auth=useSelector(state=>state.UserReducer)


  

const {getMyNotes}=useGetMyNotes()

useEffect(()=>{
  getMyNotes()
},[])




  return (
    <div className=" bg-gray-900 min-h-screen w-full border-red-500  p-6 text-gray-300">
      <div className="grid grid-cols-6 gap-6  ">
        {/* Sidebar */}
      

        {/* Main Content */}
        <main className="col-span-8 space-y-6  ">
          {/* Top Bar */}
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold px-2 text-[#6366f1] capitalize">{auth?.role} Dashboard</div>
            <input className="w-1/4 border px-4 rounded-lg border-gray-600" placeholder="Search..." />
          </div>

          {/* Ticket Sections */}
          <div className="grid grid-cols-3 gap-4  w-full">
          
            <div className="col-span-2 ">
              <div>
                <div className="flex justify-between items-center mb-4 px-5 ">
                  <div className="font-semibold text-lg">Tickets</div>
                  <select className="border border-gray-600 rounded px-2 py-1 text-sm">
                    <option>View All Tickets</option>
                  </select>
                </div>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-gray-300 ">
                      <th className="text-left">Number</th>
                      <th className="text-left">Date</th>
                      <th className="text-left">Subject</th>
                      <th className="text-left">User</th>
                      <th className="text-left">Status</th>
                      <th className="text-left">Last Update</th>
                    </tr>
                  </thead>
                  <tbody className=" overflow-auto">
                    {
                      tickets?.map(ticket=>(
<tr className=" border-red-500 h-10 ">
                      
                      <Link to={`/admin/view-ticket/${ticket?._id}`} className="cursor-pointer text-blue-400 underline">
                      <td>{ticket?._id}</td>
                      </Link>
                      
                          <td>{new Date(ticket?.createdAt)?.toLocaleTimeString()}</td>
                          <td>{ticket?.subject}</td>
                          <td>{ticket.createdBy}</td>
                          <td>{ticket.status}</td>
                          <td><span className="bg-green-100 text-green-700 px-2 py-1 rounded">{new Date(ticket?.updatedAt)?.toLocaleTimeString()}</span></td>
                        </tr>

                      ))
                    }
                    

                  
                  
                  </tbody>
                </table>
              </div>
            </div>

            <div className="border-l border-t border-gray-600">
              <div>
                <div className="font-semibold text-lg mb-2 pl-2">Unassigned Tickets</div>
                {/* 3 */}
                

{tickets?.map((ticket)=>{
  if(ticket?.assignedTo ==null){
    return (
      <div className="text-sm space-y-2  px-2">
                  <div className="flex justify-between items-center">
                   
                    <div >
                     <Link to={`/admin/view-ticket/${ticket?._id}`} className="cursor-pointer text-blue-400 underline">
                  <td>{ticket?._id}</td>
                  </Link>
                      <div className="text-xs text-gray-500">{ticket?.subject}</div>
                    </div>


                    <div>
                      <div className="font-medium">Date created At:</div>
                      <div className="text-xs text-gray-500"> {new Date(ticket?.createdAt).toLocaleTimeString()}</div>
                    </div>

                    {/* <select className="border border-gray-600 bg-gray-900  rounded px-2 py-1 text-sm">
                      <option>Select Technician</option>
                      <option>Levinson.2</option>
                    </select> */}
                  </div>
                </div>

    )
  }

})}

                
              </div>
            </div>
          </div>












          {/* Bottom Sections */}
          <div className="grid grid-cols-1 gap-4  border-green-500">
            <div className="mx-auto  w-full">
              <div className=" mx-auto  overflow-auto">
                <div className=" flex items-center gap-4 justify-start font-semibold text-lg mb-2 px-2 mx-auto  text-center   text-[#6366f1]">My Notes

                <Link to="/create-note" size="sm" className=" cursor-pointer">
                  <FaPlus  className="fill-white" size={16} />
                   </Link>
                </div>
                
{/* container */}
                  <div className="text-sm space-y-2   border-red-500 pb-1 px-2 mb-2 overflow-auto ">
{
  notes?.map((note)=>(
<Link  to={`/view-note/${note?._id}`}
                  className="cursor-pointer hover:bg-gray-800  flex justify-between items-center  border-blue-500">
                    <div>
                      <div className="font-medium  border-red-500">{note?.title}</div>
                      <div className="text-xs text-gray-500">{note?.description}</div>
                    </div>
                    <div>
                      <div className="font-medium">Created At</div>
                      <div className="text-xs text-gray-500">{new Date(note?.createdAt).toLocaleTimeString()}</div>
                    </div>
<div className="border capitalize border-gray-600 bg-gray-900 rounded px-2 py-1 text-sm">
  {note?.status}
</div>
                  </Link>
  ))
}

{/* note item */}
                  

               


               


               






                </div>








                
              </div>
            </div>
           
            <div>
            
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
