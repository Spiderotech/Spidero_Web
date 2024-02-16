import React from "react";
import web1 from "../../assets/largo-mobile@2x.54a7127676655a6669a8.png";

const projectData = [
  {
    title: "AI Powered",
    subTitle: "Award-winning streaming app",
    companyName: "Largo Films",
    description:
      "We designed and developed an AI-powered video streaming app putting user experience at top priority.",
  },
  {
    title: "AI Powered",
    subTitle: "Award-winning streaming app",
    companyName: "Largo Films",
    description:
      "We designed and developed an AI-powered video streaming app putting user experience at top priority.",
  },
  {
    title: "AI Powered",
    subTitle: "Award-winning streaming app",
    companyName: "Largo Films",
    description:
      "We designed and developed an AI-powered video streaming app putting user experience at top priority.",
  },
 
  
];

const Project = ({ title, subTitle, companyName, description }) => {
  return (
    <div className="w-full h-auto p-10 ">
      <div className="grid lg:grid-cols-2">
        <div className="mb-6 md:mb-0 w-full h-auto ">
          <img
            src={web1}
            alt="profile"
            className="w-full h-[550px] object-contain"
          />
        </div>
        <div className="mb-6 md:mb-0 w-full h-auto">
          <h1 className="text-[40px] font-black font-sans ml-24 mt-0 md:mt-32">
            {title}
          </h1>
          <br />
          <p className="text-base font-black ml-36">{subTitle}</p>
          <br />
          <span className="font-sans text-[14px] -tracking-normal ml-12 pt-24">
            <u className="h-3">{companyName}</u>
          </span>
          <p className="text-[28px] font-sans ml-8 pt-8">{description}</p>
          <div className="mt-10 ml-6">
            <a href="/contact">
              <button
                className={`border border-white w-[200px] h-[51px] font-sans leading-6 tracking-{2px} text-[16px] text-white font-bold bg-black transition-all ease-in-out hover:bg-white hover:text-black hover:border-black`}
              >
                SEE OUR PORTFOLIO
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <>
      {projectData.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </>
  );
};

export default Projects;
