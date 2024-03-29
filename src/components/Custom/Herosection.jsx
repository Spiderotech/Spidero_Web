import React from "react";
import hero from "../../assets/herovideo.mp4";
import hero1 from "../../assets/homescreenimg.png";

const Herosection = () => {
  return (
    <section className="h-auto flex flex-col  text-white py-0 px-3 bg-white">
      <div className="flex flex-row w-full lg:w-[90%] h-auto items-center justify-center text-center pt-28 lg:pt-40 mb-10">
        <div className="w-full lg:w-[60%]     ">
          <div className="flex flex-col items-start ">
            <h2 className="text-black pt-8 text-start  font-sans md:leading-none  font-normal text-[30px] sm:text-[36px] lg:text-[44px] ml-2 lg:ml-10 ">
              Top-Tier{" "}
              <span className="text-black pt-8 text-start md:leading-none font-sans font-bold text-[30px] sm:text-[36px] lg:text-[44px] ">
                Software Development Company
              </span>
            </h2>
            <p className="font-sans text-[18px] leading-7  font-medium tracking-normal text-start mb-3 p-2 lg:p-9 text-black">
              We specialize in strategic planning, design, development, and the
              seamless, scalable implementation of tailor-made software
              solutions. Employing a highly consultative approach, we are
              trusted collaborative partners committed to delivering measurable
              results and elevating business performance. Our custom-engineered
              software solutions are meticulously crafted to meet the unique
              needs of diverse industry verticals, ensuring optimal outcomes for
              our clients.
            </p>
            <div className="ml-2 lg:ml-5 md:ml-10">
              <a href="/expertice">
                <button className="cursor-pointer border border-black w-[307px] h-[51px] font-sans  tracking-wide tracking-2px text-[18px] font-medium text-black bg-white transition-all ease-in-out hover:bg-black hover:text-white hover:border-white">
                  EXPLORE US
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="w-[40%]   h-auto hidden lg:block pb-28 ">
          <video
            className="w-full h-[300px] object-cover hidden sm:block   "
            src={hero}
            type="video/mp4"
            autoPlay
            loop
            muted
          ></video>
           <img
            className="w-full h-[300px] object-cover sm:hidden"
            src={hero1}
            alt="Background Image"
          />
        </div>
      </div>
    </section>
  );
};

export default Herosection;
