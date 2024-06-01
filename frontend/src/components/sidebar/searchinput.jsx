import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import useConversation from '../../zustand/useConversation';
import useGetmessages from '../../hooks/useConversation';
import toast from 'react-hot-toast'

function SearchInput() {
  const [search, setSeacrch]= useState("");
  const {setSelectedConversation}= useConversation()
  const {conversations}= useGetmessages()

  const handleSubmit= (e)=>{
    e.preventDefault();
    if(!search) return;
    if(search.length< 3){
      return toast.error('Search term must be at least 3 characters long')
    }

    const conversation= conversations.find((c)=> c.fullName.toLowerCase().includes(search.toLowerCase()));

    if(conversation){
      setSelectedConversation(conversation)
      setSeacrch('')
    }
    else{
      toast.error("No such user fount");
    }
  }
  return (
    <div>
        <form onSubmit= {handleSubmit} className='flex items-center gap-2'>
            <input type="text" placeholder='Search' className='input input-bordered rounded-full' value={search} 
            onChange={(e)=> setSeacrch(e.target.value)}/>
            <button type="submit" className='btn btn-circle bg-sky500 text-black'><FaSearch className='w-6 h-5 outline-none'/></button>
        </form>
    </div>
  )
}

export default SearchInput






//Starter code for SearchInput
// import React from 'react'
// import { FaSearch } from "react-icons/fa";

// function SearchInput() {
//   return (
//     <div>
//         <form className='flex items-center gap-2'>
//             <input type="text" placeholder='Search' className='input input-bordered rounded-full'/>
//             <button type="submit" className='btn btn-circle bg-sky500 text-black'><FaSearch className='w-6 h-5 outline-none'/></button>
//         </form>
//     </div>
//   )
// }

// export default SearchInput