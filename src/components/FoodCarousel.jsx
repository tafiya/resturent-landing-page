import { useEffect, useRef } from "react";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import burger from "../assets/images/burger.png";
import fries from "../assets/images/fries.png";
import pizza from "../assets/images/pizza 1.png";
import popular from "../assets/images/popular-side.png";
import shimp from "../assets/images/shimp.png";
import "./ipl.css";

const FoodCarousel = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        console.log(sliderRef);
    }, []);
    const foodItems = [
        {
            id: 1,
            title: "VEGETABLES BURGER",
            description: "Barbecue Italian cuisine pizza",
            image: burger,
        },
        {
            id: 2,
            title: "SPACIAL PIZZA",
            description: "Barbecue Italian cuisine pizza",
            image: pizza,
        },
        {
            id: 3,
            title: "SPACIAL FRENCH FRIES",
            description: "Barbecue Italian cuisine",
            image: fries,
        },
        {
            id: 4,
            title: "CUISINE CHICKEN",
            description: "Japanese Cuisine Chicken",
            image: shimp,
        },
        {
            id: 5,
            title: "VEGETABLES BURGER",
            description: "Barbecue Italian cuisine pizza",
            image: burger,
        },
        {
            id: 6,
            title: "SPACIAL PIZZA",
            description: "Barbecue Italian cuisine pizza",
            image: pizza,
        },
        {
            id: 7,
            title: "SPACIAL FRENCH FRIES",
            description: "Barbecue Italian cuisine",
            image: fries,
        },
        {
            id: 8,
            title: "CUISINE CHICKEN",
            description: "Japanese Cuisine Chicken",
            image: shimp,
        },
    ];
    const settings = {

        // infinite: false,
        // speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024, // lg screens and below
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // md screens and below
                settings: {
                    slidesToShow: 2,
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

                            <h1 className=" lg:text-[62px] text-[40px] bebas-neue-regular ">POPULAR FOOD ITEMS</h1>
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
                                        <div className="bg-white p-8 h-[306px] w-[250px]">
                                            <div className="flex mb-5 items-center justify-center">
                                                <img src={item.image} alt={item.title} />
                                            </div>
                                            <div className="flex  items-center justify-center">
                                                <div className="w-[57px]  h-[4px] bg-[#B52B1D]  "></div>
                                            </div>

                                            <h3 className="text-center bebas-neue-regular text-xl mt-5 mb-2 ">{item.title}</h3>
                                            <p className="text-center text-base inter text-[#0A1425]">{item.description}</p>
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
            <div className=" lg:flex absolute hidden left-0 -bottom-[1750px] ">
                <img src={popular} alt="" />
            </div>
        </div>


    );
};

export default FoodCarousel;
