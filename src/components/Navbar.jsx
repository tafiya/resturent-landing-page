import logo from "../assets/images/Frame.png";

import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();

    useEffect(() => {
        const closeDropDown = (e) => {
            if (!dropDownMenuRef?.current?.contains(e?.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);

        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);

    return (
        <div className="fixed z-10  w-full py-[32px]">
            <nav className="flex items-center justify-between px-6 lg:px-[300px] py-2 text-black max-w-screen-[1920px] mx-auto">
                {/* <!-- Start Section: Logo and Menu --> */}
                <div className="flex items-center gap-[60px]">
                    <div className=" flex items-center gap-[6px]">
                        <img src={logo} className="w-[37px] h-[37px]" alt="" />
                        <h2 className='poppins-semibold text-white text-[
28.44px]'>Restau<span className="poppins">rant</span></h2>

                    </div>

                    <ul className="hidden md:flex items-center gap-10 text-white raleway text-[15px]">
                        <li className="group flex cursor-pointer flex-col">
                            Home

                        </li>
                        <li className="group flex cursor-pointer flex-col">
                            About

                        </li>
                        <li className="group flex cursor-pointer flex-col">
                            Portfolio

                        </li>
                        <li className="group flex cursor-pointer flex-col">
                            Client

                        </li>
                        <li className="group flex cursor-pointer flex-col">
                            Blog

                        </li>

                        <li className="group flex cursor-pointer flex-col">
                            Contact

                        </li>
                    </ul>
                </div>

                {/* <!-- End Section: Button --> */}
                <div className="hidden md:flex">
                    <button className="w-[157px] h-[44px] uppercase roboto-bold text-base px-6 py-2 bg-[#FEBF00]">
                        Book a table
                    </button>
                </div>

                {/* <!-- Mobile Menu Icon --> */}
                <div
                    ref={dropDownMenuRef}
                    onClick={() => setDropDownState(!dropDownState)}
                    className="relative flex md:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="cursor-pointer">
                        <line x1="4" x2="20" y1="12" y2="12" />
                        <line x1="4" x2="20" y1="6" y2="6" />
                        <line x1="4" x2="20" y1="18" y2="18" />
                    </svg>
                    {dropDownState && (
                        <ul className="z-10 gap-2 pl-3 py-2 bg-white text-black absolute right-0 top-11 flex w-[200px] flex-col rounded-lg raleway text-[15px]">
                            <li className="group flex cursor-pointer flex-col ">
                                Home

                            </li>
                            <li className="group flex cursor-pointer flex-col">
                                About

                            </li>
                            <li className="group flex cursor-pointer flex-col">
                                Portfolio

                            </li>
                            <li className="group flex cursor-pointer flex-col">
                                Client

                            </li>
                            <li className="group flex cursor-pointer flex-col">
                                Blog

                            </li>

                            <li className="group flex cursor-pointer flex-col">
                                Contact

                            </li>
                        </ul>
                    )}
                </div>
            </nav>
        </div>



    );
};

export default Navbar;

