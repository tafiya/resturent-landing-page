import { FaRegClock } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { MdOutlineMailOutline } from "react-icons/md";

const Address = () => {
    return (
        <div className=" grid lg:grid-cols-4 grid-cols-1 lg:gap-6 gap-6 lg:mt-[80px] mt-6">

            <div className=" flex flex-col items-center gap-4">
                <div className=" ">
                    <FaRegClock size={'2rem'} color="#FEBF00" />
                </div>
                <div className=" text-center">
                    <h2 className=" text-2xl bebas-neue-regular">
                        fast delivery
                    </h2>
                    <p className="roboto-regular text-base">
                        Monday - Sunday <br />
                        9:00 AM to 11:30 PM
                    </p>
                </div>

            </div>
            <div className=" flex flex-col items-center gap-4">
                <div className=" ">
                    <FiPhoneCall size={'2rem'} color="#FEBF00" />
                </div>
                <div className=" text-center">
                    <h2 className=" text-2xl bebas-neue-regular">
                        LET'S TALK
                    </h2>
                    <p className="roboto-regular text-base">
                        Phone: 1-800-222-4545 <br />
                        Fax: 1-800-222-4545
                    </p>
                </div>

            </div>
            <div className=" flex flex-col items-center gap-4">
                <div className=" ">
                    <MdOutlineMailOutline size={'2rem'} color="#FEBF00" />
                </div>
                <div className=" text-center">
                    <h2 className=" text-2xl bebas-neue-regular">
                        BOOK A TABLE
                    </h2>
                    <p className="roboto-regular text-base">
                        Email: demo@website.com <br />
                        Support: support@website.com
                    </p>
                </div>

            </div>
            <div className=" flex flex-col items-center gap-4">
                <div className=" ">
                    <GrLocation size={'2rem'} color="#FEBF00" />
                </div>
                <div className=" text-center">
                    <h2 className=" text-2xl bebas-neue-regular">
                        Our Address
                    </h2>
                    <p className="roboto-regular text-base">
                        123 Stree New York City , United <br /> States Of America.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Address;