import React, { useState, useEffect } from 'react';
import AboutImg from '../assets/Asuransi keluarga 2 1.png';

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Effect to check the window size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);  // If the width is 768px or less, consider it mobile
      } else {
        setIsMobile(false); // Otherwise, it's a desktop
      }
    };

    // Check size on initial render
    handleResize();

    // Add event listener to handle resizing
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
     <section id='about'>
     <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16">
        {/* Text Section - Order first on desktop */}
        <div className={`w-full ${isMobile ? 'text-left mt-4' : 'w-1/2 text-left order-last md:order-first'}`}>
          <h1 className="font-montserrat text-[32px] sm:text-[32px] md:text-[40px] lg:text-[72px] font-bold leading-[40px] sm:leading-[50px] lg:leading-[80px] text-[#03624C] mb-6">
            About Us
          </h1>
          <p className="text-gray-600 font-satoshi text-[12px] sm:text-[14px] md:text-[16px] font-semibold leading-[20px] sm:leading-[22px] md:leading-[24px] max-w-[640px] mb-6 text-left">
            <span className="font-bold text-green-900">Wealthify</span> is your{' '}
            <span className="font-bold">guide to financial empowerment</span>. The team behind the app is dedicated to{' '}
            <span className="font-bold">easing your financial stress</span> and{' '}
            <span className="font-bold">unlocking your path to prosperity</span>.
          </p>
          {/* Show the button only on desktop view */}
          <div className="flex justify-start md:mt-6">
            <button className="hidden lg:flex px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 flex items-center">
              Download Now
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>

        {/* Image Section - Order last on desktop */}
        <div className={`w-full ${isMobile ? 'order-first mb-4' : 'w-1/2 flex justify-center md:justify-end order-first md:order-last'}`}>
          <img
            src={AboutImg}
            alt="Illustration of a family under an umbrella with financial symbols"
            className="w-full h-auto max-w-[500px] rounded-lg shadow-md"
          />
        </div>
      </div>
     </section>
    </>
  );
};

export default About;
