import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ArrowRightIcon,
  CursorArrowRaysIcon,
  DocumentTextIcon,
  PencilIcon,
  SparklesIcon,
  Squares2X2Icon,
  UserCircleIcon,
  WindowIcon,
} from "@heroicons/react/24/outline";

const processSteps = [
  {
    number: "01",
    title: "Competitor analysis & Strategy planning",
    text: "We analyze competitor data, pinpoint opportunities and threats, and collaborate with stakeholders to shape a strategic UI/UX plan.",
    icon: CursorArrowRaysIcon,
    theme: {
      icon: "bg-violet-100 text-violet-600",
      number: "bg-violet-50 text-violet-600",
      line: "bg-violet-600",
      border: "border-b-violet-600",
    },
  },
  {
    number: "02",
    title: "User persona & empathy mapping",
    text: "We create user personas to understand your target audience better, connecting qualitative and quantitative insights to their thoughts and emotions.",
    icon: UserCircleIcon,
    theme: {
      icon: "bg-blue-100 text-blue-600",
      number: "bg-blue-50 text-blue-600",
      line: "bg-blue-600",
      border: "border-b-blue-600",
    },
  },
  {
    number: "03",
    title: "Information Architecture",
    text: "We organize, label, and structure content to simplify complex information and ensure users can easily find what they need on your website.",
    icon: Squares2X2Icon,
    theme: {
      icon: "bg-emerald-100 text-emerald-600",
      number: "bg-emerald-50 text-emerald-600",
      line: "bg-emerald-600",
      border: "border-b-emerald-600",
    },
  },
  {
    number: "04",
    title: "Creating low fidelity sketches",
    text: "We kick off the design process with paper prototypes to outline the structure, navigation, and key content for seamless user engagement.",
    icon: PencilIcon,
    theme: {
      icon: "bg-orange-100 text-orange-500",
      number: "bg-orange-50 text-orange-500",
      line: "bg-orange-500",
      border: "border-b-orange-500",
    },
  },
  {
    number: "05",
    title: "Creating high fidelity wireframes",
    text: "We convert sketches into precise wireframes, defining layout, size, and screen behavior to visualize the final product before development.",
    icon: WindowIcon,
    theme: {
      icon: "bg-pink-100 text-pink-500",
      number: "bg-pink-50 text-pink-500",
      line: "bg-pink-500",
      border: "border-b-pink-500",
    },
  },
  {
    number: "06",
    title: "Setting up UI guidelines",
    text: "We create a detailed UI style guide covering colors, typography, icons, and components to ensure consistency across the entire website.",
    icon: DocumentTextIcon,
    theme: {
      icon: "bg-violet-100 text-violet-600",
      number: "bg-violet-50 text-violet-600",
      line: "bg-violet-600",
      border: "border-b-violet-500",
    },
  },
];

const Creative_webdesign = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 80,
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-white px-5 py-10 font-sans sm:px-8 lg:px-10 lg:py-12">
      
      <div className="pointer-events-none absolute right-16 top-24 hidden h-24 w-24 bg-[radial-gradient(circle,#c7d2fe_2px,transparent_2px)] [background-size:16px_16px] opacity-80 lg:block" />
      <div className="pointer-events-none absolute left-0 bottom-10 hidden h-28 w-28 bg-[radial-gradient(circle,#ddd6fe_3px,transparent_3px)] [background-size:22px_22px] opacity-60 lg:block" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-72 w-72 rounded-full bg-indigo-100/45 blur-3xl" />

      <div className="relative mx-auto max-w-[1160px]">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-5 py-1.5 text-xs font-extrabold uppercase tracking-[0.13em] text-indigo-600">
            <SparklesIcon className="h-4 w-4" />
            Our Process
          </div>

          <h2 className="mx-auto mt-4 max-w-[900px] text-3xl font-extrabold leading-tight tracking-normal text-[#07122f] sm:text-4xl lg:text-[46px]">
            A super creative web design process{" "}
            <span className="text-indigo-500">that makes us different</span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm font-medium leading-6 tracking-normal text-slate-600 sm:text-base">
            As a London-based web design agency, we blend strategy, creativity,
            and user-centered design to build mobile-friendly B2B websites that
            drive results and exceed expectations.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {processSteps.map(({ number, title, text, icon: Icon, theme }, index) => (
            <article
              key={number}
              className={`relative min-h-[235px] overflow-hidden rounded-xl border border-slate-200 ${theme.border} border-b-4 bg-white p-5 shadow-[0_16px_45px_rgba(15,23,42,0.07)] transition hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.1)]`}
              data-aos="zoom-out-down"
              data-aos-duration="1000"
              data-aos-delay={index * 90}
            >
              <div className="flex items-start justify-between gap-5">
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-xl ${theme.icon}`}
                >
                  <Icon className="h-8 w-8" />
                </span>
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-full text-base font-extrabold ${theme.number}`}
                >
                  {number}
                </span>
              </div>

              <h3 className="mt-5 max-w-[260px] text-lg font-extrabold leading-tight tracking-normal text-[#07122f]">
                {title}
              </h3>
              <div className={`mt-3 h-0.5 w-9 ${theme.line}`} />
              <p className="mt-4 text-sm font-medium leading-6 tracking-normal text-slate-600">
                {text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center">
          <div className="hidden items-center gap-5 text-sm font-semibold leading-5 tracking-normal text-indigo-500 sm:flex">
            <span className="-rotate-6 font-serif text-lg leading-5">
              Let's create something
              <br />
              amazing together!
            </span>
            <ArrowRightIcon className="h-11 w-11 rotate-12" />
          </div>

          <a
            href="/contact"
            className="inline-flex h-12 min-w-[280px] items-center justify-center gap-4 rounded-full bg-gradient-to-r from-violet-600 to-indigo-500 px-7 text-xs font-extrabold uppercase tracking-[0.06em] text-white shadow-[0_18px_42px_rgba(79,70,229,0.24)] transition hover:-translate-y-1"
          >
            Design Your Website
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Creative_webdesign;
