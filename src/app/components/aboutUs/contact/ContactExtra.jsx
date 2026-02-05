import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Button1 from "../../comman/Buttons/Button1";
import RotatingDesign1 from "../../design/RotatingDesign1";
import { useRouter } from "next/navigation";

const ContactExtra = ({ data, variant = "primary", onCloseModal=()=>{} }) => {
  const isSecondary = variant === "secondary";
  const router = useRouter();

  const handleButtonClick = () => {
    
    console.log("call to close 1")
   router.push(data?.buttonPath);
   onCloseModal();
  };

  return (
    <div
      className={`px-4 max-w-[1200px] mx-auto ${
        isSecondary ? "" : "bg-white md:py-16 py-4 text-center"
      }`}
    >
      <div className={`${isSecondary ? "" : "mx-auto"} sm:w-[90%]`}>
        {/* Heading Section */}
        <HeadingSection title={data?.title} description={data?.description} isSecondary={isSecondary} />
        <div className={`flex ${isSecondary ? "" : "justify-center"}`}>
          <Button1
            text={data?.buttonText}
            variant={isSecondary ? "secondary" : "primary"}
            onClick={handleButtonClick}
            icon={FaArrowRight}
            isDisabled={false}
          />
        </div>
        {/* Content Section */}
        {data?.category === "partnership" ? (
          <RotatingDesign1 />
        ) : (
          <ContactInfo />
        )}

        {/* Button Section */}
        
      </div>
    </div>
  );
};

const HeadingSection = ({ title, description, isSecondary }) => (
  <div>
    <h2 className="heading--xl mb-4">{title}</h2>
    <p
      className={`subheading--small ${
        isSecondary ? "" : "max-w-2xl mx-auto"
      } text-silver-200 mb-10`}
    >
      {description}
    </p>
  </div>
);

const ContactInfo = () => (
  <div className="bg-black text-white px-6 py-12">
    <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <ContactItem
        flagSrc="https://flagcdn.com/w40/in.png"
        country="INDIA"
        phone="+91 98222 35937"
        email="sales@codecreador.com"
      />
      <ContactItem
        flagSrc="https://flagcdn.com/w40/us.png"
        country="USA"
        phone="+1 (213) 497 1057"
        email="sales@codecreador.com"
      />
    </div>
  </div>
);

const ContactItem = ({ flagSrc, country, phone, email }) => (
  <div className="flex flex-col items-start">
    <div className="flex gap-3">
      <img
        src={flagSrc}
        alt={`${country} Flag`}
        className="w-8 h-5 object-cover"
      />
      <p className="text-lg font-bold">{country}</p>
    </div>
    <div>
      <p className="text-sm mt-2">{phone}</p>
      <p className="text-sm mt-1">{email}</p>
    </div>
  </div>
);

export default ContactExtra;
