import React from "react";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import pm2 from "../../assets/Hire/pm2.webp";
import team from "../../assets/Hire/team.webp";
import growth from "../../assets/Hire/growth.webp";

const supportSteps = [
  {
    title: "Fully Managed with a PM",
    text: "Even the smallest team will have a PM to manage delivery, quality, cost and timelines.",
    image: pm2,
    accent: "from-blue-600 to-sky-500",
    bg: "bg-blue-50",
  },
  {
    title: "Scale up, down, pause, replay",
    text: "Increase or decrease team size anytime, pause anytime, restart anytime, with no minimum commitment clauses.",
    image: growth,
    accent: "from-orange-500 to-rose-500",
    bg: "bg-orange-50",
  },
  {
    title: "All skills in one place",
    text: "Need UI/UX, DevOps, Testing or non-tech skills like digital marketing? We can cover them in every plan.",
    image: team,
    accent: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-50",
  },
];

const Steps = () => {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-16 font-sans sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute -left-28 top-20 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-12 h-80 w-80 rounded-full bg-orange-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-[1180px]">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-blue-700">
            <SparklesIcon className="h-4 w-4" />
            Dedicated Team Support
          </div>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-normal text-[#071435] sm:text-4xl lg:text-[46px]">
            We're with you every step of the way
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-7 text-[#5f6b85]">
            Hire a flexible team with the management, skills and support needed
            to keep your project moving smoothly.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {supportSteps.map((item, index) => (
            <article
              key={item.title}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay={index * 120}
            >
              <div className={`${item.bg} relative flex min-h-[180px] items-center justify-center p-7`}>
                <span className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-extrabold text-[#071435] shadow-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <img
                  src={item.image}
                  alt=""
                  className="h-28 w-28 object-contain transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span
                  className={`mb-5 h-1.5 w-16 rounded-full bg-gradient-to-r ${item.accent}`}
                />
                <h3 className="text-xl font-extrabold leading-7 text-[#071435]">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm font-medium leading-7 text-[#5f6b85]">
                  {item.text}
                </p>
                <div className="mt-5 flex items-center gap-2 text-sm font-bold text-blue-800">
                  <CheckCircleIcon className="h-5 w-5" />
                  Included in your plan
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-blue-100 bg-[#f7faff] px-6 py-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)] md:flex-row">
          <div>
            <p className="text-lg font-extrabold text-[#071435]">
              Need a bigger or custom team?
            </p>
            <p className="mt-1 text-sm font-medium leading-6 text-[#5f6b85]">
              Tell us what skills and capacity you need, and we will help you
              build the right team.
            </p>
          </div>
          <a
            href="mailto:contact@spiderotechnology.com"
            className="inline-flex h-12 shrink-0 items-center justify-center gap-3 rounded-xl bg-blue-800 px-6 text-sm font-bold uppercase tracking-[0.12em] text-white shadow-[0_14px_30px_rgba(30,64,175,0.24)] transition hover:-translate-y-0.5 hover:bg-blue-900"
          >
            Contact Us
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Steps;
