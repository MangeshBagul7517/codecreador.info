'use client'; // Marks this as a Client Component
import React from 'react';
import Button2 from '../comman/Buttons/Button2';
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from 'next/navigation'; // Use next/navigation instead of next/router

const Card4 = ({ title, description, image, category , id}) => {
  const router = useRouter();

  const handleRedirect = (path) => {
    router.push(path); // Navigate to the specified path
  };

  return (
    <div
      onClick={() => handleRedirect(`/services/${id}`)}
      className="w-full flex h-full rounded-lg overflow-hidden  group bg-white "
    >
      <div className="flex flex-col">
        <div className="overflow-hidden">
          <img
            src={image}
            alt={`${title} image`}
            className="w-full h-20 object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          />
        </div>
        <div className="justify-between p-4 flex h-full flex-col">
          <div>
            <div className="heading--small text-foreground">{title}</div>
            <p className="mt-2 text-micro py-3 font-normal text-gray-600">
              {description}
            </p>
          </div>
          <Button2
            text="Learn more"
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering card click
              handleRedirect(`/services/${id}`);
            }}
            icon={FaArrowRight}
            isDisabled={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Card4;
