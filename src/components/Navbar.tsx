import React, { useState } from "react";
import logoDesktop from "../assets/Logo.png"; // Desktop logo
import logoMobile from "../assets/Wealthify Logo 1.png"; // Mobile logo

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-10">
      {/* Logo */}
      <div>
        <img
          src={logoDesktop}
          alt="Wealthify Logo"
          className="hidden lg:block w-[241.61px] h-[59px]" // Desktop logo
        />
        <img
          src={logoMobile}
          alt="Wealthify Logo Mobile"
          className="lg:hidden absolute top-[16px] left-[34px] w-[55px] h-[50px] rounded-tl-[6px] opacity-1" // Mobile logo with specified layout
        />
      </div>

      {/* Mobile Hamburger Button */}
      <button
        className="lg:hidden flex items-center justify-center p-2 text-black ml-auto"
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Desktop Navbar Menu */}
      <ul className="hidden lg:flex space-x-8 text-lg ml-auto">
  <li className="opacity-60 hover:opacity-100 hover:underline cursor-pointer transition-opacity duration-300">
    <a href="#home">Home</a>
  </li>
  <li className="opacity-60 hover:opacity-100 hover:underline cursor-pointer transition-opacity duration-300">
    <a href="#stressometer">Stressometer</a>
  </li>
  <li className="opacity-60 hover:opacity-100 hover:underline cursor-pointer transition-opacity duration-300">
    <a href="#about">About</a>
  </li>
</ul>

      {/* Desktop Download Button */}
      <button className="hidden lg:flex px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 ml-6 flex items-center">
        Download Now
        <span className="ml-2">→</span>
      </button>

      {/* Mobile Menu (When Opened) */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-white shadow-lg p-6 w-full">
          <ul className="space-y-6">
            <li className="hover:underline cursor-pointer text-xl">Home</li>
            <li className="hover:underline cursor-pointer text-xl">
              Stressometer
            </li>
            <li className="hover:underline cursor-pointer text-xl">About</li>
          </ul>
          <button className="w-full mt-6 py-2 bg-black text-white rounded-lg flex justify-center items-center">
            Download Now <span className="ml-2">→</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
