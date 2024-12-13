import React, { useState, useEffect } from "react";
import mobile from "../assets/Group 892.png"; // Assuming this is the path to your image
import vector1 from "../assets/Vector.png";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[500px] bg-gray-50 w-full">
        <div className="flex flex-col items-center space-y-6 w-full max-w-8xl px-6 py-16">
          <div className="relative flex justify-center items-center w-full">
            <img
              src={mobile}
              alt="mobile screen"
              className="transform scale-110 w-auto h-auto object-cover max-w-full"
            />
          </div>
          <div className="flex flex-col items-start space-y-4 w-[300px]">
            <button className="bg-yellow-500 text-black text-lg font-semibold py-2 px-4 rounded-full">
              The app is live now!
            </button>
            <h1 className="font-montserrat text-[32px] font-bold leading-[40px] text-[#03624C]">
              TheWealthifyMe
            </h1>
            <h2 className="text-[16px] font-light text-gray-500 leading-[27px]">
              Your Personal <span className="text-[16px] font-bold leading-[27px]">Finance Stress Reliever</span>
            </h2>
            <p className="text-gray-700 text-[12px] font-semibold leading-[16.2px] max-w-[640px]">
              Discover <span className="font-bold">financial peace</span> with{" "}
              <span className="text-green-800 font-bold">Wealthify</span>. Analyze assets,
              reduce liabilities, and find tailored investment opportunities.{" "}
              <span className="font-bold">Take control of your financial journey today</span>.
            </p>
            <button className="bg-black text-white font-bold py-3 px-6 transform transition-all duration-300 ease-in-out hover:bg-gray-800 self-start">
              Download Now <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="home">
      <div className="flex flex-col items-center justify-center min-h-[600px] p-6 bg-gray-50 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:justify-center w-full max-w-8xl px-6 lg:px-16 py-16 space-y-8 lg:space-y-0">
          {/* Left Section - Content */}
          <div className="text-center lg:text-left space-y-6 w-full lg:w-[45%] mt-36 lg:mt-0 flex flex-col items-center lg:items-start justify-center">
            <button className="bg-yellow-500 text-black text-lg font-semibold py-2 px-4 rounded-full">
              The app is live now!
            </button>
            <h1 className="font-montserrat text-[28px] sm:text-[32px] md:text-[40px] lg:text-[72px] font-bold leading-[40px] sm:leading-[50px] lg:leading-[80px] text-left decoration-skip-ink-none text-[#03624C] mb-6 sm:text-[32px] sm:leading-[40px]">
              TheWealthifyMe
            </h1>
            <h2 className="text-[20px] sm:text-[24px] lg:text-[36px] font-light text-gray-700 mt-4 mb-6 sm:text-[20px] sm:leading-[28px] lg:text-[36px] lg:leading-[36px] whitespace-nowrap">
              Your Personal <span className="font-bold">Finance Stress Reliever</span>
            </h2>
            <p className="text-gray-600 font-satoshi text-[12px] sm:text-[14px] md:text-[16px] font-semibold leading-[20px] sm:leading-[22px] md:leading-[24px] text-left max-w-[640px] mx-auto mb-6">
              Discover <span className="font-bold">financial peace</span>{" "}
              <span className="text-green-800 font-bold">Wealthify</span>. Analyze assets, reduce
              liabilities, and find tailored investment opportunities.
              <span className="font-bold">Take control of your financial journey today</span>.
            </p>
            <button className="hidden lg:flex px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 flex items-center">
              Download Now
              <span className="ml-2">→</span>
            </button>
          </div>

          {/* Right Section - Mobile Image */}
          <div className="relative flex justify-end items-center w-full lg:w-[55%] mb-8 lg:mb-0 pl-16 ml-16">
            <img
              src={mobile}
              alt="mobile screen"
              className="transform scale-110 sm:scale-125 md:scale-140 lg:scale-180 xl:scale-190 w-auto h-auto object-cover max-w-full"
            />
          </div>
        </div>
        {/* Desktop Vectors */}
        <div className="hidden lg:flex flex-col items-center space-y-2 mt-0 mb-12">
          <img src={vector1} alt="Vector 1" className="w-4 h-auto" />
          <img src={vector1} alt="Vector 2" className="w-4 h-auto" />
          <img src={vector1} alt="Vector 3" className="w-4 h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
