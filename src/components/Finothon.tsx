import React from 'react';
import bg from '../assets/BG.png';
import logo from '../assets/Wealthify Logo 3.png'; // import your logo here

const Finothon = () => {
  return (
    <>
      <div className="relative w-full min-h-[500px] flex items-center justify-start"> {/* Decreased height with gap */}
        <img
          src={bg}
          alt="Background with green and white text"
          className="absolute w-full h-full object-cover"
        />
        <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto mx-8 md:mx-16">
          <h1 className="text-4xl font-bold mb-2">Finothon</h1>
          <div className="flex items-center mb-4">
            <img
              src={logo} // Add the logo here
              alt="Logo"
              className="w-[54px] h-[54px] mr-2" // Set the logo size
            />
            <p className="text-gray-500">Powered by TheWealthifyMe</p>
          </div>
          <p className="text-gray-700 mb-6">
            Empowering the next generation of financial strategists, this three-day challenge invites commerce and BAF students to solve real-world scenarios, craft innovative financial plans, and compete for top honors. With a blend of online quizzes, case studies, and live presentations, this event is where future financial leaders are made.
          </p>
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
            Know More <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Finothon;
