import React from "react";
import BallCanvas from "../Canvas/Ball";
import react from "../../assets/reactjs.png";
import andro from "../../assets/mobile/android.png";
import ios from "../../assets/mobile/ios.png";
import enter from "../../assets/mobile/normal.png";

const Developmentservice = () => {
  return (
    <section class=" bg-white mt-10">
      <div class=" mx-auto flex justify-center">
        <div class="max-w-screen-xl text-gray-500 sm:text-lg dark:text-gray-400 ">
          <h2 class="mb-4 text-4xl mt-20 text-center tracking-tight font-bold text-gray-900 ">
            Our Mobile App Development Services
          </h2>

          <div class="p-5 md:p-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5  ">
            <div class=" overflow-hidden border-2  bg-gray-300 rounded-xl  ">
              <div class="px-3 py-10 ">
                <div class="font-bold text-[20px] text-start mb-2 ml-3 text-black font-sans">
                  iOS App<br></br> Development
                </div>

                <p class="text-black text-[16px] text-start leading-relaxed font-sans tracking-wide font-normal mt-5 ">
                  Crafting native iOS apps adhering to the Human Interface
                  Guidelines, we harness the latest iOS frameworks for optimal
                  performance. Our iPhone and iPad product web development
                  undergoes rigorous split testing, ensuring valuable insights
                  from early user feedback.
                </p>
                
              </div>
              <div className="w-16 h-16 animate-bounce m-3  ">
                  <BallCanvas icon={ios} />
                </div>
            </div>
            <div class=" overflow-hidden border-2  bg-black rounded-xl  ">
              <div class="px-3 py-10 ">
                <div class="font-bold text-[20px] text-start mb-2 ml-3 text-whitw font-sans text-white">
                  Android App Development
                </div>

                <p class="text-white text-[16px] text-start leading-relaxed font-sans tracking-wide font-normal mt-5">
                  Delivering top-tier Android apps, our development adheres to
                  the Material Design Guidelines, utilizing cutting-edge Android
                  libraries. Our London-based Android developers bring a wealth
                  of experience, having collaborated with both Fortune 500
                  companies and innovative startups.
                </p>
               
              </div>
              <div className="w-16 h-16  animate-bounce  ">
                  <BallCanvas icon={andro} />
                </div>
            </div>
            <div class=" overflow-hidden border-2  bg-gray-300 rounded-xl  ">
              <div class="px-3 py-10 ">
                <div class="font-bold text-[20px] text-start mb-2 ml-3 text-black font-sans">
                  React Native App Development
                </div>

                <p class="text-black text-[16px] text-start leading-relaxed font-sans tracking-wide font-normal mt-5">
                  Our React Native app development prioritizes code reusability,
                  cross-platform support, and a native-like UI. This approach
                  ensures cost-effectiveness and a higher return on investment.
                  Consult with our certified React Native app developers to
                  unlock the full potential of your project.
                </p>
               
              </div>
              <div className="w-16 h-16 animate-bounce mt-5  ">
                  <BallCanvas icon={react} />
                </div>
            </div>
            <div class=" overflow-hidden border-2  bg-black rounded-xl  ">
              <div class="px-3 py-10 ">
                <div class="font-bold text-[20px] text-start mb-2 ml-3 text-whitw font-sans text-white">
                  Enterprise Mobile Solutions
                </div>

                <p class="text-white text-[16px] text-start leading-relaxed font-sans tracking-wide font-normal mt-5 mb-10">
                  Consistently surpassing expectations, we stand out among
                  mobile app development companies by delivering intricate
                  projects within designated timelines, solidifying our
                  reputation as the preferred choice in London.
                </p>
               
              </div>
              <div className="w-16 h-16 animate-bounce  ">
                  <BallCanvas icon={enter} />
                </div>
            </div>
          </div>
          <div className="mt-10 text-center mb-10">
            <a href="/contact">
              <button className="border  cursor-pointer  border-white  w-[200px] h-[51px] font-sans leading-6 tracking-{2px} text-[16px]  text-white font-bold bg-black transition-all ease-in-out hover:bg-white hover:text-black hover:border-black">
                TALK TO US!
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Developmentservice;
