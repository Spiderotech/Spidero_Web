import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import web1 from "../../assets/mobile _swipper/3d-cryptocurrency-rendering-design.jpg";
import web2 from "../../assets/mobile _swipper/ai-chip-artificial-intelligence-future-technology-innovation.jpg";
import web3 from "../../assets/mobile _swipper/close-up-person-holding-smartphone.jpg";
import web4 from "../../assets/mobile _swipper/marketing-creative-collage-with-phone.jpg";
import web5 from "../../assets/mobile _swipper/online-banking-internet-finance-e-commerce.jpg";
import web6 from "../../assets/mobile _swipper/person-using-augmented-reality-device.jpg";
import web7 from "../../assets/mobile _swipper/full-shot-man-training-with-stats.jpg";
import web8 from "../../assets/mobile _swipper/representation-user-experience-interface-design (1).jpg";  
const Expertise = () => {
  const breakpoints = {
    640: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  };
  return (
    <div class="flex justify-center flex-col items-center w-full h-auto  ">
      <h2 class="mb-4 text-4xl mt-10 text-center tracking-tight font-bold text-gray-900 dark:text-white">
        Industries we excel in and more
      </h2>
      <div className="w-[95%] h-auto p-10 mb-5">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          breakpoints={breakpoints}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
        >
          <SwiperSlide>
            <div className="shadow-[0_15px_15px_0_rgba(0,0,0,0.2)] w-80 h-auto mb-4  text-center bg-[white] p-5 ;">
              <img
                src={web6}
                className="w-full h-60; object-contain"
                alt="Logo 1"
              />
              <h2 class="mb-4 text-start  tracking-tight font-bold text-black dark:text-white ">
                AR/VR
              </h2>
              <p class="mb-4 text-[18px] font-sans text-start ml-2 leading-relaxed text-black">
              Be it music or video streaming we have created award-winning
                apps for next-generation users in the field of media and
                entertainment.Check our portfolio to know more.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shadow-[0_15px_15px_0_rgba(0,0,0,0.2)] w-80 h-auto text-center  bg-[white] p-5 ;">
              <img
                src={web8}
                className="w-full h-60; object-contain"
                alt="Logo 1"
              />
              <h2 class="mb-4 text-start  tracking-tight font-bold text-black dark:text-white">
                Media & Entertainment
              </h2>
              <p class="mb-4 text-[18px] font-sans text-start ml-2 leading-relaxed text-black">
                Be it music or video streaming we have created award-winning
                apps for next-generation users in the field of media and
                entertainment.Check our portfolio to know more.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="shadow-[0_15px_15px_0_rgba(0,0,0,0.2)] w-80 h-auto text-center bg-[white] p-5 ;">
              <img
                src={web1}
                className="w-full h-60; object-contain"
                alt="Logo 1"
              />
              <h2 class="mb-4 text-start  tracking-tight font-bold text-black dark:text-white">
                Blockchain & IoT
              </h2>
              <p class="mb-4 text-[18px] font-sans text-start ml-2 leading-relaxed text-black">
                The futuristic solutions like Blockchain and IoT are our
                expertise.We have proudly created some mention-worthly dApps,IoT
                apps, and cryptocurrency masterpieces.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="shadow-[0_15px_15px_0_rgba(0,0,0,0.2)] w-80 h-auto text-center bg-[white] p-5 ;">
              <img
                src={web2}
                className="w-full h-60; object-contain"
                alt="Logo 1"
              />
              <h2 class="mb-4 text-start  tracking-tight font-bold text-black dark:text-white mt-2">
                AI/ML
              </h2>
              <p class="mb-4 text-[18px] font-sans text-start ml-2 leading-relaxed text-black">
                Taking the big leap in artificial Intelligence and Machine
                Learning. we have developed award-winning apps in segments that
                needed the ultimate upgrade
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="shadow-[0_15px_15px_0_rgba(0,0,0,0.2)] w-80 h-auto text-center bg-[white] p-5 ;">
              <img
                src={web7}
                className="w-full h-60; object-contain"
                alt="Logo 1"
              />
              <h2 class="mb-4 text-start  tracking-tight font-bold text-black dark:text-white">
                Health & Fitness Apps
              </h2>
              <p class="mb-4 text-[18px] font-sans text-start ml-2 leading-relaxed text-black">
                We make high-end health and fitness mobile that aims to improve
                medical domains and create highly advanced hospitals,clinics and
                personal health management solutions.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="shadow-[0_15px_15px_0_rgba(0,0,0,0.2)] w-80 h-auto text-center bg-[white] p-5 ;">
              <img
                src={web5}
                className="w-full h-60; object-contain"
                alt="Logo 1"
              />
              <h2 class="mb-4 text-start  tracking-tight font-bold text-black dark:text-white">
                Banking & Finance
              </h2>
              <p class="mb-4 text-[18px] font-sans text-start ml-2 leading-relaxed text-black">
                Devising customer-centric banking and finance app platforms to
                help both business and user get benefited with swift,smart and
                modernized services.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="shadow-[0_15px_15px_0_rgba(0,0,0,0.2)] w-80 h-auto text-center bg-[white] p-5 ;">
              <img
                src={web4}
                className="w-full h-60; object-contain"
                alt="Logo 1"
              />
              <h2 class="mb-4 text-start  tracking-tight font-bold text-black dark:text-white">
                Shopping & eCommerce
              </h2>
              <p class="mb-4 text-[18px] font-sans text-start ml-2 leading-relaxed text-black">
                eCommerce is the heart and soul of the market today. we assist
                business to get a better edge to outsmart their competitors to
                get more customers,brand exposure and better ROI with eCommerce.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="shadow-[0_15px_15px_0_rgba(0,0,0,0.2)] w-80 h-auto text-center bg-[white] p-5 ;">
              <img
                src={web3}
                className="w-full h-60; object-contain"
                alt="Logo 1"
              />
              <h2 class="mb-4 text-start  tracking-tight font-bold text-black dark:text-white mt-1">
                Education & eLearning
              </h2>
              <p class="mb-4 text-[18px]  text-start ml-2 leading-relaxed text-black">
                eCommerce is the heart and soul of the market today. we assist
                business to get a better edge to outsmart their competitors to
                get more customers,brand exposure and better ROI with eCommerce.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Expertise;
