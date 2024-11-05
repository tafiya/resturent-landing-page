import { useEffect, useRef } from "react";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import person from "../assets/images/Image.png";
import left from "../assets/images/testimonial-side.png";
import right from "../assets/images/testimonial-side-right.png";
import video from "../assets/images/Video.png";
import comma from "../assets/images/“.png";
import "./ipl.css";

const Testimonial = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        console.log(sliderRef);
    }, []);
    const foodItems = [
        {
            id: 1,
            name: "Khalid Al Dawsry",
            address: "Jeddah, Saudi",
            description: "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.",
            image: video,
        },
        {
            id: 2,
            name: "Khalid Al Dawsry",
            address: "Jeddah, Saudi",
            description: "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.",
            image: video,
        },
        {
            id: 3,
            name: "Khalid Al Dawsry",
            address: "Jeddah, Saudi",
            description: "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.",
            image: video,
        },

    ];
    const settings = {

        // infinite: false,
        // speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024, // lg screens and below
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // md screens and below
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640, // sm screens and below
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
        customPaging: (i) => (
            <div
                style={{
                    position: "absolute",
                    width: "100%",
                    top: "-10px",
                    opacity: 0,
                }}
            >
                {i}
            </div>
        ),
    };
    return (
        <div>
            <div className=" bg-[#FBF7F2]">
                <div className="max-w-screen-[1920px] mx-auto lg:px-[300px] py-[120px] px-10">
                    <div className="flex justify-between mb-4  ">
                        <div className=" lg:pl-0 pl-8 ">
                            <div className=" flex items-center gap-[10px] roboto-bold">
                                <div className="w-[10px] h-[10px] bg-[#BD1F17]"></div>
                                <h1 className="lg:text-xl text-base text-[#BD1F17]">Crispy, Every Bite Taste</h1>
                            </div>

                            <h1 className=" lg:text-[62px] text-[40px] bebas-neue-regular ">What Some of my Customers Say</h1>
                        </div>
                        <div className="hidden md:flex">
                            <div
                                onClick={() => sliderRef.current.slickPrev()}
                                className="w-9 h-9 flex items-center justify-center mr-2 rounded-full shadow-md cursor-pointer bg-white  "
                            >
                                <MdOutlineArrowBackIos size="18px" />
                            </div>
                            <div
                                onClick={() => sliderRef.current.slickNext()}
                                className="w-9 h-9 flex items-center justify-center rounded-full shadow-md cursor-pointer bg-white "
                            >
                                <MdOutlineArrowForwardIos color="#BD1F17" size="18px" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 relative lg:px-0 px-8">
                        <div className="">
                            <Slider ref={sliderRef} {...settings} >
                                {foodItems.map((item) => (
                                    <div key={item.id} className=""> {/* Add padding to create gap */}
                                        <div className=" flex lg:flex-row flex-col-reverse">
                                            <div className="lg:w-[556.45px] w-[330px] lg:h-[555px] h-[333px] bg-[#FEBF00] ">
                                                <div className="lg:px-[82px] pl-3 pr-20 py-8 lg:py-[82px] " >
                                                    <div className="flex lg:mb-40 mb-2">
                                                        <img src={comma} className=" w-2 h-2" alt={item.title} />
                                                        <p className=" text-xl roboto-regular text-[#0A1425]">{item.description}</p>
                                                    </div>
                                                    <div className="flex lg:px-0 pb-2 border-b-2 border-black px-6 justify-between items-center">
                                                        <div>
                                                            <h3 className="text-center bebas-neue-regular text-xl ">{item.name}</h3>
                                                            <h3 className="text-center roboto-regular text-sm  ">{item.address}</h3>
                                                        </div>
                                                        <img src={person} className=" w-10 h-10" alt={item.title} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="lg:w-[763.6px] w-[330px]  ">
                                                <img src={item.image} className="lg:h-[555px] h-[240px]" alt={item.title} />
                                            </div>
                                        </div>
                                    </div>
                                ))}



                            </Slider>
                        </div>

                        {/* Arrow buttons for medium and small screens */}
                        <div className="flex justify-center mt-4 md:hidden">
                            <div
                                onClick={() => sliderRef.current.slickPrev()}
                                className="w-9 h-9 flex items-center justify-center mr-2 rounded-full shadow-md cursor-pointer bg-white"
                            >
                                <MdOutlineArrowBackIos size="18px" />
                            </div>
                            <div
                                onClick={() => sliderRef.current.slickNext()}
                                className="w-9 h-9 flex items-center justify-center rounded-full shadow-md cursor-pointer bg-white "
                            >
                                <MdOutlineArrowForwardIos color="#BD1F17" size="18px" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" lg:flex absolute hidden left-0 -bottom-[3200px] ">
                <img src={left} alt="" />
            </div>
            <div className=" lg:flex absolute hidden right-0 -bottom-[3500px] ">
                <img src={right} alt="" />
            </div>
        </div>

    );
};

export default Testimonial;