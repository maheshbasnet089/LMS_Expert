import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import Home from './pages/home/Home'
import Google from './pages/auth/Google'
import Dashboard from './pages/dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
    <Route path='/google' element={< Google/>} />
    <Route path='/dashboard' element={< Dashboard/>} />
    
    </Routes>
   </BrowserRouter>
  )
}

export default App
