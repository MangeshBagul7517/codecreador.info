import React from "react";

const DesignServices = ({data}) => {
 

  return (
    <div className="mt-20 lg:py-24 bg-gray-50 ">
        <div className="max-w-[1200px] px-4 mx-auto">

     
      <h1 className="heading--large  mb-8">
       {data?.title}
      </h1>
      <p className="subheading--sm text-gray-600 max-w-[700px]">
       {data?.description}
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-x-16">
        {data.items.map((service, index) => (
          <div
            key={index}
            className="py-6  border-dark border-b-[2px] "
          >
            <div className="text-4xl mb-6">{service.icon}</div>
            <h2 className="text-xl font-semibold mb-4">{service.title}</h2>
            <p className="text-gray-600 pb-2">{service.description}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default DesignServices;
