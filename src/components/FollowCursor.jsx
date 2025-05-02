import React, { useEffect } from 'react'
import {gsap} from "gsap"

const FollowCursor = () => {

    useEffect(()=>{
       
        const handleMouseMove = (event)=>{
           
            const {clientX,clientY} = event;

            gsap.to("#cursor",{
                x:clientX+10 , // to point extacly to mouse sharp end
                y:clientY+10
            })


        }

        document.addEventListener("mousemove",handleMouseMove)

        return ()=>{
            document.removeEventListener("mousemove",handleMouseMove)
        }


    },[])


  return (
    <div id='cursor' className='fixed hidden lg:block top-0 left-0 w-[20px] h-[20px] border-2 rounded-full z-[999] border-red-500 bg-transparent'>
      
    </div>
  )
}

export default FollowCursor
