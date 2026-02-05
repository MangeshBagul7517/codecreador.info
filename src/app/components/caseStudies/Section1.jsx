import React from "react";

const Section1 = ({ data }) => {


  return (
    <div className="mt-8 flex max-w-[1200px] mx-auto px-4 custom-container flex-col items-center justify-center bg-white ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
        {/* Left Section - Services */}
        <div>
          <h2 className="heading--xl  mb-6">{data.title1}</h2>
          <div className="flex flex-wrap gap-4">
            {data.services.map((service, index) => (
              <span
                key={index}
                className="px-4 py-2 border border-black rounded-full text-sm font-medium"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* Right Section - Details */}
        <div>
          <h1 className="heading--medium  mb-4">{data.title}</h1>
          <p className="text-base text-gray-600 mb-6">{data.description}</p>

          <div className="flex flex-col gap-4">
            {data.details.map((detail, index) => (
              <div
                key={index}
                className={`flex justify-between items-center py-3 px-4 rounded ${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
              >
                <span className="font-medium text-gray-700">
                  {detail.label}
                </span>
                <span className="text-gray-900">{detail.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
