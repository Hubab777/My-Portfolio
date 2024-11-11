'use client';
import React, { useState, useEffect } from "react";
import Heading from "./Heading";

const Skills = () => {
  return (
    <section id='skills' className="container mx-auto py-10 px-4">
      <Heading title="Skills" />
      <p className="text-gray-600 mt-10 mb-10"></p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p data-aos="zoom-in">HTML</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className={`bg-[#FD8D30] absolute h-[4px] w-[90%]`}></div>
          </div>
        </div>

        <div>
          <p data-aos="zoom-in">CSS</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#FD8D30] absolute h-[4px] w-[80%]"></div>
          </div>
        </div>

        <div>
          <p data-aos="zoom-in">TypeScript</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#FD8D30] absolute h-[4px] w-[80%]"></div>
          </div>
        </div>

        <div>
          <p data-aos="zoom-in">Next.js</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#FD8D30] absolute h-[4px] w-[80%]"></div>
          </div>
        </div>

        <div>
          <p data-aos="zoom-in">Tailwind CSS</p>
          <div className="relative bg-gray-400 h-[4px] mt-2">
            <div className="bg-[#FD8D30] absolute h-[4px] w-[70%]"></div>
          </div>
        </div>

        <div>
  <p data-aos="zoom-in">React</p>
  <div className="relative bg-gray-400 h-[4px] mt-2">
    <div className="bg-[#FD8D30] absolute h-[4px] w-[70%]"></div>
  </div>
</div>

      </div>
    </section>
  );
};

export default Skills;

