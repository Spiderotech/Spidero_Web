import React from "react";
import img from "../../assets/expertise/web.jpg";

const Web = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-items-center items-cente p-5 md:p-10 bg-white pt-10 md:pt-40">
      <div className=" lg:w-[72%] h-auto p-10 ">
        <p className="text-[19px] font-sans  tracking-[2px]  font-bold  mb-2 lg:mb-3">
          OUR SERVICES
        </p>
        <div className=" text-[20px] sm:text-[28px] md:text-[30px] lg:text-[36px] font-sans font-bold    tracking-tight mb-4 lg:mb-8">
          Startup or a Fortune 500 company, Spidero Technology will act as your
          consultant and development partners to transform your idea into
          success. Take advantage of our full-service capabilities.
        </div>
      </div>
      <div className=" w-full h-auto  flex flex-col  lg:flex-row justify-center items-center p-5 gap-5 bg-[#efefef] ">
        <div className=" w-full lg:w-[50%] h-auto p-0  md:p-10">
          <div className="text-[30px] font-sans leading-10 font-bold underline">
            <a href="/web" className=" cursor-pointer">Web</a>
          </div>
          <div className="text-[19px] font-sans font-normal mt-4 ">
            We understand the science of enhancing user experience with a
            combination of human-centric approach and development ingenuity.
          </div>
          <ul className=" mt-4 ml-6 text-[18px] font-sans leading-10 font-semibold">
            <li>
              <span style={{ marginRight: "0.5rem" }}>&#10138;</span> Web app
              development
            </li>
            <li>
              <span style={{ marginRight: "0.5rem" }}>&#10138;</span> Web design
            </li>
            <li>
              <span style={{ marginRight: "0.5rem" }}>&#10138;</span>{" "}
              Progressive web apps
            </li>
            <li>
              <span style={{ marginRight: "0.5rem" }}>&#10138;</span> UX UI
              Design
            </li>
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
