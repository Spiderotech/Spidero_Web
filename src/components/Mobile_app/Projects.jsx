import React from "react";
import web1 from "../../assets/largo-mobile@2x.54a7127676655a6669a8.png";
import web2 from "../../assets/mdxapp.png";

const projectData = [
  {
    title: "Crypto Live.ai",
    image:web1,
    subTitle: "Crpto live",
    companyName: "Spidero technology",
    description:
      "Our team crafted a cutting-edge AI-driven video streaming application, focusing on delivering an unparalleled user experience.",
  },
  {
    title: "MDX FOOD APP",
    image:web2,
    subTitle: "Food ordering app",
    companyName: "MDX University",
    description:
      "We meticulously designed and engineered a user-centric food ordering app,This application simplifies meal ordering for users, offering a seamless integration of technology and convenience. ",
  },
 
];

const Project = ({ title,image, subTitle, companyName, description }) => {
  return (
    <div className="w-full h-auto p-10 ">
      <div className="grid lg:grid-cols-2">
        <div className="mb-6 md:mb-0 w-full h-auto p-10 lg:p-20  ">
          <img
            src={image}
            alt="profile"
            className="w-full h-auto  object-contain   "
          />
        </div>
        <div className="mb-6 md:mb-0 lg:mt-32 w-full h-auto">
          <h1 className="text-[32px] sm:text-[26px] md:text-[32px] lg:text-[40px] font-black font-sans lg:ml-24 mt-0 lg:mt-10">
            {title}
          </h1>
          <br />
          <p className="text-base font-black lg:ml-24">{subTitle}</p>
          <br />
          <span className="font-sans text-[14px] -tracking-normal lg:ml-12 pt-24">
            <u className="h-3 ">{companyName}</u>
          </span>
          <p className="text-[28px] font-sans lg:ml-8 pt-8">{description}</p>
          
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
