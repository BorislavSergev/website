import React, { useState } from 'react';

const FAQ = () => {
  // Sample FAQ data
  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet consectetur adipisicing?",
      answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!"
    },
    {
      question: "Another question here?",
      answer: "Here is the answer to the second question. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, mollitia, magnam, quam eveniet dolore quas laboriosam eos temporibus omnis est beatae inventore ullam assumenda! Aliquam tempora id sint impedit!"
    },
    {
      question: "Yet another question?",
      answer: "Here is the answer to the third question. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, ex obcaecati numquam, minus alias qui quia ipsa incidunt magni corporis doloribus, delectus non suscipit eum sint magnam commodi sit."
    },
    // Add more questions and answers as needed
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-10 mx-40 bg-[#111111] mt-20">
      <div className="mx-auto max-w-lg text-center text-white">
        <h2 className="text-3xl font-bold sm:text-4xl">Kickstart your marketing</h2>
        <p className="mt-4 text-gray-300">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam doloribus
          nesciunt eos fugiat. Vitae aperiam fugit consequuntur saepe laborum.
        </p>
      </div>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item border-l-4 border-[#6F60F2] bg-[#111111] p-6">
          <div 
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleOpen(index)}
          >
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">
              {faq.question}
            </h2>
            <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
          <div className={`transition-all duration-300 overflow-hidden ${openIndex === index ? 'max-h-screen opacity-200' : 'max-h-0 opacity-0'}`}>
            <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-200">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
