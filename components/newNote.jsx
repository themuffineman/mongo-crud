import React, { useState } from 'react'

const newNote = () => {
    const [noteText, setNoteText]= useState()
    const saveNote = async()=>{
        try {
            const apiRes = await fetch("/api/notes/create-note",{method: "POST", body: JSON.stringify({noteText}), headers:{"Content-Type": "Application/json"}})
            if(!apiRes.ok){
                throw new Error("Error Creating Note")
            }
            alert("Note Created Successfully")
        } catch (error) {
            alert(error)
            console.error(error)
        }
    }
  return (
    <div className="bg-black p-4 flex flex-col justify-between items-center h-[50rem] w-[50rem] rounded-md fiexd top-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2">
        <h2 className='text-white tracking-tighter w-full font-bold capitalize text-center'>Create a new note</h2>
        <input type="text"  className='w-full h-[35rem] rounded-md shadow ' onChange={(e)=> setNoteText(e.event.target)} />
        <button className='bg-white text-black p-2 rounded-md' onClick={saveNote}>Save Note</button>
    </div>
  )
}

export default newNote