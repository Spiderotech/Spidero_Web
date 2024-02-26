import React, { useEffect } from "react";
import AOS from "aos";

const Companygrowthcard = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container mx-auto flex justify-center items-center mb-20">
      <div className="w-full md:w-[80%]">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  ">
          <div className=" w-full">
            <div
              className=" w-auto h-[100px]  items-center  text-[1rem] flex flex-col  justify-start md:justify-center border-r-2 "
              // data-aos="flip-up"
              // data-aos-duration="1000"
            >
              <b>
                <b className="text-[32px] font-bold leading-10">2 years</b>
              </b>
              <br />
              <span className="text-[16px] font-medium">in the business</span>
            </div>
          </div>

          <div className="w-full  ">
            <div
              className=" w-auto h-[100px]  items-center  text-[1rem] flex flex-col  justify-center  md:border-r-2  "
              // data-aos="flip-up"
              // data-aos-duration="1000"
            >
              <b>
                <b className=" text-[32px] font-bold leading-10">98%</b>
              </b>
              <br />
              <span className="text-[16px] font-medium">Client Retention</span>
            </div>
          </div>
          <div className="w-full  ">
            <div
              className=" w-auto h-[100px]  items-center  text-[1rem] flex flex-col  justify-center border-r-2   "
              // data-aos="flip-up"
              // data-aos-duration="1000"
            >
              <b>
                <b className="text-[32px] font-bold leading-10">100+</b>
              </b>
              <br />
              <span className="text-[16px]  font-medium">Solution Delivered</span>
            </div>
          </div>
          <div className="w-full  ">
            <div
              className=" w-auto h-[100px]  items-center  text-[1rem] flex flex-col  justify-center  "
              // data-aos="flip-up"
              // data-aos-duration="1000"
            >
              <b>
                <b className="text-[32px] font-bold leading-10">10x</b>
              </b>
              <br />
              <span className="text-[16px]  font-medium">
               Growth in 2 years
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companygrowthcard;
