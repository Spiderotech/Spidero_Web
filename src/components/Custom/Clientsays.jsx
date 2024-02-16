import React from "react";
import web5 from "../../assets/client3.webp";
const Clientsays = () => {
  return (
    <section class="h-auto ">
      <div class=" mx-auto flex justify-center">
        <div class="max-w-screen-xl text-gray-500 sm:text-lg dark:text-gray-400  ">
          <div class="flex flex-wrap justify-center mt-10 mb-10">
            <h2 className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-sans leading-10 font-bold ">
              What Our Client Says...
            </h2>

            <div>
              <div className="w-full md:w-[60%] h-auto flex flex-col justify-center ml-0 md:ml-[5%] ">
                <span className="text-black  mt-4 sm:mt-6 md:mt-8 lg:mt-10 text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-sans text-start font-normal leading-10 p-5 ">
                  <svg
                    className="w-8 h-8 mr-4 mx-auto  text-gray-400 dark:text-gray-600 text-start inline-block"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 14"
                  >
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                  </svg>
                  Spidero Technology functioned as a genuine collaborator and
                  provided a superior software solution that greatly enhanced
                  our customer experience.
                </span>

                <div className="flex flex-row ml-5 md:ml-20 mt-10">
                  <img
                    src={web5}
                    alt="profile"
                    className="w-[20px] h-[20px] sm:w-[20px] sm:h-[20px] lg:w-[50px] lg:h-[50px] rounded-full object-cover "
                  />
                  <div className="flex flex-col ml-5">
                    <strong className="text-black text-sm sm:text-base md:text-lg lg:text-xl">
                      Alvin
                    </strong>
                    <span className="text-black text-sm ">
                      Head of Development, GetMyRoom
                    </span>
                  </div>
                </div>
              </div>

              {/* <div className=" w-full md:w-[60%] h-auto flex flex-col  ml-0 md:ml-[30%] ">
                <span className="text-black  mt-4 sm:mt-6 md:mt-8 lg:mt-10 text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-sans text-start font-normal leading-10 p-5 ">
                  <svg
                    className="w-8 h-8 mr-4 mx-auto  text-gray-400 dark:text-gray-600 text-start inline-block"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 14"
                  >
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                  </svg>
                  Spidero Technology functioned as a genuine collaborator and
                  provided a superior software solution that greatly enhanced
                  our customer experience.
                </span>
                <div className="flex flex-row ml-5 md:ml-28 mt-10">
                  <img
                    src={web5}
                    alt="profile"
                    className="w-[20px] h-[20px] sm:w-[20px] sm:h-[20px] lg:w-[50px] lg:h-[50px] rounded-full object-cover "
                  />
                  <div className="flex flex-col  ml-5">
                    <strong className="text-black text-sm sm:text-base md:text-lg lg:text-xl">
                      Alvin
                    </strong>
                    <span className="text-black text-sm ">
                      Head of Development, GetMyRoom
                    </span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clientsays;
