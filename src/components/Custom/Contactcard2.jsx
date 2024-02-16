import React from 'react'
import web5 from "../../assets/custom/cloud-server.png";

const Contactcard2 = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-auto items-center justify-center text-center mb-10 bg-[#f2f5f7] p-14 mt-20">
      <div className="w-full md:w-[50%]">
        <div className=" flex ">
          <div className=' hidden md:block'>
            <img src={web5} alt="Logo" class=" h-20 w-20 mt-2 " />
          </div>

          <div className="flex flex-col  ">
            <h2 className="text-black  text-start leading-10 font-sans font-bold text-xl md:text-3xl lg:text-2xl ml-10">
            Build Next-Gen Digital Technology Solutions
            </h2>
            <p className="font-sans text-[22px] ml-10 leading-7 font-medium tracking-normal text-start  text-black">
            Harness our cross-domain proficiency to outpace your competitors.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full mt-10  md:w-[40%] md:mt-0 ">
        <div className=" md:ml-10">
          <a href="/contact">
            <button className="border   border-white  w-[200px] h-[51px] font-sans leading-6 tracking-{2px} text-[16px]  text-white font-bold bg-black transition-all ease-in-out hover:bg-white hover:text-black hover:border-black">
            CONTACT US
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contactcard2