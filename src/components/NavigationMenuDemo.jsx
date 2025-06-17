import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

function NavigationMenuDemo() {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-[#e72e77] mt-[-30px] hover:bg-[#e72e77] ">
              Vendors
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>
                <div className="w-[900px]  h-auto p-4 grid grid-cols-4 ">
                  <div>
                    <h1 className="text-pink-500 font-semibold text-[16px]">
                      Photographers
                    </h1>
                    <ul className="text-[13px] mt-2 flex flex-col gap-2">
                      <li>Photographers</li>
                    </ul>
                  </div>

                  <div>
                    <h1 className="text-pink-500 font-semibold text-[16px]">
                      Bridal Wear
                    </h1>
                    <ul className="text-[13px] mt-2 flex flex-col gap-2">
                      <li>Bridal Lahengas</li>
                      <li>Kanjeevaram / Silk Sarees</li>
                      <li>Cocktail Gowns </li>
                      <li>Trousseau Sarees</li>
                      <li>Bridal Lehenga on Rent </li>
                      <li>View All Bridal Wear</li>
                    </ul>
                  </div>

                  <div>
                    <h1 className="text-pink-500 font-semibold text-[16px]">
                      Jewellery & Accessories
                    </h1>
                    <ul className="text-[13px] mt-2 flex flex-col gap-2">
                      <li>Jewellery</li>
                      <li>Flower Jewellery</li>
                      <li>Bridal Jewellery on Rent</li>
                      <li>Accessories</li>
                      <li>View All Jewellery & Accessories</li>
                    </ul>
                  </div>

                  <div>
                    <h1 className="text-pink-500 font-semibold text-[16px]">
                      Food
                    </h1>
                    <ul className="text-[13px] mt-2 flex flex-col gap-2">
                      <li>Catering Services</li>
                      <li>Cake</li>
                      <li>Chaat & Food Stalls</li>
                      <li>Chaat & Food Stalls</li>
                      <li>View All Food</li>
                    </ul>
                  </div>

                  <div>
                    <h1 className="text-pink-500 font-semibold text-[16px]">
                      Makeup
                    </h1>
                    <ul className="text-[13px] mt-2 flex flex-col gap-2">
                      <li>Bridal Makeup</li>
                      <li>Family Makeup</li>
                    </ul>
                  </div>

                  <div>
                    <h1 className="text-pink-500 font-semibold text-[16px]">
                      Groom Wear
                    </h1>
                    <ul className="text-[13px] mt-2 flex flex-col gap-2">
                      <li>Sherwani</li>
                      <li>Wedding Suits / Tuxes</li>
                      <li>Sherwani On Rent </li>
                      <li>View All Groom Wear</li>
                    </ul>
                  </div>

                  <div>
                    <h1 className="text-pink-500 font-semibold text-[16px]">
                      Invites & Gifts
                    </h1>
                    <ul className="text-[13px] mt-2 flex flex-col gap-2">
                      <li>Invitations</li>
                      <li>Favors</li>
                      <li>Trousseau Packers</li>
                      <li>Invitation Gifts</li>
                      <li>Mehndi Favors</li>
                      <li>View All Invites & Gifts</li>
                    </ul>
                  </div>

                  <div>
                    <h1 className="text-pink-500 font-semibold text-[16px]">
                      Pandits
                    </h1>
                    <ul className="text-[13px] mt-2 flex flex-col gap-2">
                      <li>Wedding Pandits</li>
                    </ul>
                  </div>

                  <div>
                    <h1 className="text-pink-500 font-semibold text-[16px]">
                      Pre Wedding Shoot
                    </h1>
                    <ul className="text-[13px] mt-2 flex flex-col gap-2">
                      <li>Pre Wedding Shoot Locations</li>
                      <li> Pre Wedding Photographers</li>
                    </ul>
                  </div>

                  <div>
                    <h1 className="text-pink-500 font-semibold text-[16px]">
                      Mehndi
                    </h1>
                    <ul className="text-[13px] mt-2 flex flex-col gap-2">
                      <li>Mehendi Artist</li>
                    </ul>
                  </div>

                  <div>
                    <h1 className="text-pink-500 font-semibold text-[16px]">
                      Music & Dance
                    </h1>
                    <ul className="text-[13px] mt-2 flex flex-col gap-2">
                      <li>DJs</li>
                      <li>Sangeet Choreographer</li>
                      <li>Wedding Entertainment</li>
                    </ul>
                  </div>

                  <div>
                    <h1 className="text-pink-500 font-semibold text-[16px]">
                      Bridal Grooming
                    </h1>
                    <ul className="text-[13px] mt-2 flex flex-col gap-2">
                      <li> Beauty and Wellness</li>
                    </ul>
                  </div>

                  <div>
                    <h1 className="text-pink-500 font-semibold text-[16px]">
                      Planning & Decor
                    </h1>
                    <ul className="text-[13px] mt-2 flex flex-col gap-2">
                      <li>Wedding Planners</li>
                      <li>Decorators</li>
                    </ul>
                  </div>
                </div>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default NavigationMenuDemo;
