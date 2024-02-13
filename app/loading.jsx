import React from 'react'


const Loading = () => {
    
    return(
    <div className='flex gap-2 items-center p-4 bg-black border border-white fixed bottom-5 shadow-md -translate-x-1/2 left-1/2 rounded-md animate-in'>
        <p className="text-white font-semibold text-md">Loading...</p>
        <div className='w-5 h-5 border-4 rounded-full bg-transparent border-transparent border-t-gray-300 animate-spin'/>
    </div>
    )
}

export default Loading