import React from "react";
import backimage from "../../assets/webdevelopment.jpeg";

const Herosection = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
    <div className="absolute top-0 left-0 w-full h-[95%] lg:h-full">
      <div className="absolute inset-0 bg-black opacity-70  h-auto   "></div>
      <img
        className="w-[150%]  h-[100%] object-cover"
        src={backimage}
        alt="Background Image"
      />
    </div>
    <div className="absolute left-10 lg:left-20 flex  justify-center items-center ">
      <div className="space-y-2 relative">
        <div className="flex flex-col  items-start ">
          <h2 className="text-white  text-start  font-sans font-bold text-[48px]  md:text-[58px] lg:text-[72px] leading-none ">
            Web Development
          </h2>
          <span className="font-sans text-[18px] md:text-[22px]   leading-7 tracking-normal text-start mb-3 pb-5 text-white h-auto mt-5">
            We create solutions to optimize  your business efficiency.
          </span>
          {/* <span className="font-sans text-[26px] md:text-[36px] font-semibold leading-7 tracking-normal lg:text-start mb-3 pb-5 text-white h-auto">
           
          </span> */}
          <div className="">
            <a href="/expertice">
              <button className="border cursor-pointer mt-5 border-black w-[250px] h-[60px] lg:h-[70px] font-sans leading-6 tracking-2px text-[16px] font-medium text-black bg-white transition-all ease-in-out hover:bg-black hover:text-white hover:border-white">
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
