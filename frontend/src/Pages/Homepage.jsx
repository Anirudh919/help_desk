import React from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import { useSelector } from 'react-redux'
const Homepage = ({children}) => {

  const authUser=useSelector(state=>state.UserReducer)
  return (
    <div className='relative z-10 container flex flex-col  items-center justify-start 
    border border-blue-500 h-[100vh] w-7xl mx-auto'>


    <Header/>
      <div className=" flex gap-4 items-start justify-between  h-full w-full mx-auto   border-red-500">
      
      {
        authUser && <Sidebar/>
      }
      
        {children}
      </div>



    </div>
  )
}

export default Homepage
