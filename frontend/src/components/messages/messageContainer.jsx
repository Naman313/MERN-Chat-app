import React, { useEffect } from 'react'
import Messages from './messages'
import MessageInput from './messageInput'
import {TiMessage} from 'react-icons/ti'
import useConversation from '../../zustand/useConversation'



function MessageContainer() {
 const {selectedConversation, setSelectedConversation}= useConversation()


 //Unmounts
 useEffect(()=>{
  return ()=> setSelectedConversation(null)
 }, [])
  return (
    <div className='mid:min-w-[450px] flex flex-col'>
      {!selectedConversation? (
        <NoChatSelected />
      ) : (
        <>
          <div className='bg-gray-400 px-4 py-2 mb-2'>
            <span className='label-text'>To: </span>
            <span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-black font-semibold flex flex-col items-center gap-2'>
        <p>Welcome Naman</p>
        <p>Select a chat to start</p>
        <TiMessage className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  );
};