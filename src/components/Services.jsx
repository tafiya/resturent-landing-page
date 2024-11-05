import bag from "../assets/images/bag.png";
import medal from "../assets/images/medal.png";
import delivery from "../assets/images/package.png";

const Services = () => {
    return (
        <div className=" grid lg:grid-cols-3 grid-cols-1 lg:gap-0 gap-6 lg:mt-[120px] mt-6">

            <div className=" flex items-center gap-4">
                <div className=" w-[90px] h-[90px] rounded-full flex items-center justify-center shadow-[0px_7px_16px_0px_rgba(0,0,0,0.1)]">
                    <img src={delivery} className="w-10 h-10 " alt="" />
                </div>
                <div>
                    <h2 className=" text-3xl bebas-neue-regular">
                        fast delivery
                    </h2>
                    <p className="inter text-xl">
                        Within 30 minutes
                    </p>
                </div>

            </div>

            <div className=" flex items-center gap-4">
                <div className=" w-[90px] h-[90px] rounded-full flex items-center justify-center shadow-[0px_7px_16px_0px_rgba(0,0,0,0.1)]">
                    <img src={medal} className="w-10 h-10 " alt="" />
                </div>
                <div>
                    <h2 className=" text-3xl bebas-neue-regular">
                        absolute dining
                    </h2>
                    <p className="inter text-xl">
                        Best buffet restaurant
                    </p>
                </div>

            </div>

            <div className=" flex items-center gap-4">
                <div className=" w-[90px] h-[90px] rounded-full flex items-center justify-center shadow-[0px_7px_16px_0px_rgba(0,0,0,0.1)]">
                    <img src={bag} className="w-10 h-10 " alt="" />
                </div>
                <div>
                    <h2 className=" text-3xl bebas-neue-regular">
                        pickup delivery
                    </h2>
                    <p className="inter text-xl">
                        Grab your food order
                    </p>
                </div>

            </div>

        </div>
    );
};

export default Services;