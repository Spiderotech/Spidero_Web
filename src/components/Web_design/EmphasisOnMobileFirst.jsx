import React from "react";
import img1 from "../../assets/design.jpg"

const EmphasisOnMobileFirst = () => {
  return (
    <section className=" h-auto flex flex-col  text-white py-0 px-3 bg-[#efefef] mb-10">
      <div className="flex flex-col lg:flex-row w-full h-auto items-center justify-center text-center pt-10 mb-10">
        <div className="w-full lg:w-[50%] p-5  lg:p-20">
          <div className="flex flex-col ">
            <div className="text-[40px] text-black font-sans  font-bold text-start leading-normal mb-4 lg:mb-8">
              Emphasis On Mobile First Web Design
            </div>
            <br />
            <p className="font-sans text-[18px] leading-7 font-medium tracking-normal text-black text-start   mb-3">
            In this era of information, mobile phones are not just a trend but a necessity. Our designers meticulously craft user experiences that seamlessly adapt to every platform. From small to large screens, we build prototypes ensuring responsiveness. As a distinguished responsive web design company, we prioritize crucial aspects of web design content, recognizing the limited real estate on smaller screens.

            </p>
            <p className=" font-sans text-[18px] leading-7 font-medium tracking-normal text-black text-start  mb-3">
            Given the current emphasis on mobile indexing and ranking by Google, developing professional mobile web designs has become increasingly vital.

            </p>
            <p className="  cursor-pointer font-sans text-[20px] leading-7 font-bold  text-black text-start tracking-wider  mb-3 ">
            CONVINCED?
            </p>
            <div className=" hidden lg:flex">
              <a href="/contact">
                <button className="border  cursor-pointer border-black w-[210px] h-[51px] font-sans leading-6  tracking-wider text-[16px] font-medium text-black bg-white transition-all ease-in-out hover:bg-black hover:text-white hover:border-white">
                DISCUSS YOUR PROJECT
                </button>
              </a>
            </div>
            
          </div>
        </div>
        <div className="w-[50%]  h-auto  relative">
        <img src={img1} alt="" className="w-full object-contain  md:h-auto" />
        </div>
      </div>

      
    </section>
  );
};



export default EmphasisOnMobileFirst;
