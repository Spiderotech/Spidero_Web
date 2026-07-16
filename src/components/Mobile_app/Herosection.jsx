import React from "react";
import backgroundImage from "../../assets/mobile/hero/mobile-app-hero-background.png";
import heroImage from "../../assets/mobile/hero/mobile-app-hero-image.png";
import {
  ArrowRightIcon,
  DevicePhoneMobileIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    title: "User-Centric",
    text: "We design with your users in mind.",
    icon: DevicePhoneMobileIcon,
  },
  {
    title: "Innovative",
    text: "Leveraging the latest technologies.",
    icon: RocketLaunchIcon,
  },
  {
    title: "Reliable",
    text: "Built for performance and scalability.",
    icon: ShieldCheckIcon,
  },
];

const Herosection = () => {
  return (
    <section className="relative min-h-[680px] overflow-hidden bg-[#020719] px-5 pt-20 font-sans text-white sm:min-h-screen sm:px-8 lg:px-10 lg:pt-24">
      <img
        src={backgroundImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-95"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#020719] via-[#020719]/80 to-[#020719]/25" />

      <div className="relative mx-auto grid min-h-[600px] max-w-[1640px] items-center gap-6 py-8 sm:min-h-[calc(100vh-6rem)] lg:grid-cols-[0.76fr_1.24fr]">
        <div className="z-10 max-w-2xl py-6">
          <div className="inline-flex max-w-full flex-wrap items-center gap-3 rounded-full border border-white bg-white/5 px-4 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-white shadow-[0_0_28px_rgba(30,64,175,0.2)] backdrop-blur sm:px-5 sm:text-xs sm:tracking-[0.22em]">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-500 shadow-[0_0_18px_rgba(59,130,246,0.9)]" />
            Mobile App Development
          </div>

          <h1 className="mt-6 text-[34px] font-extrabold leading-[1.1] tracking-normal text-white sm:mt-7 sm:text-5xl sm:leading-[1.08] lg:text-[56px] xl:text-[64px]">
            We Build Powerful Mobile Apps That{" "}
            <span className="bg-gradient-to-br from-blue-800 to-blue-800 bg-clip-text text-transparent">
              Drive Impact
            </span>
          </h1>

          <div className="mt-6 h-1 w-24 rounded-full bg-white" />

          <p className="mt-6 max-w-2xl text-[15px] font-medium leading-7 tracking-normal text-slate-200 sm:text-lg sm:leading-8">
            Spidero Technology develops impactful mobile apps ensuring seamless
            user experiences across all devices, making a difference in digital
            innovation.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href="/expertise"
              className="inline-flex min-h-12 items-center justify-center gap-4 rounded-lg bg-gradient-to-br from-blue-800 to-blue-800 px-6 py-4 text-sm font-extrabold uppercase tracking-normal text-white shadow-[0_18px_45px_rgba(37,99,235,0.3)] transition hover:translate-y-[-2px] sm:h-14 sm:px-8 sm:py-0"
            >
              Explore Us
              <ArrowRightIcon className="h-5 w-5" />
            </a>
            <a
              href="#mobile-services"
              className="inline-flex min-h-12 items-center justify-center gap-4 rounded-lg border border-white/55 bg-white/5 px-6 py-4 text-sm font-extrabold uppercase tracking-normal text-white backdrop-blur transition hover:bg-white/10 sm:h-14 sm:px-8 sm:py-0"
            >
              Our Services
              <ArrowRightIcon className="h-5 w-5" />
            </a>
          </div>

         
        </div>

        <div className="relative z-10 hidden min-h-[560px] items-center justify-center overflow-visible lg:flex">
          <img
            src={heroImage}
            alt="Mobile app development interface"
            className="relative z-10 w-[122%] max-w-[1120px] translate-x-6 object-contain opacity-95 mix-blend-screen drop-shadow-[0_40px_80px_rgba(0,0,0,0.45)] xl:w-[128%] xl:max-w-[1240px]"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 16%, black 92%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
              WebkitMaskComposite: "source-in",
              maskImage:
                "linear-gradient(to right, transparent 0%, black 16%, black 92%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
              maskComposite: "intersect",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Herosection;
