import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
   
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
   
  } from "@/components/ui/navigation-menu"

function RealweddingMenu() {
  return (
    <div>


<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-[#e72e77] mt-[-30px] hover:bg-[#e72e77] ">Real Weddings</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink >
        <div className='w-[730px] h-[340px] p-4 grid grid-cols-3 '>  

        <div>
                    <h1 className='text-pink-500 font-semibold text-[16px]'>By City</h1>
                    <ul className='text-[13px] mt-2 flex flex-col gap-2'>
                      <li>Jaipur</li>
                      <li>Mumbai</li>
                      <li>Bangalore</li>
                      <li>Pune</li>
                      <li>Kolkata</li>
                      <li>Lucknow</li>
                      <li>Others</li>
                    </ul>
                   </div>

                   <div>
                    <h1 className='text-pink-500 font-semibold text-[16px]'>By Culture</h1>
                    <ul className='text-[13px] mt-2 flex flex-col gap-2'>
                      <li>Punjabi/Sikh</li>
                      <li>Maharashtrian</li>
                      <li>Bengali </li>
                      <li>Gujarati</li>
                      <li>Marwari</li>
                      <li>Telugu</li>
                      <li> Others</li>
                    </ul>
                   </div>
                  

                   <div>
                    <h1 className='text-pink-500 font-semibold text-[16px]'>By Them</h1>
                    <ul className='text-[13px] mt-2 flex flex-col gap-2'>
                      <li>Destination</li>
                      <li>Grand & Luxurious</li>
                      <li>Modern & Stylish</li>
                      <li>International</li>
                      <li>Others</li>
                      
                    </ul>
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

export default RealweddingMenu