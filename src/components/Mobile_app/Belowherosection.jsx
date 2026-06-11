import React from "react";
import mobileBelowHero from "../../assets/mobileBelowherosection.png";
import {
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  SparklesIcon,
  StarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const highlights = [
  {
    title: "Expert Team",
    text: "Seasoned developers with industry expertise",
    icon: UserGroupIcon,
  },
  {
    title: "Agile Approach",
    text: "Flexible, iterative & results-driven",
    icon: SparklesIcon,
  },
  {
    title: "Cutting-edge Tech",
    text: "AI, IoT, Bots & more for future-ready apps",
    icon: RocketLaunchIcon,
  },
  {
    title: "On-time Delivery",
    text: "Quality solutions within time & budget",
    icon: ShieldCheckIcon,
  },
];

const Belowherosection = () => {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-14 font-sans sm:px-8 lg:px-12 lg:py-18">
      <div className="pointer-events-none absolute -left-24 bottom-8 h-72 w-72 rounded-full bg-orange-100/40 blur-3xl" />
      <div className="pointer-events-none absolute right-8 top-16 h-80 w-80 rounded-full bg-orange-50/80 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1500px] items-center gap-8 lg:grid-cols-[0.84fr_1.16fr]">
        <div className="z-10">
          <div className="inline-flex items-center gap-3 rounded-full border border-orange-200 bg-white px-5 py-2.5 text-xs font-extrabold uppercase tracking-normal text-orange-600 shadow-[0_12px_30px_rgba(249,115,22,0.08)]">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-600 text-white">
              <StarIcon className="h-4 w-4" />
            </span>
            #1 App Development Company In UK
          </div>

          <h2 className="mt-8 max-w-2xl text-4xl font-extrabold leading-tight tracking-normal text-[#171719] sm:text-5xl lg:text-[60px]">
            Top-rated mobile app development company in{" "}
            <span className="text-orange-600">UK</span>
          </h2>

          <div className="mt-5 h-0.5 w-20 bg-orange-600" />

          <p className="mt-6 max-w-2xl text-base font-semibold leading-7 tracking-normal text-[#25252a] sm:text-lg">
            Elevate your app's market presence with our distinctive approach at
            Spidero Technology. As a leading app development company, we
            leverage agile methodologies and cutting-edge technologies,
            including UX, smart consultation, bots, AIs, and IoT. Our seasoned
            team of top app developers in London combines industry expertise and
            innovative solutions to ensure your product's success within your
            timeframe and budget.
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          <img
            src={mobileBelowHero}
            alt="Mobile app growth interface"
            className="relative z-10 w-full max-w-[580px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Belowherosection;
