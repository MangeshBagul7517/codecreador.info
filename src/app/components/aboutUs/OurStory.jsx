'use client'
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const OurStory = ({data}) => {
    const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // Adjust as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);
  return (
   
    
    <div className="flex flex-col items-center justify-center  py-16 bg-white px-6">
        <div className="max-w-[1200px] px-4 mx-auto">
      <div
        className="heading--4xl text-center  mb-6"
       
      >
        {data.title}
      </div>
      <div
        className={`heading--small  text-center leading-relaxed  text-gray-600`}
       
      >
       {data.description}
      </div>
      </div>
    </div>
  );
};

export default OurStory;
