'use client'

import React from 'react';
import Heading from './Heading';
import { LuGraduationCap } from "react-icons/lu";
import { MdMenuBook } from "react-icons/md";
import { SiHyperskill } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { GrUserExpert } from "react-icons/gr";
import { AiOutlineGithub } from "react-icons/ai";

const About = () => {
  return (
    <div id='about' className='container mx-auto py-10 px-4 mt-2'>
      <Heading title="About Me"/>
      <div className='grid grid-cols-1 md:grid-cols-2 items-start gap-10'>
        
        {/* This is Image Section */}
        <div className="flex justify-center">
          <img className="max-w-[300px] md:max-w-[400px] h-auto" src="/about-me.png" alt="about me" />
        </div>

        {/* This is Text Section */}
        <div className='flex flex-col gap-6'>
          <div className='flex justify-between items-start w-full md:w-[400px] lg:w-[500px]'>

            {/* it includes Icons and Titles */}
            <div className='flex flex-col gap-6'>
              <div className='flex gap-4 items-center font-medium'>
                <LuGraduationCap className="text-orange-500 text-[22px]" />
                Qualification
              </div>
              <div className='flex gap-4 items-center font-medium'>
                <GrUserExpert className="text-orange-500 text-[22px]" />
                Experience
              </div>
              <div className='flex gap-4 items-center font-medium '>
                <MdMenuBook className="text-orange-500 text-[22px]" />
                Certification
              </div>
              <div className='flex gap-4 items-center font-medium'>
                <SiHyperskill className="text-orange-500 text-[22px]" />
                Interest
              </div>
              <div className='flex gap-4 items-center font-medium'>
                <FaLinkedin className="text-orange-500 text-[22px]" />
                Linkedin Link
              </div>
              <div className='flex gap-4 items-center font-medium '>
<AiOutlineGithub className="text-orange-500 text-[22px]" />
GitHub Link
</div>

            </div>

            {/* Includes Colons */}
            <div className='flex flex-col gap-6 text-gray-700'>
              <div>:</div>
              <div>:</div>
              <div>:</div>
              <div>:</div>
              <div>:</div>
              <div>:</div>
            </div>

            {/* Includes Details */}
            <div className='flex flex-col gap-6 text-gray-400'>
              <div>B.S in Food Science & Technology</div>
              <div>Internship at United King Foods</div>
              <div>Pursuing AI, Web3.0 & Metaverse Course</div>
              <div>Teaching, Cooking, Web Development</div>
              <div>
                <a
                  href="https://www.linkedin.com/in/hubab-ikram-02b8741b4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  www.linkedin.com
                </a>
              </div>
              <div>
  <a
    href="https://github.com/your-github-Hubab777"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-500 underline"
  >
    www.github.com
  </a>
</div>
            </div>

          </div>

          {/*Includes Description */}
          <div data-aos="zoom-in" className='max-w-[800px]'>
            <p className='font-bold mt-16 mb-10 text-yellow-600'>
              Hi! My name is Hubab Ikram. I am a passionate Front-end Web developer dedicated to
              building engaging and dynamic user experiences. With a keen eye for design and a love for clean, efficient code, I bring ideas to life
              through responsive, accessible, and visually appealing web interfaces. I thrive on transforming complex problems into intuitive,
              user-friendly solutions, continuously learning and adapting to new technologies.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About; 