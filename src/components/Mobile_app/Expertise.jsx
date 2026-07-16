import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  ArrowRightIcon,
  BeakerIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CpuChipIcon,
  CubeTransparentIcon,
  HeartIcon,
  LightBulbIcon,
  PlayIcon,
  ShieldCheckIcon,
  SparklesIcon,
  TrophyIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

import blockchain from "../../assets/mobile _swipper/3d-cryptocurrency-rendering-design.jpg";
import ai from "../../assets/mobile _swipper/ai-chip-artificial-intelligence-future-technology-innovation.jpg";
import education from "../../assets/mobile _swipper/close-up-person-holding-smartphone.jpg";
import ecommerce from "../../assets/mobile _swipper/marketing-creative-collage-with-phone.jpg";
import finance from "../../assets/mobile _swipper/online-banking-internet-finance-e-commerce.jpg";
import arvr from "../../assets/mobile _swipper/person-using-augmented-reality-device.jpg";
import fitness from "../../assets/mobile _swipper/full-shot-man-training-with-stats.jpg";
import media from "../../assets/mobile _swipper/representation-user-experience-interface-design (1).jpg";

const industries = [
  {
    title: "AR/VR",
    text: "Immersive app experiences for interactive training, product demos, entertainment, and next-generation digital engagement.",
    image: arvr,
    icon: SparklesIcon,
    accent: "blue",
  },
  {
    title: "Media & Entertainment",
    text: "Be it music or video streaming, we create award-winning apps for next-generation users in media and entertainment.",
    image: media,
    icon: PlayIcon,
    accent: "blue",
  },
  {
    title: "Blockchain & IoT",
    text: "Futuristic solutions like Blockchain and IoT are our expertise, from dApps to connected product ecosystems.",
    image: blockchain,
    icon: CubeTransparentIcon,
    accent: "blue",
  },
  {
    title: "AI/ML",
    text: "Taking the big leap in artificial intelligence and machine learning with apps built for smarter business workflows.",
    image: ai,
    icon: CpuChipIcon,
    accent: "blue",
  },
  {
    title: "Health & Fitness Apps",
    text: "High-end health and fitness apps that improve clinics, wellness brands, and personal health management.",
    image: fitness,
    icon: HeartIcon,
    accent: "blue",
  },
  {
    title: "Banking & Finance",
    text: "Customer-centric finance platforms that help businesses and users move faster with secure digital services.",
    image: finance,
    icon: ShieldCheckIcon,
    accent: "blue",
  },
  {
    title: "Shopping & eCommerce",
    text: "Modern eCommerce apps that increase customer reach, brand exposure, and measurable return on investment.",
    image: ecommerce,
    icon: BeakerIcon,
    accent: "blue",
  },
  {
    title: "Education & eLearning",
    text: "Learning platforms designed for engaging content, progress tracking, and accessible education experiences.",
    image: education,
    icon: LightBulbIcon,
    accent: "blue",
  },
];

const strengths = [
  {
    title: "Industry Expertise",
    text: "Deep knowledge across multiple domains.",
    icon: TrophyIcon,
    accent: "border border-cyan-300/25 bg-cyan-300/10 text-cyan-300",
  },
  {
    title: "Innovative Solutions",
    text: "Cutting-edge technology for modern businesses.",
    icon: LightBulbIcon,
    accent: "border border-cyan-300/25 bg-cyan-300/10 text-cyan-300",
  },
  {
    title: "User-Centric Approach",
    text: "Solutions designed for real user needs.",
    icon: UsersIcon,
    accent: "border border-cyan-300/25 bg-cyan-300/10 text-cyan-300",
  },
  {
    title: "Proven Success",
    text: "Delivering measurable results that drive growth.",
    icon: ShieldCheckIcon,
    accent: "border border-cyan-300/25 bg-cyan-300/10 text-cyan-300",
  },
];

const accentStyles = {
  blue: {
    icon: "bg-gradient-to-br from-blue-800 to-blue-800 text-white",
    line: "bg-gradient-to-br from-blue-800 to-blue-800",
    arrow: "border-cyan-300/65 text-cyan-300",
  },
};

const Expertise = () => {
  return (
    <section className="relative overflow-hidden bg-[#03070c] px-5 py-14 font-sans text-white sm:px-8 lg:px-10 lg:py-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.12),transparent_56%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(3,7,12,0.2),rgba(3,7,12,0.9))]" />

      <div className="relative mx-auto max-w-[1500px]">
        <div className="text-center">
          <div className="inline-flex items-center gap-5 text-sm font-extrabold uppercase tracking-[0.34em] text-cyan-300">
            <span className="h-px w-14 bg-cyan-300" />
            Industries We Excel In And More
            <span className="h-px w-14 bg-cyan-300" />
          </div>

          <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-normal text-white sm:text-5xl lg:text-[58px]">
            Industries we excel in and more
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-7 tracking-normal text-white/72 sm:text-lg">
            We build innovative digital solutions across diverse industries,
            helping businesses grow, scale and lead.
          </p>
        </div>

        <div className="relative mt-9">
          <button
            type="button"
            aria-label="Previous industry"
            className="mobile-expertise-prev absolute left-0 top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-300/35 bg-black/75 text-cyan-300 shadow-[0_18px_50px_rgba(0,0,0,0.45)] transition hover:border-cyan-300 hover:text-white lg:flex"
          >
            <ChevronLeftIcon className="h-8 w-8" />
          </button>

          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={22}
            loop
            centeredSlides
            autoplay={{
              delay: 2600,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".mobile-expertise-prev",
              nextEl: ".mobile-expertise-next",
            }}
            pagination={{
              clickable: true,
              el: ".mobile-expertise-pagination",
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 22 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 26 },
            }}
            className="px-1 py-2 lg:px-16"
          >
            {industries.map(({ title, text, image, icon: Icon, accent }) => {
              const theme = accentStyles[accent];

              return (
                <SwiperSlide key={title}>
                  <article className="h-auto min-h-[400px] overflow-hidden rounded-2xl border border-white/16 bg-white/[0.045] shadow-[0_24px_70px_rgba(0,0,0,0.32)] backdrop-blur sm:h-[430px]">
                    <div className="relative h-[170px] overflow-hidden sm:h-[190px]">
                      <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#03070c] via-transparent to-transparent" />
                      <span
                        className={`absolute left-5 top-5 flex h-16 w-16 items-center justify-center rounded-full shadow-[0_16px_45px_rgba(0,0,0,0.32)] ${theme.icon}`}
                      >
                        <Icon className="h-9 w-9" />
                      </span>
                    </div>

                    <div className={`h-1 w-full ${theme.line}`} />

                    <div className="flex h-[239px] flex-col p-6">
                      <h3 className="text-2xl font-extrabold leading-tight tracking-normal text-white">
                        {title}
                      </h3>
                      <p className="mt-4 text-[15px] font-medium leading-6 tracking-normal text-white/76">
                        {text}
                      </p>
                      <button
                        type="button"
                        aria-label={`View ${title}`}
                        className={`mt-auto ml-auto flex h-9 w-11 items-center justify-center rounded-lg border bg-black/20 transition hover:bg-white/10 ${theme.arrow}`}
                      >
                        <ArrowRightIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </article>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <button
            type="button"
            aria-label="Next industry"
            className="mobile-expertise-next absolute right-0 top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-300/35 bg-black/75 text-cyan-300 shadow-[0_18px_50px_rgba(0,0,0,0.45)] transition hover:border-cyan-300 hover:text-white lg:flex"
          >
            <ChevronRightIcon className="h-8 w-8" />
          </button>

          <div className="mobile-expertise-pagination mt-6 flex justify-center gap-3" />
        </div>

        <div className="mx-auto mt-8 grid max-w-[1250px] overflow-hidden rounded-2xl border border-white/18 bg-white/[0.045] shadow-[0_24px_70px_rgba(0,0,0,0.26)] backdrop-blur md:grid-cols-2 xl:grid-cols-4">
          {strengths.map(({ title, text, icon: Icon, accent }, index) => (
            <article
              key={title}
              className={`flex items-center gap-5 p-6 ${
                index > 0 ? "xl:border-l xl:border-white/20" : ""
              } ${index % 2 === 1 ? "md:border-l md:border-white/20" : ""}`}
            >
              <span
                className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full ${accent}`}
              >
                <Icon className="h-8 w-8" />
              </span>
              <div>
                <h3 className="text-base font-extrabold tracking-normal text-white">
                  {title}
                </h3>
                <p className="mt-1 text-sm font-medium leading-5 tracking-normal text-white/72">
                  {text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
