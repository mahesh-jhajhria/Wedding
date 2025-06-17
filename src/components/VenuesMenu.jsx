import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
   
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
   
  } from "@/components/ui/navigation-menu"

function VenuesMenu() {
  return (
    <div>
   
   
   <NavigationMenu>
     <NavigationMenuList>
       <NavigationMenuItem>
         <NavigationMenuTrigger className="bg-[#e72e77] mt-[-30px] hover:bg-[#e72e77] ">Venues</NavigationMenuTrigger>
         <NavigationMenuContent>
           <NavigationMenuLink >
               <div className='w-[1000px] h-auto p-4 grid grid-cols-3 '>  
                   <div>
                    <h1 className='text-pink-500 font-semibold text-[16px]'>By Type</h1>
                    <ul className='text-[13px] mt-2 flex flex-col gap-2'>
                      <li>Banquet Hells</li>
                      <li>Marriage Garden / Lawns</li>
                      <li>Small Function / Party Holls </li>
                      <li>Destination Wedding Venues</li>
                      <li>4 Star & Above Wedding Hotels</li>
                      <li>Wedding Resorts</li>
                      <li> View all Venues</li>
                    </ul>
                   </div>
                   <div>
                    <h1 className='text-pink-500 font-semibold text-[16px]'>By City</h1>
                    <ul className='text-[13px] mt-2 flex flex-col gap-2'>
                      <li>Jaipur</li>
                      <li>Mumbai</li>
                      <li>Bangalore</li>
                      <li>Pune</li>
                      <li>Kolkata</li>
                      <li>Lucknow</li>
                      <li>More</li>
                    </ul>
                   </div>
                   <div  className='ml-[-160px]'>
                    <h1 className='text-[14px]'>Destination Wedding Venues</h1>
                    <div className='grid grid-cols-3'>
                      <div className='w-[150px] h-[130px] rounded-lg mt-2'>
                          <img src='https://eventsmanagementkerala.com/wp-content/uploads/2023/07/outdoor-wedding-venues-in-Thrissur.webp' className='h-[100px] w-[150px] rounded-lg'/>
                          <h1 className='flex justify-center text-[13px]'>Goa</h1>
                      </div>

                      <div className='w-[150px] h-[130px] rounded-lg mt-2'>
                          <img src='https://www.trvme.com/img/tours/jaipur-destination-wedding-im1-1.jpg' className='h-[100px] w-[150px] rounded-lg'/>
                          <h1 className='flex justify-center text-[13px]'>Jaipur</h1>
                      </div>
                      <div className='w-[150px] h-[130px] rounded-lg mt-2'>
                          <img src='https://api.noormahalpalace.com/NM4020241639-1704354006293464667968.Events.jpg' className='h-[100px] w-[150px] rounded-lg'/>
                          <h1 className='flex justify-center text-[13px]'>Pune</h1>
                      </div>
                      <div className='w-[150px] h-[130px] rounded-lg mt-2'>
                          <img src='https://www.bogmallobeachresort.com/wp-content/themes/resort/images/wedslide6.webp' className='h-[100px] w-[150px] rounded-lg'/>
                          <h1 className='flex justify-center text-[13px]'>Kolkata</h1>
                      </div>
                      <div className='w-[150px] h-[130px] rounded-lg mt-2'>
                          <img src='https://www.bogmallobeachresort.com/wp-content/themes/resort/images/w01.jpg' className='h-[100px] w-[150px] rounded-lg'/>
                          <h1 className='flex justify-center text-[13px]'>Mumbai</h1>
                      </div>

                    </div>
                   </div>
               </div>
   
   
           </NavigationMenuLink>
         </NavigationMenuContent>
       </NavigationMenuItem>
     </NavigationMenuList>
   </NavigationMenu>
   
       </div>
  )
}

export default VenuesMenu