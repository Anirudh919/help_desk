import { useState } from 'react';
import { useCreateUsert } from '../Hooks/Customers/useCreateUser';

const CreateCustomer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '', // default/fixed role
  });
  
  const {createUser}=useCreateUsert()
  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(formData);
    // Call your API here to create the user
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-900 p-6 rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-semibold text-center">Create Customer</h2>

      <div>
        <label className="block mb-1 text-sm font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
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
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
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

      {/* Optional: Display Role */}
      <div>
        <label className="block mb-1 text-sm font-medium">Role</label>
        <select
        onChange={handleChange}
          type="text"
          name="role"
          value={formData.role}
        //   disabled
          className="w-full bg-gray-900 border rounded px-3 py-2 cursor-pointer"
        >
        <option value="customer">Customer</option>
        <option value="agent">Agent</option>
        <option value="admin">Admin</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
      >
        Create Customer
      </button>
    </form>
  );
};

export default CreateCustomer;
