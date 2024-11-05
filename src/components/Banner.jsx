import offer from "../assets/images/Frame 1707478070.png";
import banner from "../assets/images/image 1.png";
import flower from "../assets/images/Vector.png";

const Banner = () => {
    return (
        <div className="hero bg-custom-gradient max-w-screen-[1920px] min-h-screen pt-24 lg:pt-4">
            <div className="hero-content  lg:gap-0 gap-5 flex-col-reverse lg:flex-row-reverse lg:mt-[162px] lg:mb-[160px]">
                <div className=" lg:relative lg:ml-[34.5rem]">
                    <div className=" absolute lg:-right-5 right-2 lg:-top-7  ">
                        <img src={flower} className="w-10 h-10 mr-0" alt="" />
                    </div>
                    <div className="absolute shadow-[0px_8px_9px_0px_rgba(0,0,0,0.25)] w-[120px] h-[120px] rounded-full  lg:-right-12 right-8 lg:bottom-0 -bottom-9 bg-[#FEBF00] ">
                        <img src={offer} className="w-[105.6px] mt-2 ml-2 h-[105.6px]" alt="" />
                    </div>
                    <img
                        src={banner}
                        className="lg:w-[649px] w-[330px0] h-[310px] lg:h-[700px] " />
                </div>
                <div className=" lg:absolute lg:px-0 px-2 lg:mr-[34.5rem] ">
                    <h1 className="lg:text-[120px] text-[48px] bebas-neue-regular text-white line lg:leading-[130px] leading-[56px] lg:bg-[linear-gradient(90deg,_rgba(189,31,23,0)_32.88%,_rgba(189,31,23,0.7)_100%)]">Taste the authentic<br></br>
                        Saudi cuisine</h1>
                    <p className="py-6 text-white lg:text-2xl text-xl roboto-regular">
                        Among the best Saudi chefs in the world, serving <br></br> you something beyond flavor.
                    </p>
                    <button className="lg:w-[180px] w-[152px] h-[48px] lg:h-[56px] px-4 py-4 bg-[#FEBF00] roboto-bold lg:text-lg text-base">Explore tenu</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
