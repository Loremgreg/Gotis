"use client";

import { useRef, useState } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList

const faqList = [
  {
    question: "How can AI benefit my business?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        AI can revolutionize your business by automating repetitive tasks, providing data-driven insights, enhancing customer experiences through personalized interactions, and optimizing operational efficiency. This leads to significant time and cost savings, allowing your team to focus on strategic initiatives.
      </div>
    ),
  },
  {
    question: "How do you ensure the security and confidentiality of my data?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Data security and confidentiality are our top priorities. We implement robust encryption protocols, adhere to industry best practices for data handling, and ensure all solutions comply with relevant data protection regulations. We work closely with you to establish secure data pipelines and access controls.
      </div>
    ),
  },
  {
    question: "Can your AI solutions be customized to my specific needs?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Absolutely. We specialize in developing bespoke AI solutions tailored to your unique business challenges and objectives. Our process begins with a thorough understanding of your requirements, followed by the design and implementation of a solution that integrates seamlessly with your existing infrastructure.
      </div>
    ),
  },
  {
    question: "What is the typical timeline for implementing an AI solution?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        The timeline for implementing an AI solution varies depending on its complexity and scope. After an initial consultation and detailed analysis of your needs, we provide a clear project roadmap with estimated timelines. We strive for efficient delivery without compromising on quality or effectiveness.
      </div>
    ),
  },
];

const Item = ({ item }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${isOpen && "rotate-180"
              }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${isOpen && "rotate-180 hidden"
              }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-base-200" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
