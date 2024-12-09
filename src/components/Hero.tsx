"use client";
import React from "react";
import Navbar from "./Navbar";

import { TypeAnimation } from "react-type-animation";

const Hero = () => {
const handleClick = () => {

  const resumeUrl = "https://hackathon-milestones-sable.vercel.app/";
  window.open(resumeUrl, "_blank", "noopener,noreferrer");
};

  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat bg-[url(/profile.jpg)] bg-right lg:bg-[40%] sm:bg-[30%] flex flex-col"
      style={{
        backgroundSize: "30%",
        backgroundPosition: "right 100px top 100px",
      }}
    >
      <Navbar />
      <div className="container grid lg:grid-cols-1 h-[calc(100vh-60px)]">

        <div className="font-bold leading-tight justify-center items-center mt-0 pt-10 sm:pt-14 lg:pt-20">
          <div>
            <p className="text-[60px] sm:text-[80px] sm: 2/4 font-bold leading-tight">
              ℑ'𝔪
            </p>
            <p className="text-[60px] sm:text-[80px] sm:2/4 font-bold leading-tight">
              ℌ𝔲𝔟𝔞𝔟
            </p>
            <p className="text-[60px] sm:text-[80px] sm:2/4 font-bold leading-tight">
              ℑ𝓀𝔯𝔞𝔪
            </p>

          </div>
          <div className="bg-gray-600 h-[4px] w-[530px] overflow-x-hidden md:block sm:min-w-screen mt-4 mr-16"></div>
           <div className="overflow-x-hidden max-w-[800px] sm:block 
mr-16 pr-8 md:block">
          <h3 className="text-2xl mt-3 mr-10">
  <TypeAnimation
    sequence={[
      "Frontend Developer",
      1000,
      "Food Technologist",
      1000,
      "UI/UX Web Designer",
      1000,
    ]}
    wrapper="span"
    speed={50}
    style={{ fontSize: "2em", display: "inline-block" }}
    repeat={Infinity}
    className="text-[#FD8D30]"
  />
</h3>
<div data-aos="zoom-in"className="mt-2 text-lg font-semibold text-gray-400">
 <p > Fusing strategy and creativity to create experiences that resonate. </p>
 <p > Thriving on complexity, delivering simplicity with impact.
</p>
</div>
</div>
<button
            onClick={handleClick}
            className="inline-block mt-6 px-8 py-3 font-semibold text-white rounded-lg shadow-md bg-gradient-to-r from-teal-500 via-orange-500 to-gray-700 
            hover:from-yellow-300 hover:via-red-400 hover:to-gray-500 transition-all duration-300"
          >
            View Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
