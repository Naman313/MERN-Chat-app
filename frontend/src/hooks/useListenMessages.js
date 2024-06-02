import React, { useEffect } from 'react'
import {useSocketContext} from '../context/socketContext'
import useConversation from '../zustand/useConversation'
function useListenMessages() {
    const {socket}= useSocketContext()
    const {messages, setMessages}= useConversation();
    useListenMessages();
    useEffect(()=>{
        socket?.on("newMessage", (newMessage)=>{
            setMessages([...messages, newMessage])
        })
        return ()=>{
            socket?.off("newMessage")
        }
    },[soceket, setMessages, messages])
}

export default useListenMessages