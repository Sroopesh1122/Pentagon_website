import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const AppWrapper = () => {
  return (
    <section className='w-full max-w-[1800px] mx-auto'>
       <Navbar/>
       <Outlet/>
    </section>
  )
}

export default AppWrapper
