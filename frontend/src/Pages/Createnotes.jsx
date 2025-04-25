import React, { useState } from 'react';
import { useCreateNotes } from '../Hooks/Notes/useCreateNotes';


const CreateNoteForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };



  const {createNotes}=useCreateNotes()


  const handleSubmit = (e) => {
    e.preventDefault();

    // You can send this form data to your backend here
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    files.forEach((file, idx) => formData.append(`files[${idx}]`, file));

    // Example: fetch('/api/notes', { method: 'POST', body: formData })

    createNotes({ title, description, files }); // for debugging)
    
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 border border-gray-700 rounded-lg shadow-md bg-gray-900 text-white">
      <h2 className="text-2xl font-semibold mb-4">Create a New Note</h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter title..."
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          placeholder="Enter description..."
          required
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Attach Files</label>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="text-gray-300 border border-gray-700 rounded px-4"
        />
        {files.length > 0 && (
          <ul className="mt-2 list-disc list-inside text-sm text-gray-400">
            {files.map((file, i) => (
              <li key={i}>{file.name}</li>
            ))}
          </ul>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-semibold"
      >
        Submit Note
      </button>
    </form>
  );
};

export default CreateNoteForm;
