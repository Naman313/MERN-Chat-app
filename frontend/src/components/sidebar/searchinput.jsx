import React from 'react'
import { FaSearch } from "react-icons/fa";

function SearchInput() {
  return (
    <div>
        <form className='flex items-center gap-2'>
            <input type="text" placeholder='Search' className='input input-bordered rounded-full'/>
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