import React from "react";

import aboutUs from "@/app/data/aboutUs";
import ContactExtra from "./ContactExtra";
import StatsSection from "../../service/StatsSection";

const ContactContent = ({ selectedPoint, points, onClose=()=>{} }) => {

  const onCloseModal = () => { 
    console.log("close 2")
    onClose()
   }

  if (selectedPoint === "Impact") {
    return <StatsSection varient="secondary" data={aboutUs?.ourImpact} />;
  }

  if (selectedPoint === "Partnership") {
    return (
      <ContactExtra
      onCloseModal={onCloseModal}
        variant="secondary"
        data={aboutUs?.partnership}
      />
    );
  }

  if (selectedPoint === "Contact") {
    return (
      <ContactExtra
      onCloseModal={onCloseModal}
        variant="secondary"
        data={aboutUs?.contactUs}
      />
    );
  }

  return (
    <div className="w-[80%] overflow-auto text-center md:text-left">
      <div className="heading--xl">{points[selectedPoint]}</div>
      <p className="mt-2 text-gray-400">
        Please feel free to share your thoughts and we can discuss it over a
        cup of tea.
      </p>
      <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
        Contact us →
      </button>
      <div className="mt-6">
        <div className="mb-4">
          <p className="font-bold">🇮🇳 INDIA</p>
          <p>+91 480 2733 111</p>
          <p>info@webandcrafts.com</p>
        </div>
        <div>
          <p className="font-bold">🇺🇸 USA</p>
          <p>+1 (469) 332-0237</p>
          <p>us@webandcrafts.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
