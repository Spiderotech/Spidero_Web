import React from "react";
import client1 from "../assets/getmyroomlogo.webp";
import client2 from "../assets/hustelmax.png";
import client3 from "../assets/leafkerala.png";
import client4 from "../assets/medoczen.png";
import client5 from "../assets/400.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

const ClientCard = () => {
  // const breakpoints = {
    
  //   768: {
  //     slidesPerView: 5,
  //     spaceBetween: 10,
  //   },
   
  //   0: {
  //     slidesPerView: 2,
  //     spaceBetween: 10,
  //   },
  // };
  // const breakpoints1 = {
   
  //   768: {
  //     slidesPerView: 5,
  //     spaceBetween: 20,
  //   },
    
  //   0: {
  //     slidesPerView: 6,
  //     spaceBetween: 10,
  //   },
  // };
  return (
    <div className="w-full justify-center  flex flex-col items-center mt-10 ">
      <h2 className="text-[40px] font-sans leading-10 font-bold ">
        Our Clients
      </h2>
      <div className="container mt-22 w-full flex justify-center items-center mt-10 ">
        <div className="bg-white w-[80%] h-auto overflow-hidden  relative flex items-center p-5">
          <Swiper
            spaceBetween={30}
            modules={[Autoplay, Pagination, FreeMode]}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: null,
              nextEl: null,
            }}
          >
            <SwiperSlide>
              
              <div className="w-auto h-auto flex items-center justify-center  ">
              <img
                  src={client1}
                  className=" w-96 h-16 object-contain"
                  alt="Logo 1"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              
              <div className="w-auto h-auto flex items-center justify-center  ">
              <img
                  src={client2}
                  className=" w-96 h-16 object-contain"
                  alt="Logo 1"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              
              <div className="w-auto h-auto flex items-center justify-center  ">
              <img
                  src={client3}
                  className=" w-96 h-16 object-contain"
                  alt="Logo 1"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              
              <div className="w-auto h-auto flex items-center justify-center  ">
              <img
                  src={client4}
                  className=" w-96  h-20  object-contain"
                  alt="Logo 1"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              
              <div className="w-auto h-auto flex items-center justify-center  ">
              <img
                  src={client5}
                  className=" w-96 h-20 object-contain"
                  alt="Logo 1"
                />
              </div>
            </SwiperSlide>
            
           
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
