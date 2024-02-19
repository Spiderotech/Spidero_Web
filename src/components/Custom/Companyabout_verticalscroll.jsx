import React from "react";
import StickyBox from "react-sticky-box";

const Companyabout_verticalscroll = () => {
  return (
    <section className=" relative h-auto flex flex-col items-center justify-center text-center  text-white py-0 px-3 bg-white">
      <div className="flex flex-col lg:flex-row w-full h-auto  pt-20 mb-10 justify-center ">
        <div className="w-full lg:w-[40%]  h-auto   ">
          <div className="flex flex-col items-start">
            <h2 className="text-black pt-8 text-start leading-10 font-sans font-bold text-xl md:text-3xl lg:text-4xl ml-10">
            What Makes Us the Most Trusted Custom Software Development Company?   

            </h2>
            <p className="font-sans text-[18px] leading-7 font-medium tracking-normal text-start mb-3 p-9 text-black">
            Spidero Technology is dedicated to crafting cutting-edge solutions that provide a growth-oriented competitive edge for your business. Our commitment to process transparency and a consistent, well-defined methodology positions us as the ideal choice for your custom software development project.
            </p>
          </div>
        </div>
        <div className="  w-full lg:w-[40%] h-auto  lg:ml-10 ">
          <div class=" border-2  "
          data-aos="fade-up"
          data-aos-duration="1000">
            <div
              class="px-3 py-10 "
              
            >
              <div className="flex flex-row">
                <div class="font-bold text-[20px] text-start mb-2 ml-3 text-black font-sans">
                  01. Consulting
                </div>
              </div>

              <p class="text-gray-700 text-[18px] text-start leading-relaxed font-sans tracking-wide font-normal">
              Spidero Technology software consulting services seamlessly guide you in digitizing operations and streamlining workflows to align with your business objectives. Our expert advice ensures the selection of optimal solutions for accelerated business growth.
              </p>
            </div>
          </div>
          <div class=" border-2  mt-3"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div
              class="px-3 py-10 "
            
            >
              <div className="flex flex-row">
                <div class="font-bold text-[20px] text-start mb-2 ml-3 text-black font-sans">
                  02. Proactivity
                </div>
              </div>

              <p class="text-gray-700 text-[18px] text-start leading-relaxed font-sans tracking-wide font-normal">
              In software outsourcing, many development firms act passively, awaiting clear instructions from clients. In contrast, we position ourselves as proactive experts, aiming to diminish operational overheads through proactive communication and engagement. We guide and monitor project progress to ensure a seamless and efficient collaboration.
              </p>
            </div>
          </div>
          <div class=" border-2  mt-3"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div
              class="px-3 py-10 "
             
            >
              <div className="flex flex-row">
                <div class="font-bold text-[20px] text-start mb-2 ml-3 text-black font-sans">
                  03. Best Practices
                </div>
              </div>

              <p class="text-gray-700 text-[18px] text-start leading-relaxed font-sans tracking-wide font-normal">
              At UI, we adhere to the belief that the key to successful, high-quality software products lies in the engineering process. Following CMMI Level 3 protocols and industry best practices, we ensure our products are crafted through a well-established set of protocols.
              </p>
            </div>
          </div>
          <div class=" border-2 mt-3 "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div
              class="px-3 py-10 "
             
            >
              <div className="flex flex-row">
                <div class="font-bold text-[20px] text-start mb-2 ml-3 text-black font-sans">
                  04. Accountability
                </div>
              </div>

              <p class="text-gray-700 text-[18px] text-start leading-relaxed font-sans tracking-wide font-normal">
              We consider every project a milestone in our journey, holding ourselves accountable to deliver results for our clients. Leaving no stone unturned in our quest to provide the best digital solutions, we aim for a portfolio full of success stories, not just a list of random projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companyabout_verticalscroll;
