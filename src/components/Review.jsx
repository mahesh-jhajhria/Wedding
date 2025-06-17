import React from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Footer from './Footer'

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";



function Review() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div>
        <div className='flex flex-col z-50 opacity-100 h-[250px] bg-slate-500 relative '>
            <h1 className='flex justify-center mt-12 text-[23px]'>Write a Review for your Wedding Vendors</h1>
            <p className='flex justify-center  w-full pl-40 pr-40 mt-3'>Had a great experience with your wedding photographer? Or the food at the venue left you disappointed? Please tell us your</p> 
            <p className='flex justify-center'>experience below. Your reviews help other engaged couples in making informed decisions.</p>
        </div>
        <div className='flex justify-center  h-auto mb-5' >
            <form className='w-[800px] h-auto bg-slate-100 flex flex-col justify-center p-10 absolute -mt-[100px] z-50 rounded-lg  '>
                <label htmlFor='name'>Select a Vendor</label>
                <Input type="name" placeholder="Type vendor name*" className="mt-3" />
                 
                <label htmlFor='name' className='mt-3'>Rate Vendor*</label>

                <Card className="p-4 w-full mt-4 mx-auto text-center">
      <CardContent className="flex justify-center gap-2 p-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-8 h-8 cursor-pointer transition-colors ${
              (hover || rating) >= star ? "text-yellow-400" : "text-gray-300"
            }`}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            onClick={() => setRating(star)}
          />
        ))}
      </CardContent>
      <p className="mt-2 text-lg font-medium">
        {rating > 0 ? `You rated: ${rating}/5` : "Rate us!"}
      </p>
    </Card>

                <Textarea placeholder="Tell us about your experience*." className="h-[170px] mt-5" />
                <Input type="number" placeholder="How much did you spend on this vendor?" className="mt-3" />
                <div className='flex flex-row justify-end mt-4 gap-4'>

                <Button variant="destructive" className="bg-white text-black">Submit Review</Button>
                <Button variant="destructive" className="hover:bg-red-900" >Submit Review</Button>
                </div>
              

            </form>
            
        </div>
           <div className='  container  p-12'>
           <h1 className='mt-[600px] font-bold text-slate-600 text-[15px]  '>Webname - Your Personal Wedding Planner</h1>
        <p className='text-[14px] mt-2'>Plan your wedding with Us</p>
        <p className='text-[14px] mt-2'>WedMeGood is an Indian Wedding Planning Website and app where you can find the best wedding vendors, with prices and reviews at the click of a button. Whether you are looking to hire wedding planners in India, or looking for the top photographers, or just some ideas and inspiration for your wedding. WedMeGood can help you solve your wedding planning woes through its unique features. With a checklist, detailed vendor list, inspiration gallery and blog - you won't need to spend hours planning a wedding anymore.</p>
   

           </div>
       
        <Footer/>
    </div>
  )
}

export default Review