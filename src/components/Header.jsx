import React from 'react';
import { TfiWrite  } from "react-icons/tfi";
import { RiMobileDownloadLine}from "react-icons/ri";
import { ComboboxDemo } from '../components/ComboboxDemo';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <div className='w-full bg-pink-900  text-white text-start p-2 relative z-50 '>
      
    <ul className='flex'>
      <li className='pt-1 text-[14px] w-[400px] ml-5'>
      India's Favourite Wedding Planning Platform

      </li>
      <li className=' ml-[320px] mt-[-3px] absolute '>
      <ComboboxDemo/>
      </li>
     <li className='pt-1 absolute right-[150px] '>
      <button className='bg-pink-900 text-white flex w-[190px] gap-2 text-[14px]' onClick={()=>navigate("/review")}> <TfiWrite className='mt-1'/> Write A Review</button>
     </li>
       <li className='pt-1 right-0  absolute   '>
      <button className='bg-pink-900 text-white flex w-[190px] gap-2 text-[14px]'> < RiMobileDownloadLine className='mt-1  '/> Download App</button>
     </li>
    </ul>
    </div>
  )
}

export default Header