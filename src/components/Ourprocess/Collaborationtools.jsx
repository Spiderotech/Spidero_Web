import React from "react";
import web1 from "../../assets/Collabtools/asana1@2x-144x23 (1).webp";
import web2 from "../../assets/Collabtools/axure@2x-144x23 (1).webp";
import web3 from "../../assets/Collabtools/github@2x-144x23 (1).webp";
import web4 from "../../assets/Collabtools/invision@2x-144x23.webp";
import web5 from "../../assets/Collabtools/jira1@2x (1).webp";
import web6 from "../../assets/Collabtools/office365@2x-144x23.webp";
import web7 from "../../assets/Collabtools/skype1@2x-144x23.webp";
import web8 from "../../assets/Collabtools/slack1@2x-144x23 (1).webp";
import web9 from "../../assets/Collabtools/zeplin@2x-144x23.webp";
import web10 from "../../assets/Collabtools/zoom1@2x-144x23 (1).webp";
import {useState} from 'react'
import {
    PlusIcon,
    MinusIcon
   
  } from "@heroicons/react/20/solid";

const Collaborationtools = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const handleToggle = (index) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
      };
      const faqData = [
        {
          question:
            "Time and material based",
          answer:
            "When the scope of your idea is not clear, we tend to go with the T&M based model to provide you with more efficiency as we continue with your project.",
        },
        {
          question:
            "Dedicated Teams",
          answer:
            "To give you control over your project, the dedicated teams will be there at your disposal. We aim to give you a sense of comfort as we work on your idea and our dedicated teams make sure that you do feel that sense of control",
        },
       
       
      ];
  return (
    <div className="w-full h-auto flex flex-col justify-items-center items-cente p-5 md:p-10 bg-white ">
      <div className=" w-full h-auto  flex flex-col  md:flex-row justify-center items-center p-5 gap-5 ">
        <div className=" w-full md:w-[40%] h-auto p-0  md:p-10">
          <div className="text-[40px] font-sans leading-10 font-bold ">
            Collaboration Tools
          </div>
          <div className="text-[18px] font-sans font-normal mt-4 ">
            We make sure to use the tools that are top of the market to bring
            your ideas into reality. Our careful selection of tools makes sure
            that your ideas are executed with the highest level of efficiency.
          </div>
        </div>
        <div className=" w-full lg:w-[60%] h-auto ">
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4  ">
            <div className="w-[80px] h-[80px] flex items-center ">
              <img src={web1} alt="Logo" className="object-contain" />
            </div>
            <div className="w-[80px] h-[80px] flex items-center ">
              <img src={web2} alt="Logo" className="object-contain" />
            </div>
            <div className="w-[80px] h-[80px] flex items-center ">
              <img src={web3} alt="Logo" className="object-contain" />
            </div>
            <div className="w-[80px] h-[80px] flex items-center ">
              <img src={web4} alt="Logo" className="object-contain" />
            </div>
            <div className="w-[80px] h-[80px] flex items-center ">
              <img src={web5} alt="Logo" className="object-contain" />
            </div>
            <div className="w-[80px] h-[80px] flex items-center ">
              <img src={web6} alt="Logo" className="object-contain" />
            </div>
            <div className="w-[80px] h-[80px] flex items-center ">
              <img src={web7} alt="Logo" className="object-contain" />
            </div>
            <div className="w-[80px] h-[80px] flex items-center ">
              <img src={web8} alt="Logo" className="object-contain" />
            </div>
            <div className="w-[80px] h-[80px] flex items-center ">
              <img src={web9} alt="Logo" className="object-contain" />
            </div>
            <div className="w-[80px] h-[80px] flex items-center ">
              <img src={web10} alt="Logo" className="object-contain" />
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full h-auto  flex flex-col  md:flex-row justify-center items-center p-5 gap-5 ">
        <div className=" w-full md:w-[40%] h-auto p-0  md:p-10">
          <div className="text-[40px] font-sans leading-10 font-bold ">
          Engagement Models
          </div>
          <div className="text-[18px] font-sans font-normal mt-4 ">
          We aim to deliver excellence at every step of projects and finish our job with the top level of efficiency and dedication.
          </div>
        </div>
        <div className=" w-full md:w-[60%] h-auto  ">
        <div className=" flex justify-center items-center flex-col  ">
              {faqData.map((item, index) => (
                <div key={index} className="mt-5 border-b-2 pb-5 w-[80%]">
                  <div
                    className="header-container"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <h2 className="text-[18px] font-sans  font-semibold">
                      {item.question}
                    </h2>
                    <button
                      onClick={() => handleToggle(index)}
                      style={{
                        border: "none",
                        background: "none",
                        padding: 0,
                        margin: 0,
                        cursor: "pointer",
                        outline: "none",
                        marginLeft: "70px",
                      }}
                    >
                      {expandedIndex === index ? (
                        <MinusIcon
                          className="h-10 w-10 flex-none text-gray-400  cursor-pointer"
                          aria-hidden="true"
                        />
                      ) : (
                        <PlusIcon
                          className="h-10 w-10 flex-none text-gray-400  cursor-pointer"
                          aria-hidden="true"
                        />
                      )}
                    </button>
                  </div>
                  {expandedIndex === index && (
                    <p className="text-[18px] font-sans font-medium mt-10 text-[#333]">
                      {item.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>

        </div>
      </div>
    </div>
  );
};

export default Collaborationtools;
