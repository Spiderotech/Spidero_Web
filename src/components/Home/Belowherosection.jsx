import React from "react";
import acc from "../../assets/financial-time.png";
import qu from "../../assets/salary-mail.png";
import proa from "../../assets/credit-card-bill.png";
import agi from "../../assets/investment-time.png";

const Belowherosection = () => {
  return (
    <footer className="flex flex-col   lg:text-left mt-10 ">
      <div className="  text-neutral-800 dark:text-neutral-200 w-full h-auto ">
        <div className="grid  lg:grid-cols-2 ">
          <div className=" md:mb-0 ">
            <div className="text-black float-left h-auto w-full p-5  md:p-20    ">
              <div className="text-[40px] font-sans leading-10 font-bold  mb-4 lg:mb-8">
                Our Value Proposition
              </div>
              <br />
              <p className="font-sans text-[18px] leading-7 font-normal tracking-wide  mb-3">
                In London's dynamic digital landscape, amidst ongoing
                disruptions, businesses need expert guidance and proven
                solutions to navigate web development challenges with
                confidence.
              </p>
              <p className=" font-sans text-[18px] leading-7 font-normal tracking-wide mb-3">
                That's where we come in. As a highly responsive and innovative
                software development agency based in London, we craft tailored
                digital solutions that empower businesses with cutting-edge
                technology to outperform competitors and excel in the
                ever-changing digital environment.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center mt-10 mb-20   ">
            <div className="grid grid-cols-2 ">
              
                <div
                  className=" w-auto h-[140px]  bg-transparent justify-start md:border-b-2       "
                  data-aos="flip-up"
                  data-aos-duration="1000"
                >
                  <img src={acc} className="m-2 w-20 h-20  " alt="profile" />
                  <p className="text-[20px]  ">Accountability</p>
                </div>
                <div
                  className=" w-auto  lg:w-[250px] h-[140px]   bg-transparent justify-start  md:border-b-2  md:border-l-2   "
                  data-aos="flip-up"
                  data-aos-duration="1000"
                >
                  <img src={qu} className="m-2 w-20 h-20  lg:ml-5 ml-10 " alt="profile" />
                  <p className="  lg:ml-5 ml-14 text-[20px]">Quality</p>
                </div>
                <div
                  className=" w-auto h-[140px]   bg-transparent justify-start   "
                  data-aos="flip-up"
                  data-aos-duration="1000"
                >
                  <img src={proa} className="m-2 w-20 h-20" alt="profile" />
                  <p className=" text-[20px]">Proactivity</p>
                </div>
                <div
                  className="   w-auto h-[140px] px-0   bg-transparent justify-start   md:border-l-2   "
                  data-aos="flip-up"
                  data-aos-duration="1000"
                >
                  <img src={agi} className=" m-2 w-20 h-20  lg:ml-5 ml-10  " alt="profile" />
                  <p className=" lg:ml-5 ml-14   text-[20px]">Agility</p>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Belowherosection;
