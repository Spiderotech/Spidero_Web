import React from "react";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  CodeBracketIcon,
  CursorArrowRaysIcon,
  SparklesIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";

const capabilities = [
  {
    number: "01",
    title: "Web Design",
    description:
      "We design visually stunning, user-centric websites that capture attention and create lasting impressions.",
    icon: SwatchIcon,
    features: [
      "User Experience Design",
      "Responsive & Modern UI",
      "Conversion Focused Design",
    ],
    theme: {
      icon: "bg-violet-100 text-violet-600",
      number: "bg-violet-50 text-violet-600",
      border: "border-violet-200",
      text: "text-violet-600",
      button: "from-violet-600 to-violet-500",
    },
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "From idea to launch, we build fast, secure, and scalable websites using the latest technologies.",
    icon: CodeBracketIcon,
    features: [
      "Custom Development",
      "Scalable & Secure Code",
      "Performance Optimized",
    ],
    theme: {
      icon: "bg-blue-100 text-blue-600",
      number: "bg-blue-50 text-blue-600",
      border: "border-blue-100",
      text: "text-blue-600",
      button: "from-blue-600 to-sky-500",
    },
  },
  {
    number: "03",
    title: "Brand Strategy",
    description:
      "We craft powerful brand strategies that differentiate you from competitors and create a memorable impact.",
    icon: CursorArrowRaysIcon,
    features: [
      "Market & Competitor Research",
      "Brand Positioning",
      "Identity & Messaging",
    ],
    theme: {
      icon: "bg-emerald-100 text-emerald-600",
      number: "bg-emerald-50 text-emerald-600",
      border: "border-emerald-100",
      text: "text-emerald-600",
      button: "from-emerald-600 to-teal-500",
    },
  },
];

function Ourcapacity() {
  return (
    <section className="relative overflow-hidden bg-[#fbfcff] px-5 py-14 font-sans sm:px-8 lg:px-10 lg:py-16">
      <div className="pointer-events-none absolute left-9 top-10 hidden h-36 w-36 bg-[radial-gradient(circle,#c9d4ee_2px,transparent_2px)] [background-size:18px_18px] opacity-80 lg:block" />
      <div className="pointer-events-none absolute -right-24 -top-44 h-[520px] w-[520px] rounded-full border border-indigo-100" />
      <div className="pointer-events-none absolute -right-36 -top-56 h-[660px] w-[660px] rounded-full border border-indigo-100" />
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-violet-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-[1320px]">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-violet-50 px-6 py-2 text-sm font-extrabold uppercase tracking-[0.22em] text-violet-600">
            <SparklesIcon className="h-5 w-5" />
            Our Capabilities
          </div>

          <h2 className="mx-auto mt-5 max-w-[820px] text-4xl font-extrabold leading-tight tracking-normal text-[#07122f] sm:text-5xl lg:text-[58px]">
            Solutions that build{" "}
            <span className="text-indigo-500">brands and drive results</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 tracking-normal text-slate-600 sm:text-lg">
            We combine strategy, creativity, and technology to deliver
            end-to-end digital solutions that help your business grow.
          </p>
        </div>

        <div className="mt-10 grid gap-7 lg:grid-cols-3">
          {capabilities.map(({ number, title, description, icon: Icon, features, theme }) => (
            <article
              key={title}
              className={`group relative overflow-hidden rounded-2xl border ${theme.border} bg-white p-7 shadow-[0_24px_70px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(15,23,42,0.12)]`}
            >
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />

              <div className="relative flex items-start justify-between gap-5">
                <span
                  className={`flex h-20 w-20 items-center justify-center rounded-xl ${theme.icon}`}
                >
                  <Icon className="h-11 w-11" />
                </span>
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-full text-lg font-extrabold ${theme.number}`}
                >
                  {number}
                </span>
              </div>

              <h3 className="relative mt-7 text-2xl font-extrabold tracking-normal text-[#07122f]">
                {title}
              </h3>
              <p className="relative mt-4 min-h-[90px] text-[15px] font-medium leading-7 tracking-normal text-slate-600">
                {description}
              </p>

              <div className="relative my-6 h-px bg-slate-200" />

              <ul className="relative space-y-3">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm font-medium tracking-normal text-slate-700"
                  >
                    <CheckCircleIcon className={`h-5 w-5 ${theme.text}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                className={`relative mt-7 flex items-center justify-between text-sm font-extrabold tracking-normal ${theme.text}`}
              >
                Explore Service
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r ${theme.button} text-white shadow-[0_16px_36px_rgba(79,70,229,0.2)] transition group-hover:translate-x-1`}
                >
                  <ArrowRightIcon className="h-5 w-5" />
                </span>
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-5 text-center">
          <div className="hidden items-center gap-5 text-sm font-semibold leading-5 tracking-normal text-slate-600 sm:flex">
            <span className="-rotate-6 font-serif text-lg leading-5">
              Let's build something
              <br />
              amazing together!
            </span>
            <ArrowRightIcon className="h-10 w-10 rotate-12 text-indigo-500" />
          </div>

          <a
            href="/contact"
            className="inline-flex h-14 min-w-[320px] items-center justify-center gap-5 rounded-full bg-gradient-to-r from-violet-600 to-blue-500 px-8 text-sm font-extrabold uppercase tracking-[0.06em] text-white shadow-[0_20px_50px_rgba(79,70,229,0.28)] transition hover:-translate-y-1"
          >
            Start Your Project
            <ArrowRightIcon className="h-5 w-5" />
          </a>

          <p className="text-sm font-medium tracking-normal text-slate-500">
            Get in touch and let's create something impactful.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Ourcapacity;
