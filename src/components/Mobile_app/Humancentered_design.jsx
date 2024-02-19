import React from "react";
import img from "../../assets/mobile/testing@2x-570x0.jpg";

const Humancentered_design = () => {
  return (
    <section className="h-auto flex flex-col items-center justify-center   text-white py-0 px-3 bg-white ">
      <div className="flex flex-col lg:flex-row w-[80%] h-auto  text-center mb-10  ">
        <div className="w-full lg:w-full   mt-10  ">
          <div className="flex flex-col items-start">
            <h2 className="text-black pt-8 text-start leading-10 font-sans font-bold text-xl md:text-3xl lg:text-4xl md:ml-10">
              How Spidero Technology, #1 app developer in UK, makes your app
              idea a reality?
            </h2>
            <p className="font-sans text-[18px] leading-7  font-medium tracking-normal text-start mb-3 p-0 md:p-9 mt-5 text-black">
              Visuals play a pivotal role in enhancing user experience. With
              over 3 years of expertise as a London-based mobile app design
              company, we've refined our processes to ensure heightened user
              engagement. Retaining users adds value, relevance, and usefulness
              to your app. Our approach prioritizes developing products from a
              user perspective, allowing us to understand the user experience
              firsthand.
            </p>
            <p className="font-sans text-[18px] leading-7 font-medium tracking-normal text-start mb-3 p-0 md:p-9  text-black">
              Our mobile app design process revolves around content curation,
              pixel orientation, information architecture, microinteractions,
              etc., ensuring maximum user engagement.
            </p>
            <p className="font-sans text-[19px] leading-7 font-medium tracking-normal text-start p-9 text-black">
              FROM IDEATION TO VISUAL MANIFESTATION,
            </p>
            <div className="mt-1 text-center mb-10 ml-10">
              <a href="/contact">
                <button className="border  border-white  w-[200px] h-[51px] font-sans leading-6 tracking-{2px} text-[14px]  text-white font-bold bg-black transition-all ease-in-out hover:bg-white hover:text-black hover:border-black">
                  OUR DESIGN PROCESS
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className=" w-full md:w-[50%] hidden lg:block mt-10">
          <img src={img} alt="" className="w-full  h-[400px] m-10 " />
        </div>
      </div>
    </section>
  );
};

export default Humancentered_design;
