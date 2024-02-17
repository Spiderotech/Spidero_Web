import React from "react";
import img from "../../assets/about.jpg";

const Herosection = () => {
  return (
    <section className="h-auto flex flex-col text-white py-0 px-3 bg-white">
    <div className="flex flex-col w-full h-auto text-center pt-40 mb-10">
      <div className="w-full md:w-[60%] ml-5 md:ml-20">
        <div className="flex flex-col item-center">
          <p className="font-sans text-[28px] md:text-[40px]  font-bold tracking-normal text-center mb-3 p-6 text-black">
          It’s always about YOU at Spidero Technology
          </p>
        </div>
      </div>
      <div className="relative w-full md:w-[80%] h-[600px]  md:ml-72">
        <img src={img} alt="" className="w-full h-[600px] object-cover" />
        <div className="  md:absolute  w-full md:w-[40%] mt-10 h-auto  md:h-[400px] top-28 left-[-200px] right-0 bottom-0 flex flex-col justify-center items-center  text-black bg-black md: bg-transparent ">
        <div className="grid grid-cols-2 gap-4">
              <div className="flex bg-black"   data-aos="flip-up"
                  data-aos-duration="1000">
                <div
                  className=" w-[200px] h-[140px] m-5 bg-transparent text-center pt-5  "
                  data-aos="flip-up"
                  data-aos-duration="1000"
                >
                    <b className="text-white text-[32px]">100+</b>
                
                  <p className="text-white mt-3">Solutions delivered</p>
                </div>
              </div>
              <div className="flex bg-black"   data-aos="flip-up"
                  data-aos-duration="1000">
                <div
                  className=" w-[200px] h-[140px] m-5 bg-transparent text-center pt-5  "
                  data-aos="flip-up"
                  data-aos-duration="1000"
                >
                  <b className="text-white text-[32px]">10+</b>
                  <p className=" text-white mt-3">Technology experts</p>
                </div>
              </div>
              <div className="flex bg-black"   data-aos="flip-up"
                  data-aos-duration="1000">
                <div
                  className=" w-[200px] h-[140px] m-5 bg-transparent text-center pt-5  "
                  data-aos="flip-up"
                  data-aos-duration="1000"
                >
                  <b className="text-white text-[32px]">10x</b>
                  <p className="text-white mt-3"> growth in 2 years</p>
                </div>
              </div>
              <div className="flex bg-black"   data-aos="flip-up"
                  data-aos-duration="1000">
                <div
                  className=" w-[200px] h-[140px] m-5 bg-transparent text-center pt-5  "
                  data-aos="flip-up"
                  data-aos-duration="1000"
                >
                  <b className="text-white text-[32px]">3 + years</b>
                  <p className="text-white mt-3">in the business</p>
                </div>
              </div>
             
            </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Herosection;
