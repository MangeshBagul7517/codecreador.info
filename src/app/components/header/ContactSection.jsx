import React, { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import ContactContent from "../aboutUs/contact/ContactContent";
import ContactNavigation from "../aboutUs/contact/ContactNavigation";

export default function ContactSection({ isOpen, oncloseContactAdditionalModal }) {
  const [selectedPoint, setSelectedPoint] = useState("Impact");

  const onClose = () => {
    console.log("call to close in ContactSection")
    oncloseContactAdditionalModal();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => document.body.classList.remove("no-scroll");
  }, [isOpen]);

  const points = {
    Impact: "Discover Digital Transformation",
    Partnership: "Let's collaborate to grow together",
    Contact: "Feel free to reach out to us",
  };

  return (
    isOpen && (
      <div className="h-screen w-full fixed inset-0 bg-black text-white p-8">
        <div className="max-w-[1200px] mx-auto mt-10 px-4 flex flex-col md:flex-row">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white"
          >
            <IoIosClose size={40 } />
          </button>

          {/* Left Side Content */}
          <div className="w-[80%] mt-6 md:mt-0">
            <ContactContent
              selectedPoint={selectedPoint}
              points={points}
              onClose={onClose}
            />
          </div>

          {/* Right Side Navigation */}
          <div className="flex-1 mt-6 md:mt-0">
            <ContactNavigation
              points={points}
              selectedPoint={selectedPoint}
              setSelectedPoint={setSelectedPoint}
            />
          </div>
        </div>
      </div>
    )
  );
}
