import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route, Navigate, useNavigate } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import UserPage from './Pages/UserPage'
import Adminpage from './Pages/Adminpage'
import Agentpage from './Pages/Agentpage'
// import CustomerDetailsPage from './Pages/CustomerDetailsPage'

import CreateTicket from './Pages/CreateTicket'

import EditAgentForm from './Pages/EditAgentpage'
import CreateCustomer from './Pages/CreateCustomer'
import CreateAgent from './Pages/CreateAgent'
import ViewAgent from './Pages/ViewAgent'
import CustomerDetailsPage from './Pages/EditCustomerPage'
import EditTicketpage from './Pages/EditTicketpage'
import CreateNoteForm from './Pages/Createnotes'

import EditNotepage from './Pages/EditNotepage'
import { Signup } from './Pages/Signup'
import { Login } from './Pages/Login'
import { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'
function App() {
  const [count, setCount] = useState(0)
  const authUser=useSelector(state=>state.UserReducer)

 return(
<div className="  bg-gray-900 text-gray-100 overflow-hidden h-full w-full">
<Toaster/>
    
<Routes>


<Route path='/login' element={authUser?<Navigate to="/"/>:<Login/>}/> 
<Route path='/signup' element={authUser?<Navigate to="/"/>:<Signup/>}/>

<Route path="/admin" element={(authUser && authUser.role=='admin')?<Adminpage/>:<Navigate to="/"/>}/>{/*home*/}


<Route path={`/`} element={authUser && authUser?.role=='customer'?<UserPage/>:<Navigate to="/login"/>}/>{/*home*/}

<Route path="/view-agent" element={<ViewAgent/>}/>{/*home*/}




{/* notes routes */}
<Route path="/create-note" element={<CreateNoteForm/>}/>{/*home*/}
<Route path="/view-note/:id" element={<EditNotepage/>}/>{/*home*/}



{/* customer routes */}
<Route path='/admin/create-customer/' element={<CreateCustomer/>}/>
<Route path='/admin/view-customer/:id' element={<CustomerDetailsPage/>}/>
{/* <Route path='/admin/edit-customer/123' element={<CustomerDetailsPage/>}/>home */}



{/* ticket routes */}
<Route path='/admin/create-ticket' element={<CreateTicket/>}/>
<Route path='/admin/view-ticket/:id' element={<EditTicketpage/>}/>
{/* <Route path='/admin/edit-ticket/123' element={<ViewTicketForm/>}/> */}





{/* agent routes */}

<Route path='/admin/create-agent' element={<CreateAgent/>}/>
<Route path='/admin/edit-agent/:id' element={<EditAgentForm/>}/>
{/* <Route path='/admin/edit-agent/123' element={<EditAgentForm/>}/> */}


</Routes>


 </div>
 
 )
}

export default App
