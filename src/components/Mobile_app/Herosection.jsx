
import React from 'react'
import hero from "../../assets/mobileapp.mov";

const Herosection = () => {
  return (
    <section className="h-auto flex flex-col  text-white py-0 px-3 bg-white">
    <div className="flex flex-row w-[90%] h-auto items-center justify-center text-center pt-40 mb-10">
      <div className="w-full md:w-[60%] md:p-10 ">
      <video
        className="min-w-full min-h-full  ml-5 md:w-[60%] h-[400px] object-cover "
        src={hero}
        type="video/mp4"
        autoPlay
        loop
        muted
      ></video>
        
      </div>
      <div className="w-[40%]  h-[400px] hidden md:block">
      <div className="absolute  p-10 ">
        <div className="space-y-2 relative">
          <div className="flex flex-col items-start">
            <h2 className="text-black pt-8 text-start leading-10 font-sans font-bold text-xl md:text-3xl lg:text-4xl ">
            MOBILE APP DEVELOPMENT
            </h2>
            <p className="font-sans text-[18px] leading-7 font-medium tracking-normal text-start mb-3 p-3 text-black">
            Spidero Technology develops impactful mobile apps ensuring seamless user experiences across all devices, making a difference in digital innovation.
            </p>
            <div className=" hidden md:flex">
            <a href="/expertice">
              <button className="w-[198px] h-[51px] border-2 font-sans leading-6 tracking-2px text-[16px] font-medium text-black bg-white transition-all ease-in-out hover:bg-black hover:text-white">
                EXPLORE US
              </button>
            </a>
            </div>
          </div>
        </div>
      </div>
      
      </div>
    </div>
  </section>
  )
}

export default Herosection








