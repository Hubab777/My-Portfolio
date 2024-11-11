'use client'
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container pt-8 ">
      <div className="flex justify-between items-center">
        <div className="text-3xl font-bold text-white hover:text-gray-500 glow-text">
        ℋ𝓘
</div>

        {/* this is Desktop menu */}
        <ul className="gap-10 lg:gap-16 hidden md:flex font-bold sm:flex">
          <li className="menuLink">
            <a href="#hero">Home</a>
          </li>
          <li className="menuLink">
            <a href="#about">About</a>
          </li>
          <li className="menuLink">
            <a href="#projects">Projects</a>
          </li>
          <li className="menuLink">
            <a href="#skills">Skills</a>
          </li>
          <li className="menuLink">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* This is Mobile Menu Icon */}
        <AiOutlineMenu
          className="md:hidden cursor-pointer hover:text-gray-500 glow-text"
          size={30}
          onClick={toggleMenu}
        />

        {/* Mobile menu (Toggle visibility on click) */}
        {isMenuOpen && (
          <ul className="flex flex-col items-center absolute top-16 left-0 w-full bg-white shadow-lg">
            <li className="menuLink p-4">
              <a href="#hero" onClick={toggleMenu}>Home</a>
            </li>
            <li className="menuLink p-4">
              <a href="#about" onClick={toggleMenu}>About</a>
            </li>
            <li className="menuLink p-4">
              <a href="#projects" onClick={toggleMenu}>Projects</a>
            </li>
            <li className="menuLink p-4">
              <a href="#skills" onClick={toggleMenu}>Skills</a>
            </li>
            <li className="menuLink p-4">
              <a href="#contact" onClick={toggleMenu}>Contact</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;

