import React from 'react'
import { RiLogoutBoxFill } from "react-icons/ri";
import useLogout from '../hooks/useLogout';
function LogoutButton() {

  const {loading, logout}= useLogout();
  return (
    <div className='mt-auto'>
        {!loading ? (<RiLogoutBoxFill  className='w-6 h-6 text-black cursor-pointer'
        onClick={logout}/>):(
          <span className='loading loading-spinner'></span>
        )}
    </div>
  )
}

export default LogoutButton