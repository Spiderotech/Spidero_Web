import React, { useState, useEffect } from "react";
import Discovery from "../../assets/custom/development.jpg";
import Journey from "../../assets/custom/design.jpg";
import System from "../../assets/custom/quality.jpg";
import Quality from "../../assets/custom/planing.jpg";
import Ultimate from "../../assets/custom/discovery.jpg";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

const HowWeApproach = () => {
  const content = [
    {
      title: "Discovery & Planning",
      description:
        "In the initial software product development stage, the discovery and planning phase takes precedence. This pivotal step aims to comprehend the end-user persona, delineate project scope and goals, and assess associated risks. Our dedicated discovery team conducts thorough planning, research, data collection, and analysis to evaluate the feasibility, practicality, and usability of the product concept.",
      image: Discovery,
    },
    {
      title: "User Journey Mapping to System Desig",
      description:
        "Insufficient design depth can adversely affect the delivery and functionality of your software solution, aligning with stakeholders' and users' needs. Building on the insights from the prior phase, our team focuses on software design, encompassing architecture, database tables, and user interface mock-ups. The ultimate design specification outlines the technical implementation of the project, ensuring a robust and tailored solution.",
      image: Journey,
    },
    {
      title: "System Engineering & Development",
      description:
        "Embarking on the functional development of the new software system, this phase marks the first real-world assessment of the evolving system. It provides a chance to detect potential bottlenecks in the development or planning process, allowing our team to troubleshoot and innovate solutions for any errors found. By addressing issues and devising innovative approaches, we pave the way for their implementation in the final system.",
      image: System,
    },
    {
      title: "Quality Analysis & Testing",
      description:
        "In the quality assurance & testing stage, we transition the system to the test environment, conducting comprehensive testing, including integration and system testing. The final phase involves user acceptance testing by end users to ensure the system meets their expectations. Potential bugs may surface, requiring additional work in analysis, design, or coding. Upon approval from all stakeholders, the implementation and deployment process commences for a seamless project conclusion.",
      image: Quality,
    },
    {
      title: "Ultimate Deployment",
      description:
        "Deployment complexity varies with the project scope. Our experienced software developers utilize appropriate deployment tools, integration servers, and a robust rollback strategy. We provide essential training for end-users, operations, and IT on-call staff. Deployment strategies range from gradual implementation across branches to a full-scale rollout, ensuring a smooth process.",
      image: Ultimate,
    },
  ];
  const icons = [
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
      />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
      />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
      />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
      />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3"
      />
    </svg>,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % content.length);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [content.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % content.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + content.length) % content.length
    );
  };

  return (
    <div className="flex w-full h-auto flex-col">
      <div className="w-full h-auto   flex flex-col lg:flex-row justify-center items-center gap-3 p-5 ">
        <div className=" w-full lg:w-[40%] h-auto   ">
          <div className="text-[40px] font-sans leading-10 font-bold  mb-4 lg:mb-8">
            How We Approach Custom Software Development
          </div>
        </div>
        <div className=" w-full lg:w-[30%] h-auto  ">
          <p className="font-sans text-[18px] leading-7 font-medium tracking-normal  mb-3">
            Leveraging a deliberately designed software development process, we
            strictly adhere to industry-leading security practices. Our focus is
            on crafting customized software solutions for clients worldwide,
            ensuring unparalleled quality and security.
          </p>
        </div>
      </div>
      <div className="w-full h-auto flex flex-col md:flex-row justify-center items-center gap-3 ">
        <div className="w-full   md:w-[30%] h-auto  ">
          <div className="w-auto flex flex-row md:flex-col  text-black p-6">
            {content.map((item, index) => (
              <div
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`cursor-pointer mb-14 px-2 py-1 font-sans font-medium rounded-md flex flex-row items-center ${
                  currentSlide === index ? "bg-white" : ""
                }`}
                style={{ position: "relative" }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    padding:"2px",
                    borderRadius: "50%",
                    borderWidth: "2px", 
                    borderStyle: "solid", 
                    borderColor: currentSlide === index ? 'blue' : 'gray',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {icons[index]} 
                </div>
                <div
                className={`hidden md:block font-semibold${currentSlide === index ? 'font-semibold' : 'text-gray-600 font-semibold'}`}

                
                >{item.title}</div> 
              </div>
            ))}
          </div>
        </div>
        <div className="w-full  lg:w-[70%] h-auto  ">
          <div className="flex-1 p-8">
            <img
              src={content[currentSlide].image}
              alt={content[currentSlide].title}
              className="w-full h-[400px] object-cover mb-4 rounded"
            />
            <h2 className="text-2xl font-bold mb-2">
              {content[currentSlide].title}
            </h2>
            <p className="text-gray-700 text-xl">
              {content[currentSlide].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeApproach;
