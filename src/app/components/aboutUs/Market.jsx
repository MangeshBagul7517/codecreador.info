'use client'
import React from "react";
import { motion } from "framer-motion";
import Button1 from "../comman/Buttons/Button1";
import { FaArrowRight } from "react-icons/fa";
import Button2 from "../comman/Buttons/Button2";

const Market = ({ data }) => {


    return (
        <div className="py-20 flex flex-col justify-center items-center bg-gradient-r-b text-center p-6">
            {/* Titles */}
            <motion.div
                className="flex space-x-4 text-5xl md:text-6xl font-bold"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {data.header.map((item, index) => (
                    <motion.span
                        key={index}
                        className={`${item.color}`}
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                    >
                        {item.title}
                    </motion.span>
                ))}
            </motion.div>

            {/* Descriptions */}

            <motion.div

                className={`mt-6 text-gray-300 max-w-2xl text-lg`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                {data.description}
            </motion.div>



            <motion.div

                className={`mt-10 `} // Show only the first button for now
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
            >
                <Button1
                                    text={data.buttonText}
                                    variant="secondary"
                                    // onClick={handleClick}
                                    icon={FaArrowRight}
                                    // isLoading={isLoading}
                                    isDisabled={false}
                                />
            </motion.div>

        </div>
    );
};

export default Market;
