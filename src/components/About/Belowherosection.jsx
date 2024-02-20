import React from "react";

const Belowherosection = () => {
  return (
    <footer className="flex flex-col  dark:bg-neutral-600 lg:text-left  mt-[370px] lg:mt-10">
      <div className="  text-neutral-800 dark:text-neutral-200 w-full h-auto ">
        <div className="grid  lg:grid-cols-1 ">
          <div className=" md:mb-0 ">
            <div className="text-black float-left h-auto w-full lg:w-[90%] p-5 md:p-20">
              <div className="text-[40px] font-sans leading-10 font-bold  mb-4 lg:mb-8">
              Our Story
              </div>
              <br />
              <p className="font-sans text-[18px] leading-7  tracking-normal  mb-3">
                Spidero Technology puts together a bunch of passionate minds to
                transform your visions into reality imparting an awesome digital
                experience for your users. From website design, development,
                scalable mobile apps to SaaS platforms, the solution we engineer
                accelerate efficiency and fuel growth for our clients.
              </p>
              <p className=" font-sans text-[18px] leading-7  tracking-normal mb-3">
                From 2022, we are committed to achieving and pushing the level
                of performance at all times. Leveraging the power of technology,
                we deliver end-to-end solutions for multi-million dollar funded
                start-ups to small and medium enterprises. Art and culture
                inspire us too, and our office presence at Uk and India
                is a true reflection.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center  md:block ">
            <div className="grid grid-cols-2 gap-4">

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Belowherosection;
