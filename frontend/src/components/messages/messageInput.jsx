import React from 'react'
import {BsSend} from 'react-icons/bs'
function MessageInput() {
  return (
    <form className='px-4 my-3'>
      <div className='w-full relative'>
        <input type="text" className='border text-sm rounded-lg block w-full p-2.5 bg-red-400 border-gray-600 text-black' placeholder='Enter Message'/>
      <button type='submit' className='inset-y-0 end-0 flex items-center pe-3'></button>
      <BsSend/>
      </div>
    </form>
  )
}

export default MessageInput