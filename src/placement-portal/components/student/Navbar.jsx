import React from 'react'

const Navbar = () => {
  return (
    <section className='w-full flex justify-between items-center p-3'>
       
       <span>
          Penatagon Student
       </span>

        

        <div className='flex justify-start items-center gap-3'>

            <span>Dashboard</span>


            <span>Jobs</span>

            <span>Profile</span>

            
            
        </div>
    </section>
  )
}

export default Navbar
