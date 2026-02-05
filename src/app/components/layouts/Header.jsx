'use client';
import { useState } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';
import comapanyLogo from "../../../../public/assets/icon/code-creator-image.jpg"
import Image from 'next/image';
import ModalWrapper from '../modal/ModalWrapper';
import SalesAdvisorModalContent from '../modal/content/SalesAdvisorModalContent';
import { FaPhoneVolume } from "react-icons/fa6";
import { FaGripLines } from "react-icons/fa";
import ContactSection from '../header/ContactSection';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const [isContactMoreDetailsOpen, setContactMoreDetailsOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const onCloseContactModal = () => { 
    
    setContactModalOpen(false);
   }
   const oncloseContactAdditionalModal = () => { 
    console.log("call here close")
    setContactMoreDetailsOpen(false)
    }
  return (
    <header className="bg-white justify-center items-center  flex w-full text-black pt-4 pb-5 sticky z-20 top-0 shadow-md">
      <div className='max-w-[1200px] w-full sm:px-4 mx-auto'>
      <div className="container mx-auto flex justify-between  items-center">
        {/* <h1 className="text-2xl font-bold">Your SaaS Platform</h1> */}
        <Link className='' href="/">
          <div className=' top-3 h-auto cursor-pointer'>
            <div className='flex items-center gap-1'>
          <Image
            className="w-16" // Adjust width and height as needed
            src={comapanyLogo}
            alt="Company Logo" // Always include an alt attribute
            priority // Ensures the image loads quickly
          />
         
          
         <div className='text-nowrap font-medium'>Code Creador</div> 
         </div>
         </div>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center items-center space-x-6">
          <Link href="/services" className="hover:text-primary-base">Services</Link>
          {/* <Link href="#solutions" className="hover:text-primary-base">Solutions</Link> */}
          <Link href="/industries" className="hover:text-primary-base">Industries</Link>
          {/* <Link href="#works" className="hover:text-primary-base">Works</Link> */}
          <Link href="/about-us" className="hover:text-primary-base">About</Link>
          <Link href="#about" className="hover:text-primary-base">Work</Link>
          {/* <Link href="#careers" className="hover:text-primary-base">Careers</Link> */}
          <Link  href="/contact" className="hover:text-white text-silver-50 px-4 py-2 hover:bg-primary-300 bg-primary-base rounded-md">Contact</Link>
         
          <div className='cursor-pointer' onClick={()=>setContactModalOpen(!isContactModalOpen)}><FaPhoneVolume /></div>
          <div onClick={()=>setContactMoreDetailsOpen(true)} className='cursor-pointer'><FaGripLines/></div>
        </nav>
        <ModalWrapper isOpen={isContactModalOpen} onClose={() => setContactModalOpen(false)}>
        <SalesAdvisorModalContent onCloseContactModal={onCloseContactModal}/>
      </ModalWrapper>

      <ContactSection oncloseContactAdditionalModal={oncloseContactAdditionalModal} isOpen={isContactMoreDetailsOpen}/>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      </div>
    
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-primary text-black">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link href="/services" className="hover:text-primary-base" onClick={toggleMobileMenu}>Services</Link>
            </li>
            <li>
              <Link href="#solutions" className="hover:text-primary-base" onClick={toggleMobileMenu}>Solutions</Link>
            </li>
            <li>
              <Link href="#industries" className="hover:text-primary-base" onClick={toggleMobileMenu}>Industries</Link>
            </li>
            <li>
              <Link href="#works" className="hover:text-primary-base" onClick={toggleMobileMenu}>Works</Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-primary-base" onClick={toggleMobileMenu}>About</Link>
            </li>
            {/* <li>
              <Link href="#careers" className="hover:text-primary-base" onClick={toggleMobileMenu}>Careers</Link>
            </li> */}
            <div className='cursor-pointer' onClick={()=>setContactModalOpen(!isContactModalOpen)}><FaPhoneVolume /></div>
            {/* <li>
              <Link href="/contact" className="hover:text-primary-base" onClick={toggleMobileMenu}>Contact</Link>
            </li> */}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;