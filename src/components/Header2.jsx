import React from 'react'
import { IoIosSearch } from "react-icons/io";
import NavigationMenuDemo from './NavigationMenuDemo';
import PhotuMenu from './PhotuMenu';
import VenuesMenu from './VenuesMenu';
import RealweddingMenu from './RealweddingMenu';
import BlogMenu from './BlogMenu';
import InvitesMenu from './InvitesMenu';
import { useNavigate } from 'react-router-dom';
function Header2() {
   const navigate = useNavigate();
  return (
    <div  className='w-full bg-[#e72e77]  text-white text-start p-1.5  flex relative z-50 '>
        <div className='ml-10 text-[25px] '>
            <h1>logo</h1>
        </div>
       <ul className='flex   ml-[130px] text-[17px] pt-1 '>
        <li><VenuesMenu/></li>
        <li ><NavigationMenuDemo/></li>
        <li><PhotuMenu/></li>
        <li><RealweddingMenu/></li>
        <li><BlogMenu/></li>
        <li><InvitesMenu/></li>
       </ul>
      <button className='bg-pink-900 flex  w-[33px] h-[33px] absolute right-[260px] rounded-full '><IoIosSearch  className='text-[22px] ml-[6px] mt-[6px]'/></button>
        <button className='bg-pink-900 flex  absolute right-10 w-[120px] rounded-3xl justify-center h-[33px] pt-[2px] '><p onClick={()=>navigate("/login")}>Log In</p></button>
    </div>
  )
}

export default Header2