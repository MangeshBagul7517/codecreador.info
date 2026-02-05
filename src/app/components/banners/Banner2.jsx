import React from 'react'
import Button1 from '../comman/Buttons/Button1'
import { FaArrowRight } from "react-icons/fa";
const Banner2 = () => {
  return (
    <div className=" bg-primary-base mt-12 text-light q">
      <div className=" px-4 py-8 max-w-[1200px] mx-auto ">
        <div className="w-full sm:w-5/12">
        <div className="heading--xl mb-4">Our Story</div>
        <div className="mb-4 subheading--large">In a world full of opportunities, we embarked on a journey to craft an extraordinary narrative—one filled with joy, challenges, and victories.</div>

         
        <Button1
        text="Submit"
        variant="secondary"
        // onClick={handleClick}
        icon={FaArrowRight}
        // isLoading={isLoading}
        isDisabled={false}
      />
      </div>
      <div></div>
      </div>
      </div>
  )
}

export default Banner2