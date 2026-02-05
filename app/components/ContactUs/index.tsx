import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import { Description } from '@headlessui/react';

const ContactForm: React.FC = () => {

  const [activeTab, setActiveTab] = useState<string>("tab1");

  const tabs = [
    { id: "tab1", label: "Get a Quote" },
    { id: "tab2", label: "Partnership" },
    { id: "tab3", label: "General Enquiry" },
  ];

  const leftText = [
    { id: "tab1", title: "Explore the world of Digital Transformation", subTitle: 'Share your thoughts, and let’s discuss it over a cup of tea.'  },
    { id: "tab2", title: "Great things happen when we come together.", subTitle: `Let’s collaborate and savor the essence of industry leadership` },
    { id: "tab3", title: "What’s on your mind?", subTitle: `Share whatever comes to you—be it about artificial intelligence or a hilarious meme. We’re here to listen!`  },
  ];

  // const renderContent = () => {
  //   switch (activeTab) {
  //     case "tab1":
  //       return (
  //         <div className="p-6 bg-gray-50 rounded-lg shadow-md">
  //           <h2 className="text-xl font-semibold">Overview</h2>
  //           <p className="text-gray-600 mt-2">This is the overview content.</p>
  //         </div>
  //       );
  //     case "tab2":
  //       return (
  //         <div className="p-6 bg-gray-50 rounded-lg shadow-md">
  //           <h2 className="text-xl font-semibold">Details</h2>
  //           <p className="text-gray-600 mt-2">This is the details content.</p>
  //         </div>
  //       );
  //     case "tab3":
  //       return (
  //         <div className="p-6 bg-gray-50 rounded-lg shadow-md">
  //           <h2 className="text-xl font-semibold">Reviews</h2>
  //           <p className="text-gray-600 mt-2">This is the reviews content.</p>
  //         </div>
  //       );
  //     default:
  //       return null;
  //   }
  // };
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    countryCode: '',
    firstName: '',
    lastName: '',
    description: '',
    companyName: '',
    subject: ''
  });

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle phone input change
  const handlePhoneChange = (value: string, country: any) => {
    const phoneNumberWithoutCode = value.replace(`+${country.dialCode}`, '').trim();

    setFormData({
      ...formData,
      phoneNumber: phoneNumberWithoutCode, // Phone number without country code
      countryCode: `+${country.dialCode}`, // Country code
    });

    console.log('Country Code:', `+${country.dialCode}`);
    console.log('Phone Number (without country code):', phoneNumberWithoutCode);
    console.log('Full Phone Number:', value);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Add more submission logic here (e.g., send data to the backend)
  };

  return (
    <div className='bg-[#111827] flex flex-col gap-3 md:flex-row px-20 xl:px-36'>


      <div className='md:w-2/5 mt-10 text-white'>
{leftText
          .filter((tab) => tab.id === activeTab)
          .map((tab) => (
            <div key={tab.id}>
                <div className='text-center text-3xl xl:text-5xl'>{tab.title}</div>
                <div className=' text-center  mt-4 text-[20px] xl:text-2xl'>{tab.subTitle}</div>
            </div>
          ))}
    
      </div>
      
     
    <div className=" md:w-3/5 max-w-4xl w-full mt-10">
      {/* Tab Headers */}
      <div className="flex justify-center relative space-x-4">

        {tabs.map((tab) => (
           <>
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2 text-sm xl:text-lg font-medium  transition-all ${
              activeTab === tab.id
                ? "bg-blue-600 text-white z-10 border-b  shadow-lg "
                : " text-bluish text-gray-700 hover:bg-gray-300 "
            }`}
          >
            {tab.label}
          </button>
         
        </>
        ))}
         <span
           className={`absolute left-auto z-0 bottom-0 bg-[rgb(55,65,81)] h-[2px] w-[90%] mx-auto rounded  transition-all
           `}
         ></span>
      </div>

    

      {/* Tab Content */}
    
      <div className="  ">
      <div className=" shadow-md rounded-lg p-8  w-full">
        
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className='gap-4 grid grid-cols-1 xl:grid-cols-2 '>
          <div>
            <label htmlFor="firstName" className="block text-[#d1d5db] font-medium mb-2">
              First name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="Enter your first name"
               className="w-full border border-[#4b5563] bg-[rgb(55,65,81)] text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-bluish"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-[#d1d5db] font-medium mb-2">
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Enter your last name"
              className="w-full border border-[#4b5563] bg-[rgb(55,65,81)] text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-bluish"
            />
          </div>

             {/* Email */}
             <div>
            <label htmlFor="email" className="block text-[#d1d5db] font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="w-full border border-[#4b5563] bg-[rgb(55,65,81)] text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-bluish"            />
          </div>

          {/* Phone Number with Country Code */}
          <div>
            <label htmlFor="phone" className="block text-[#d1d5db] font-medium mb-2">
              Phone Number
            </label>
            <PhoneInput
              country={'us'}
              value={formData.phoneNumber}
              onChange={handlePhoneChange}
              inputStyle={{
                width: '100%',
                height: '40px',
                paddingLeft: '50px', // Space for the flag dropdown
                border: '1px solid #4b5563',
                borderRadius: '6px',
                fontSize: '16px',
                backgroundColor: 'rgb(55,65,81)',
                color: 'white'
              }}
              buttonStyle={{
                borderRadius: '6px 0 0 6px',
                border: '1px solid #4b5563',
                backgroundColor: 'rgb(55,65,81)',
               
              }}
              //className="w-full border border-[#4b5563] bg-[rgb(55,65,81)] text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-bluish"
              dropdownStyle={{
                zIndex: 10, // Ensures dropdown appears above other elements
              }}
            />
          </div>

          <div>
            <label htmlFor="companyName" className="block text-[#d1d5db] font-medium mb-2">
              Company name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="Enter your last name"
              className="w-full border border-[#4b5563] bg-[rgb(55,65,81)] text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-bluish"            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-[#d1d5db] font-medium mb-2">
             Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Enter your last name"
              className="w-full border border-[#4b5563] bg-[rgb(55,65,81)] text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-bluish"            />
          </div>

          </div>

        

          

       

          <div>
            <label htmlFor="project" className="block text-[#d1d5db] font-medium mb-2">
              Tell us More
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Tell us about your description"
              rows={4}
              className="w-full border border-[#4b5563] bg-[rgb(55,65,81)] text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-bluish"            />
          </div>


          {/* description Details */}
          

          {/* Submit Button */}
          <button type="submit" className='hidden  w-full lg:flex justify-center text-xl font-semibold py-2 px-4  navbutton text-white'>Submit</button>

        </form>

        {/* Contact Information */}
        <div className="mt-6 text-center text-[#4b5563]">
          <p className="mb-1">
            <strong>Email:</strong> contact@yourcompany.com
          </p>
          <p>
            <strong>Phone:</strong> +123 456 7890
          </p>
        </div>
      </div>
    </div>
    </div>
    </div>
   
  );
};

export default ContactForm;
