"use client"
import React, { useEffect, useState } from "react";

const ServiceSlider: React.FC = () => {
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
      title: "Web and Mobile Application Development",
      description: [
        "Progressive Web Apps (PWAs) for Enhanced User Experiences",
        "Native and Cross-Platform Mobile App Development",
        "Custom Portals and Dashboards for Businesses",
      ],
    },
    {
      title: "Digital Marketing and Branding",
      description: [
        "End-to-End SEO and Content Marketing",
        "Social Media Campaigns and Analytics",
        "PPC Advertising and Retargeting Strategies",
        "Brand Development and Creative Services",
      ],
    },
    {
      title: "Event and Ticketing Management",
      description: [
        "Event Scheduling and Registration Portals",
        "QR Code-Based Ticketing and Check-In Solutions",
        "Real-Time Event Analytics and Insights",
      ],
    },
    {
      title: "E-Commerce and Retail Solutions",
      description: [
        "Fully Customizable E-Commerce Platforms",
        "Integrated Payment Gateway Systems",
        "Customer Loyalty and Reward Programs",
      ],
    },
    {
      title: "Data Analytics and Insights",
      description: [
        "Business Intelligence Dashboards",
        "Predictive Analytics for Market Trends",
        "Custom Reporting Tools for Decision-Making",
      ],
    },
    {
      title: "AI, Machine Learning, and Automation",
      description: [
        "Chatbots for Customer Support and Engagement",
        "Predictive Maintenance and Workflow Optimization",
        "AI-Driven Analytics and Personalization Engines",
      ],
    },
    {
      title: "IT Infrastructure and Cloud Solutions",
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
  const [animationClass, setAnimationClass] = useState("translate-x-full opacity-0");

  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade-out animation
      setAnimationClass(" opacity-0");

      setTimeout(() => {
        // Update the index and start fade-in animation
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        setAnimationClass("translate-x-0 opacity-100");
      }, 500); // Match fade-out duration
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="flex flex-col items-center justify-center pt-8 pb-4 bg-gray-100 text-center overflow-hidden">
      <div
        className={`transform transition-all duration-500 ${animationClass}`}
      >
        <h2 className="text-3xl font-bold text-bluish mb-4">
          {items[currentIndex].title}
        </h2>
        {/* <ul className="space-y-2">
          {items[currentIndex].description.map((desc, idx) => (
            <li key={idx} className="text-lg text-gray-600">
              {desc}
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default ServiceSlider;
