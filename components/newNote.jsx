"use-client"
import React, { useEffect, useRef, useState } from 'react'

const NewNote = ({setCreatingNote}) => {
    const [noteText, setNoteText]= useState()
    const [isLoading, setIsLoading]= useState(false)
    const noteContainer = useRef(null)
    useEffect(()=>{
        document.addEventListener("click", handleClick)

        return ()=>{
            document.removeEventListener("click", handleClick)
        }
    })
    const handleClick = (e)=> {
        if(e.target === noteContainer.current) return
        setCreatingNote(false)   
    }
    const saveNote = async()=>{
        try {
            const apiRes = await fetch("http://localhost:3000/api/notes/create-note",{method: "POST", body: JSON.stringify({noteText}), headers:{"Content-Type": "Application/json"}})
            setIsLoading(true)
            if(!apiRes.ok){
                throw new Error("Error Creating Note")
            }
            alert("Note Created Successfully")
            setIsLoading(false)
        } catch (error) {
            alert(error)
            console.error(error)
        }
    }
  return (
    <div className="bg-black p-4 flex flex-col justify-between items-center h-[20rem] w-[30rem] rounded-md fixed top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
        <h2 className='text-white tracking-tighter w-full font-bold capitalize text-center'>Create a new note</h2>
        <textarea className='w-full h-[8rem] rounded-md p-2 shadow ' onChange={(e)=> setNoteText(e.target.value)} />
        <div className='flex justify-between items center w-full '>
            <button className='bg-red-700 text-white p-2 rounded-md' onClick={()=>{setCreatingNote(false)}}>Cancel</button>
            <button className='bg-white text-black p-2 rounded-md' onClick={saveNote}>{isLoading? (<div className='w-5 h-5 rounded-full border-4 border-transparent bg-transparent border-t-white animate-spin'/>): "Save Note"}</button>
        </div>
    </div>
  )
}

export default NewNote