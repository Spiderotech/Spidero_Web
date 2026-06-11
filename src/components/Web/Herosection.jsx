import React from "react";
import backgroundImage from "../../assets/webdevolpmentherobackground.png";
import heroImage from "../../assets/webdevelopment heroimage.png";
import {
  ArrowRightIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    title: "High Performance",
    icon: RocketLaunchIcon,
  },
  {
    title: "Secure & Reliable",
    icon: ShieldCheckIcon,
  },
  {
    title: "Modern Technologies",
    icon: CodeBracketIcon,
  },
];

const Herosection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020719] px-5 pt-20 font-sans text-white sm:px-8 lg:px-10 lg:pt-24">
      <img
        src={backgroundImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-95"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#020719] via-[#020719]/80 to-[#020719]/25" />

      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-[1640px] items-center gap-6 lg:grid-cols-[0.76fr_1.24fr]">
        <div className="z-10 max-w-2xl py-6">
          <div className="inline-flex items-center gap-3 rounded-full border border-violet-500/60 bg-white/5 px-5 py-2.5 text-xs font-extrabold uppercase tracking-[0.22em] text-white shadow-[0_0_28px_rgba(124,58,237,0.18)] backdrop-blur">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-500 shadow-[0_0_18px_rgba(59,130,246,0.9)]" />
            Web Development
          </div>

          <h1 className="mt-7 text-4xl font-extrabold leading-[1.08] tracking-normal text-white sm:text-5xl lg:text-[56px] xl:text-[64px]">
            We Build Powerful Web Solutions That{" "}
            <span className="bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Drive Results
            </span>
          </h1>

          <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />

          <p className="mt-6 max-w-2xl text-base font-medium leading-8 tracking-normal text-slate-200 sm:text-lg">
            From custom websites to complex web applications, we create
            solutions that optimize your business efficiency and accelerate
            growth.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/expertise"
              className="inline-flex h-14 items-center justify-center gap-4 rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 px-8 text-sm font-extrabold uppercase tracking-normal text-white shadow-[0_18px_45px_rgba(37,99,235,0.3)] transition hover:translate-y-[-2px]"
            >
              Explore Us
              <ArrowRightIcon className="h-5 w-5" />
            </a>
            <a
              href="#web-services"
              className="inline-flex h-14 items-center justify-center gap-4 rounded-lg border border-white/55 bg-white/5 px-8 text-sm font-extrabold uppercase tracking-normal text-white backdrop-blur transition hover:bg-white/10"
            >
              Our Services
              <ArrowRightIcon className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {features.map(({ title, text, icon: Icon }, index) => (
              <div
                key={title}
                className={`flex gap-5 ${
                  index > 0 ? "md:border-l md:border-white/20 md:pl-6" : ""
                }`}
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-violet-400 shadow-[0_0_26px_rgba(124,58,237,0.16)] backdrop-blur">
                  <Icon className="h-8 w-8" />
                </span>
                <div>
                  <h3 className="text-sm font-extrabold tracking-normal text-white">
                    {title}
                  </h3>
                
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 hidden min-h-[520px] items-center justify-center lg:flex">
          <img
            src={heroImage}
            alt="Web development dashboard and code interface"
            className="relative z-10 w-[112%] max-w-[1040px] translate-x-4 object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.45)] xl:w-[118%] xl:max-w-[1140px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Herosection;
