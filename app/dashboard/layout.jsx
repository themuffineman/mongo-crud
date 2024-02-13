"use client"
import React, { createContext, useEffect, useState } from 'react'


const layout = ({children}) => {

   const UserDataContext = createContext(null)
   const [userData, setUserData] = useState()

   useEffect(()=>{
    const getUserData = async()=>{
        try {
            const apiRes = await fetch('www.example.com')
            const userDataObject = await apiRes.json()
            setUserData(userDataObject)

        } catch (error) {
            console.error('Error Fetching User Data:', error)
        }
    }
    getUserData()
   }, [])

  return (
    <UserDataContext.Provider value={userData}>
        {children}
    </UserDataContext.Provider>

  )
}

export default layout