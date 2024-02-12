import Note from '@/components/note'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-screen flex items-center justify-between '>
        <div className='h-full w-[15%] bg-white border-r border-gray-100 relative flex flex-col justify-between items-center'>
            <div className='w-full p-1'>
                <h1 className='font-bold tracking-tighter p-2 bg-black text-3xl text-white rounded-md w-full'>Menu</h1>
            </div>
            <div className='w-full flex flex-col items-center pl-2 gap-2'>
                <h3 className=' cursor-pointer text-left hover:bg-gray-100 pl-3 py-3 w-full rounded-sm text-black font-semibold tracking-tighter  align-middle'>All Notes</h3>
                <h3 className=' cursor-pointer text-left hover:bg-gray-100 pl-3 py-3 w-full rounded-sm text-black font-semibold tracking-tighter'>Deleted Notes</h3>
                <h3 className=' cursor-pointer text-left hover:bg-gray-100 pl-3 py-3 w-full rounded-sm text-black font-semibold tracking-tighter'>Completed Notes</h3>
            </div>
            <div className="mb-4 bg-gray-100 w-40 rounded-md text-black font-bold p-5 tracking-tighter">Profile</div>
        </div>
        <div className='h-full p-10 w-[85%] bg-gray-100 flex flex-col'>  
            <div className='w-full flex items-center justify-between'>
                <h1 className='font-bold tracking-tighter text-3xl text-black'>All Notes</h1>
                <button className='bg-black p-3 text-white rounded-sm hover:bg-neutral-700'>Create a new note</button>
            </div> 
            <div>
               <Note/>
               <Note/>
               <Note/>
            </div>
        </div>
    </div>
  )
}

export default page