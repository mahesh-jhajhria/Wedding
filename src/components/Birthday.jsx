import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Birthdayactiviti from './Birthdayactiviti';



const Photu = [
    {
        img: "https://birthdaybumps.co.in/images/Themes/custom/Customized-Butterfly-Theme.jpg",
        title: "Mehndi Designs",
    },
    {
        img: "https://i.ytimg.com/vi/pWtPYe1YZcU/maxresdefault.jpg",
        title: "Grand Entrance of An Indian First Birthday Party at Verdi",
    },
    {
        img: "https://5.imimg.com/data5/SELLER/Default/2022/10/UG/CA/LS/140835129/birthday-photography-service.jpg",
        title: "Grand Entrance of An Indian 4th Birthday Party at Verdi",
    },
    {
        img: "https://t4.ftcdn.net/jpg/06/86/65/15/360_F_686651520_47VhoWLki4NJHvpUMoUGc53GdqOeqbWI.jpg",
        title: "Wedding Decor",
    },
    {
        img: "https://www.hamaraevent.com/lib/js/kcfinder/upload/images/image6%289%29.jpeg",
        title: "How To Celebrate Your Child's 10th Birthday",
    },
    {
        img: "https://birthdaybumps.co.in/images/Themes/custom/Customized-Naming-Ceremony-Theme.jpg",
        title: "Solid Birthday Party Decorations with Luxurious Lightin",
    },
    {
        img: "https://5.imimg.com/data5/HP/DJ/EO/SELLER-108996070/birthday-party-event-services.jpg",
        title: "Wedding Makeup",
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4lSchq6eLSPMn3aZakUtuwYkiJ3QEm-0UFQ&s",
        title: "Birthday Party Organisers in Delhi, Party planner in Delhi NCR",
    },
];




const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <button
            className={`${className} absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-3  rounded-full z-10`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
            <FaArrowLeft className="text-black text-xl w-[25px] h-[25px] bg-neutral-200 p-1 ml-[-15px] rounded-2xl" />
        </button>
    );
};

const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <button
            className={`${className} absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-3 rounded-full z-10`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
            <FaArrowRight className="text-black text-xl w-[25px] h-[25px] bg-neutral-200 p-1 ml-[-0px] rounded-2xl" />
        </button>
    );
};


function Birthday() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />
    };
  return (
    <div className="px-14 mb-6">
            <h1 className="text-[19px] font-semibold  mt-5 mb-4">Birthday Partys</h1>
            
            <Slider {...settings}>
            
            {Photu.map((photu, index) => (
                <div className='flex justify-between mb-8'>
                <div key={index} className="flex flex-col justify-center items-center bg-slate-100 rounded-lg w-[350px] gap-3  h-[270px] ">
                    <img src={photu.img} className="h-[240px]  w-[350px] p-2  rounded-xl transition delay-150 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110  " alt={photu.title} />
                    <p className="font-semibold text-[13px] mb-2 text-slate-600 ">{photu.title}</p>
                </div>
                </div>
            ))}
            
        </Slider>



        <Birthdayactiviti/>
            
            </div>
  )
}

export default Birthday;