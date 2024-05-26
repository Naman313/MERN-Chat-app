import React from 'react'
import SearchInput from './searchinput'
import Conversations from './conversations'
import LogoutButton from '../logoutButton'

function SideBar() {
  return (
    <div className='border-r border-slate-500 flex flex-col'>
        <SearchInput/>
        <div className='divider px-3'></div>
        <Conversations/>
        <LogoutButton/>

    </div>
  )
}

export default SideBar




//STARTER CODE OF SIDEBAR
// import React from 'react'
// import SearchInput from './searchinput'
// import Conversations from './conversations'
// import LogoutButton from '../logoutButton'

// function SideBar() {
//   return (
//     <div className='border-r border-slate-500 flex flex-col'>
//         <SearchInput/>
//         <div className='divider px-3'></div>
//         <Conversations/>
//         <LogoutButton/>

//     </div>
//   )
// }

// export default SideBar