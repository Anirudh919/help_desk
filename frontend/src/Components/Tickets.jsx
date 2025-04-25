
import {Link} from 'react-router-dom'
import { FaEye, FaPlus } from "react-icons/fa";
import { useSelector } from 'react-redux';


const Tickets = () => {
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
  const myTickets=useSelector(state=>state.TicketReducer)
  console.log(myTickets)
    const getStatusColor = (status) => {
      if (status === "None" || status === "2 days") return "bg-red-100 text-red-600";
      if (status.includes("day")) return "bg-yellow-100 text-yellow-600";
      return "bg-green-100 text-green-600";
    };
  
    return (
      <div className="bg-gray-900 p-4 rounded shadow-md overflow-auto">


            <div className="flex justify-between items-center mb-6">
            <div className="
            flex items-center justify-center  gap-8
            text-xl font-semibold px-2 text-[#BB5CF6]">Tickets

            <Link to="/admin/create-ticket" className="" title='Create Agent'>
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
              <th>Date</th>
              <th>Subject</th>
              <th>Created by</th>
              <th>Assigned</th><th>Status</th>
              
            </tr>
          </thead>
          <tbody className=' overflow-auto'>
            {myTickets.map((ticket, index) => (
              <tr key={index} className="border-b  border-gray-800 h-10 cursor-pointer  hover:bg-gray-800">
                {/* <td>{ticket.number}</td> */}
                <td>
                    <Link to={`/admin/view-ticket/${ticket?._id}`} className="cursor-pointer text-blue-400 underline">{ticket._id}</Link>
                    </td>

                <td>{new Date(ticket.createdAt).toLocaleTimeString()}</td>
                <td>{ticket.subject}</td>
                <td>{ticket.
createdBy
}</td>
              
                {/* <td>{ticket.service}</td> */}
                <td > {ticket.assigned?ticket.assigned : "###"} </td>
                
                <td className={`${ticket.status=="pending"?`text-red-500`:`${ticket.status=='open'?`text-blue-500`:`text-green-500`}`} capitalize`}>{ticket.status}</td>
              
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Tickets;
  