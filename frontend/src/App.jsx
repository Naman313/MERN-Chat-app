import { useState } from 'react'
import './App.css';
import Login from "./pages/login/Login"
import SignUp from "./pages/signup/signup"
import Home from './pages/home/home';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="p-4 h-screen flex items-center justify-content">
      {/* <Login/> */}
      {/* <SignUp/> */}
      <Home/>
    </div>

    </>
  )
}

export default App
