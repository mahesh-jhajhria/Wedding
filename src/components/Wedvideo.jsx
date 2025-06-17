import React from 'react'
import PopularVenues from './PopularVenues'
import PopularSearch from './PopularSearch'
import InhouseServices from './InhouseServices'
import Gallerylook from './Gallerylook'
import WeddingStory from './WeddingStory'
import Contact from './Contact'
import Footer from './Footer'
import Birthday from './Birthday'

function Wedvideo() {
  return (
    
<>
<div className="relative bg-[url('https://i.makeagif.com/media/4-12-2017/c3APKT.gif')] bg-cover bg-center h-[505px]  opacity-100 pt-20 z-10 ">
             
              </div>
              <div className="absolute   opacity-100 z-20">
                <h1 className='text-[40px] font-semibold text-white mt-[-300px] ml-[400px]  w-[700px] '>Plan a Jaipur Wedding</h1>
               
              </div>
              <div className='flex'>
                <PopularVenues/>
              </div>
              <div className='flex mt-12' >
                <PopularSearch/>
              </div>
              <div className='flex mt-12'>
                <InhouseServices/>
              </div>
              <div>
                <Gallerylook/>
              </div>
              <div>
                <WeddingStory/>
              </div>
              <div>
                <Birthday/>
              </div>
              <div>
                <Contact/>
              </div>
              <div>
                <Footer/>
              </div>
              


</>
    


  )
}

export default Wedvideo