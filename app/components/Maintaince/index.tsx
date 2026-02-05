import React from "react";

const MaintenancePage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-112px)] bg-gray-100">
      <div className="relative w-80 h-80 sm:w-96 sm:h-96 xl:w-[500px] xl:h-[500px] shadow-xl px-10 rounded-full flex flex-col items-center justify-center text-darkblue text-center overflow-hidden">
        {/* Circular Gradient Background */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white via-gray-100 to-gray-300 z-0"></div>

        {/* Wire Animation */}
        <svg
          className="absolute inset-0 w-full h-full z-0 opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 600"
        >
          <path
            fill="none"
            stroke="rgba(0, 0, 255, 0.3)"
            strokeWidth="2"
            d="
              M0 300 Q200 200 400 300 
              T800 300 
              Q600 400 400 300 
              T0 300
            "
          />
        </svg>

        {/* Content */}
        <div className="z-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">We&apos;ll be back soon!</h1>
          <p className="text-sm text-bluish sm:text-lg">
            Our site is currently under maintenance. <br />
            Thank you for your patience!
          </p>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;
