import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Button1 from "../comman/Buttons/Button1";
const TopSectionDesign = ({ data }) => {
  return (
    <div className="bg-white text-center md:text-left px-6 md:px-20 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          {data.title}
        </h1>
        <p className="text-gray-600 mb-4">
          {data.description1.split(data.linkText)[0]}
          <a href={data.linkHref} className="text-blue-600 underline">
            {data.linkText}
          </a>
          {data.description1.split(data.linkText)[1]}
        </p>
        <p className="text-gray-600 mb-8">{data.description2}</p>

        <Button1
          text={data.buttonText}
          // onClick={handleClick}
          icon={FaArrowRight}
          // isLoading={isLoading}
          isDisabled={false}
        />
      
      </div>
    </div>
  );
};



export default TopSectionDesign;
