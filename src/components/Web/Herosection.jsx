import React from "react";
import backimage from "../../assets/webdevelopment.jpeg";

const Herosection = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          className="w-[100%] h-[100%] object-cover bg-stone-400"
          src={backimage}
          alt="Background Image"
        />
      </div>
      <div className="absolute bottom-52 left-16 p-10 ">
        <div className="space-y-2 relative">
          <div className="flex flex-col items-start">
            <h2 className="text-white pt-8 text-start leading-10 font-sans font-bold text-[18px] pb-5 ">
              WEB DEVELOPMENT
            </h2>
            <span className="font-sans text-[36px] font-semibold leading-7 tracking-normal text-start mb-3  pb-5 text-white  h-auto">
            We create solutions to optimize 
            </span>
            <span className="font-sans text-[36px] font-semibold leading-7 tracking-normal text-start mb-3  pb-5 text-white  h-auto">
            your business efficiency.
            </span>
            <div className=" hidden md:flex">
              <a href="/contact">
                <button className="border border-black w-[198px] h-[51px] font-sans leading-6 tracking-2px text-[16px] font-medium text-black bg-white transition-all ease-in-out hover:bg-black hover:text-white hover:border-white">
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
