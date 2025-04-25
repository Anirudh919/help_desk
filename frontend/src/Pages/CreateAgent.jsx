import { useState } from 'react';
import { useCreateUsert } from '../Hooks/Customers/useCreateUser';

const CreateAgent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'agent', // default/fixed role,
    department:''
  });
  

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const {createUser}=useCreateUsert()

  const handleSubmit = (e) => {
    
    e.preventDefault();
    createUser(formData);
    // Call your API here to create the user
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-900 p-6 rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-semibold text-center">Create Agent</h2>

      <div>
        <label className="block mb-1 text-sm font-medium">Username</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
          required
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
          required
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
          required
        />
      </div>


      <div>
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





      {/* Optional: Display Role */}
      <div>
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
        {/* <option value="admin">Admin</option> */}
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
      >
        Create Agent
      </button>
    </form>
  );
};

export default CreateAgent;
