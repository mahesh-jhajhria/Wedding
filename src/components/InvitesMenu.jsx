import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
   
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
   
  } from "@/components/ui/navigation-menu"

function InvitesMenu() {
  return (
    <div>


    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-[#e72e77] mt-[-30px] hover:bg-[#e72e77] ">E-Invites</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink >
                <div className='w-[500px] h-auto p-4'> 
                  <h1 className='text-pink-500 font-semibold text-[14px]'>Wedding Invitation Maker</h1> 
                    <ul className='text-[13px] mt-2 flex flex-col gap-2'>
                        <li>Wedding Card Designs</li>
                        <li>Save the Date Templates</li>
                       
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

export default InvitesMenu