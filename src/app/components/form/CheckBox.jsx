import React from "react";

const Checkbox = ({
  id = "privacy-checkbox",
  labelText = "I have read the privacy policy and consent to the processing of my data for the purpose of handling my enquiry.",
  privacyPolicyLink = "/privacy-policy",
  checked = false,
  onChange,
}) => {
  return (
    <div className="flex items-start space-x-2">
      {/* Checkbox Input */}
      <input
        type="checkbox"
        id={id}
        className="w-5 h-5 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      {/* Label */}
      <label htmlFor={id} className="text-sm text-gray-700 cursor-pointer">
        {labelText.split("privacy policy")[0]}
        <a
          href={privacyPolicyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:no-underline"
        >
          privacy policy
        </a>
        {labelText.split("privacy policy")[1]}
      </label>
    </div>
  );
};

export default Checkbox;
