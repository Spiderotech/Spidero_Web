import React from "react";


const Belowherosection = () => {
  return (
    <footer className="flex flex-col  dark:bg-neutral-600 lg:text-left mt-10">
      <div className="  text-neutral-800 dark:text-neutral-200 w-full h-auto ">
        <div className="grid  lg:grid-cols-2 ">
          <div className=" md:mb-0 ">
            <div className="text-black float-left h-auto w-full lg:w-[90%] p-8">
              <div className="text-[40px] font-sans leading-10 font-bold  mb-4 lg:mb-8">
                Your Development Partner. Committed to Excellence!
              </div>
              <br />
              <p className="font-sans text-[18px] leading-7 font-semibold tracking-normal  mb-3">
                Over the last decade, we've perfected the art of crafting
                websites that innovate, engage, and yield results through a
                blend of a human-centric approach and development ingenuity.
                Hire skilled web developers to turn your vision into reality.
              </p>
              <p className=" font-sans text-[18px] leading-7 font-semibold tracking-normal mb-3">
                Whether it's custom web applications development and SaaS
                platforms, ecommerce website development, or informative lead
                generation sites, our value proposition in web development is to
                construct solutions by prioritizing the context and needs of
                end-users, ensuring meaningful results. Whether for enterprise
                or small business web development, we strive for excellence as
                an award-winning web development company, with a presence in
                London and India.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center  h-[400px]">
            <div className="grid grid-cols-2 gap-4">
              <div
                className="flex bg-black"
                data-aos="flip-up"
                data-aos-duration="1000"
              >
                <div
                  className=" w-[200px] h-[140px] m-5 bg-transparent text-center pt-5  "
                  data-aos="flip-up"
                  data-aos-duration="1000"
                >
                  <b className="text-white text-[32px]">3 + years</b>

                  <p className="text-white mt-3">in the business</p>
                </div>
              </div>
              <div
                className="flex bg-black"
                data-aos="flip-up"
                data-aos-duration="1000"
              >
                <div
                  className=" w-[200px] h-[140px] m-5 bg-transparent text-center pt-5  "
                  data-aos="flip-up"
                  data-aos-duration="1000"
                >
                  <b className="text-white text-[32px]">98%</b>
                  <p className=" text-white mt-3">client retention</p>
                </div>
              </div>
              <div
                className="flex bg-black"
                data-aos="flip-up"
                data-aos-duration="1000"
              >
                <div
                  className=" w-[200px] h-[140px] m-5 bg-transparent text-center pt-5  "
                  data-aos="flip-up"
                  data-aos-duration="1000"
                >
                  <b className="text-white text-[32px]">100+</b>
                  <p className="text-white mt-3">Business delivered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Belowherosection;
