'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const Card1 = ({ title, description, image, category, id }) => {
  const router = useRouter();

  
    const handleRedirect = (path) => {
      router.push(path); // Navigate to the specified path
    };
  
  return (
    <div onClick={() => id && handleRedirect(`/case_studies/${id}`)} className="max-w-sm rounded-lg overflow-hidden shadow-lg group bg-white hover:shadow-xl transition-shadow duration-300">
     <div className="overflow-hidden">
  <img
    src={image}
    alt={`${title} image`}
    className="w-full h-48 object-cover transition-transform duration-700  ease-in-out group-hover:scale-110"
  />
</div>

      <div className="p-4">
        <div className="text-lg  text-foreground">{category}</div>
      
        <p className="mt-2 text-sm font-normal text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card1;
