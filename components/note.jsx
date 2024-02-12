"use client"
import React, { useState } from 'react'

const Note = () => {
    const [isEditing, setIsEditing]= useState(false)
    const [noteText, setNoteText] = useState()

    const noteFunc = (e)=>{
        const note = e.target.value
        setNoteText(note)
    }
  return (
    <div className='flex flex-col items-center p-4 gap-1 w-96 '>
        <div className='flex items-center justify-between'> 
            <input type="checkbox" name="" id="" />
            <p>17:30</p>
        </div>
        <div>
            {isEditing? <input type='text' className='h-36 w-52 shadow border border-neutral-300 rounded-md' value={noteText} onChange={(e) => noteFunc(e)}/> : <p className='h-36 w-52 shadow border border-neutral-300 rounded-md'>{noteText}</p>}
        </div>
        <div className='flex item-center gap-4 justify-end'>
            <button className='bg-red-600 font-bold tracking-tighter text-white p-2 hover:bg-red-400'>
                Delete Note
            </button>
            <button className='bg-yellow-600 text-black font-bold tracking-tighter hover:bg-yellow-400' onClick={() => setIsEditing(true)}>
                {isEditing? "Save Note":"Edit Note" }
            </button>
        </div>
    </div>
  )
}

export default Note