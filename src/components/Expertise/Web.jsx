import React from "react";
import img from "../../assets/expertise/web.jpg";

const Web = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-items-center items-cente p-5 md:p-10 bg-white pt-10 md:pt-40">
      <div className=" w-[80%] h-auto p-10 ">
        <div className="text-[19px] font-sans  font-bold leading-loose  mb-4 lg:mb-8">
          OUR SERVICES
        </div>
        <div className=" text-[20px] sm:text-[40px] md:text-[28px] lg:text-[38px] font-sans font-bold  mb-4 lg:mb-8">
          Startup or a Fortune 500 company, Spidero Technology will act as your
          consultant and development partners to transform your idea into
          success. Take advantage of our full-service capabilities.
        </div>
      </div>
      <div className=" w-full h-auto  flex flex-col  lg:flex-row justify-center items-center p-5 gap-5 bg-[#efefef] ">
        <div className=" w-full lg:w-[50%] h-auto p-0  md:p-10">
          <div className="text-[30px] font-sans leading-10 font-bold underline">
            Web
          </div>
          <div className="text-[19px] font-sans font-normal mt-4 ">
            We understand the science of enhancing user experience with a
            combination of human-centric approach and development ingenuity.
          </div>
          <ul className=" mt-4 ml-6 text-[18px] font-sans leading-10 font-semibold">
            <li><span style={{ marginRight: "0.5rem" }}>&#10138;</span> Web app development</li>
            <li><span style={{ marginRight: "0.5rem" }}>&#10138;</span> Web design</li>
            <li><span style={{ marginRight: "0.5rem" }}>&#10138;</span> Progressive web apps</li>
            <li><span style={{ marginRight: "0.5rem" }}>&#10138;</span> UX UI Design</li>
          </ul>
        </div>
        <div className=" w-full lg:w-[40%] h-auto ">
          <img
            src={img}
            alt="profile"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Web;
