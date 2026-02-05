"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import ServiceSlider from '../ServiceSlider';


const  Banner = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <div className='bg-image relative' id="home-section">
            <div className='arrowOne'></div>
            <div className='arrowEight'></div>
            <ModalVideo channel='youtube' isOpen={isOpen} videoId="1YyAzVmP9xQ" onClose={() => setOpen(false)} />

            <div className="mx-auto max-w-7xl pt-4 lg:pt-4 sm:pb-8 px-6">

                <div className='height-work'>
                    <div className='grid-cols-12 my-4'>
                        
                        <div className='col-span-7'>
                            <h1 className="text-4xl lg:text-7xl font-bold mb-5 text-white md:4px  text-center">
                            Innovating Your Business with  <br /> Smart Digital Solutions
                            </h1>
                            <ServiceSlider/>
                            <p className='text-white md:text-lg font-normal mb-10  text-center'>Revolutionizing Businesses with Scalable, Intelligent Digital Solutions – From Smart Restaurant QR Systems and Custom CRM Platforms to Advanced E-commerce, Digital Marketing, and Comprehensive Management Solutions</p>

                            
                            <div className='flex align-middle justify-center '>
                               {/* <Link href="/contact-us"> <button className='text-xl font-semibold text-white py-4 px-6 lg:px-12 navbutton mr-6'>Book a meeting</button> </Link> */}
                                
                            </div>
                        </div>

                     

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
