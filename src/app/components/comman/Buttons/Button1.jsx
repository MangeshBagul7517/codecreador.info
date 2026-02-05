import React from "react";

const Button1 = ({ 
  text, 
  onClick, 
  icon: Icon, 
  isLoading, 
  isDisabled, 
  variant = "primary" 
}) => {
  const baseClasses = `relative  flex items-center justify-center px-6 py-3 mx-2 my-2 font-medium border rounded-md transition-all duration-300 ease-in-out group`;

  const variants = {
    primary: isDisabled 
      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
      : `bg-primary-base text-white border-primary-base hover:bg-primary-300 hover:border-primary-300 hover:text-light`,
    secondary: isDisabled 
      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
      : "border-2  border-light text-light border-gray-300 hover:bg-silver-50 hover:bg-silver-50 hover:font-semibold hover:text-primary-base hover:border-light  ",
  };

  return (
    <button
      onClick={!isLoading && !isDisabled ? onClick : undefined}
      disabled={ isDisabled || isLoading}
      className={`${baseClasses} ${variants[variant]}`}
    >
    
        <>
      {isLoading  &&  <span className="animate-spin h-5 w-5 mr-2 border-2 border-blue-500 border-t-transparent rounded-full"></span> }
          <span className="mr-2">{text}</span>
          {Icon && (
            <span className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-2">
              <Icon />
            </span>
          )}
        </>
      
    </button>
  );
};

export default Button1;
