import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaPinterest } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className=" w-full bg-slate-200 p-12 h-[300px] mb-3">
        <div className="grid grid-cols-5   gap-[160px]">
          <div className="flex flex-col w-[200px] ">
            <h1 className="text-[25px] font-bold ">Website name</h1>
            <pre className="text-[15px] font-sans mt-4">
              Get personalized digital invitations for<br></br>
              weddings, birthdays, and special events.<br></br>
              Unique designs, quality, and exceptional<br></br>
              service to make your celebrations<br></br>
              unforgettable.
            </pre>
            <div className="flex gap-7 text-[28px] mt-4 cursor-pointer">
            <FaFacebook />
            <FaSquareInstagram />
            <IoLogoYoutube />
            <FaPinterest />
            </div>

          </div>
          <div className="text-[14px]  mt-2 w-[200px] ml-[90px] ">
            <h1 className="text-[16px] font-semibold w-[200px] mb-3 ">COMPANY INFO</h1>
            <ul className="text-[14px] font-semibold text-slate-500">
              <li>Our Mission</li>
              <li>Our MVision</li>
              <li>Our Story</li>
              <li>Our Core Values</li>
              <li>Company Milestones</li>
            </ul>
          </div>
          <div className="text-[14px]  mt-2 w-[200px] ml-[40px] ">
            <h1 className="text-[16px] font-semibold w-[200px] mb-3">CATEGORY</h1>
            <ul className="text-[14px] font-semibold text-slate-500">
              <li>Wedding Invites</li>
              <li>House Warming</li>
              <li>Brithday Invites</li>
            </ul>
          </div>
          <div className="text-[14px]  mt-2 w-[200px] ml-[-40px] ">
            <h1 className="text-[16px] font-semibold w-[200px] mb-3 ">BLOG</h1>
            <ul className="text-[14px] font-semibold text-slate-500">
              <li>Psyclology behind</li>
              <li>Invitation</li>
              <li>Wedding stationary guide</li>
              <li>Story telling invitation</li>
              <li>Luxury passport invitation</li>
            </ul>
          </div>
          <div className="text-[14px]  mt-2 w-[150px] ml-[-60px] ">
            <h1 className="text-[16px] font-semibold mb-3  ">CONTACT US</h1>
            <ul className="text-[14px] font-semibold text-slate-500">
              <li>Contact Here</li>
              <li>Email Us </li>
              <li>+910000000000</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
