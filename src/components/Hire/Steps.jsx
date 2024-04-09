import React from "react";
import pm2 from "../../assets/Hire/pm2.png";
import team from "../../assets/Hire/team.png";
import growth from "../../assets/Hire/growth.png";
const Steps = () => {
  return (
    <section class="  mt-20">
      <div class=" mx-auto flex justify-center">
        <div class="max-w-screen-xl text-gray-500 sm:text-lg dark:text-gray-400 ">
          <h2 class="mb-4 text-4xl mt-20 text-center tracking-tight font-bold text-gray-900 ">
            We're with you every step of the way
          </h2>

          <div class=" p-10 lg:p-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-5  ">
            <div
              class=" overflow-hidden border-2 bg-white rounded-md  border-orange-400  "
              data-aos="fade-down"
              data-aos-duration="1000"
            >
                <div className=" flex justify-center items-center p-5 ">
                  <img
                    src={pm2}
                    alt="profile"
                    className="w-32 h-32 object-contain"
                  />
                </div>
              <div class="px-3 py-10 ">
                
                <div class="font-bold text-[20px]  text-center mb-2 ml-3 text-black font-sans">
                  Fully Managed with a PM
                </div>

                <p class="text-gray-700 text-[16px]  text-center leading-relaxed font-sans tracking-wide font-normal mt-5">
                  Even the smallest team will have a PM to manage, deliver,
                  ensure quality, cost and timelines.
                </p>
              </div>
            </div>
            <div
              class=" overflow-hidden border-2 bg-white rounded-md  border-orange-400  "
              data-aos="fade-down"
              data-aos-duration="1000"
            >
                 <div className=" flex justify-center items-center p-5  ">
                  <img
                    src={growth}
                    alt="profile"
                    className="w-32 h-32 object-contain"
                  />
                </div>
              <div class="px-3 py-10 ">
                <div class="font-bold text-[20px]  text-center mb-2 ml-3 text-black font-sans">
                  Scale up, down, pause, replay
                </div>

                <p class="text-gray-700 text-[16px]  text-center leading-relaxed font-sans tracking-wide font-normal  mt-5">
                  Increase or decrease team size anytime, pause anytime, restart
                  anytime, no minimum commitment clauses. Do as you may please!
                </p>
              </div>
            </div>
            <div
              class=" overflow-hidden border-2 bg-white rounded-md   border-orange-400 "
              data-aos="fade-down"
              data-aos-duration="1000"
            >
                 <div className=" flex justify-center items-center p-5 ">
                  <img
                    src={team}
                    alt="profile"
                    className="w-32 h-32 object-contain"
                  />
                </div>
              <div class="px-3 py-10 ">
                <div class="font-bold text-[20px]  text-center mb-2 ml-3 text-black font-sans">
                  All skills in one place
                </div>

                <p class="text-gray-700 text-[16px]  text-center leading-relaxed font-sans tracking-wide font-normal  mt-5">
                  Need basis skills like UI/UX, DevOps, Testing and even non
                  Tech skills like digital marketing covered in every plan.
                </p>
              </div>
            </div>
          </div>
          <div className=" text-center mb-10">
            <h1 className=" text-xl">
              For bigger team requirements, pls directly contact{" "}
              <a href="mailto: contact@spiderotechnology.com">
                <span className="text-orange-400">
                  contact@spiderotechnology.com
                </span>
              </a>{" "}
              or{" "}
              <span className="text-orange-400">
                schedule a discovery call!
              </span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
