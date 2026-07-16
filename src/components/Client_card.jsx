import React from "react";
import client1 from "../assets/getmyroomlogo.webp";
import client2 from "../assets/hustelmax.png";
import client3 from "../assets/leafkerala.png";
import client4 from "../assets/medoczen.png";
import client5 from "../assets/400.png";
import client6 from "../assets/mdx.jpg";
import client7 from "../assets/meristem.png";
import client8 from "../assets/Fizzbell.png";
import client9 from "../assets/Struwaa.png";
import client10 from "../assets/SafeGoer.png";
import client11 from "../assets/DoraDrink.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";

const clients = [
  {
    name: "Meristem Creative",
    category: "Digital Agency",
    logo: client7,
    accent: "from-blue-800 to-blue-800",
    dot: "bg-blue-800",
  },
  {
    name: "Medoczen",
    category: "Healthcare",
    logo: client4,
    accent: "from-blue-800 to-blue-800",
    dot: "bg-blue-800",
  },
  {
    name: "MDX Food",
    category: "Food & Beverages",
    logo: client6,
    accent: "from-blue-800 to-blue-800",
    dot: "bg-blue-800",
  },
  {
    name: "Leaf Kerala",
    category: "Spices & Masalas",
    logo: client3,
    accent: "from-blue-800 to-blue-800",
    dot: "bg-blue-800",
  },
  {
    name: "Get My Room",
    category: "Real Estate",
    logo: client1,
    accent: "from-blue-800 to-blue-800",
    dot: "bg-blue-800",
  },
  {
    name: "Hustel Max",
    category: "Transportation",
    logo: client2,
    accent: "from-blue-800 to-blue-800",
    dot: "bg-blue-800",
  },
  {
    name: "Lumitainment",
    category: "Entertainment",
    logo: client5,
    accent: "from-blue-800 to-blue-800",
    dot: "bg-blue-800",
  },
  {
    name: "Fizzbell",
    category: "Money Management",
    logo: client8,
    accent: "from-blue-800 to-blue-800",
    dot: "bg-blue-800",
  },
  {
    name: "Struwaa",
    category: "Marketplace App",
    logo: client9,
    accent: "from-blue-800 to-blue-800",
    dot: "bg-blue-800",
  },
  {
    name: "SafeGoer",
    category: "Scam Awareness",
    logo: client10,
    accent: "from-blue-800 to-blue-800",
    dot: "bg-blue-800",
  },
  {
    name: "Dora Drink",
    category: "Water Reminder App",
    logo: client11,
    accent: "from-blue-800 to-blue-800",
    dot: "bg-blue-800",
  },
];

const ClientCard = () => {
  return (
    <section className="relative mt-8 w-full overflow-hidden bg-white px-4 py-10 font-sans sm:px-6 md:py-14">
      <div
        className="pointer-events-none absolute inset-x-0 top-14 h-[260px] opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(64, 169, 255, 0.28) 1.2px, transparent 1.2px)",
          backgroundSize: "10px 10px",
          maskImage:
            "radial-gradient(ellipse at center, black 18%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 18%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto flex w-full max-w-[1780px] flex-col items-center">
        <div className="flex flex-col items-center text-center">
          <p className="relative text-[11px] font-bold uppercase tracking-[0.22em] text-[#071435] md:text-[14px]">
            Trusted by businesses worldwide
            <span className="mx-auto mt-3 block h-px w-[220px] bg-gradient-to-r from-transparent via-[#dbe6fb] to-transparent" />
            <span className="absolute left-1/2 top-[28px] h-2 w-2 -translate-x-1/2 rounded-full bg-blue-800 shadow-[0_0_0_6px_rgba(30,64,175,0.08)] md:top-[31px]" />
          </p>
          <h2 className="mt-7 text-[36px] font-bold leading-none text-[#071435] md:text-[56px] lg:text-[68px]">
            Our{" "}
            <span className="text-[#071435] ">
              Clients
            </span>
          </h2>
          <p className="mt-5 max-w-[620px] text-[15px] leading-7 text-[#596174] md:text-[18px] md:leading-8">
            We partner with startups, enterprises, and innovative brands to
            build solutions that make a real impact.
          </p>
        </div>

        <div className="relative mt-9 w-full px-0 md:mt-11 md:px-14">
          <button
            type="button"
            aria-label="Previous client"
            className="client-card-prev absolute left-0 top-1/2 z-10 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white text-blue-800 shadow-[0_14px_30px_rgba(15,23,42,0.12)] transition hover:-translate-x-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.16)] md:flex"
          >
            <ArrowLeftIcon className="h-6 w-6" />
          </button>
          <button
            type="button"
            aria-label="Next client"
            className="client-card-next absolute right-0 top-1/2 z-10 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white text-blue-800 shadow-[0_14px_30px_rgba(15,23,42,0.12)] transition hover:translate-x-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.16)] md:flex"
          >
            <ArrowRightIcon className="h-6 w-6" />
          </button>

          <div className="overflow-hidden px-1 py-2 md:px-6">
          <Swiper
            className="!overflow-visible"
            spaceBetween={24}
            modules={[Autoplay, Pagination, FreeMode, Navigation]}
            slidesPerView={1.08}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".client-card-prev",
              nextEl: ".client-card-next",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
          >
            {clients.map((client) => (
              <SwiperSlide key={client.name} className="!h-auto pb-2">
                <article className="relative flex h-[240px] flex-col justify-between overflow-hidden rounded-xl border border-[#edf1f7] bg-white px-5 py-6 shadow-[0_12px_28px_rgba(15,23,42,0.09)] md:h-[260px] md:px-6">
                  <div className="flex h-[102px] items-center justify-center">
                    <img
                      src={client.logo}
                      className="max-h-[76px] w-full max-w-[190px] object-contain"
                      alt={`${client.name} logo`}
                    />
                  </div>
                  <div className="h-px w-full bg-[#e8edf4]" />
                  <div className="pt-5">
                    <h3 className="text-[18px] font-bold leading-tight text-[#091126] md:text-[20px]">
                      {client.name}
                    </h3>
                    <div className="mt-3 flex items-center gap-2.5 text-[14px] text-[#6a7183] md:text-[16px]">
                      <span
                        className={`h-2.5 w-2.5 shrink-0 rounded-full ${client.dot}`}
                      />
                      <span>{client.category}</span>
                    </div>
                  </div>
                  <span
                    className={`absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r ${client.accent}`}
                  />
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientCard;
