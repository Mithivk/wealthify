import React from 'react';
import { Phone, Mail } from 'react-feather'; // Assuming you're using react-feather for icons
import logoDesktop from '../assets/Logo.png';

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header with Left and Right Sections */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          {/* Left Section with Logo, Text, and Button */}
          <div className="flex flex-col items-start text-left space-y-6">
            {/* Logo */}
            <div>
              <img
                src={logoDesktop}
                alt="Wealthify Me Logo"
                className="h-12 md:h-15 w-auto"
              />
            </div>

            {/* Text */}
            <p className="text-lg md:text-xl text-gray-700">
              Stay connected with Wealthify for financial freedom at your fingertips.
            </p>

            {/* Button */}
            <a
              href="#download"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Download Now
              <span className="inline-block transform translate-x-1">→</span>
            </a>
          </div>

          {/* Right Section with Contact */}
          <div className="bg-white shadow-lg rounded-lg p-4 mt-6 md:mt-0 md:ml-8">
            <h2 className="text-2xl font-bold mb-3">Contact</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-green-600" />
                <a
                  href="tel:+919322978432"
                  className="hover:text-green-600 transition-colors"
                >
                  +91 9322978432
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-green-600" />
                <a
                  href="mailto:wealthify05@gmail.com"
                  className="hover:text-green-600 transition-colors"
                >
                  wealthify05@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-600 py-6 mt-8">
          <p>© Wealthify Me 2024 • All rights reserved</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
