import { useState } from "react"
import { SIDEBAR_ITEMS } from "../Constants"
import { AnimatePresence, motion } from "framer-motion"
import { BiMenu } from "react-icons/bi"
import { Link, useParams } from "react-router-dom"
import { CiLogin, CiLogout } from "react-icons/ci";
import { useSelector, useDispatch } from 'react-redux';
import { setMenu } from "../Store/Actions/menuItemsActions"
import { setUser } from "../Store/Actions/userActions"
import { useLogout } from "../Hooks/useLogout"


export default function Sidebar(){

    const [sidebarOpen,setSidebarOpen]=useState(false)
    const dispatch=useDispatch()
    
    const selected=useSelector(state=>state.SelectedMenu)
    const authUser=useSelector(state=>state.UserReducer)
    const isAdmin=authUser?.role=="admin"
    const isAgent=authUser?.role=="agent"

    console.log(isAdmin,isAgent)

    const {logoutUser}=useLogout()


    const handleLogout=()=>{
        logoutUser()
        localStorage.removeItem("authInfo")
        dispatch(setUser(null))
    }
   
  
    return(
        <motion.div className={`h-full relative z-10 transition-all  border-green-500 
        duration-300 ease-in-out flex-shrink-0 ${sidebarOpen ? `w-54`:`w-20`}`} 
        animate={{width:sidebarOpen ? 256 :80}}>

            <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col  border-red-700">
               
               {/* menu button */}
                <motion.button 
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
                onClick={()=>{setSidebarOpen(!sidebarOpen)}}
                className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit "
                >
                    <BiMenu/>

                </motion.button>


                <nav className="mt-8  flex-grow">
                    

{SIDEBAR_ITEMS.map((item, index) => 
// .filter(item => item?.roles?.includes(authUser?.role))


                                ( <motion.div className={`  flex items-center cursor-pointer p-2  border-red-500 text-sm font-medium 
                                     rounded-lg hover:bg-gray-700  transition-colors mb-2 ${selected == item.link? `bg-gray-900`:``}`}
                                     onClick={()=>dispatch(setMenu(item.link))}
                                     >
             
                                             <span style={{color:item.color,minWidth:'20px',fontSize:"22px",}}>{item.icon}  </span>
             
                                             <AnimatePresence>
                                                
                                                {sidebarOpen && <motion.span className="ml-4  whitespace-nowrap"
                                                 initial={{opacity:0,width:0}}
                                                 animate={{opacity:1,width:1}}
                                                 exit={{opacity:0,width:0}}
                                                 transition={{duration:0.2,delay:0.3}}>
                                                     {item.name}
                                                 </motion.span> }
                                                 
                                             </AnimatePresence>
                                     </motion.div>))}

                    

<div className={` flex items-center cursor-pointer p-2  border-red-500 text-sm font-medium 
                                    rounded-lg hover:bg-gray-700  transition-colors mb-2 `}>
    {
        
        authUser? 
        
        <CiLogout 
        onClick={()=>handleLogout()}
        title="Logout" className="fill-gray-100"size={18}/>
        
        
        :

        <Link to={'/login'}>
            <CiLogin title="Login" className=" fill-blue-500" size={18}/>
        </Link>
        

    }


</div>



                </nav>
               
            </div>

        </motion.div>

    )
}