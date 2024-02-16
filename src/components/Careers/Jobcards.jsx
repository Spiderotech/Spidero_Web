import React from "react";
import { Tilt } from "react-tilt";

const Jobcards = () => {
  return (
    <section class=" bg-white md:mt-10  mt-60 mb-10">
      <div class=" mx-auto flex justify-center">
        <div class="max-w-screen-xl text-gray-500 sm:text-lg dark:text-gray-400 ">
          <div class=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5  ">
          <Tilt>
          <div class="  border-2 bg-white w-72  ">
              <div class=" p-5 ">
                <div class="font-medium text-[16px] text-start mb-2 ml-3  text-zinc-600 font-sans">
                  UK
                </div>
                <div class="font-bold text-[20px] text-start mb-2 ml-3 text-black font-sans underline">
                  React Developer
                </div>

                <div class="font-medium text-[13px] text-start mb-2 ml-3 text-black font-sans">
                  VACANCIES 1
                </div>
              </div>
            </div>

          </Tilt>
          <Tilt>
            <div class="  border-2 bg-white w-72  ">
              <div class=" p-5 ">
                <div class="font-medium text-[16px] text-start mb-2 ml-3  text-zinc-600 font-sans">
                  UK
                </div>
                <div class="font-bold text-[20px] text-start mb-2 ml-3 text-black font-sans underline">
                  UI/UX Designer
                </div>

                <div class="font-medium text-[13px] text-start mb-2 ml-3 text-black font-sans">
                  VACANCIES 1
                </div>
              </div>
            </div>
            </Tilt>
            <Tilt>
            
            <div class="  border-2 bg-white w-72  ">
              <div class=" p-5 ">
                <div class="font-medium text-[16px] text-start mb-2 ml-3  text-zinc-600 font-sans">
                  UK
                </div>
                <div class="font-bold text-[20px] text-start mb-2 ml-3 text-black font-sans underline">
                  React Developer
                </div>

                <div class="font-medium text-[13px] text-start mb-2 ml-3 text-black font-sans">
                  VACANCIES 1
                </div>
              </div>
            </div>
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobcards;
