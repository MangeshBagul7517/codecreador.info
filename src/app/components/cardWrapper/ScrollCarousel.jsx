"use client";

import React, { useRef, useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Card3 from "../cards/Card3";
import Button1 from "../comman/Buttons/Button1";

const ScrollCarousel = ({ data }) => {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    updateScrollButtons();
  }, [data]);

  const updateScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      console.log(scrollLeft, clientWidth, scrollWidth, 'last1')
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  const scrollHandler = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth / 3; // Adjust based on visible cards
      const newScrollPosition =
        direction === "left"
          ? carouselRef.current.scrollLeft - scrollAmount
          : carouselRef.current.scrollLeft + scrollAmount;

      carouselRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
      setTimeout(updateScrollButtons, 300); // Delay to allow smooth scrolling
    }
  };

  return (
    <div className="relative w-full  py-10">

      <div className="relative w-full max-w-6xl mx-auto">
        <div className="flex w-full mb-4 gap-4 justify-between">
          <div className="heading--xl">
            {data?.title}
          </div>
          <div className="flex gap-4">

            <button
              disabled={!canScrollLeft}
              onClick={() => scrollHandler("left")}
              className={''}
            >

              <FaArrowLeft className={` ${canScrollLeft ? "text-gray-900 hover:text-gray-700" : "text-gray-500"}  text-xl`} />
            </button>



            <button
              disabled={!canScrollRight}
              onClick={() => scrollHandler("right")}
              className={`  `}
            >
              <FaArrowRight className={` ${canScrollRight ? "text-gray-900 hover:text-gray-700" : "text-gray-500"}  text-xl`} />
            </button>

          </div>
        </div>
        <div
          ref={carouselRef}
          className="flex overflow-x-scroll hide-scrollbar gap-[17.1px] py-2"
          onScroll={updateScrollButtons}
        >
          {data?.items?.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[calc(33.33%-1rem)] bg-white rounded-lg shadow-md"
            >
              <Card3
                image={card.image}
                title={card.title}
                description={card.description}
                hoverText={card.hoverText}
              />
            </div>
          ))}

          
        </div>
        <div className="flex justify-center mt-6">
        <Button1
            text={data?.buttonText}
            variant="primary"
            // onClick={handleClick}
            icon={FaArrowRight}
            // isLoading={isLoading}
            isDisabled={false}
          />
        {/* Right Arrow */}
        </div>
      </div>
    </div>
  );
};

export default ScrollCarousel;
