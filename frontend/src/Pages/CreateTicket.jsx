
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useCreateTicket } from '../Hooks/TicketsHooks/useCreateTicket';
// import { createTicket } from '../redux/actions';


export default function CreateTicketForm(){
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    subject: '',
    description: '',
    category: '',
    priority:''
  });               
  const {createTicket}=useCreateTicket() 

  const categories = ['Bug', 'Feature Request', 'Support', 'Other'];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTicket({ ...formData, id: Date.now() })
    
    
    // setFormData({ subject: '', description: '', category: '' ,pritority:''});
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 shadow rounded bg-gray-900">
      <h2 className="text-xl font-bold mb-4">Create New Ticket</h2>

      <div className="mb-3">
        <label className="block mb-1">subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
      </div>

      <div className="mb-3">
        <label className="block mb-1">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
      </div>

      <div className="mb-3">
        <label className="block mb-1">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border p-2 rounded bg-gray-900"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label className="block mb-1">Priority</label>
        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="w-full border p-2 rounded bg-gray-900"
        >
          
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
        </select>
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded  w-full">
        Create Ticket
      </button>
    </form>
  );
};


