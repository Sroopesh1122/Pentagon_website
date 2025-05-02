import React, { useState } from 'react'
import Brand from './Brand'
import { Link } from 'react-router-dom'

const menuItems =[
  {
    key:"courses",
    label:"COURSES",
    path :"/courses"
  },{
      key:"aboutUs",
      label:"ABOUT US",
      path:"/about"
  },{
      key:"verifyCertificate",
      label:"Verify Certificate",
      path:"/verifyCertificate"
  }
] 


const Navbar = () => {


  const [navbarOpen ,setNavbarOpen] = useState(false)

 

  return (
    <section className='w-full flex justify-between items-center p-3'>
       <Brand/>




       <article className='hidden md:flex justify-center items-center gap-5 uppercase font-[500] text-[0.9rem]'>

         {
            menuItems.map((item,idx)=> <Link className='underline-nav' key={item.key} to={item.path}>{item.label}</Link> )
         }

         <button >DOWNLOAD APP</button>

         <button>LOGIN</button>

       </article>

        
    </section>
  )
}

export default Navbar



const MobileNavbar =()=>{

}




