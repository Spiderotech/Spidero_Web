import React from "react";
import {
  ArrowRightIcon,
  BoltIcon,
  BriefcaseIcon,
  ComputerDesktopIcon,
  CubeTransparentIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const cards = [
  {
    title: "Expansive",
    text: "We adhere to a standard set of principles and techniques to provide scalable web applications and solutions that align with your business demands.",
    icon: CubeTransparentIcon,
  },
  {
    title: "Responsive",
    text: "Our skilled web artisans prioritize delivering the optimal user experience, irrespective of the screen size and resolution of the user's device.",
    icon: ComputerDesktopIcon,
  },
  {
    title: "Fast",
    text: "We strategically plan intricate projects, segmenting them into manageable tasks, optimizing workflow, and ensuring earlier and more efficient delivery.",
    icon: BoltIcon,
  },
  {
    title: "Secure",
    text: "Entrust your website to us, and we guarantee comprehensive security against any form of malware attack.",
    icon: ShieldCheckIcon,
  },
];

const Developmemt_service = () => {
  return (
    <section id="web-services" className="relative overflow-hidden bg-[#fbfcff] px-5 py-12 font-sans sm:px-8 sm:py-16 lg:px-12">
      <div className="pointer-events-none absolute -left-28 top-28 h-96 w-96 rounded-full border border-blue-100/70" />
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="pointer-events-none absolute right-12 top-12 hidden h-32 w-32 opacity-60 lg:block">
        <div className="h-full w-full bg-[radial-gradient(circle,_#d8d0ff_2px,_transparent_2px)] [background-size:16px_16px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-3 rounded-full border border-blue-800 px-4 py-2 text-xs font-extrabold uppercase tracking-normal text-blue-800 sm:px-6 sm:text-sm">
            <SparklesIcon className="h-5 w-5" />
            Our Smart Strategy
          </div>

          <h2 className="mt-6 text-[32px] font-extrabold leading-tight tracking-normal text-[#07122f] sm:mt-7 sm:text-5xl lg:text-6xl">
            They label it as best-in-class.
            <br />
            We term it as{" "}
            <span className="bg-gradient-to-br from-blue-800 to-blue-800 bg-clip-text text-transparent">
              SMART
            </span>{" "}
            strategy.
          </h2>

          <div className="mx-auto mt-6 h-1.5 w-16 rounded-full bg-gradient-to-br from-blue-800 to-blue-800" />

          <p className="mx-auto mt-6 max-w-5xl text-[15px] font-medium leading-7 tracking-normal text-slate-600 sm:mt-7 sm:text-lg sm:leading-9">
            We take pride in crafting enterprise web services and small business
            web solutions tailored to your specific needs. Our strategic
            selection of cutting-edge technologies and implementation of
            standardized coding frameworks ensure scalability and future-proof
            solutions, enhancing the user experience. Ultimately, the outcome is
            a potent software for the world. With over 4 years of combined
            expertise in web design and big/small{" "}
            <span className="font-extrabold text-slate-700">
              business web development, we stand out.
            </span>
          </p>
        </div>

        <div className="mt-9 grid gap-5 md:grid-cols-2 lg:mt-12 lg:gap-7 xl:grid-cols-4">
          {cards.map(({ title, text, icon: Icon }, index) => (
            <article
              key={title}
              className="relative min-h-[auto] rounded-2xl border border-slate-200/80 border-b-4 border-b-blue-800 bg-white p-5 shadow-[0_16px_42px_rgba(15,23,42,0.07)] sm:min-h-[330px] sm:p-7"
            >
              <span className="absolute right-7 top-6 text-4xl font-extrabold tracking-normal text-blue-100">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-800 shadow-[0_14px_34px_rgba(37,99,235,0.12)]">
                <Icon className="h-9 w-9" />
              </span>

              <h3 className="mt-9 text-[22px] font-extrabold tracking-normal text-[#07122f] sm:mt-12 sm:text-2xl">
                {title}
              </h3>
              <div className="mt-4 h-1 w-10 rounded-full bg-gradient-to-br from-blue-800 to-blue-800" />
              <p className="mt-5 text-[15px] font-medium leading-7 tracking-normal text-slate-600 sm:mt-6 sm:text-base sm:leading-8">
                {text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="/contact"
            className="inline-flex min-h-14 w-full items-center justify-center gap-4 rounded-lg bg-[#07122f] px-6 py-4 text-sm font-extrabold uppercase tracking-normal text-white shadow-[0_20px_50px_rgba(15,23,42,0.22)] transition hover:-translate-y-1 sm:h-16 sm:w-auto sm:gap-5 sm:px-10 sm:py-0 sm:text-base"
          >
            <BriefcaseIcon className="h-6 w-6 text-blue-300" />
            See Our Portfolio
            <ArrowRightIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Developmemt_service;
