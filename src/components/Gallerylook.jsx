// import React from 'react'


// const Photu =[
//     {
//         img:"https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
//         title:"Mehndi Designs",
//     },
//      {
//         img:"https://3.imimg.com/data3/PP/VR/MY-12117266/6110.jpg",
//         title:"Wedding Jewellery",
//     },
//     {
//         img:"https://i.pinimg.com/originals/4a/eb/3b/4aeb3b1690a6e0c375a4febf9de12f27.jpg",
//         title:"Wedding Makeup",
//     },
//     {
//         img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZxYI4lLRnKBTyTXR3s2fKtnY9b_I5n2oznQ&s",
//         title:"wedding Decor",
//     },
  
// ]


// function Gallerylook() {
//   return (
//     <div>

//        <h1  className="ml-14 text-[19px] font-semibold mt-5">Gallery to Look for</h1>
//        <div className='grid grid-cols-4 mb-8 mt-4 ml-14'>
//         {
//             Photu.map((photu)=>{
//                 return(

                    
//                     <div className='flex flex-col justify-center items-center bg-slate-100 rounded-lg w-[240px] h-[270px]  '>
//                         <img src={photu.img} className='h-[240px] w-[240px] p-2 rounded-xl '/>
//                         <p className='font-semibold text-[15px] text-slate-600'>{photu.title}</p>
//                     </div>
        
                

//                 )
//             })
//         }
      
//       </div>
        
//     </div>
//   )
// }

// export default Gallerylook



import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const Photu = [
    {
        img: "https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
        title: "Mehndi Designs",
    },
    {
        img: "https://3.imimg.com/data3/PP/VR/MY-12117266/6110.jpg",
        title: "Wedding Jewellery",
    },
    {
        img: "https://i.pinimg.com/originals/4a/eb/3b/4aeb3b1690a6e0c375a4febf9de12f27.jpg",
        title: "Wedding Makeup",
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZxYI4lLRnKBTyTXR3s2fKtnY9b_I5n2oznQ&s",
        title: "Wedding Decor",
    },
    {
        img: "https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
        title: "Mehndi Designs",
    },
    {
        img: "https://3.imimg.com/data3/PP/VR/MY-12117266/6110.jpg",
        title: "Wedding Jewellery",
    },
    {
        img: "https://i.pinimg.com/originals/4a/eb/3b/4aeb3b1690a6e0c375a4febf9de12f27.jpg",
        title: "Wedding Makeup",
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZxYI4lLRnKBTyTXR3s2fKtnY9b_I5n2oznQ&s",
        title: "Wedding Decor",
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


function Gallerylook() {
    // Slider Settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />
    };

    return (
        <div className="px-14">
            <h1 className="text-[19px] font-semibold  mt-5 mb-4">Gallery to Look for</h1>
           
            <Slider {...settings}>
            
                {Photu.map((photu, index) => (
                    <div className='flex justify-between mb-8'>
                    <div key={index} className="flex flex-col justify-center items-center bg-slate-100 rounded-lg w-[270px] gap-3  h-[270px] ">
                        <img src={photu.img} className="h-[240px] w-[270px] p-2  rounded-xl transition delay-150 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110  " alt={photu.title} />
                        <p className="font-semibold text-[15px] text-slate-600">{photu.title}</p>
                    </div>
                    </div>
                ))}
                
            </Slider>
            </div>
     
     
    );
}

export default Gallerylook;
