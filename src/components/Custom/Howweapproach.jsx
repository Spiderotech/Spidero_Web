import React, { useState, useEffect } from "react";
import Discovery from "../../assets/custom/development.jpg";
import Journey from "../../assets/custom/design.jpg";
import System from "../../assets/custom/quality.jpg";
import Quality from "../../assets/custom/planing.jpg";
import Ultimate from "../../assets/custom/discovery.jpg";

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
      <div className="w-full h-auto   flex flex-col md:flex-row justify-center items-center gap-3 p-5 ">
        <div className=" w-full md:w-[40%] h-auto   ">
          <div className="text-[40px] font-sans leading-10 font-bold  mb-4 lg:mb-8">
            How We Approach Custom Software Development
          </div>
        </div>
        <div className=" w-full md:w-[30%] h-auto  ">
          <p className="font-sans text-[18px] leading-7 font-medium tracking-normal  mb-3">
            Leveraging a deliberately designed software development process, we
            strictly adhere to industry-leading security practices. Our focus is
            on crafting customized software solutions for clients worldwide,
            ensuring unparalleled quality and security.
          </p>
        </div>
      </div>
      <div className="w-full h-auto flex flex-col md:flex-row justify-center items-center gap-3 ">
        <div className="w-full md:w-[20%] h-auto  ">
          <div className="w-64 flex-col hidden  text-black p-6">
            {content.map((item, index) => (
              <div
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`cursor-pointer mb-14 px-2 py-1 font-sans font-medium rounded-md  ${
                  currentSlide === index ? "bg-white" : "  bg-zinc-400"
                }`}
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full  md:w-[70%] h-auto  ">
          <div className="flex-1 p-8">
            <img
              src={content[currentSlide].image}
              alt={content[currentSlide].title}
              className="w-full h-[400px] object-cover mb-4 rounded"
            />
            <h2 className="text-2xl font-bold mb-2">
              {content[currentSlide].title}
            </h2>
            <p className="text-gray-700 text-xl">{content[currentSlide].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeApproach;
