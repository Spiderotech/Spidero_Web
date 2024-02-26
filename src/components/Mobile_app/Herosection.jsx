import React from "react";
import hero from "../../assets/mobileapp.mov";

const Herosection = () => {
  return (
    <section className="h-auto flex flex-col  text-white py-0 bg-white">
      <div className="flex  flex-col-reverse lg:flex-row w-full h-auto items-center justify-center text-center mt-40 ml-1  mb-10  ">
        <div className=" w-[60%] lg:w-[40%] h-auto bg-white  ">
          <video
            className="w-full h-full object-cover "
            src={hero}
            type="video/mp4"
            autoPlay
            loop
            muted
          ></video>
          <div class="h-auto w-full lg:hidden">
            <p class="font-sans text-18px leading-7 font-medium tracking-normal text-start mb-3 mt-5 text-black">
              Spidero Technology develops impactful mobile apps ensuring
              seamless user experiences across all devices, making a difference
              in digital innovation.
            </p>
          </div>
        </div>
        <div className=" w-[70%] mb-16 lg:w-[50%] h-auto ml-10 ">
          <div className="space-y-2 relative   ">
            <div className="flex  flex-col   w-full  lg:w-[60%] lg:ml-28   ">
              <h2 className="text-black lg:pt-8 text-start leading-10 font-sans   text-4xl md:text-3xl lg:text-4xl  ">
                Mobile App{" "}
                <span className="text-black  lg:pt-8 text-start leading-10 font-sans font-bold text-4xl md:text-3xl lg:text-4xl ">
                  Development
                </span>
              </h2>
              <p className="font-sans text-[18px] leading-7 font-medium tracking-normal text-start mb-3 mt-5 text-black hidden md:flex  ">
                Spidero Technology develops impactful mobile apps ensuring
                seamless user experiences across all devices, making a
                difference in digital innovation.
              </p>
              <div className=" hidden md:flex ">
                <a href="/expertice">
                  <button className=" w-[198px] mt-14  tracking-wider  cursor-pointer h-[51px] border-2 font-sans leading-6 tracking-2px text-[16px] font-medium text-black bg-white transition-all ease-in-out hover:bg-black hover:text-white">
                    EXPLORE US
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
