import React from "react";

const Button2 = ({ 
  text, 
  onClick, 
  icon: Icon, 
  isLoading, 
  isDisabled, 
  variant = "primary" 
}) => {
  const baseClasses = `relative  flex items-center  py-3  my-2 font-medium   transition-all duration-300 ease-in-out group`;

  const variants = {
    primary: isDisabled || isLoading
      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
      : "text-primary-base   hover:text-primary-200 ",
    secondary: isDisabled || isLoading
      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
      : "border-2  border-light text-light border-gray-300 hover:bg-silver-50 hover:bg-silver-50 hover:font-semibold hover:text-primary-base hover:border-light  ",
      
  };

  return (
    <button
      onClick={!isLoading && !isDisabled ? onClick : undefined}
      disabled={isLoading || isDisabled}
      className={`${baseClasses} ${variants[variant]}`}
    >
      {isLoading ? (
        <span className="animate-spin h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full"></span>
      ) : (
        <>
          <span className="mr-2">{text}</span>
          {Icon && (
            <span className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-2">
              <Icon />
            </span>
          )}
        </>
      )}
    </button>
  );
};

export default Button2;
