import React from "react";
import heroImage from "../../assets/mobileherosection.png";
import {
  ArrowRightIcon,
  DevicePhoneMobileIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
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
    <section className="relative overflow-hidden bg-white px-5 pt-20 font-sans sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute -left-24 top-1/2 h-64 w-64 rounded-full bg-orange-100/40 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-8 h-72 w-72 rounded-full bg-orange-50/70 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-[1450px] items-center gap-4 lg:grid-cols-[0.84fr_1.16fr]">
        <div className="z-10 py-5">
          <div className="inline-flex items-center gap-3 rounded-full border border-orange-300 bg-white px-5 py-2.5 text-xs font-extrabold uppercase tracking-normal text-orange-600 shadow-[0_12px_30px_rgba(249,115,22,0.08)]">
            <Squares2X2Icon className="h-5 w-5" />
            We Build Mobile Success
          </div>

          <h1 className="mt-7 max-w-3xl text-4xl font-extrabold leading-tight tracking-normal text-[#07122f] sm:text-5xl lg:text-[64px]">
            Mobile App Development{" "}
            <span className="text-orange-600">That Drives Impact.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base font-medium leading-7 tracking-normal text-slate-600 sm:text-lg">
            Spidero Technology develops impactful mobile apps ensuring seamless
            user experiences across all devices, making a difference in digital
            innovation.
          </p>

          <a
            href="/expertise"
            className="mt-7 inline-flex h-14 items-center justify-center gap-4 rounded-lg bg-orange-600 px-8 text-sm font-extrabold uppercase tracking-normal text-white shadow-[0_18px_35px_rgba(234,88,12,0.22)] transition hover:-translate-y-1 hover:bg-orange-700"
          >
            Explore Us
            <ArrowRightIcon className="h-5 w-5" />
          </a>

          <div className="mt-8 grid max-w-2xl gap-4 sm:grid-cols-3">
            {features.map(({ title, text, icon: Icon }, index) => (
              <div
                key={title}
                className={`text-center ${
                  index > 0 ? "sm:border-l sm:border-slate-200" : ""
                }`}
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl border border-orange-100 bg-white text-orange-600 shadow-[0_12px_30px_rgba(249,115,22,0.08)]">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-3 text-sm font-extrabold tracking-normal text-[#07122f]">
                  {title}
                </h3>
                <p className="mx-auto mt-1.5 max-w-[150px] text-xs font-medium leading-5 tracking-normal text-slate-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex min-h-[300px] items-end justify-center lg:min-h-[560px]">
          <img
            src={heroImage}
            alt="Mobile app development interface"
            className="relative z-10 w-full max-w-[700px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Herosection;
