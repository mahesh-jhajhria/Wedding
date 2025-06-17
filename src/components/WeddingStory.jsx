import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Photu = [
    {
        img: "https://www.dipakstudios.com/gallery/14594121173.jpeg",
        title: "Ankita and Rishab",
    },
    {
        img: "https://images.unsplash.com/photo-1616165415772-f5b95c3ae135?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlZGRpbmclMjBjb3VwbGV8ZW58MHx8MHx8fDA%3D",
        title: "Khushi and Deepak",
    },
    {
        img: "https://img.freepik.com/premium-photo/couple-is-sitting-couch-front-curtain-that-says-bride-groom_1113980-1860.jpg",
        title: "Avantika and Divyamm",
    },
    {
        img: "https://t3.ftcdn.net/jpg/04/72/21/72/360_F_472217215_wKbTd8wwwu8vxixhCGiXKKhUEQ9qbdbn.jpg",
        title: "Shahaab and Alisha",
    },
    {
        img: "https://images.pexels.com/photos/6685151/pexels-photo-6685151.jpeg",
        title: "Shivani and Rishab",
    },
    {
        img: "https://t3.ftcdn.net/jpg/06/66/16/08/360_F_666160835_IvddJV7zbgyUtdVTXYfNTjb0T8ctjbM2.jpg",
        title: "Bonish and aaru",
    },
    {
        img: "https://t4.ftcdn.net/jpg/07/31/57/83/360_F_731578370_gtV3KQUf39Gp44squvImaNCjbjsrIZzn.jpg",
        title: "Mohit and Rishika",
    },
    {
        img: "https://cdn0.weddingwire.in/article/1328/3_2/1280/jpg/58231-bridal-couple-deepak-studios-lead.jpeg",
        title: "Rupal and Tanmay",
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


function WeddingStory() {

    const settings = {
        dots: false,           // Neeche dots show karega
        infinite: true,       // Infinite scrolling enable karega
        speed: 0,           // Slide transition speed
        slidesToShow: 3,      // Ek time par 3 images dikhayega
        slidesToScroll: 1,    // Ek time par ek slide move hogi
        autoplay: true,       // Automatic slide change karega
        autoplaySpeed: 1500,  // 2 seconds me slide change hogi
        arrows: true ,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />        
    };
  return (
    <div className="px-14">
            <h1 className="text-[19px] font-semibold  mt-5 mb-4">Real Wedding Stories</h1>
           
            <Slider {...settings}>
            
                {Photu.map((photu, index) => (
                    <div className='flex justify-between mb-8'>
                    <div key={index} className="flex flex-col justify-center items-center  bg-slate-100 rounded-sm w-[380px]    h-[350px] relative  ">
                        <img src={photu.img} className="h-[220px] w-[360px] p-2  rounded-xl top-0 absolute transition delay-150 duration-300 ease-in-out  hover:scale-110  " alt={photu.title} />
                        <p className="font-semibold text-[15px] text-slate-600 mt-36 left-4 absolute">{photu.title}</p>
                    </div>
                    </div>
                ))}
                
            </Slider>
            </div>
  )
}

export default WeddingStory