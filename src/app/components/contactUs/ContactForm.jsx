import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import axios from 'axios';
import Button1 from '../comman/Buttons/Button1';
import { FaArrowRight } from "react-icons/fa";
import Checkbox from '../form/CheckBox';
import PdfDownloaderCard from '../form/PdfDownloaderCard';
import { toast } from 'react-toastify';
import InputField from '../comman/form/InputField';
const ContactForm = () => {
  const [activeTab, setActiveTab] = useState("quote");
  const [status, setStatus] = useState(""); // Added state to track submission status
  const [formLoading, setFormLoading] = useState(false); // Added state to track submission status
  const [isChecked, setIsChecked] = useState(false);
  const tabs = [
    { id: "enquiry", label: "General Enquiry" },
    { id: "quote", label: "Get a Quote" },
    { id: "partnership", label: "Partnership" },
  ];

  const leftText = [
    { id: "quote", title: "Explore the world of Digital Transformation", subTitle: 'Share your thoughts, and let’s discuss it over a cup of tea.' },
    { id: "partnership", title: "Great things happen when we come together.", subTitle: `Let’s collaborate and savor the essence of industry leadership` },
    { id: "enquiry", title: "What’s on your mind?", subTitle: `Share whatever comes to you—be it about artificial intelligence or a hilarious meme. We’re here to listen!` },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    countryCode: '',
    firstName: '',
    lastName: '',
    description: '',
    companyName: '',
    subject: '',
    budget: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prev)=>({...prev, [name]: null}))
  };

  const handlePhoneChange = (value, country) => {
    const phoneNumberWithoutCode = value.replace(`+${country.dialCode}`, '').trim();

    setFormData({
      ...formData,
      phoneNumber: phoneNumberWithoutCode,
      countryCode: `+${country.dialCode}`,
    });
    setErrors((prev)=>({...prev, phoneNumber: null}))
  };

  const validateForm = (formData) => {
    const errors = {};
  
    const nameRegex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/; // Allows only letters and spaces (for fullName)
    const maxNameLength = 50; // Set a reasonable maximum length for names
  
    // Validate firstName
    if (!formData.firstName) {
      errors.firstName = 'First name is required';
    } else if (!nameRegex.test(formData.firstName)) {
      errors.firstName = 'First name can only contain letters';
    } else if (formData.firstName.length > maxNameLength) {
      errors.firstName = `First name cannot exceed ${maxNameLength} characters`;
    }
  
    // Validate lastName
    if (!formData.lastName) {
      errors.lastName = 'Last name is required';
    } else if (!nameRegex.test(formData.lastName)) {
      errors.lastName = 'Last name can only contain letters';
    } else if (formData.lastName.length > maxNameLength) {
      errors.lastName = `Last name cannot exceed ${maxNameLength} characters`;
    }
  
    // Validate fullName (if present, e.g., in other form scenarios)
    if (formData.fullName) {
      if (!nameRegex.test(formData.fullName)) {
        errors.fullName = 'Full name can only contain letters and spaces';
      } else if (formData.fullName.length > maxNameLength) {
        errors.fullName = `Full name cannot exceed ${maxNameLength} characters`;
      }
    }
  
    // Email validation
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
  
    // Phone number validation
    if (!formData.phoneNumber) errors.phoneNumber = 'Phone number is required';
  
    // Conditional validations based on activeTab
    if (activeTab === 'partnership' && !formData.companyName) {
      errors.companyName = 'Company name is required';
    }
    if (activeTab === 'enquiry' && !formData.subject) {
      errors.subject = 'Subject is required';
    }
    if (activeTab === 'quote' && !formData.budget) {
      errors.budget = 'Budget is required';
    }
  
    return errors;
  };
  

  const handleSubmit = async (e) => {
   
    e.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return
    }
    console.log('Form Submitted:', formData);
    setFormLoading(true)
    const submissionData = {
      quote: {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone_number: formData.phoneNumber,
        message: formData.description,
        budget: formData.budget || ''
      },
      partnership: {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone_number: formData.phoneNumber,
        message: formData.description,
        company_name: formData.companyName,
      },
      enquiry: {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone_number: formData.phoneNumber,
        message: formData.description,
        subject: formData.subject,

      },
    };

    try {
      const response = await axios.post(
        '/api/contacts',
        { data: { ...submissionData[activeTab], type: activeTab } }
      );
      if (response.status === 200 || response.status === 201) {
        toast.success("Form submitted successfully!");
        setStatus('Form submitted successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          countryCode: '',
          description: '',
          companyName: '',
          subject: '',
          budget: ''
        }); // Reset all form data
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('Failed to submit the form. Please try again.');
    } finally {
      setFormLoading(false)
    }
  };


  const handleCheckboxChange = (checked) => {
    console.log("Checkbox state:", checked);
    setIsChecked(checked);
  };
  const [errors, setErrors] = useState({});

  return (
    <div className=' text-dark flex flex-col gap-3 sm:gap-6 lg:gap-12 md:flex-row max-w-[1200px] px-4 mx-auto'>
      <div className='md:w-2/5 mt-10'>
        {leftText
          .filter((tab) => tab.id === activeTab)
          .map((tab) => (
            <div key={tab.id}>
              <div className='text-center heading--xl'>{tab.title}</div>
              <div className='text-center mt-4 subheading--small mb-4'>{tab.subTitle}</div>

              <PdfDownloaderCard
                title="Download Our Brochure"
                description="PDF 2.0 MB"
                fileUrl="/assets/CompanyDoc/Code_Creador.pdf"
                thumbnailUrl="/brochure-thumbnail.jpg"
              />
            </div>
          ))}
      </div>

      <div className="md:w-3/5 max-w-4xl w-full mt-10">
        <div className="flex justify-start  border-b-[1px] mx-8 border-silver-100 relative space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 text-sm xl:text-lg font-medium transition-all ${activeTab === tab.id
                  ? "  z-10 border-b border-primary-300"
                  : "text-bluish text-gray-700"
                }`}
            >
              {tab.label}
            </button>
          ))}
          <span
            className={`absolute left-auto z-0 bottom-0  h-[2px] w-[90%] mx-auto rounded transition-all`}
          ></span>
        </div>

        <div className="rounded-lg p-8 w-full">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className='gap-4 grid grid-cols-1 xl:grid-cols-2'>
            <InputField
          label="First Name"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="Enter your first name"
          isRequired={true}
          error={errors.firstName}
        />
             <InputField
          label="Last Name"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder="Enter your last name"
          isRequired={true}
          error={errors.lastName}
        />
             <InputField
          label="Email"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
          isRequired={true}
          error={errors.email}
        />
               <InputField
          label="Phone Number"
          id="phone"
          name="phone"
          value={formData.phoneNumber}
          onChange={handlePhoneChange}
          fieldType="phone"
          isRequired
          error={errors.phoneNumber}
        />
              {activeTab === "partnership" && (
                  <div className='col-span-2'>
                          <InputField
                          label="Company Name"
                          id="companyName"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          placeholder="Enter your company name"
                          isRequired={true}
                          error={errors.companyName}
                        />

               </div>
              )}
              {activeTab === "enquiry" && (
                <div className='col-span-2'>
                   <InputField
            label="Subject"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="Enter the subject"
            isRequired={true}
            error={errors.subject}
          />
                </div>
              )}
            </div>
            {activeTab === "quote" && (
              <InputField
              label="Budget"
              fieldType="select"
              id="budget"
              name="budget"
               placeholder="Select your Budget"
              value={formData.budget}
              onChange={handleInputChange}
              options={[
                { value: '<500 USD', label: '<500 USD' },
                { value: '10,000-25,000 USD', label: '10,000-25,000 USD' },
                { value: '25,000-100,000 USD', label: '25,000-100,000 USD' },
                { value: '100,000+ USD', label: '100,000+ USD' },
              ]}
              isRequired={true}
              error={errors.budget}
            />
            )}
<InputField
        label="Tell us More"
        id="description"
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        placeholder="Tell us about your description"
        isRequired={false}
      />
            <Checkbox
              id="custom-privacy-checkbox"
              labelText="I have read the privacy policy and consent to the processing of my data for handling my enquiry."
              privacyPolicyLink="/privacy-policy"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <div className='w-full flex justify-end'>
              <Button1
                text="Submit"
                isLoading={formLoading}
                variant="primary"
                onClick={handleSubmit}
                icon={FaArrowRight}
                // isLoading={isLoading}
                isDisabled={!isChecked}
              />
            </div>
          </form>

          <div className="mt-6 text-center text-[#4b5563]">
            <p className="mb-1">
              <strong>Email:</strong> contact@yourcompany.com
            </p>
            <p>
              <strong>Phone:</strong> +1 234 567 890
            </p>
            {status && <p className="mt-4 text-lg  ">{status}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
