'use client'
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Button1 from "../comman/Buttons/Button1";

const jobs = [
  {
    title: "Frontend Developer",
    location: "Remote",
    type: "Full-Time",
    description: "We are looking for a skilled React and Next.js developer with experience in Tailwind CSS.",
  },
  {
    title: "Backend Developer",
    location: "Hybrid - NY",
    type: "Full-Time",
    description: "Join our backend team to build scalable APIs using Node.js and MongoDB.",
  },
  {
    title: "UI/UX Designer",
    location: "Remote",
    type: "Part-Time",
    description: "Creative designer needed to craft stunning user experiences with Figma and Tailwind CSS.",
  },
];

export default function FirstSection() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 md:p-12">
        <div className="max-w-[1200px] px-4 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Join Our Team</h1>
        <p className="text-lg md:text-xl text-gray-300">
          Build the future with a passionate team of developers and designers.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
          >
            <h3 className="text-2xl font-semibold mb-2">{job.title}</h3>
            <p className="text-gray-400 mb-2">{job.location} • {job.type}</p>
            <p className="text-gray-300 mb-4">{job.description}</p>
            <Button1
        text="Submit"
        variant="secondary"
        // onClick={handleClick}
        icon={FaArrowRight}
        // isLoading={isLoading}
        isDisabled={false}
      />
          </motion.div>
          
        ))}
      </div>
      </div>
    </div>
  );
}
