import React from 'react'
import Navbar from './Navbar'
import { Outlet } from "react-router-dom"

const StudentAppWrapper = () => {
  return (
    <section className='w-full max-w-[1800px] mx-auto font-outfit'>
       <Navbar/>
        
        <section className='w-full p-2 mt-[20px]'>
            <Outlet/>
        </section>
               

    </section>
  )
}

export default StudentAppWrapper
