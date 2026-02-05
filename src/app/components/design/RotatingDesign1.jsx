import React from "react";
import { motion } from "framer-motion";

const RotatingDesign1 = () => {
  const lines = Array.from({ length: 8 }); // Generate 8 lines

  return (
    <div className="bg-black flex mt-10 items-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
        className="relative w-40 h-40"
      >
        {lines.map((_, index) => (
          <motion.div
            key={index}
            className="absolute left-1/2 top-1/2 bg-gray-300"
            style={{
              width: "2px",
              height: "80px",
              transformOrigin: "center top",
              transform: `rotate(${index * (360 / lines.length)}deg)`,
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              type: "spring",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default RotatingDesign1;
