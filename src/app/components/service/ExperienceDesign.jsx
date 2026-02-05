'use client'
import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import Button2 from '../comman/Buttons/Button2';
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from 'next/navigation'; 
const ExperienceDesign = ({data}) => {
const router = useRouter();
  const position="left"

  return (
<div
  className={`flex relative  flex-col-reverse gap-4 md:gap-20 h-auto  max-w-[1200px] px-4 mx-auto justify-between p-8 ${
    data?.isReverse  ? " md:flex-row-reverse" : "md:flex-row"
  }`}
>
      {/* Left Section */}
      <div className="md:w-1/2 w-full">
        <h2 className="heading--large text-center md:text-start mb-6">{data?.title}</h2>

        <ul className="space-y-4 w-full">
          {data?.items?.map((item, index) => (
            <div className='md:max-w-[70%] w-full group flex justify-between gap-12 border-b border-silver-100 '>
            <li
              key={item.id}
              onClick={()=>router.push(`/services/${item.path}`)}
              className="subheading--medium  py-2   text-silver-200 hover:text-dark cursor-pointer"
            >
              {item?.title}
            </li>
            <div className="hidden md:block transform transition-transform duration-300 w-5 ease-in-out  my-auto group-hover:translate-x-2">
              <FaArrowRight  className='hidden group-hover:block text-primary-base'/>
            </div>
            <div className="block md:hidden transform transition-transform duration-300 w-5 ease-in-out  my-auto group-hover:translate-x-2">
              <IoIosArrowForward   className=' group-hover:text-dark text-silver-200'/>
            </div>
            </div>
          ))}
        </ul>
       
        <Button2
            text={data?.buttonText|| "click here for more"}
            // onClick={(e) => {
            //   e.stopPropagation(); // Prevent triggering card click
            //   handleRedirect('/caseStudies/1');
            // }}
            icon={FaArrowRight}
            isDisabled={false}
          />
      </div>

      {/* Right Section */}
      <div className="relative mt-8 md:mt-0 md:w-1/2">
        <div className='sticky top-[70px]  max-w-[300px] mx-auto md:mx-0 md:max-w-[400px] lg:max-w-[500px] aspect-square'>
          <img
            src={data?.image|| "https://images.pexels.com/photos/891030/pexels-photo-891030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            alt="Example"
            className="rounded-md w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ExperienceDesign;
