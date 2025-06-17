 

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Photu = [
    {
        img: "https://m.media-amazon.com/images/I/81Bbc1R5-HL.jpg",
        title: "Bouncing Castle",
    },
    {
        img: "https://s.alicdn.com/@sc04/kf/Hc0e95d1dfe4940c19e7133021fef0c67e.jpg_300x300.jpg",
        title: "Balloons Fun Shooting",
    },
    {
        img: "https://www.thesprucecrafts.com/thmb/Y672BWFJB950qUCg8w9aiNT_OQk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-90339990-586b54d73df78ce2c33d2deb.jpg",
        title: "Balloon Modelling",
    },
    {
        img: "https://www.megawecare.com/_next/image?url=https%3A%2F%2Fcdn.megawecare.com%2FGHBY%2FFeatured-Images%2F1730956150973-Best_Outdoor_Games_For_Kids_876X400.webp&w=1920&q=75",
        title: "Outdoor Games",
    },
    {
        img: "https://www.signupgenius.com/cms/images/home/50%20Fun%20Exercises%20for%20Kids_1260x630.png",
        title: "Fun Activities",
    },
    {
        img: "https://assets.gqindia.com/photos/645c750df0141edcb0cc1771/16:9/w_2560%2Cc_limit/100-best-games-hp-b.jpg",
        title: "Video Games",
    },
    {
        img: "https://cdn.britannica.com/57/162557-131-CF5A76E7/Billiards-Woman-pool-game.jpg",
        title: "Pool ",
    },
    {
        img: "https://m.media-amazon.com/images/I/61L4-xDMsvL._AC_UF350,350_QL80_.jpg",
        title: "Face Painting ",
    },
];

const CustomPrevArrow = (props) => {
    return (
        <button 
            className="absolute left-0 top-1/2 transform -translate-y-1/2  p-1 rounded-full z-10"
            onClick={props.onClick}
        >
            <FaArrowLeft className=" text-xl w-[20px] h-[20px] bg-neutral-200 p-1 rounded-2xl" />
        </button>
    );
};

const CustomNextArrow = (props) => {
    return (
        <button 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-1 rounded-full z-10"
            onClick={props.onClick}
        >
            <FaArrowRight className=" text-xl w-[20px] h-[20px] bg-neutral-200 p-1 rounded-2xl" />
        </button>
    );
};

function Birthdayactiviti() {
    const [selectedImg, setSelectedImg] = useState(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />
    };

    return (
        <div className="w-full h-[300px] bg-orange-500 mt-6">
            <h1 className="text-[19px] font-semibold flex justify-center text-white mt-8 pt-5 mb-4">
                Fun Activities for Birthday Party
            </h1>

            <Slider {...settings}>
                {Photu.map((photu, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="w-[200px] h-[150px] bg-white ml-10 cursor-pointer transition-transform transform hover:scale-110"
                            onClick={() => setSelectedImg(photu.img)}
                        >
                            <img src={photu.img} className="w-full h-full p-3  object-cover" alt={photu.title} />
                        </div>
                        <h1 className="flex justify-center text-white mt-2">{photu.title}</h1>
                    </div>
                ))}
            </Slider>

            {/* Image Popup */}
            {selectedImg && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-50  flex justify-center items-center">
                    <div className="relative">
                        <span
                            className="absolute top-2 right-2 text-black text-3xl cursor-pointer"
                            onClick={() => setSelectedImg(null)}
                        >
                            &times;
                        </span>
                        <img src={selectedImg} className="w-[500px] h-[350px] rounded-lg shadow-lg" alt="Popup" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Birthdayactiviti;
