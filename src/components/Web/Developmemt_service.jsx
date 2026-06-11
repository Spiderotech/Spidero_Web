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
    <section id="web-services" className="relative overflow-hidden bg-[#fbfcff] px-5 py-16 font-sans sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute -left-28 top-28 h-96 w-96 rounded-full border border-blue-100/70" />
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-violet-100/40 blur-3xl" />
      <div className="pointer-events-none absolute right-12 top-12 hidden h-32 w-32 opacity-60 lg:block">
        <div className="h-full w-full bg-[radial-gradient(circle,_#d8d0ff_2px,_transparent_2px)] [background-size:16px_16px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-violet-500 px-6 py-2 text-sm font-extrabold uppercase tracking-normal text-violet-600">
            <SparklesIcon className="h-5 w-5" />
            Our Smart Strategy
          </div>

          <h2 className="mt-7 text-4xl font-extrabold leading-tight tracking-normal text-[#07122f] sm:text-5xl lg:text-6xl">
            They label it as best-in-class.
            <br />
            We term it as{" "}
            <span className="bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
              SMART
            </span>{" "}
            strategy.
          </h2>

          <div className="mx-auto mt-6 h-1.5 w-16 rounded-full bg-violet-600" />

          <p className="mx-auto mt-7 max-w-5xl text-lg font-medium leading-9 tracking-normal text-slate-600">
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

        <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-4">
          {cards.map(({ title, text, icon: Icon }, index) => (
            <article
              key={title}
              className="relative min-h-[330px] rounded-2xl border border-slate-200/80 border-b-4 border-b-violet-600 bg-white p-7 shadow-[0_22px_70px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(124,58,237,0.14)]"
            >
              <span className="absolute right-7 top-6 text-4xl font-extrabold tracking-normal text-violet-100">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50 text-violet-600 shadow-[0_14px_34px_rgba(124,58,237,0.12)]">
                <Icon className="h-9 w-9" />
              </span>

              <h3 className="mt-12 text-2xl font-extrabold tracking-normal text-[#07122f]">
                {title}
              </h3>
              <div className="mt-4 h-1 w-10 rounded-full bg-violet-600" />
              <p className="mt-6 text-base font-medium leading-8 tracking-normal text-slate-600">
                {text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="/contact"
            className="inline-flex h-16 items-center justify-center gap-5 rounded-lg bg-[#07122f] px-10 text-base font-extrabold uppercase tracking-normal text-white shadow-[0_20px_50px_rgba(15,23,42,0.22)] transition hover:-translate-y-1"
          >
            <BriefcaseIcon className="h-6 w-6 text-violet-400" />
            See Our Portfolio
            <ArrowRightIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Developmemt_service;
