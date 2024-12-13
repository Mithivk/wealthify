import React from 'react';
import stressometer from '../assets/Group 893.png';

const Stressometer = () => {
  return (
    <section id='stressometer'>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-6xl p-6 bg-gray-50">
        <div className="flex flex-col md:flex-row items-start justify-start w-full max-w-8xl px-2 md:px-16 py-4 space-y-4 md:space-y-2">

          {/* Image Section (60%) */}
          <div className="w-full md:w-[60%] flex justify-start mb-4 md:mb-0"> {/* Use justify-start here to align the image to the left */}
            <div className="bg-white rounded-lg shadow-lg p-4">
              <img
                src={stressometer}
                alt="Stressometer gauge showing stress levels"
                className="rounded-lg w-[250px] md:w-[300px] lg:w-[500px] h-auto object-contain"
              />
            </div>
          </div>

          {/* Content Section (40%) */}
          <div className="w-full md:w-[40%] text-left md:pl-12 flex flex-col justify-center">
            <h1 className="font-montserrat text-[24px] sm:text-[28px] md:text-[36px] lg:text-[36px] font-bold leading-[32px] sm:leading-[40px] lg:leading-[60px] text-[#03624C] mb-2">
              The Stressometer
            </h1>
            <p className="text-gray-600 font-satoshi text-[12px] sm:text-[14px] md:text-[16px] font-semibold leading-[18px] sm:leading-[20px] md:leading-[22px] max-w-[600px] mx-auto mb-2">
              The Stressometer in <span className="text-green-700 font-bold">Wealthify</span> provides a 
              <span className="font-bold"> clear visual representation</span> of your financial stress levels, 
              <span className="font-bold"> empowering you</span> to track and 
              <span className="font-bold"> manage your financial well-being with ease.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stressometer;
