import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
   
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
   
  } from "@/components/ui/navigation-menu"

function BlogMenu() {
  return (
       <div className=''>
   
   
   <NavigationMenu>
     <NavigationMenuList>
       <NavigationMenuItem>
         <NavigationMenuTrigger className="bg-[#e72e77] mt-[-30px]   ">Blog</NavigationMenuTrigger>
         <NavigationMenuContent>
           <NavigationMenuLink >
               <div className='w-[600px] h-[300px] p-4 flex  '>  
                   <ul>
                       <li>mahesh</li>
                       <li>mahesh</li>
                       <li>mahesh</li>
                       <li>mahesh</li>
                       <li>mahesh</li>
                       <li>mahesh</li>
                   </ul>
               </div>
   
   
           </NavigationMenuLink>
         </NavigationMenuContent>
       </NavigationMenuItem>
     </NavigationMenuList>
   </NavigationMenu>
   
       </div>
  )
}

export default BlogMenu