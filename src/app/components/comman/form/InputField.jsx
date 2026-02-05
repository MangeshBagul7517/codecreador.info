import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const InputField = ({
  label,
  type = "text",
  id,
  name,
  value,
  onChange,
  placeholder,
  isRequired = false,
  error,
  options = [],
  country = 'us', // Default country for PhoneInput
  dropdownStyle,
  inputStyle,
  buttonStyle,
  fieldType = "input", // 'input', 'textarea', 'select', 'phone'
}) => {
  const renderInput = () => {
    switch (fieldType) {
      case "textarea":
        return (
          <textarea
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full border border-silver-100 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-bluish"
            rows={4}
          />
        );
      case "select":
        return (
          <select
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            className="w-full border border-silver-100 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-bluish"
          >
            <option value="" disabled>
              {placeholder || "Select an option"}
            </option>
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      case "phone":
        return (
          <PhoneInput
            country={country}
            value={value}
            onChange={onChange}
            inputStyle={{
              width: '100%',
              height: '40px',
              paddingLeft: '50px',
              borderRadius: '6px',
              fontSize: '16px',
              ...inputStyle,
            }}
            buttonStyle={{
              borderRadius: '6px 0 0 6px',
              ...buttonStyle,
            }}
            dropdownStyle={{
              zIndex: 10,
              ...dropdownStyle,
            }}
          />
        );
      default:
        return (
          <input
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full border border-silver-100 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-bluish"
          />
        );
    }
  };

  return (
    <div>
      <label htmlFor={id} className="block font-medium mb-2">
        {label} {isRequired && <span className="text-red-500">*</span>}
      </label>
      {renderInput()}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
