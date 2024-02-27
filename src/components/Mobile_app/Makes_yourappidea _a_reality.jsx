import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import mobile1 from "../../assets/mobile/4266331-removebg-preview.png";
import mobile3 from "../../assets/mobile/4266331-removebg-preview1.png";
import mobile2 from "../../assets/mobile/4266331-removebg-preview3.png";


function Makes_yourappidea_a_reality() {
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
      slidesPerView: 5,
      spaceBetween: 40
    }
  };
  return (
    <section className="h-auto flex flex-col items-center justify-center   text-white py-0 px-3 bg-black ">
      <div className="flex flex-col w-[90%] h-auto  text-center mb-10  ">
        <div className="w-full lg:w-[60%]  mt-10 ">
          <div className="flex flex-col items-start">
            <h2 className="text-white pt-8 text-start leading-10 font-sans font-bold text-xl md:text-3xl lg:text-4xl ml-10">
              How Spidero Technology, #1 app developer in London, makes your app
              idea a reality?
            </h2>
            <p className="font-sans text-[18px] leading-7 font-medium tracking-normal text-start mb-3 p-9 text-white">
              We believe in creating value for our customers. And pre-planning
              is the best way to start. We conduct stakeholder interviews and
              address their needs. We identify their target audience, prospects,
              budget, and schedules. Our team of app developers and designers in
              the breathtaking Westminister, London plan the optimum
              requirements to carry out the individual processes. Not only that,
              we test several functionalities to see which one suits best. This
              helps our clients to receive the best without having to compromise
              on their vision. Credit goes to the agile app development process
              we follow.
            </p>
          </div>
        </div>
        <div className="w-full  h-auto mt-9 flex justify-center items-center ">
        <div className=" w-full    mt-8  ">
          <Swiper
            effect="coverflow"
            modules={[Navigation, Autoplay, Pagination]}
            breakpoints={breakpoints}
            spaceBetween={15}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: null,
              nextEl: null,
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="p-5"
          >
            <SwiperSlide>
              <img
                src={mobile1}
                alt=""
                className="w-full h-[400px] object-contain  "
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={mobile2}
                alt=""
                className="w-full h-[400px] object-contain  "
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={mobile3}
                alt=""
                className="w-full h-[400px] object-contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={mobile2}
                alt=""
                className="w-full h-[400px] object-contain  "
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={mobile1}
                alt=""
                className="w-full h-[400px] object-contain  "
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={mobile3}
                alt=""
                className="w-full h-[400px] object-contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={mobile2}
                alt=""
                className="w-full h-[400px] object-contain  "
              />
            </SwiperSlide>
          </Swiper>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Makes_yourappidea_a_reality;
