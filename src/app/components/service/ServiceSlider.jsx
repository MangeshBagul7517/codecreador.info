"use client"
import React, { useEffect, useState } from "react";

const ServiceSlider = () => {
  const items = [
    {
      title: "Restaurant Technology Solutions",
      description: [
        "QR Code-Based Digital Menus and Table Management",
        "Online Ordering and Reservation Systems",
        "Comprehensive Restaurant Management Software",
        "Inventory Tracking and Food Costing Tools",
      ],
    },
    {
      title: "Business Process Automation",
      description: [
        "Custom CRM Development for Streamlined Customer Engagement",
        "ERP Systems for Operational Efficiency",
        "Workflow Automation and Task Management Solutions",
      ],
    },
    {
      title: "UI / UX Design ",
      description: [
        "#",
      ],
    },
    {
      title: "Website Development",
      description: [
        "Progressive Web Apps (PWAs) for Enhanced User Experiences",
        "Native and Cross-Platform Mobile App Development",
        "Custom Portals and Dashboards for Businesses",
      ],
    },
    {
      title: "Mobile App Development",
      description: [
        "Progressive Web Apps (PWAs) for Enhanced User Experiences",
        "Native and Cross-Platform Mobile App Development",
        "Custom Portals and Dashboards for Businesses",
      ],
    },
    {
      title: "AI / ML Services",
      description: [
        "#",
      ],
    },
    {
      title: "E-Commerce Solutions",
      description: [
        "Fully Customizable E-Commerce Platforms",
        "Integrated Payment Gateway Systems",
        "Customer Loyalty and Reward Programs",
      ],
    },
    {
      title: "QA & Testing",
      description: [
        "#",
      ],
    },
    {
      title: "Digital Marketing",
      description: [
        "End-to-End SEO and Content Marketing",
        "Social Media Campaigns and Analytics",
        "PPC Advertising and Retargeting Strategies",
        "Brand Development and Creative Services",
      ],
    },
    {
      title: "SEO Optimization",
      description: [
        "#",
      ],
    },
    {
      title: "Cloud Solutions",
      description: [
        "Cloud Migration and Hosting Services (AWS, Azure, GCP)",
        "Scalable Data Storage and Backup Solutions",
        "IT Security and Performance Optimization",
      ],
    },
    {
      title: "Industry-Specific Solutions",
      description: [
        "Healthcare Management Platforms",
        "Real Estate CRM and Analytics Tools",
        "Education and Learning Management Systems",
        "Hospitality and Tourism Technology Solutions",
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("translate-x-0 opacity-100"); // Start animation immediately

  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade-out animation
      setAnimationClass(" opacity-0");

      setTimeout(() => {
        // Update the index and start fade-in animation
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        setAnimationClass("translate-x-0 opacity-100");
      }, 500); // Match fade-out duration
    }, 3000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="flex flex-col justify-start pt-8 pb-4 text-start overflow-hidden">
    <div
      className={`transform transition-all duration-500 ${animationClass}`}
    >
      <h2 className="heading--medium  font-bold mb-4 leading-snug h-12 flex items-center justify-start">
        {items[currentIndex].title}
      </h2>
    </div>
  </div>
  
  );
};

export default ServiceSlider;
