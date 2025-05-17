import React from 'react'
import logoImg from "../assets/imgs/LogoOnline.png"
import {useNavigate} from "react-router-dom"

const Brand = () => {

  const navigate = useNavigate();

  const handleBrancdClick=()=>{
    navigate("/")
  }

  return (
    <div className='flex justify-center items-center gap-2  cursor-pointer' onClick={handleBrancdClick}>
     <img src={logoImg} alt="" className='w-[250px] ' />
    </div>
  )
}

export default Brand
