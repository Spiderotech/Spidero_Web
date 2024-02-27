import React from "react";
import video from "../../assets/homevideo (2).mp4";
import image from "../../assets/homescreenimg.png";

const HerosectionMain = () => {
  return (
    <section className="relative h-screen flex flex-col text-center text-white py-0 px-3">
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
      <video
          className="w-full h-full object-cover absolute top-0 left-0 hidden sm:block"
          src={video}
          type="video/mp4"
          autoPlay
          loop
          muted
        ></video>
        <img
          className="w-full h-full object-cover sm:hidden"
          src={image}
          alt="Background Image"
        />
      </div>
     
      <div className="space-y-2 z-10 relative top-[60%] transform -translate-y-1/2">
        <div className="flex flex-col items-start">
          <h2 className="text-white p-5 text-start font-sans font-bold text-[32px] md:text-[36px] lg:text-[48px] w-full md:w-[700px] lg:w-[750px] md:ml-10">
            Your technology partner <br /> for innovative and impactful digital
            solutions
          </h2>

          <div className="mt-5 ml-14 hidden md:flex">
            <a href="/expertice">
              <button className="w-[198px] h-[51px] tracking-wider  font-sans leading-6 tracking-2px text-[16px] font-medium text-black bg-white transition-all ease-in-out hover:bg-black hover:text-white cursor-pointer">
                EXPLORE US
              </button>
            </a>

            <a href="/contact">
              <button className="ml-10 w-[147px] h-[51px] tracking-wider  font-sans leading-6 tracking-2px text-[16px] font-medium text-white bg-black transition-all ease-in-out hover:bg-white hover:text-black cursor-pointer">
                CONTACT US
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HerosectionMain;
