import { useState } from 'react'
import './App.css';
import Login from "./pages/login/Login"
import SignUp from "./pages/signup/signup"
import Home from './pages/home/home';
import {Routes, Route, Navigate} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext';
function App() {
  const [count, setCount] = useState(0)
  const {authUser}= useAuthContext();
  return (
    <>
    <div className="p-4 h-screen flex items-center justify-content">
    <Routes>
        <Route path='/' element= {authUser ? <Home/> : <Navigate to= {"/login"}/>}></Route>
        <Route path='/login' element= {authUser? <Navigate to={"/"} />: <Login/>}></Route>
        <Route path='/signup' element= {authUser ? <Navigate to={"/"}/>: <SignUp/>}></Route>
      </Routes>
      <Toaster/>
    </div>

    </>
  )
}

export default App
