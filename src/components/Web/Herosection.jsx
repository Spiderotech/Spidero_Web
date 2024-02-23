import React from "react";
import backimage from "../../assets/webdevelopment.jpeg";

const Herosection = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="absolute inset-0 bg-black opacity-70 "></div>
      <img
        className="w-[150%] h-[100%] object-cover"
        src={backimage}
        alt="Background Image"
      />
    </div>
    <div className="absolute lg:top-32   lg:left-16 flex justify-center items-center ">
      <div className="space-y-2 relative">
        <div className="flex flex-col items-center lg:items-start ">
          <h2 className="text-white pt-8 text-start leading-10 font-sans font-bold t text-[20px] pb-5">
            WEB DEVELOPMENT
          </h2>
          <span className="font-sans text-[26px] md:text-[36px] font-semibold leading-7 tracking-normal lg:text-start mb-3 pb-5 text-white h-auto">
            We create solutions to optimize
          </span>
          <span className="font-sans text-[26px] md:text-[36px] font-semibold leading-7 tracking-normal lg:text-start mb-3 pb-5 text-white h-auto">
            your business efficiency.
          </span>
          <div className="hidden md:flex">
            <a href="/expertice">
              <button className="border cursor-pointer border-black w-[198px] h-[51px] font-sans leading-6 tracking-2px text-[16px] font-medium text-black bg-white transition-all ease-in-out hover:bg-black hover:text-white hover:border-white">
                EXPLORE US
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default Herosection;
