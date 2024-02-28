import React, { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/20/solid";
import Finance from "../../assets/custom/discovery.svg";
import education from "../../assets/custom/planning.svg";
import logistics from "../../assets/custom/design.svg";
import healthcare from "../../assets/custom/development.svg";
import media from "../../assets/custom/testing.svg";
import realestate from "../../assets/custom/maintainance.svg";

const Developmentteam = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const handleToggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const faqData = [
    {
      question: "Project Managers",
      answer:
        "Our project manager micromanages everything from planning and developing project ideas, tracking progress to the evaluation of project performance.",
      toolsUsed: ["JIRA", "Trello", "Asana"],
    },
    {
      question: "Business Analyst",
      answer:
        "Our expert business analysts form detailed insights and suggest business changes through meticulous analysis and documentation.",
      toolsUsed: ["Lucidchart", "Microsoft Visio", "Balsamiq"],
    },
    {
      question: "UI Designers",
      answer:
        "Our experienced UI designers work in tandem with web designers to create modern and interactive interfaces to ensure enhanced user experience and conversion rates.",
      toolsUsed: ["Figma", "Adobe XD", "Sketch"],
    },
    {
      question: "Frontend Developers",
      answer:
        "Our front-end developers are responsible for creating compelling visual elements on a page and building the website’s client side. They ensure that the viewers have the best experience and interaction.",
      toolsUsed: ["React", "Vue.js", "Angular"],
    },
    {
      question: "Backend Developers",
      answer:
        "Our backend developers focus on managing data exchange between the users and server. They develop server-side logic, maintain a central database, and endure responsiveness to front-end requests.",
      toolsUsed: ["Node.js", "Express.js", "Django"],
    },
    {
      question: "DevOps",
      answer:
        "Our DevOps engineers play a pivotal role in ensuring the seamless operation of the IT architecture. They rely on CI/CD practices to combine codes and maintain and manage applications.",
      toolsUsed: ["Docker", "Kubernetes", "Jenkins"],
    },
    {
      question: "Testing and QA Teams",
      answer:
        "To ensure optimum software solution performance and functionality, our sedulous QA engineers and testing teams employ various testing methodologies from manual to intricate automated testing.",
      toolsUsed: ["Selenium", "Jest", "Cypress"],
    },
  ];
  return (
    <div className="flex flex-col   lg:text-left mt-10">
      <div className="  text-neutral-800 dark:text-neutral-200 w-full h-auto ">
        <h2 className="text-black text-center leading-10 font-sans font-bold text-[28px] md:text-[32px] lg:text-[36px]">
          Build Your Custom software development team
        </h2>
        <div className="flex flex-row mt-10">
          <div className=" w-[50%] hidden lg:block">
            <div class="  py-6 flex flex-col justify-center  ">
              <div class="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0 ">
                <div class="relative text-gray-700 antialiased text-sm font-semibold">
                  <div class="hidden sm:block w-1 bg-blue-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>

                  <div class="mt-6 ">
                    <div class="flex flex-col sm:flex-row items-center">
                      <div class="flex justify-start w-full mx-auto items-center">
                        <div class="w-full sm:w-1/2 sm:pr-8">
                          <div class="p-4 bg-white">
                            <h1 className=" underline mb-1">Discovery Worshop</h1>
                            This brings alignment in terms of end-user persona and business needs
                          </div>
                        </div>
                      </div>
                      <div class="rounded-full  bg-white border-white border-4 w-14 h-14 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                        <img
                          src={Finance}
                         
                          className=" object-contain "
                        />
                      </div>
                    </div>
                  </div>

                  <div class=" ">
                    <div class="flex flex-col sm:flex-row items-center">
                      <div class="flex justify-end w-full mx-auto items-center">
                        <div class="w-full sm:w-1/2 sm:pl-8">
                        <div class="p-4 bg-white">
                            <h1 className=" underline mb-1">Planning</h1>
                            Emphasize on planning to get everything documented without assumption
                          </div>
                        </div>
                      </div>
                      <div class="rounded-full bg-white border-white border-4 w-14 h-14 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                      <img
                          src={education}
                         
                          className=" object-contain "
                        />
                      </div>
                    </div>
                  </div>

                  <div class=" ">
                    <div class="flex flex-col sm:flex-row items-center">
                      <div class="flex justify-start w-full mx-auto items-center">
                        <div class="w-full sm:w-1/2 sm:pr-8">
                        <div class="p-4 bg-white">
                            <h1 className=" underline mb-1">Design</h1>
                            Next step is to design the UI based on the approved wireframes
                          </div>
                        </div>
                      </div>
                      <div class="rounded-full bg-white border-white border-4 w-14 h-14 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                      <img
                          src={logistics}
                         
                          className=" object-contain "
                        />
                      </div>
                    </div>
                  </div>

                  <div class=" ">
                    <div class="flex flex-col sm:flex-row items-center">
                      <div class="flex justify-end w-full mx-auto items-center">
                        <div class="w-full sm:w-1/2 sm:pl-8">
                        <div class="p-4 bg-white">
                            <h1 className=" underline mb-1">Development</h1>
                            Crafting an optimized clean code structure is our objective at this stage
                          </div>
                        </div>
                      </div>
                      <div class="rounded-full bg-white border-white border-4 w-14 h-14 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                      <img
                          src={healthcare}
                         
                          className=" object-contain "
                        />
                      </div>
                    </div>
                  </div>

                  <div class=" ">
                    <div class="flex flex-col sm:flex-row items-center">
                      <div class="flex justify-start w-full mx-auto items-center">
                        <div class="w-full sm:w-1/2 sm:pr-8">
                        <div class="p-4 bg-white">
                            <h1 className=" underline mb-1">Testing</h1>
                            Once bug fixing is done, the final sprint demo is sent for the client’s approval
                          </div>
                        </div>
                      </div>
                      <div class="rounded-full bg-white border-white border-4 w-14 h-14 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                      <img
                          src={logistics}
                         
                          className=" object-contain "
                        />
                      </div>
                    </div>
                  </div>
                  <div class=" ">
                    <div class="flex flex-col sm:flex-row items-center">
                      <div class="flex justify-end w-full mx-auto items-center">
                        <div class="w-full sm:w-1/2 sm:pl-8">
                        <div class="p-4 bg-white">
                            <h1 className=" underline mb-1">Maintainance</h1>
                            We also upgrade the system regularly based on new software/version release
                          </div>
                        </div>
                      </div>
                      <div class="rounded-full bg-white border-white border-4 w-14 h-14 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                      <img
                          src={realestate}
                         
                          className=" object-contain "
                        />
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div className=" items-center justify-center w-full lg:w-[50%] ">
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
                    <h2 className="text-[20px] font-sans font-medium">
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
                          className="h-10 w-10 flex-none text-gray-400 cursor-pointer"
                          aria-hidden="true"
                        />
                      ) : (
                        <PlusIcon
                          className="h-10 w-10 flex-none text-gray-400 cursor-pointer"
                          aria-hidden="true"
                        />
                      )}
                    </button>
                  </div>
                  {expandedIndex === index && (
                   <div>
                   <p className="text-[18px] font-sans font-medium mt-5 text-[#333]">
                     {item.answer}
                   </p>
                   <h3 className="text-lg font-semibold mt-3">Tools:</h3>
                   <div className="flex flex-wrap mt-1">
                     {item.toolsUsed.map((tool, toolIndex) => (
                       <div key={toolIndex} className="mr-3 mb-2">
                         <span className="text-sm font-sans bg-gray-200 px-2 py-1 rounded-full">
                           {tool}
                         </span>
                       </div>
                     ))}
                   </div>
                 </div>
                     
                  )}
                </div>
              ))}
            </div>
            <a href="/contact" className=" ml-0 md:ml-10">
              <button className="border cursor-pointer ml-10 mt-5 mb-10 border-white  w-[300px] h-[51px] font-sans leading-6 tracking-{2px} text-[16px] font-medium text-white font-bold bg-black transition-all ease-in-out hover:bg-white hover:text-black hover:border-black">
              SHARE PROJECT REQUIREMENT
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developmentteam;
