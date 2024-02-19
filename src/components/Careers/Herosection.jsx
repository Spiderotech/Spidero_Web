import React from 'react';
import img from "../../assets/careers.jpg";

const Herosection = () => {
  return (
    <section className="h-auto flex flex-col text-white py-0 px-3 bg-white">
      <div className="flex flex-col w-full h-auto text-center pt-40 mb-10">
        <div className="w-full lg:w-[60%] ml-5 lg:ml-20">
          <div className="flex flex-col items-start">
            <h2 className="text-black pt-3 text-start leading-10 font-sans font-semibold">
              CAREERS
            </h2>
            <p className="font-sans text-[21px] md:text-[36px] font-semibold tracking-normal text-start mb-3 p-6 text-black">
              We're looking for brilliant minds to join our top-notch team and make it even better. Are you ready?
            </p>
          </div>
        </div>
        <div className="relative w-full lg:w-[80%] h-[600px]">
          <img src={img} alt="" className="w-full h-[600px] object-cover" />
          <div className="  lg:absolute  w-full lg:w-[40%] mt-10 h-auto  lg:h-[400px] top-28 left-40 right-0 bottom-0 flex flex-col justify-center items-center bg-white text-black ">
            <h3 className="text-start font-semibold text-[16px] font-sans">Explore Opportunities</h3>
            <p className="text-[20px] font-semibold font-sans text-start ml-10 mt-10 ">If you love everything web & mobile, you have landed on the right page. Pick what describes you the best and we will walk the talk.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
