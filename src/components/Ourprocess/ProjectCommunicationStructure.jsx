import React from "react";

const ProjectCommunicationStructure = () => {
  return (
    <section class=" bg-[#efefef] mt-10">
      <div class=" mx-auto flex justify-center">
        <div class="max-w-screen-xl text-gray-500 sm:text-lg dark:text-gray-400 ">
          <h2 class="mb-4 text-[40px] mt-20 text-center tracking-tight font-bold text-gray-900 dark:text-white">
            Project Communication Structure
          </h2>
          <div class="p-5 md:p-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5  ">
            <div class=" overflow-hidden border-2 bg-black p-5  ">
              <div class="px-3 py-10 ">
                <div class="font-bold lg:text-[30px] md:text-[26px] sm:text-[24px] text-[24px]  text-start mb-2 ml-3 text-white font-sans">
                  Daily Scrum Standup
                </div>
                <p class="text-gray-400 text-[16px] text-start leading-relaxed font-sans tracking-wide font-normal mt-3">
                  Mon -Fri
                </p>
                <p class="text-gray-400 text-[16px] text-start leading-relaxed font-sans tracking-wide font-normal mt-1">
                  30 minutes
                </p>
                <hr class="h-px my-3 bg-gray-500 border-0 dark:bg-gray-700"></hr>

                <p class="text-gray-400 text-[16px] text-start leading-relaxed font-sans tracking-wide font-normal mt-1">
                  Check previous day’s work, current day’s plans, any queries,
                  hurdles etc
                </p>
                <hr class="h-px my-3 bg-gray-500 border-0 dark:bg-gray-700"></hr>
                <p class="text-gray-400 text-[16px] text-start leading-relaxed font-sans tracking-wide font-normal mt-1">
                  Project Manager with the entire Project Team
                </p>
              </div>
            </div>
            <div class=" overflow-hidden border-2 bg-black p-5  ">
              <div class="px-3 py-10 ">
                <div class="font-bold lg:text-[30px] md:text-[26px] sm:text-[24px] text-[24px] text-start mb-2 ml-3 text-white font-sans">
                  Weekly Review
                </div>
                <p class="text-gray-400 text-[16px] text-start leading-relaxed font-sans tracking-wide font-normal mt-3">
                  Weekly
                </p>
                <p class="text-gray-400 text-[16px] text-start leading-relaxed font-sans tracking-wide font-normal mt-1">
                  45-60 minutes
                </p>
                <hr class="h-px my-3 bg-gray-500 border-0 dark:bg-gray-700"></hr>

                <p class="text-gray-400 text-[16px] text-start leading-relaxed font-sans tracking-wide font-normal mt-1">
                  "Improvements to process (No finger pointing!)"
                </p>
                <hr class="h-px my-3 bg-gray-500 border-0 dark:bg-gray-700"></hr>
                <p class="text-gray-400 text-[16px] text-start leading-relaxed font-sans tracking-wide font-normal mt-1">
                  Client along with the Project Manager & Team Lead
                </p>
              </div>
            </div>
            <div class=" overflow-hidden border-2 bg-black p-5  ">
              <div class="px-3 py-10 ">
                <div class="font-bold lg:text-[30px] md:text-[26px] sm:text-[24px] text-[24px] text-start mb-2 ml-3 text-white font-sans">
                  Sprint Delivery
                </div>
                <p class="text-gray-400 text-[16px] text-start leading-relaxed font-sans tracking-wide font-normal mt-3">
                  2-3 weeks
                </p>
                <p class="text-gray-400 text-[16px] text-start leading-relaxed font-sans tracking-wide font-normal mt-1">
                  1-2 hours
                </p>
                <hr class="h-px my-3 bg-gray-500 border-0 dark:bg-gray-700"></hr>

                <p class="text-gray-400 text-[16px] text-start leading-relaxed font-sans tracking-wide font-normal mt-1">
                  Demonstration for the client.
                </p>
                <hr class="h-px my-3 bg-gray-500 border-0 dark:bg-gray-700"></hr>
                <p class="text-gray-400 text-[16px] text-start leading-relaxed font-sans tracking-wide font-normal mt-1">
                  Client along with the Project Manager & Team Lead.
                </p>
              </div>
            </div>
            <div class=" overflow-hidden border-2 bg-black p-5  ">
              <div class="px-3 py-10 ">
                <div class="font-bold lg:text-[30px] md:text-[26px] sm:text-[24px] text-[24px] text-start mb-2 ml-3 text-white font-sans">
                  Code Reviews
                </div>
                <p class="text-gray-400 text-[16px] text-start leading-relaxed font-sans tracking-wide font-normal mt-3">
                  Bi-Weekly
                </p>
                <p class="text-gray-400 text-[16px] text-start leading-relaxed font-sans tracking-wide font-normal mt-1">
                  3-4 hours
                </p>
                <hr class="h-px my-3 bg-gray-500 border-0 dark:bg-gray-700"></hr>

                <p class="text-gray-400 text-[16px] text-start leading-relaxed font-sans tracking-wide font-normal mt-1">
                  Code Review
                </p>
                <hr class="h-px my-3 bg-gray-500 border-0 dark:bg-gray-700"></hr>
                <p class="text-gray-400 text-[16px] text-start leading-relaxed font-sans tracking-wide font-normal mt-1">
                  Tech Lead
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCommunicationStructure;
