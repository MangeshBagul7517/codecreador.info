'use client'
import React, { useEffect } from "react";

const ModalWrapper = ({ isOpen, onClose, children, position="top-right" }) => {
    useEffect(() => {
        if (isOpen) {
          document.body.classList.add("overflow-hidden");
        } else {
          document.body.classList.remove("overflow-hidden");
        }
    
        // Cleanup to remove the class when the modal is unmounted
        return () => {
          document.body.classList.remove("overflow-hidden");
        };
      }, [isOpen]);
    
      if (!isOpen) return null;
    

  // Define position classes dynamically
  const getPositionClasses = () => {
    switch (position) {
      case "top-left":
        return "items-start justify-start";
      case "top-center":
        return "items-start justify-center";
      case "top-right":
        return "items-start justify-end";
      case "center-left":
        return "items-center justify-start";
      case "center":
        return "items-center justify-center";
      case "center-right":
        return "items-center justify-end";
      case "bottom-left":
        return "items-end justify-start";
      case "bottom-center":
        return "items-end justify-center";
      case "bottom-right":
        return "items-end justify-end";
      default:
        return "items-center justify-center"; // Default to center position
    }
  };

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-50 flex  bg-black bg-opacity-50 pt-20 pr-20 ${getPositionClasses()}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg shadow-lg w-11/12 max-w-md"
      >
        <div className="p-6">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 focus:outline-none"
          >
            &times;
          </button>
          {/* Render Children */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalWrapper;
