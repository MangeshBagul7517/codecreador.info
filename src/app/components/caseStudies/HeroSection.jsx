import React from 'react';

const HeroSection = ({ data }) => {
  return (
    <div className="relative lg:px-40 h-screen">
      {/* Background Section */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${data.image}')`, // Use image from the data array
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-8 text-white">
        <h1 className="text-4xl md:text-6xl font-bold">{data.title}</h1>
        <p className="mt-4 text-xl">{data.category}</p>
        <p className="text-2xl font-semibold">{data.industry}</p>
      </div>
    </div>
  );
};

export default HeroSection;
