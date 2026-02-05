'use client'
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
const OurProcess = ({data}) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-[1200px]  mx-auto px-4 mt-24 sm:px-4 lg:px-4">
      <h2 className="heading--xl mb-6 text-dark ">{data?.title}</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Image Section */}
        <div className="col-span-1 relative hidden md:block">
          <img
            src="https://images.pexels.com/photos/3278757/pexels-photo-3278757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with your actual image URL
            alt="Process"
            className="rounded-lg shadow-lg sticky top-[85px] "
          />
        </div>

        {/* Accordion Section */}
        <div className="col-span-2">
          {data?.items.map((step, index) => (
            <div
              key={index}
              className={`border-b group border-gray-300  cursor-pointer ${
                index === 0 ? "pb-4" : "py-4"
              }`}
              onClick={() => toggleAccordion(index)}
            >
              {/* Accordion Header */}
              <div className="flex justify-between items-center">
                <h3 className={`subheading--large  ${
                index === 0 ? "pb-2" : "py-2"
              }  ${
                expandedIndex === index ? "text-primary-base" : "transform transition-transform duration-500 ease-in-out group-hover:translate-x-4"
              }  text-dark cursor-pointer`}>
                  {step.title}
                </h3>
                <span
                  className={`text-dark transform transition-transform ${
                    expandedIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  {expandedIndex === index ? <FaMinus/> : <FaPlus />}
                </span>
              </div>

              {/* Accordion Content */}
              {expandedIndex === index && step.description && (
                <p className="subheading-medium mt-2">{step.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
