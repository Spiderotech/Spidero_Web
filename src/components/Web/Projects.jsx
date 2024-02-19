import React from "react";
import web1 from "../../assets/getmyroom.png";
import web2 from "../../assets/hustelmax (1).png";

const projectData = [
  {
    title: "GetMyRoom",
    image:web1,
    subTitle: "property search",
    companyName: "GetMyRoom",
    description:
      "Search and find your ideal property with GetMyRoom. Explore a wide range of listings and discover your dream home today.",
  },
  {
    title: "Hustle Max Merchant Private Limited",
    image:web2,
    subTitle: "Product delivewry",
    companyName: "Hustle Max Merchant",
    description:
      "Discover outstanding service and trustworthiness at Hustle Max Merchant Private Limited ",
  },
  
];

const Project = ({ title,image, subTitle, companyName, description }) => {
  return (
    <div className="w-full h-auto p-10 ">
      <div className="grid lg:grid-cols-2">
        <div className="mb-6 md:mb-0 w-full h-auto  ">
          <img
            src={image}
            alt="profile"
            className="w-full h-auto  object-contain   "
          />
        </div>
        <div className="mb-6 md:mb-0 w-full h-auto">
          <h1 className="text-[32px] sm:text-[26px] md:text-[32px] lg:text-[40px] font-black font-sans lg:ml-24 mt-0 lg:mt-32">
            {title}
          </h1>
          <br />
          <p className="text-base font-black lg:ml-36">{subTitle}</p>
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
