import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function PhotuMenu() {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-[#e72e77] mt-[-30px] hover:bg-[#e72e77] ">
              Photos
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>
                <div className="w-[800px] h-auto  p-4 grid grid-cols-3 ">
                  <div>
                    <h1 className="text-pink-500 font-semibold text-[16px]">
                      Outfit
                    </h1>
                    <ul className="text-[13px] mt-2 flex flex-col gap-2">
                      <li>Bridal Lehenga</li>
                      <li>Wedding Sarees</li>
                      <li>Engagement</li>
                      <li>Mehndi</li>
                      <li>Blouse Designs</li>
                      <li>More</li>
                    </ul>
                  </div>

                  <div>
                    <h1 className="text-pink-500 font-semibold text-[16px]">
                      Decor & Ideas
                    </h1>
                    <ul className="text-[13px] mt-2 flex flex-col gap-2">
                      <li>Wedding Decor</li>
                      <li>Bridal Entry</li>
                      <li>Groom Entry</li>
                      <li>Wedding Games</li>
                      <li>More</li>
                    </ul>
                  </div>

                  <div>
                    <h1 className="text-pink-500 font-semibold text-[16px]">
                      Groom Wear
                    </h1>
                    <ul className="text-[13px] mt-2 flex flex-col gap-2">
                      <li>Sherwani for Groom</li>
                      <li>Wedding Suits for Groom</li>
                      <li>More</li>
                    </ul>
                  </div>

                  <div>
                    <h1 className="text-pink-500 font-semibold text-[16px]">
                      Jewellery & Accessories
                    </h1>
                    <ul className="text-[13px] mt-2 flex flex-col gap-2">
                      <li>Bridal Jewellery</li>
                      <li>Engagement Rings</li>
                      <li>Floral Jewellery</li>
                      <li>More</li>
                    </ul>
                  </div>

                  <div>
                    <h1 className="text-pink-500 font-semibold text-[16px]">
                      Wedding Card Designs
                    </h1>
                    <ul className="text-[13px] mt-2 flex flex-col gap-2">
                      <li>Designs</li>
                      <li>Wedding Gifts</li>
                      <li>Wedding Invitations</li>
                      <li>More</li>
                    </ul>
                  </div>

                  <div>
                    <h1 className="text-pink-500 font-semibold text-[16px]">
                      Bridal Makeup & Hair
                    </h1>
                    <ul className="text-[13px] mt-2 flex flex-col gap-2">
                      <li>Bridal Makeup</li>
                      <li>Bridal Hairstyles</li>
                      <li>Engagement</li>
                      <li>Mehndi</li>
                      <li>More</li>
                    </ul>
                  </div>

                  <div>
                    <h1 className="text-pink-500 font-semibold text-[16px]">
                      Mehndi
                    </h1>
                    <ul className="text-[13px] mt-2 flex flex-col gap-2">
                      <li>Arabic</li>
                      <li>Mehndi Designs</li>
                      <li>Simple</li>
                      <li>Unique</li>
                      <li>More</li>
                    </ul>
                  </div>

                  <div>
                    <h1 className="text-pink-500 font-semibold text-[16px]">
                      Wedding Photography
                    </h1>
                    <ul className="text-[13px] mt-2 flex flex-col gap-2">
                      <li>Pre Wedding Shoot</li>
                      <li>Wedding</li>
                      <li>Wedding Photoshoot & Poses</li>
                      <li>More</li>
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
