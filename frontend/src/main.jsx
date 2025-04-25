import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import Homepage from './Pages/Homepage.jsx'
import store from './Store/store.jsx'
import {Provider} from 'react-redux'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <BrowserRouter>
    <Homepage>
      <App/>
      </Homepage>
    </BrowserRouter>
    </Provider>
  
)
