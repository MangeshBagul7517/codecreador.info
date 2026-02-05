"use client";
import React, { useState, useRef } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const FaqItem = ({ question, answer, isOpen, toggleFaq, index }) => {
  const contentRef = useRef(null);

  return (
    <div className="border-b border-gray-300 pb-4">
      <button
        onClick={() => toggleFaq(index)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        className="flex justify-between items-baseline gap-4 w-full text-left text-lg font-medium focus:outline-none"
      >
        <span
          className={`subheading--large mt-2 hover:text-primary-base ${
            isOpen ? "text-dark" : ""
          } text-dark cursor-pointer`}
        >
          {question}
        </span>
        <span
          className={`text-dark font-thin duration-500 transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          {isOpen ? <FaMinus /> : <FaPlus />}
        </span>
      </button>
      <div
        id={`faq-answer-${index}`}
        ref={contentRef}
        style={{
          height: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
          transition: "height 0.5s ease-in-out",
        }}
        className="overflow-hidden text-gray-600 mt-4"
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

const Faq = ({ data }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFaq = (index) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  return (
    <div className="max-w-[1200px] mx-auto p-6">
      <h2 className="heading--large mb-6">{data?.title}</h2>
      <div className="space-y-4">
        {data?.items?.map((faq, index) => (
          <FaqItem
            key={index}
            index={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndexes.includes(index)}
            toggleFaq={toggleFaq}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;
