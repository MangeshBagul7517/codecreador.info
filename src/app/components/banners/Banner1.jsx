"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
// import ModalVideo from 'react-modal-video';
import ServiceSlider from '../service/ServiceSlider';
import Button1 from '../comman/Buttons/Button1';
import { FaArrowRight } from "react-icons/fa";

const Banner1 = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <div className='bg-image bg-gray-50 relative' id="home-section">

            {/* <ModalVideo channel='youtube' isOpen={isOpen} videoId="1YyAzVmP9xQ" onClose={() => setOpen(false)} /> */}

            <div className="mx-auto   pt-4 lg:pt-4 sm:pb-8 px-4 py-8 max-w-[1200px]">

                <div className='height-work'>
                    <div className=' flex flex-col sm:flex-row gap-6 my-4'>

                        <div className='sm:w-1/2 w-full'>
                            <h1 className=" heading--xl font-bold mb-5  md:4px  text-left">
                                Innovating Your Business with   Smart Digital Solutions
                            </h1>

                            <div className='w-full border-b mb-1 border-gray-700'></div>
                            <ServiceSlider />
                            {/* <p className=' subheading--medium font-normal mb-10  text-center'>Revolutionizing Businesses with Scalable, Intelligent Digital Solutions – From Smart Restaurant QR Systems and Custom CRM Platforms to Advanced E-commerce, Digital Marketing, and Comprehensive Management Solutions</p> */}

                            <div className='flex justify-start'>
                                <Button1
                                    text="Book a slot with us"
                                    variant="primary"
                                    // onClick={handleClick}
                                    icon={FaArrowRight}
                                    // isLoading={isLoading}
                                    isDisabled={false}
                                />
                            </div>
                        </div>
<div className='sm:w-1/2 w-full'>
    <img src={"https://i.ibb.co/RBsKkC7/Untitled-design-3.png"}/>
</div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner1;
