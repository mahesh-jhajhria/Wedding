import React from 'react'

function Contact() {
  return (
    <div className='bg-violet-200 h-[500px] w-full mb-7'>

        <div className='grid grid-cols-2 gap-4 container mx-auto'>
            <div>
               
                <table className='ml-14 mt-14 flex flex-col'>
                <h1 className='text-[29px] font-semibold mb-3'>I'm Looking For!</h1>
                    <label htmlFor='name' className='flex'>Name</label>
                    <input type='text' placeholder='' className='border-b-2 outline-none w-[500px] mt-9  bg-violet-200  border-violet-400'/>

                    <label htmlFor='name' className='flex mt-2'>Mobile Number</label>
                    <input type='number' placeholder='' className='border-b-2 w-[500px] mt-9 outline-none bg-violet-200  border-violet-400'/>

                    <label htmlFor='name' className='flex mt-2'>Event Name</label>
                    <input type='text' placeholder='' className='border-b-2 w-[500px] mt-9 outline-none bg-violet-200  border-violet-400'/>

                    <button className='bg-white w-[220px] text-violet-400 text-[20px] p-2 ml-[140px] justify-center mt-7 rounded-lg flex'>Submit</button>
                    
                </table>
            </div>
            <div>
                <img src='https://www.invitationstreet.com/images/598x487-caricature.png'/>
            </div>
        </div>
        
    </div>
  )
}

export default Contact