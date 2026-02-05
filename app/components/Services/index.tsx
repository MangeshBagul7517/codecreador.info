"use client"
import { useState } from "react";

const services = [
  {
    title: "IT Consulting",
    description:
      "Expert guidance for aligning IT strategies with your business goals. Includes technology assessments, system design, and roadmap creation.",
    image: "/images/it-consulting.jpg",
  },
  {
    title: "Web Application Development",
    description:
      "Building scalable, responsive, and secure web applications tailored to your business needs using the latest frameworks.",
    image: "/images/web-app-development.jpg",
  },
  {
    title: "Mobile Application Development",
    description:
      "End-to-end native and cross-platform mobile app development services for Android and iOS with a focus on performance and usability.",
    image: "/images/mobile-app-development.jpg",
  },
  {
    title: "Custom Software Development",
    description:
      "Tailored software solutions to solve your unique business challenges, ensuring scalability and seamless integration.",
    image: "/images/custom-software.jpg",
  },
  {
    title: "Internet of Things",
    description:
      "IoT solutions that connect devices, streamline operations, and provide actionable insights for smarter decision-making.",
    image: "/images/iot.jpg",
  },
  {
    title: "Artificial Intelligence",
    description:
      "AI-driven solutions, including chatbots, machine learning models, and intelligent automation to improve business efficiency.",
    image: "/images/ai.jpg",
  },
  {
    title: "DevOps",
    description:
      "Streamlined DevOps solutions to accelerate development, automate workflows, and enhance operational efficiency.",
    image: "/images/devops.jpg",
  },
  {
    title: "Cloud Engineering",
    description:
      "Cloud migration, architecture, and management services for AWS, Azure, and GCP to ensure scalability and security.",
    image: "/images/cloud-engineering.jpg",
  },
  {
    title: "UI/UX Design & Development",
    description:
      "Intuitive and visually appealing user interface and experience designs to ensure maximum engagement and satisfaction.",
    image: "/images/ui-ux.jpg",
  },
  {
    title: "QA & Testing Service",
    description:
      "Comprehensive QA and testing services to ensure your software is reliable, secure, and performs at its best.",
    image: "/images/qa-testing.jpg",
  },
  {
    title: "Staff Augmentation",
    description:
      "Flexible and skilled IT professionals to enhance your team, ensuring faster project completion and cost-effectiveness.",
    image: "/images/staff-augmentation.jpg",
  },
  {
    title: "Support and Maintenance",
    description:
      "Reliable software support and maintenance services to minimize downtime, resolve issues, and ensure smooth operations.",
    image: "/images/support-maintenance.jpg",
  },
];

const Services = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex flex-row w-full lg:px-40 h-screen bg-gray-50">
      {/* Left Menu */}
      <div className="w-1/3 bg-navyblue text-white flex flex-col py-10 px-5">
        <h2 className="text-2xl font-bold mb-6">Our Services</h2>
        <ul className="space-y-4">
          {services.map((service, index) => (
            <li
              key={index}
              className={`cursor-pointer py-3 px-4 rounded-md ${
                selectedIndex === index
                  ? "bg-green text-black font-semibold"
                  : "hover:bg-lightblue"
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              {service.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Content */}
      <div className="w-2/3 flex items-center justify-center p-10 bg-offwhite">
        <div className="text-center max-w-2xl">
          <img
            src={services[selectedIndex].image}
            alt={services[selectedIndex].title}
            className="rounded-md mb-6 w-full h-64 object-cover shadow-lg"
          />
          <h3 className="text-3xl font-bold text-darkblue mb-4">
            {services[selectedIndex].title}
          </h3>
          <p className="text-lg text-gray-600">
            {services[selectedIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
