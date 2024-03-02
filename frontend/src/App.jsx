
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import Home from './pages/home/Home'
import Google from './pages/auth/Google'
import Dashboard from './pages/dashboard/Dashboard'
import AddCourse from './pages/dashboard/course/AddCourse'

function App() {

  return (
   <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
    <Route path='/google' element={< Google/>} />
    <Route path='/dashboard' element={< Dashboard/>} />
    <Route path="/addCourse" element={<AddCourse />} />
    
    </Routes>
   </BrowserRouter>
  )
}

export default App
