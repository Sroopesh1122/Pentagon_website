import React, { useEffect } from 'react'
import {gsap} from "gsap"

const FollowCursor = () => {
    useEffect(()=>{
        const handleMouseMove = (event)=>{
            const {clientX,clientY} = event;
            gsap.to("#cursor",{
                x:clientX + 5 ,
                y:clientY + 5
            })
        }
        document.addEventListener("mousemove",handleMouseMove)
        return ()=>{
            document.removeEventListener("mousemove",handleMouseMove)
        }
    },[])


  return (
    <div id='cursor' className='fixed hidden -z-[999] lg:block top-0 left-0 w-[20px] h-[20px] rounded-full z-[999] shadow-lg shadow-red-400 bg-transparent'>
      
    </div>
  )
}

export default FollowCursor
