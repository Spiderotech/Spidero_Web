import React from "react";
import mobileBelowHero from "../../assets/mobile/hero/mobile-app-below-hero.png";
import {
  StarIcon,
} from "@heroicons/react/24/outline";

const Belowherosection = () => {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-12 font-sans sm:px-8 sm:py-14 lg:px-12 lg:py-18">
      <div className="pointer-events-none absolute -left-24 bottom-8 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="pointer-events-none absolute right-8 top-16 h-80 w-80 rounded-full bg-cyan-50/90 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1500px] items-center gap-8 lg:grid-cols-[0.84fr_1.16fr]">
        <div className="z-10">
          <div className="inline-flex max-w-full flex-wrap items-center gap-3 rounded-full border border-blue-200 bg-white px-4 py-2.5 text-[11px] font-extrabold uppercase tracking-normal text-blue-800 shadow-[0_12px_30px_rgba(37,99,235,0.08)] sm:px-5 sm:text-xs">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-800 to-blue-800 text-white">
              <StarIcon className="h-4 w-4" />
            </span>
            #1 App Development Company In UK
          </div>

          <h2 className="mt-6 max-w-2xl text-[32px] font-extrabold leading-tight tracking-normal text-[#171719] sm:mt-8 sm:text-5xl lg:text-[60px]">
            Top-rated mobile app development company in{" "}
            <span className="text-blue-800">UK</span>
          </h2>

          <div className="mt-5 h-0.5 w-20 bg-gradient-to-br from-blue-800 to-blue-800" />

          <p className="mt-6 max-w-2xl text-[15px] font-semibold leading-7 tracking-normal text-[#25252a] sm:text-lg">
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
            className="relative z-10 w-full max-w-[620px] object-contain drop-shadow-[0_28px_70px_rgba(37,99,235,0.16)]"
          />
        </div>
      </div>
    </section>
  );
};

export default Belowherosection;
