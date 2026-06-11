import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import mobile1 from "../../assets/mobile/4266331-removebg-preview.png";
import mobile2 from "../../assets/mobile/4266331-removebg-preview3.png";
import mobile3 from "../../assets/mobile/4266331-removebg-preview1.png";
import {
  ArrowRightIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  TrophyIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const slides = [mobile1, mobile2, mobile3, mobile2, mobile1, mobile3, mobile2];

const benefits = [
  {
    title: "User-Centric Approach",
    text: "We put your users at the heart of every decision.",
    icon: UserIcon,
  },
  {
    title: "Agile & Flexible",
    text: "We adapt, iterate and deliver value at every step.",
    icon: RocketLaunchIcon,
  },
  {
    title: "Quality Assurance",
    text: "We test rigorously to deliver reliable, bug-free applications.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Results That Matter",
    text: "We build products that drive growth and real impact.",
    icon: ChartBarIcon,
  },
];

function Makes_yourappidea_a_reality() {
  return (
    <section className="relative overflow-hidden bg-[#020809] px-5 py-12 font-sans text-white sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute left-1/2 top-12 h-[440px] w-[440px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-14 top-20 h-60 w-60 rounded-full border border-cyan-400/20" />
      <div className="pointer-events-none absolute right-20 top-24 h-80 w-80 rounded-full border border-dotted border-cyan-400/20" />

      <div className="relative mx-auto max-w-[1500px]">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(500px,0.88fr)_minmax(0,1.12fr)] xl:grid-cols-[minmax(560px,0.86fr)_minmax(0,1.14fr)]">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/60 bg-cyan-400/5 px-5 py-2.5 text-xs font-extrabold uppercase tracking-normal text-cyan-300">
              <TrophyIcon className="h-5 w-5" />
              #1 App Developer In London
            </div>

            <h2 className="mt-7 max-w-[640px] text-3xl font-extrabold leading-tight tracking-normal text-white sm:text-4xl lg:text-[40px] xl:text-[44px]">
              How Spidero Technology,{" "}
              <span className="text-cyan-300">#1 app developer in London,</span>{" "}
              makes your app idea a reality?
            </h2>

            <div className="mt-5 h-0.5 w-20 bg-cyan-300" />

            <div className="mt-7 max-w-[620px] space-y-5 text-[15px] font-medium leading-7 tracking-normal text-slate-200 sm:text-base">
              <p>
                We believe in creating value for our customers. And{" "}
                <span className="text-cyan-300">pre-planning</span> is the best
                way to start. We conduct{" "}
                <span className="text-cyan-300">stakeholder interviews</span>{" "}
                and address their needs. We identify their{" "}
                <span className="text-cyan-300">target audience</span>,
                prospects, budget, and schedules.
              </p>
              <p>
                Our team of app developers and designers in the breathtaking
                Westminister, London plan the optimum requirements to carry out
                the individual processes. Not only that, we{" "}
                <span className="text-cyan-300">
                  test several functionalities
                </span>{" "}
                to see which one suits best.
              </p>
              <p>
                This helps our clients to receive the best without having to
                compromise on their vision. Credit goes to the{" "}
                <span className="text-cyan-300">
                  agile app development process
                </span>{" "}
                we follow.
              </p>
            </div>
          </div>

          <div className="relative min-w-0">
            <div className="absolute inset-x-12 top-1/2 h-64 -translate-y-1/2 rounded-full bg-cyan-400/15 blur-3xl" />
            <div className="relative mx-auto max-w-[880px] rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-7 shadow-[0_28px_80px_rgba(0,0,0,0.35)]">
              <button className="mobile-reality-prev absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/40 text-cyan-300 backdrop-blur transition hover:border-cyan-300">
                <ArrowRightIcon className="h-5 w-5 rotate-180" />
              </button>
              <button className="mobile-reality-next absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/40 text-cyan-300 backdrop-blur transition hover:border-cyan-300">
                <ArrowRightIcon className="h-5 w-5" />
              </button>

              <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                slidesPerView={2}
                centeredSlides
                spaceBetween={8}
                loop
                autoplay={{
                  delay: 1400,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  el: ".mobile-reality-pagination",
                }}
                navigation={{
                  prevEl: ".mobile-reality-prev",
                  nextEl: ".mobile-reality-next",
                }}
                breakpoints={{
                  640: { slidesPerView: 3, spaceBetween: 10 },
                  1024: { slidesPerView: 3, spaceBetween: 12 },
                  1280: { slidesPerView: 4, spaceBetween: 12 },
                  1440: { slidesPerView: 5, spaceBetween: 12 },
                }}
                className="px-10"
              >
                {slides.map((image, index) => (
                  <SwiperSlide key={`${image}-${index}`}>
                    <div
                      className={`flex items-center justify-center ${
                        index % 3 === 2 ? "lg:scale-110" : "lg:scale-95"
                      }`}
                    >
                      <img
                        src={image}
                        alt="Mobile app interface"
                        className="h-[280px] w-full object-contain sm:h-[330px] lg:h-[390px]"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="mobile-reality-pagination mt-6 flex justify-center gap-2" />
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-white/15 bg-white/[0.04] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.25)]">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map(({ title, text, icon: Icon }, index) => (
              <div
                key={title}
                className={`flex items-center gap-5 px-2 py-3 ${
                  index > 0 ? "xl:border-l xl:border-white/15 xl:pl-8" : ""
                }`}
              >
                <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-cyan-300/70 bg-cyan-300/10 text-cyan-300">
                  <Icon className="h-9 w-9" />
                </span>
                <div>
                  <h3 className="text-base font-extrabold tracking-normal text-white">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm font-medium leading-6 tracking-normal text-slate-300">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="/contact"
            className="mt-7 inline-flex h-14 items-center justify-center gap-4 rounded-lg bg-cyan-400 px-8 text-sm font-extrabold uppercase tracking-normal text-white shadow-[0_18px_40px_rgba(34,211,238,0.24)] transition hover:-translate-y-1 hover:bg-cyan-300"
          >
            Let's Build Your Success
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-cyan-500">
              <ArrowRightIcon className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Makes_yourappidea_a_reality;
