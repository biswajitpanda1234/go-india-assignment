'use client'
import React, { useRef, useState, useEffect } from 'react';
import Leftbar from "./component/Leftbar";
import MainSection from "./component/MainSection";
import Rightbar from "./component/Rightbar";
export default function Home() {
  const discussion = useRef(null);
  const market = useRef(null);

  const [showmainSec, setShowmainSec] = useState(true)
  const [showrightBar, setShowrightBar] = useState(false)
  const navclick = (e) => {
    discussion.current.classList.remove("active");
    market.current.classList.remove("active");
    e.target.classList.add("active");
    if (e.target.innerHTML === "Market Stories") {
      setShowmainSec(false)
      setShowrightBar(true)
    }
    else {
      setShowmainSec(true)
      setShowrightBar(false)
    }
  }

  // to show or hide left navbar 

  const [showNavbar, setShowNavbar] = useState(false)
 
 
  
  return (
    <>
      {/* small screen navbar only visible for small screen*/}
      <div className="flex w-[100vw] md:hidden text-white">
        <div className="w-2 bg-[#0b1423]"></div>
        <button className="bg-[#1E375F] w-[50%] text-center py-3 my-1 active" ref={discussion} onClick={navclick}>Discussion Forum</button>
        <button className="bg-[#1E375F] w-[50%] text-center py-3 my-1" ref={market} onClick={navclick}>Market Stories</button>
        <div className="w-2 bg-[#0b1423] "></div>
      </div>


      {/* small screen navbar only visible for small screen*/}

      <div className="flex lg:w-[100vw] overflow-hidden ">
        <div className={`lg:w-[28vw] lg:relative lg:translate-x-0 absolute  ${showNavbar ? `translate-x-0` : `translate-x-[-93%]`} transition duration-300 ease-out ]`}>

          <Leftbar showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
        </div>
        <div className='flex lg:w-[72vw] md:w-[100vw] h-[100vh] overflow-auto scroll'>
          <div className={` md:w-[70%] md:block ${showmainSec ? `w-[100%]` : ` hidden`}`}>
            <MainSection />
          </div>
          <div className={` md:w-[30%] md:block ${showrightBar ? `w-[100vw] text-center` : `hidden`}`} >
            <Rightbar />
          </div>
        </div>

      </div>


    </>
  );
}
