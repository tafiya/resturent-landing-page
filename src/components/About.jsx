import { useState } from "react";
import { LuPhoneCall } from "react-icons/lu";
import aboutSide from "../assets/images/about-side.png";
import about from "../assets/images/about.png";
import market from "../assets/images/Market Place.png";
import Services from "./Services";

const About = () => {
    const [activeTab, setActiveTab] = useState("about");
    return (
        <div className="">
            <div className=" max-w-screen-[1920px] mx-auto lg:px-[300px] my-[120px] flex items-center justify-center">
                <div>
                    <div className=" flex flex-col sm:flex-row text-black gap-8 ">
                        <div className=" lg:w-[617px] w-[330px] h-[247px] lg:h-[460px]">
                            <div className=" relative">
                                <img src={about} alt="" />
                            </div>
                            <div className="absolute  lg:-bottom-[650px] -bottom-[420px] ">
                                <img src={market} className="lg:w-[241px] lg:h-[136px] w-[128px] h-[73px]" alt="" />
                            </div>

                        </div>
                        <div className="lg:w-[624px] w-[300px] h-[478px]  lg:h-[460px]">
                            <div className="lg:h-[314px]">
                                {/* Tab Navigation */}
                                <div className="flex items-center lg:gap-8 gap-4 border-b border-[#B52B1D] ">
                                    <button
                                        className={`font-semibold px-4 py-2  ${activeTab === "about" ? "bg-[#B52B1D] text-white" : "text-gray-800 hover:text-[#B52B1D]"}`}
                                        onClick={() => setActiveTab("about")}
                                    >
                                        About
                                    </button>
                                    <button
                                        className={`font-semibold px-4 py-2  ${activeTab === "experience" ? "bg-[#B52B1D] text-white" : "text-gray-800 hover:text-[#B52B1D]"}`}
                                        onClick={() => setActiveTab("experience")}
                                    >
                                        Experience
                                    </button>
                                    <button
                                        className={`font-semibold px-4 py-2  ${activeTab === "contact" ? "bg-[#B52B1D] text-white" : "text-gray-800 hover:text-[#B52B1D]"}`}
                                        onClick={() => setActiveTab("contact")}
                                    >
                                        Contact
                                    </button>
                                </div>


                                <div className="mt-3">
                                    {activeTab === "about" && (
                                        <div>
                                            <h1 className="lg:text-[53px] text-[40px] lg:leading-[62px] leading-[48px] font-bold bebas-neue-regular mb-2">EXCEPTIONAL CULINARY EXPERIENCE AND DELICIOUS FOOD</h1>
                                            <p className="text-black text-base leading-relaxed roboto-regular">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.
                                            </p>
                                        </div>
                                    )}
                                    {activeTab === "experience" && (
                                        <div>
                                            <h1 className="text-4xl font-bold mb-4">Our Experience</h1>
                                            <p className="text-gray-700 text-base leading-relaxed">
                                                We bring years of culinary expertise to create an unforgettable dining experience. Our chefs are dedicated to providing high-quality dishes that are as delightful to look at as they are to eat.
                                            </p>
                                        </div>
                                    )}
                                    {activeTab === "contact" && (
                                        <div>
                                            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                                            <p className="text-gray-700 text-base">
                                                Feel free to reach out to us for reservations, catering services, or any inquiries. We look forward to serving you and ensuring a memorable experience.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className=" flex items-center gap-8 mt-5">
                                <button className="lg:w-[180px] w-[149px] lg:h-[56px] h-[48px] px-4 py-4 gap-2 bg-[#FEBF00] roboto-bold text-base lg:text-lg">About More</button>
                                <button className="lg:w-[204px] w-[167px] flex lg:h-[56px] h-[48px] items-center lg:pr-6 py-4 gap-2  roboto-bold text-base lg:text-lg"> <LuPhoneCall color="#B52B1D" />+88 3426 739 485</button>
                            </div>
                        </div>

                    </div>
                    <Services></Services>
                </div>


            </div>
            <div className=" lg:flex absolute hidden right-0 -bottom-[900px] ">
                <img src={aboutSide} alt="" />
            </div>

        </div>

    );
};

export default About;