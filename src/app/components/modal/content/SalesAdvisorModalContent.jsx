'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

const SalesAdvisorModalContent = ({onCloseContactModal}) => {
   const router = useRouter();

   const handleRequestCallBack = () => { 
    
    router.push('/contact')
    onCloseContactModal()
    }
  return (
    <div>
      <h2 className="text-xl font-bold">Talk to a sales advisor</h2>
      <p className="text-gray-600 mt-2">
        We have a team of specialists available 24/7 to help you find the best solution for your business.
      </p>
      {/* Phone Number */}
      <div className="flex items-center space-x-3 mt-4">
        <div className="text-blue-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 10l1.054 1.054a12.073 12.073 0 005.361 2.336 12.042 12.042 0 002.43.1l1.054 1.054a4.5 4.5 0 006.364-6.364L16.5 4.5m-3.5 0a3 3 0 11-4.5 4.5"
            />
          </svg>
        </div>
        <span className="text-blue-600 text-lg font-semibold">+91 480 2733 555</span>
      </div>

      {/* Request a Callback */}
      <div
     onClick={handleRequestCallBack}
        className="mt-6 group bg-blue-50 p-4 rounded-lg flex items-center justify-between cursor-pointer hover:bg-blue-100 transition"
      >
        <div>
          <h3 className="text-md font-semibold">Request a call back</h3>
          <p className="text-gray-600 text-sm">Call backs typically happen in a few minutes or less</p>
        </div>
        <div
       
        className="text-gray-500 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SalesAdvisorModalContent;
