import React from "react";

function Ourcapacity() {
  return (
    <section class=" bg-[#efefef] mt-10">
      <div class=" mx-auto flex justify-center">
        <div class="max-w-screen-xl text-gray-500 sm:text-lg dark:text-gray-400 ">
          <h2 class="mb-4 text-4xl mt-20 text-center tracking-tight font-bold text-gray-900 dark:text-white">
            Our capabilities
          </h2>

          <div class="p-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5  ">
            <div
              class=" overflow-hidden border-2 bg-white  "
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <div class="px-3 py-10 ">
                <div class="font-bold text-[20px] text-start mb-2 ml-3 text-black font-sans">
                Web Design
                </div>

                <p class="text-gray-700 text-[16px] text-start leading-relaxed font-sans tracking-wide font-normal mt-5">
                Capture your audience's attention within 5 seconds through an exceptional web design experience. Leverage our strategic planning and design methodologies to make this impactful engagement a reality.
                </p>
              </div>
            </div>
            <div
              class=" overflow-hidden border-2 bg-white  "
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <div class="px-3 py-10 ">
                <div class="font-bold text-[20px] text-start mb-2 ml-3 text-black font-sans">
                Web Development
                </div>

                <p class="text-gray-700 text-[16px] text-start leading-relaxed font-sans tracking-wide font-normal  mt-5">
                Experience a seamless transition from ideation, concept development, and prototyping to the successful launch of your website, all facilitated by our extensive 2+ years of expertise as a prominent web development company in UK.
                </p>
              </div>
            </div>
            <div
              class=" overflow-hidden border-2 bg-white  "
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <div class="px-3 py-10 ">
                <div class="font-bold text-[20px] text-start mb-2 ml-3 text-black font-sans">
                Brand Strategy
                </div>

                <p class="text-gray-700 text-[16px] text-start leading-relaxed font-sans tracking-wide font-normal  mt-5">
                We conduct thorough research to provide you with a brand strategy that surpasses your competitors, positioning you distinctly high and memorable in the market.
                </p>
              </div>
            </div>
            
          </div>
          <div className="mt-10 text-center mb-10">
            <a href="/contact">
              <button className="border  border-white  w-[200px] h-[51px] font-sans leading-6 tracking-{2px} text-[16px]  text-white font-bold bg-black transition-all ease-in-out hover:bg-white hover:text-black hover:border-black">
              CONTACT US
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ourcapacity;
