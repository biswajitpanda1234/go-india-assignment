import { FaUserAlt } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import { FaSquarePen } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaCaretRight } from "react-icons/fa";
import { useState } from "react";
export default function Leftbar({showNavbar, setShowNavbar}) {

    const toggleNavbar = ()=>{
        setShowNavbar(!showNavbar);
    }

    return (
        <>
            <div className="w-full text-white h-[100vh] flex items-center">
                {/* left navbar main section */}
                <div className="bg-[#1E375F] w-[97%] z-10 leading-[3rem] text-lg h-[100%]">
                    <div className="flex  justify-between px-4 my-5 h-12 items-center mx-3">
                        <div className="flex items-center">
                            <FaUserAlt size={30} className=" mx-3 " />
                            <h2 className="text-white ">Hello, User</h2>
                        </div>
                        <FaBell size={30} className=" mx-3 " />
                    </div>
                    <hr className="bg-white" />

                    {/* discussion forum */}
                    <div className="mt-4">
                        <div className="flex items-center justify-between
                        hover:bg-[#142341] hover:font-semibold">
                            <div className="flex items-center ">
                                <FaSquarePen size={25} className="mx-2 " />
                                <p>Discussion Forum</p>
                            </div>
                            < FaAngleDown className="mx-2"/>
                        </div>
                        <div className="flex items-center hover:bg-[#142341] hover:font-semibold">
                            <AiFillDollarCircle size={25} className="mx-2" />
                            <p>Market Stories</p>
                        </div>

                        <p className="hover:bg-[#142341] hover:font-semibold pl-10">Sentiment</p>
                        <p className="hover:bg-[#142341] hover:font-semibold pl-10">Market</p>
                        <p className="hover:bg-[#142341] hover:font-semibold pl-10">Sector</p>
                        <p className="hover:bg-[#142341] hover:font-semibold pl-10">Watchlist</p>
                        <p className="hover:bg-[#142341] hover:font-semibold pl-10">Events</p>
                        <p className="hover:bg-[#142341] hover:font-semibold pl-10">News/Interview</p>

                    </div>

                </div>


                {/* navbar button section */}
                <div>
                    <div className="bg-[#1E375F] h-28 flex items-center">
                        <FaCaretRight size={20} className="lg:block hidden"/>
                        <FaCaretRight size={20} className="lg:hidden block hover:cursor-pointer" onClick={toggleNavbar}/>
                    </div>
                </div>
            </div>
        </>
    )
}
