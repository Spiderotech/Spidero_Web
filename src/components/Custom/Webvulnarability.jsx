import React from "react";
import security from "../../assets/Animation - 1707129159818.gif"
const Webvulnarability = () => {
  return (
    <div className="flex flex-col  dark:bg-neutral-600 lg:text-left mt-10">
      <div className="  text-neutral-800 dark:text-neutral-200 w-full h-auto ">
        <div className="grid  lg:grid-cols-2 ">
          <div className=" md:mb-0  pl-5  ">
            <div className="text-black float-left h-auto w-full lg:w-[90%] p-8 ">
              <div className="text-[40px] font-sans leading-10 font-bold  mb-4 lg:mb-1">
              No compromises when it comes to securing your application.
              </div>
              <br />
              <p className="font-sans text-[18px] leading-7 font-medium tracking-normal  mb-1">
                WEB APPLICATION VULNERABILITIES
              </p>
              <p className=" font-sans text-[16px] leading-7 font-medium tracking-normal mb-1">
              Vulnerabilities often stem from inadequate input/output sanitization, allowing potential attack vectors to be exploited, including:
              </p>
            </div>
            <div class="p-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2">
              <div class=" overflow-hidden ">
                <div class="px-3 py-2 ">
                  <div class="font-bold text-[16px] text-start mb-2 ml-3 text-black font-sans">
                    Web Development
                  </div>
                  <p class="text-gray-700 text-[14px] text-start leading-relaxed font-sans tracking-wide font-normal">
                  An attacker employing malevolent SQL code to manipulate databases and expose sensitive information.
                  </p>
                </div>
              </div>
              <div class=" overflow-hidden  ">
                <div class="px-3 py-2   ">
                  <div class="font-bold text-[16px] text-start mb-2 ml-3 text-black font-sans">
                    Cross-site Scripting (XSS)
                  </div>
                  <p class="text-gray-700 text-[14px] text-start leading-relaxed font-sans tracking-wide font-normal">
                  An attacker employing malevolent SQL code to manipulate databases and expose sensitive information.
                  </p>
                </div>
              </div>
              <div class=" overflow-hidden ">
                <div class="px-3 py-2   ">
                  <div class="font-bold text-[16px] text-start mb-2 ml-3 text-black font-sans">
                    Cross-site Request Forgery
                  </div>
                  <p class="text-gray-700 text-[14px] text-start leading-relaxed font-sans tracking-wide font-normal">
                  A remote attack injecting a file onto a web application server, triggering the execution of malicious scripts.
                  </p>
                </div>
              </div>
              <div class=" overflow-hidden ">
                <div class="px-3 py-2   ">
                  <div class="font-bold text-[16px] text-start mb-2 ml-3 text-black font-sans">
                    Remote File Inclusion
                  </div>
                  <p class="text-gray-700 text-[14px] text-start leading-relaxed font-sans tracking-wide font-normal">
                  A remote attack injecting a file onto a web application server, triggering the execution of malicious scripts.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center  bg-black">
          <img src={security} alt="Logo" className="object-contain w-60 h-60" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webvulnarability;
