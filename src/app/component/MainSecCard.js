import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegCommentAlt } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

export default function MainSecCard({imgSrc, heading, description, view, like , comment,share, time}) {
    return (
        <>

            <div className="flex py-2 pl-8 shadow-[4px_3px_8px_0px_rgba(0,0,0,0.31)] leading-5 my-9">
                {/* user img  */}
                <div className="bg-red-100 h-12 w-12 rounded-full mr-3 md:h-16 md:w-16">
                    <Image src={imgSrc} width={100} height={100} alt="image" className="object-cover h-full w-full"/>
                </div>
                {/* other than img*/}
                <div className="w-[70%] mt-3">
                    {/* card nav */}
                    <div className="flex">
                        <h2 className="font-semibold">{heading} </h2>
                        <h2 className="bg-[#2355A0] mx-4 px-3 text-white text-xs flex items-center rounded-xl ">Sector 2</h2>
                    </div>

                    <div className="my-2 text-xs">
                        <p>{description}</p>
                    </div>

                    <div className="text-black flex items-center justify-between text-[12px] md:text-xs">
                        <div className="flex items-center"><FaRegHeart />{like}</div>
                        <div className="flex items-center"><MdOutlineRemoveRedEye />{view}</div>
                        <div className="flex items-center"><FaRegCommentAlt />{comment} Comments</div>
                        <div className="flex items-center"><IoShareSocialOutline />{share} Share</div>
                    </div>
                </div>
                <div className="w-[20%] text-right mt-3 text-sm text-blue-700 font-semibold md:w-[15%]">
                    <h2>{time} min ago</h2>
                </div>
            </div>
        </>
    )
}
