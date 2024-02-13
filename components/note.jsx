"use client"
import React, {useEffect, useRef, useState } from 'react'

const Note = ({noteData}) => {

    const [isEditing, setIsEditing]= useState(false)
    const [noteText, setNoteText] = useState(noteData)
    const noteContainer = useRef(null)

    useEffect(()=>{

        function handleEvent(event){
            if(event.target === noteContainer.current) return
            setIsEditing(false)
        }

        document.addEventListener("click", handleEvent)

        return ()=>{
            document.removeEventListener("click", handleEvent)
        }
    })

    const noteFunc = (e)=>{ 
        const note = e.target.value
        setNoteText(note)
        
    }

  return (
    <div className='flex flex-col items-center p-4 gap-3 w-[30rem] shadow-md border border-gray-200 rounded-md'>
        <div className='flex items-center w-full justify-between'> 
            <input type="checkbox" />
            <p>noteData.createdAt</p>
        </div>
        <div className='w-full'>
            {isEditing? <input ref={noteContainer} type='text' className='h-20 p-1 w-full shadow border border-neutral-300 rounded-md' value={noteText} onChange={(e) => noteFunc(e)}/> : <p ref={noteContainer} className='h-20 w-full shadow border border-neutral-300 rounded-md'>{noteText}</p>}
        </div>
        <div className='flex item-center w-full gap-4 justify-between'>
            <button className='bg-red-600 font-bold tracking-tighter text-white p-2 rounded-md hover:bg-red-400'>
                Delete Note
            </button>
            <button className='bg-yellow-400 text-black font-bold tracking-tighter p-2 rounded-md hover:bg-yellow-600' onClick={() => setIsEditing(true)}>
                {isEditing? "Save Note":"Edit Note" }
            </button>
        </div>
    </div>
  )
}

export default Note