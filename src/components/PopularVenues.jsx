import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

function PopularVenues() {
  return (
    <div>
      <h1 className="ml-14 mt-16 text-[19px] font-semibold">
        Popular Venue Searches
      </h1>
      <div className=" grid grid-cols-3 gap-4 ">
        <div className="flex flex-col  ">
          <div className="w-[350px] h-[350px] mb-5 mt-4  ml-14">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 8000, disableOnInteraction: false }}
              loop={true}
              className="w-full"
            >
              <SwiperSlide>
                <img
                  src="https://media-cdn.tripadvisor.com/media/photo-s/2c/20/5c/4a/palace-facade-day.jpg"
                  alt="Image 1"
                  className="w-[350px] h-[350px] rounded-xl  "
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/20/5a/17/rambagh-palace-exterior.jpg?w=1200&h=-1&s=1"
                  alt="Image 2"
                  className="w-[350px] h-[350px] rounded-xl  "
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://res.cloudinary.com/simpleview/image/upload/v1686072977/clients/milwaukee/VM_Hilton_Plaza_Suite_King_Room_9b5d673a-95c6-445e-ad6b-5ae85e260f18.jpg"
                  alt="Image 3"
                  className="w-[350px] h-[350px] rounded-xl  "
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex flex-row mt-[-19px] text-slate-500 text-[14px] font-semibold ">
            <p className="ml-[65px] font-serif text-gray-500 mt-2 mb-2">
              {" "}
              5 days & 4 nights
            </p>
            <p className="flex  ml-[140px] font-serif text-gray-500 mt-2">
              5.0 (1.5k)
            </p>
          </div>
          <p className="ml-16  font-serif text-gray-600 text-[15px]">
            Explore our Hotel/ Hotel Hayat /Exclusive deals/<br></br>Luxury
            Hotel
          </p>
        </div>
      

      <div className="flex flex-col  ">
        <div className="w-[350px] h-[350px] mb-5 mt-4  ml-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 8000, disableOnInteraction: false }}
            loop={true}
            className="w-full"
          >
            <SwiperSlide>
              <img
                src="https://images.venuebookingz.com/30389-1734352565-wm-premdeep1.jpg"
                alt="Image 1"
                className="w-[350px] h-[350px] rounded-xl  "
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://image.wedmegood.com/resized/720X/uploads/member/1149177/1585406753_Screenshot_from_2020_03_28_20_08_51.png"
                alt="Image 2"
                className="w-[350px] h-[350px] rounded-xl  "
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://image.wedmegood.com/resized/720X/uploads/member/1221669/1587720502_Screenshot_from_2020_04_24_14_54_06.png"
                alt="Image 3"
                className="w-[350px] h-[350px] rounded-xl  "
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex flex-row mt-[-19px] text-slate-500 text-[14px] font-semibold ">
          <p className="ml-[65px] font-serif text-gray-500 mt-2 mb-2">
            {" "}
            5 days & 4 nights
          </p>
          <p className="flex  ml-[140px] font-serif text-gray-500 mt-2">
            5.0 (1.5k)
          </p>
        </div>
        <p className="ml-16  font-serif text-gray-600 text-[15px]">
          Explore our Hotel/ Hotel Hayat /Exclusive deals/<br></br>Luxury Hotel
        </p>
      </div>
      
        
        <div className='flex flex-col  '>
     
     
     <div className="w-[350px] h-[350px] mb-5 mt-4  ml-10">
     <Swiper
       modules={[Navigation, Pagination, Autoplay]}
       spaceBetween={0}
       slidesPerView={1} 
       navigation
       pagination={{ clickable: true }}
       autoplay={{ delay: 8000, disableOnInteraction: false }}
       loop={true}
       className="w-full"
     >
       <SwiperSlide>
         <img
           src="https://weddingsbyneerajkamra.com/uploads/BlogPictureshow-much-does-a-destination-wedding-at-chomu-palace-jaipur-cost/default/History-of-Chomu-Palace.jpg"
           alt="Image 1"
         className='w-[350px] h-[350px] rounded-xl  '
         />
       </SwiperSlide>
       <SwiperSlide>
         <img
           src="https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/985/092/new_medium/unnamed_%283%29.jpg"
           alt="Image 2"
            className='w-[350px] h-[350px] rounded-xl  '
         />
       </SwiperSlide>
       <SwiperSlide>
         <img
           src="https://cdn0.weddingwire.in/vendor/7318/3_2/960/jpeg/weddingvenue-shrii-vilaas-banqurt-hall-3_15_457318-169821969399387.jpeg"
           alt="Image 3"
            className='w-[350px] h-[350px] rounded-xl  '
         />
       </SwiperSlide>
     </Swiper>
     </div>
     <div className='flex flex-row mt-[-19px] text-slate-500 text-[14px] font-semibold '>
     
     <p className='ml-[65px] font-serif text-gray-500 mt-2 mb-2'> 5 days & 4 nights</p>
     <p className='flex  ml-[140px] font-serif text-gray-500 mt-2'>
         5.0 (1.5k)
     </p>
     </div>
     <p className='ml-16  font-serif text-gray-600 text-[15px]'>Explore our Chomu / Chomu Palace /Exclusive deals/<br></br>Luxury Palace</p>
        
     </div>
         
         </div>  
    </div>

  );
}

export default PopularVenues;
