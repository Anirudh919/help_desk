import { useState } from "react";
import { Link } from "react-router-dom";

export default function ViewAgent({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "hazer",
    email: "hazer@gmail.com",
    phone: "3242342345",
    department: "General Support",
    status: "active",
    ticketsAssigned: 10,
    ticketsCompleted: 6,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      department: "",
      status: "active",
      ticketsAssigned: 0,
      ticketsCompleted: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-gray-900 p-6 rounded-xl shadow space-y-4">
      <h2 className="text-xl font-semibold">View Agent</h2>

      <div>
        <label className="block text-sm font-medium">Full Name</label>
        <p
         
          className="cursor-not-allowed mt-1 p-2 w-full border-b border-gray-700 text-xl capitalize"
        >
            {formData.name}
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <p
         
          className="mt-1 cursor-not-allowed p-2 w-full border-b border-gray-700 text-xl capitalize"
        >
            {formData.email}
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium">Phone</label>
        <p
         
          className="mt-1 p-2 cursor-not-allowed w-full border-b border-gray-700 text-xl capitalize"
        >
            {formData.phone}
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium">Department</label>
        <p
         
         className="mt-1 p-2 w-full cursor-not-allowed border-b border-gray-700 text-xl capitalize"
       >
           {formData.department}
       </p>
      </div>

      <div>
        <label className="block text-sm font-medium">Status</label>
        <p
         
         className="mt-1 p-2 w-full border-b cursor-not-allowed border-gray-700 text-xl capitalize"
       >
           {formData.status}
       </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Tickets Assigned</label>
          <p
         
          className="mt-1 p-2 w-full border-b cursor-not-allowed border-gray-700 text-xl capitalize"
        >
            {formData.ticketsAssigned}
        </p>
        </div>

        <div>
          <label className="block text-sm font-medium">Tickets Completed</label>
          <p
         
         className="mt-1 p-2 w-full cursor-not-allowed border-b border-gray-700 text-xl capitalize"
       >
           {formData.ticketsCompleted}
       </p>
        </div>
      </div>

      {/* <button  type="submit" className="w-full cursor-pointer bg-blue-600 text-white py-2 rounded hover:bg-blue-700"> */}
        <div className="w-full h-10 cursor-pointer bg-blue-600 text-white py-2 rounded hover:bg-blue-700 flex justify-center flex-1 items-center">
        <Link to="/admin/edit-agent/123" className="text-center w-full  border-red-500 cursor-pointer bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Edit Agent
        </Link>
        </div>
       
      {/* </button> */}



      <button type="submit" className="w-full cursor-pointer bg-red-600 text-white py-2 rounded hover:bg-red-700 h-10">
        Delete Agent
      </button>
    </form>
  );
}
