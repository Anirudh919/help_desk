import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return(
    <div className="relative z-10 bg-gray-700 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700  container">
       
       <div className="max-w-7xl flex justify-start  p-4 sm:px-6 lg:px-8  ">
       <Link to="/" className="text-2xl font-semibold text-gray-100  ">Help Desk</Link>
       </div>
        
    </div>)
}

export default Header
