import React from "react";

const ContactNavigation = ({ points, selectedPoint, setSelectedPoint }) => {
  return (
    <div>
      {Object.keys(points).map((point) => (
        <p
          key={point}
          className={`heading--xl mb-4 cursor-pointer ${
            selectedPoint === point ? "text-blue-400" : "text-gray-400"
          } hover:text-blue-400 transition`}
          onMouseEnter={() => setSelectedPoint(point)}
        >
          {point}
        </p>
      ))}
    </div>
  );
};

export default ContactNavigation;
