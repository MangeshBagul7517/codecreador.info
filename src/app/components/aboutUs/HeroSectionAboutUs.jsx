'use client'
import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const HeroSectionAboutUs = ({ data }) => {
  // Variants for incremental animation
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2, // Incremental delay for each card
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="relative bg-gradient-to-b  bg-primary-base text-white py-16 px-8 md:px-16">
      {/* Title & Description Section */}
      <div className="max-w-[1200px] px-4 mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <motion.div
          className="text-center md:text-left max-w-lg"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="heading--2xl  font-bold mb-4">
            {data.title}
          </h1>
          <p className="subheading--large  mb-6">
            {data.description}
          </p>
        </motion.div>

        {/* Animated Right Section */}
        <motion.div
          className="grid grid-cols-2 gap-6 mt-8 md:mt-0 md:ml-16"
          initial="hidden"
          animate="visible"
        >
          {data.rightSection.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white text-black rounded-lg shadow-md p-6 text-center"
              variants={cardVariants}
              custom={index} // Pass the index to variants
              whileHover={{ scale: 1.1 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold">
                {/* Animated Count */}
                <CountUp start={0} end={parseInt(item.title)} duration={2.5} />
                +
              </h3>
              <p className="text-sm md:text-base mt-2">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Animated Decorative Elements */}
      <motion.div
        className="absolute top-10 left-20 bg-blue-400 h-16 w-16 rounded-full filter blur-xl opacity-40"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-20 bg-pink-400 h-20 w-20 rounded-full filter blur-xl opacity-40"
        animate={{
          y: [0, -20, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      </div>
    </div>
  );
};

export default HeroSectionAboutUs;
