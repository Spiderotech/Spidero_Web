import React from "react";

const Contactcard4 = () => {
  return (
    <div className="flex flex-col w-full h-auto items-center justify-center text-center mb-10 bg-[#020609] p-24">
        <h2 className="text-white  text-start leading-10 font-sans font-bold text-[28px] md:text-[32px] lg:text-[40px]">
        Ignite Your Journey of Digital Transformation
          </h2>
          <p className="font-sans text-[22px] mt-5  leading-7 font-medium tracking-normal text-start  text-white">
          Embrace Change with an Authentic Software Technology Partner
          </p>
      
        <div className="mt-10">
          <a href="/contact">
            <button className="border cursor-pointer  border-white  w-[200px] h-[51px] font-sans leading-6 tracking-{2px} text-[16px]  text-white font-bold bg-black transition-all ease-in-out hover:bg-white hover:text-black hover:border-black">
            CONTACT US
            </button>
          </a>
        </div>
      </div>
    
  );
};

export default Contactcard4;
