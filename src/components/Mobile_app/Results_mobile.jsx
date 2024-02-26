import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import mobile1 from "../../assets/mobile/mobile1.jpg";
import mobile2 from "../../assets/mobile/mobile2.png";
import mobile3 from "../../assets/mobile/mobile3.png";
import mobile4 from "../../assets/mobile/mobile4.png";
import mobile5 from "../../assets/mobile/mobile5.png";
import mobile6 from "../../assets/mobile/mobile6.png";

const Results_mobile = () => {
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
      spaceBetween: 40
    }
  };
  
  
  return (
    <section className="h-auto flex flex-col items-center justify-center   text-white py-0 px-3 bg-black ">
      <div className="flex flex-col lg:flex-row w-[90%] h-auto  text-center mb-10  ">
        <div className="w-full  lg:w-[40%]  mt-10   ">
          <div className="flex flex-col items-start">
            <h2 className="text-white pt-8 text-start leading-10 font-sans font-bold text-xl md:text-3xl lg:text-4xl md:ml-10">
              Results - What we will do for your business?
            </h2>
            <p className="font-sans text-[18px]  leading-7 font-medium tracking-normal text-start mb-3 p-2 md:p-9 text-white">
              Whether for iOS or Android, a product's success hinges on its
              performance. We elevate the development process by embracing agile
              methodologies and incorporating the latest innovations. Our focus
              includes minimizing response lag, eliminating data redundancy,
              optimizing memory allocation, and implementing robust data
              encryption. We consistently ensure top-notch performance,
              reflecting excellence in both iOS and Android app development,
              making us the best in London.
            </p>
            <p className="font-sans  cursor-pointer text-[19px] leading-7 font-medium  text-start p-9 text-white tracking-wider">
              CONVINCED?
            </p>
            <div className="mt-1 text-center mb-10 ml-10">
              <a href="/contact">
                <button className="border tracking-wider  cursor-pointer  border-white  w-[200px] h-[51px] font-sans leading-6 tracking-{2px} text-[14px]  text-white font-bold bg-black transition-all ease-in-out hover:bg-white hover:text-black hover:border-black">
                  CONTACT US
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className=" w-full   lg:w-[59%] mt-8  ">
          <Swiper
            effect="coverflow"
            modules={[Navigation]}
            breakpoints={breakpoints}
            spaceBetween={15}
            navigation
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="p-5"
          >
            <SwiperSlide>
              <img
                src={mobile1}
                alt=""
                className="w-full h-[500px] object-contain  "
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={mobile2}
                alt=""
                className="w-full h-[500px] object-contain  "
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={mobile3}
                alt=""
                className="w-full h-[500px] object-contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={mobile4}
                alt=""
                className="w-full h-[500px] object-contain  "
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={mobile5}
                alt=""
                className="w-full h-[500px] object-contain  "
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Results_mobile;
