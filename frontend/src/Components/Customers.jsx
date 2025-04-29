


import {Link,} from 'react-router-dom'
import { FaEye, FaPlus } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useGetAllUsers } from '../Hooks/Customers/useGetAllUsers';
import { useEffect } from 'react';


const Customers = () => {

      const {getAllUsers}=useGetAllUsers()

      useEffect(()=>{
        getAllUsers()
      },[])

      const users=useSelector(state=>state.AllUsersReducer)
      console.log(users)
      const customers=users.filter((user)=>{
        if(user?.role =="customer"){
          return user
        }

      })
  
 
  
    return (
      <div className="bg-gray-900 p-4 rounded shadow-md overflow-auto">


            <div className="flex justify-between items-center mb-6">
            <div className="text-xl font-semibold px-2 text-[#ec4899]  flex items-center justify-center  gap-8">Customers
           
            <Link to="/admin/create-customer" className="" title='Create Customer'>
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
              <th>Active Since</th>
              {/* <th>Assigned</th><th>Status</th> */}
              
            </tr>
          </thead>
          <tbody className=' overflow-auto '>
            {customers.map((customer, index) => (

                
              <tr key={index} className="border-b  border-gray-800 h-10  ">
                <td>{customer?._id}</td>
                <td>{customer.name}</td>
                {/* <td>{customer.username}</td> */}
                <td>{customer.email}</td>
              
                <td>{new Date(customer?.createdAt).toLocaleDateString()}</td>
                 <Link to={`/admin/view-customer/${customer?._id}`} className='relative rounded-lg hover:bg-gray-800  top-3 px-4 left-5 '>
                 <span>View</span>  </Link>
                
                {/* <td className={`${customer.status=="pending"?`text-red-500`:`${customer.status=='open'?`text-blue-500`:`text-green-500`}`} capitalize`}>{customer.status}</td> */}
              
              </tr>
              
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Customers;
  