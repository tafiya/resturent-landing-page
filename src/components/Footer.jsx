import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import footer from "../assets/images/resturent.jpeg";
import Address from "./Address";
const Footer = () => {
    return (
        <div
            className="relative bg-cover bg-no-repeat md:h-[720px] h-[999px]"
            style={{
                backgroundImage: `url(${footer})`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-80"></div>

            {/* Content */}
            <div className="relative max-w-screen-[1920px] mx-auto lg:px-[300px] lg:pt-[80px] pt-8 text-white">
                <div className="lg:pl-0 pl-8">
                    <h1 className="lg:text-[53px] text-[40px] text-center bebas-neue-regular">
                        We’re ready to provide you with the best dining experiences
                    </h1>
                </div>
                <Address />
                <div className="lg:pt-28 pt-8 flex items-center justify-center">
                    <div className=" flex gap-6">
                        <div className=" border border-white p-2 rounded-full">
                            <FaFacebook size={"1.5rem"} />
                        </div>
                        <div className=" border border-white p-2 rounded-full">
                            <FaXTwitter size={"1.5rem"} />
                        </div>
                        <div className=" border border-white p-2 rounded-full">
                            <PiInstagramLogoFill size={"1.5rem"} />
                        </div>
                        <div className=" border border-white p-2 rounded-full">
                            <FaLinkedin size={"1.5rem"} />
                        </div>
                    </div>

                </div>
                <h2 className="pt-8 text-[21px] text-center montserrat">© 2023 <span className=" text-[#FEBF00]">Niomax </span>All Rights Reserved </h2>
            </div>
        </div>

    );
};

export default Footer;