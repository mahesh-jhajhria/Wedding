import React from 'react'

function InhouseServices() {
  return (
    <div>
        <h1  className="ml-14 text-[19px] font-semibold mt-5">WMG Inhouse Services</h1>
        <div className='grid grid-cols-2 mb-8 mt-4 ml-14 '>
            <div className='flex w-[570px]   flex-col rounded-sm h-[400px] bg-slate-100 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110   '>
            <div className='w-full  flex p-2 h-[210px]'>
                <img src='https://www.sloshout.com/blog/wp-content/uploads/Best-Wedding-Makeup-artist-in-Delhi-Sloshout.jpg' className='w-full rounded-md'/>
            </div>
            <div className=' flex flex-col  justify-center items-center '>
                <h1 className='font-semibold text-[19px] mt-3' >Wedsta</h1>
                <p className='font-serif mt-4'>WMG At Home, Family Makeup Services</p>
                <button className='w-[150px] p-2 text-blue-600 mt-4 border-blue-600 border-2 rounded-sm hover:bg-blue-600 hover:text-white'>Know More</button>
            </div>
            </div>
                 
            <div className='flex w-[570px] ml-5  flex-col rounded-sm h-[400px] bg-slate-100 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  '>
            <div className='w-full  flex p-2 h-[210px]'>
                <img src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/b0/bb/24/wedding-hotels.jpg?w=1200&h=-1&s=1' className='w-full rounded-md'/>
            </div>
            <div className=' flex flex-col  justify-center items-center '>
                <h1 className='font-semibold text-[19px] mt-3' >Genie Services</h1>
                <p className='font-serif mt-4'>Plan your dream wedding in your budget</p>
                <button className='w-[150px] p-2 text-blue-600 mt-4 border-blue-600 border-2 rounded-sm hover:bg-blue-600 hover:text-white'>Know More</button>
            </div>
            </div>
            
            <div className='flex w-[570px]   flex-col rounded-sm h-[400px] mt-7 bg-slate-100 transition delay-150 duration-300 ease-in-out hover:scale-110  '>
            <div className='w-full  flex p-2 h-[210px]'>
                <img src='https://media.istockphoto.com/id/497039777/photo/wedding-setting.jpg?s=612x612&w=0&k=20&c=uHwz_57iBRVXrUPacCiLTuTPYyZS1az9GA0sCDeMP5U=' className='w-full rounded-md'/>
            </div>
            <div className=' flex flex-col  justify-center items-center '>
                <h1 className='font-semibold text-[19px] mt-3' >Venue Booking Service</h1>
                <p className='font-serif mt-4'>Best Price Guaranteed</p>
                <button className='w-[150px] p-2 text-blue-600 mt-4 border-blue-600 border-2 rounded-sm hover:bg-blue-600 hover:text-white'>Know More</button>
            </div>
            </div>

            
            
           
        </div>
    </div>
  )
}

export default InhouseServices