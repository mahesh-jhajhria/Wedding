import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
function Signin() {
    const navigate = useNavigate();
  return (
    <div className=''>
       <div className='bg-[url(https://img.freepik.com/premium-photo/indian-wedding-pooja_96696-144.jpg?semt=ais_hybrid)] h-[585px] w-full bg-cover  opacity-80 '>
           <div className='grid grid-cols-2 w-full h-[400px]   '>
              <div className='flex flex-col justify-center items-center w-[400px] text-[35px] font-semibold text-white ml-32 z-50 opacity-100 '>
                    <h1>Perfect weddings aren't found, they're created-let's make yours <br></br>legendary!</h1>
              </div>
              <div className='flex flex-col w-[430px]  ml-10 mt-11  '>
                    <form className='flex flex-col bg-rose-200 h-[520px] w-[470px] rounded-lg z-50 opacity-90 relative '>
                       <h1 className='font-semibold flex justify-center mt-[60px] '>Sign up</h1>
                       <p className='text-[12px] flex justify-center'>Enter details to create your account</p>
                       <label className='text-[14px] font-semibold ml-12 mt-[20px] flex '>Your name</label>
                       <input type='text' placeholder='Enter your name' className='w-[370px] h-[40px]   outline-none rounded-lg flex justify-center items-center ml-12 p-2  '/>

                       <label className='text-[14px] font-semibold ml-12 mt-[20px] flex '>E-mail or phone number</label>
                       <input type='email' placeholder='Enter Your Email' className='w-[370px] h-[40px]   outline-none rounded-lg flex justify-center items-center ml-12 p-2  '/>
                  <div className='grid grid-cols-2'>
                    <div>
                  <label className='text-[14px] font-semibold ml-12 mt-[12px] flex '>Password</label>
                  <input type='password' placeholder='Enter Password' className='w-[180px] h-[40px] outline-none  rounded-lg flex   ml-12  p-2 '/>
                    </div>
                    <div>
                  <label className='text-[14px] font-semibold  mt-[12px] flex '>Confirm Password</label>
                  <input type='password' placeholder='Enter Password' className='w-[180px] h-[40px] outline-none  rounded-lg flex   p-2 '/>
                    </div>
                  </div>
                      
   
                       <button className='w-[370px] h-[40px] mt-[19px]   rounded-lg flex justify-center items-center ml-12 bg-pink-600 text-white' >Login</button>
                      
                       <div className='grid grid-cols-2 mt-3'>
                           <button className='flex p-2 w-[180px] gap-1 ml-12 rounded-lg bg-white text-black text-[13px]'><FcGoogle className='flex  text-[20px] ' /> Sign up with Google</button>
                           <button className='flex p-2 w-[180px] gap-1 rounded-lg bg-white text-black text-[13px]'><MdFacebook className='flex  text-[20px] text-blue-700 '/> Sign up with Facebook</button>
   
                       </div>
                       <p className='flex justify-center mt-2 text-[13px] font-semibold'>Already have an account? <span className='text-red-900 ml-1 cursor-pointer' onClick={()=>navigate("/login")}>Sign in</span></p>
                    </form>
              </div>
           </div>
       </div>
       </div>
  )
}

export default Signin