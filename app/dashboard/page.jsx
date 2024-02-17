"use client";

import Note from '@/components/note'
import React, {useState, useEffect} from 'react'
import {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";
import NewNote from '@/components/newNote';
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { redirect } from 'next/navigation';


const page = () => {
    
    
   const { isAuthenticated, user} = useKindeBrowserClient();
   const [userData, setUserData] = useState(null)
   const [creatingNote, setCreatingNote] = useState(false)
   console.log(user)
   console.log(isAuthenticated)

   useEffect(()=>{
       if (!isAuthenticated){
           redirect('/')
       }
   }, [isAuthenticated])

    const getUserData = async ()=>{
        try {
            const apiRes = await fetch("http://localhost:3000/api/userdata", {
                headers:{
                    "Content-Type": 'application/json'
                },
                method: "POST",
                body: JSON.stringify({ user })
            })
            const {userNotes} = await apiRes.json()
            setUserData(userNotes)

        }catch (error) {
            console.error('Error Fetching User Data:', error)
        }
    }

    useEffect(()=>{
        getUserData()
    }, [])


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
            <div className="mb-4 bg-gray-100 w-40 rounded-md items-center flex flex-col gap-2 text-black font-bold p-5 tracking-tighter">
            <p>Welcome {user?.given_name} </p>
            <LogoutLink className='p-4 text-center bg-black text-white rounded-md font-semibold'>Log Out</LogoutLink>
            </div>
        </div>
        <div className='h-full p-10 pt-4 w-[85%] bg-gray-100 flex flex-col'>  
            {creatingNote && <NewNote setCreatingNote={setCreatingNote}/>}
            <div className='w-full flex items-center justify-between'>
                <h1 className='font-bold tracking-tighter text-3xl text-black'>All Notes</h1>
                <button className='bg-black p-3 text-white rounded-sm hover:bg-neutral-700' onClick={()=> {setCreatingNote(true)}}>Create a new note</button>
            </div> 
            <div className='w-full scroll-smooth grid grid-flow-row justify-items-center self-center overflow-scroll overflow-x-hidden p-5 gap-5'>
                {userData? userData.map((note)=>(
                  <Note noteData={note} />  
                ))
                : 
                <p>No notes to display. Create a new note</p>
                }
            </div>
        </div>
    </div>
  )
}

export default page