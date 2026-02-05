import React from "react";
import { FaArrowRight, FaLinkedin, FaYoutube, FaInstagram, FaFacebook, FaBehance, FaDribbble } from "react-icons/fa";
import Button1 from "../comman/Buttons/Button1";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-10 mt-12">
      <div className="container py-8 max-w-[1200px] mx-auto px-4">
        {/* Top Section */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row justify-between items-center">
          <div>
            <div className="heading--xl font-bold mb-2">Get started now!</div>
            <p className="subheading--large text-gray-400">
              It takes less than a minute of your time.
            </p>
          </div>
          <div>
            <Button1
              text="Connect with Us"
              variant="secondary"
              icon={FaArrowRight}
              isDisabled={false}
            />
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left">
          {/* Company Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4"><span className="border-b border-white">Company</span></h3>
            <ul>
              {["About", "Services", "Industries", "Works", "Careers", "Contact"].map((item) => (
                <li key={item} className="mb-2 hover:no-underline">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4"><span className="border-b border-white">Services</span></h3>
            <ul>
              {["Branding", "Experience Design", "Technology", "Digital Marketing"].map((item) => (
                <li key={item} className="mb-2 hover:no-underline">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Other Section */}
          <div>
            <div className="font-semibold text-lg mb-4"><span className="border-b border-white">Other</span></div>
            <ul>
              {[
                "Partnership",
                "Blogs",
                "Resource Augmentation",
                "Testimonials",
                "Our Clients",
                "Submit Feedback to Our CEO",
                "Download Brochure",
              ].map((item) => (
                <li key={item} className="mb-2 hover:no-underline">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div className="col-span-2">
  <h3 className="font-semibold text-lg mb-4"><span className="border-b border-white">Connect</span></h3>
  <div className="flex justify-start">
  <ul className="space-y-2 ">
    {[
      { label: "General Enquiry", value: "+91 XXXXXXXXXX" },
      { label: "Sales Enquiry India", value: "+91 9822235937" },
      { label: "Sales Enquiry US", value: "+1 (213)497-1057" },
      { label: "WhatsApp", type:'phone', value: "+91 9822235937" },
      { label: "Email", type: 'email', value: "sales@codecreador.com" },
    ].map((item) => (
      <li key={item.label} className="flex gap-4 ">
        <div className="flex w-[130px] sm:w-[200px]"><span className="cursor-pointer hover:text-primary-50">{item.label}</span></div>
        <div className="font-semibold break-word text-wrap">: {"  "}
        {item.type === "email" ? (
              <a
                href={`mailto:${item.value}`}
                className="hover:underline hover:text-primary-50"
              >
                {item.value}
              </a>
            ) : (
              item.type === "email" ? 
              <a
                href={`tel:${item.value}`}
                className="hover:underline hover:text-primary-50"
              >
                {item.value}
              </a> : item.value
            )
          }
          
         </div>
      </li>
    ))}
  </ul>
  </div>
</div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <p className="text-gray-400">Code Creador © 2025 All rights reserved</p>

          {/* Privacy and Terms */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300 hover:no-underline">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-gray-300 hover:no-underline">
              Terms & Conditions
            </a>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              <FaLinkedin size={20} />
            </a>
            <a href="https://www.youtube.com/@CodeCreador" className="hover:text-gray-300">
              <FaYoutube size={20} />
            </a>
            <a href="https://www.instagram.com/codecreadorsolutions/" className="hover:text-gray-300">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaBehance size={20} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaDribbble size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
