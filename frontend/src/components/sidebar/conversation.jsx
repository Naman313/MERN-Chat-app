import React from 'react'
import useConversation from '../../zustand/useConversation'


function Conversation({conversation, lastIdx, emoji}) {
const {selectedConversation, setSelectedConversation}= useConversation();
const isSelected= selectedConversation?._id === conversation._id
  return (

    <>
    <div className={`flex gap-2 items-center hover:bg-red-400 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-red-800": ""}`}
    onClick={()=> setSelectedConversation(conversation)}
    >
        <div className="avatar online">
            <div className='w-12 rounded-full'>
                <img src={conversation.profilePic}/>
            </div>
        </div>
        <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'> 
                <p className='font-bold text-black-300'>{conversation.fullName}
                </p>
                <span className='text-xl'>{emoji}</span>
            </div>
        </div>
    </div>
   {!lastIdx &&  <div className='divider my-0 py-0 h-1'/>}

    </>
   
  )
}

export default Conversation



//Starter code for converdation
// import React from 'react'

// function Conversation() {
//   return (

//     <>
//     <div className='flex gap-2 items-center hover:bg-red-400 rounded p-2 py-1 cursor-pointer'>
//         <div className="avatar online">
//             <div className='w-12 rounded-full'>
//                 <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="user avatar" />
//             </div>
//         </div>
//         <div className='flex flex-col flex-1'>
//             <div className='flex gap-3 justify-between'> 
//                 <p className='font-bold text-black-300'>John doe
//                 </p>
//                 <span className='text-xl'></span>
//             </div>
//         </div>
//     </div>
//     <div className='divider my-0 py-0 h-1'>
//     </div>
//     </>
   
//   )
// }

// export default Conversation