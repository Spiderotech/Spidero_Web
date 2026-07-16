import React from "react";
import {
  CalendarDaysIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const supportItems = [
  {
    title: "Client-Focused Approach",
    text: "We build solutions that align with your goals and deliver lasting impact.",
    icon: UserGroupIcon,
  },
  {
    title: "Quality You Can Trust",
    text: "Clean code, scalable architecture, and reliable support at every step of the journey.",
    icon: ShieldCheckIcon,
  },
];

const statCards = [
  {
    value: "4+",
    title: "Years",
    text: "in the business",
    icon: CalendarDaysIcon,
    size: "small",
  },
  {
    value: "98%",
    title: "Client Retention",
    text: "Building lasting partnerships",
    icon: UserGroupIcon,
    size: "small",
  },
  {
    value: "100+",
    title: "Businesses Delivered",
    text: "Empowering brands across industries worldwide",
    icon: RocketLaunchIcon,
    size: "wide",
  },
];

const Belowherosection = () => {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-16 font-sans sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute -left-8 bottom-12 hidden h-40 w-40 opacity-70 lg:block">
        <div className="h-full w-full bg-[radial-gradient(circle,_#dbe7ff_2px,_transparent_2px)] [background-size:18px_18px]" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-3 text-sm font-extrabold uppercase tracking-[0.16em] text-blue-800">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-500 shadow-[0_0_0_5px_rgba(37,99,235,0.12)]" />
            Our Commitment
          </div>

          <h2 className="mt-8 max-w-3xl text-3xl font-extrabold leading-tight tracking-normal text-[#07122f] sm:text-4xl lg:text-5xl">
            Your Development Partner. Committed to{" "}
            <span className="text-blue-800">Excellence!</span>
          </h2>

          <div className="mt-7 h-1 w-20 rounded-full bg-gradient-to-br from-blue-800 to-blue-800" />

          <div className="mt-8 max-w-3xl space-y-7 text-base font-medium leading-8 tracking-normal text-slate-600 sm:text-lg">
            <p>
              Over the last decade, we&apos;ve perfected the art of crafting
              websites that innovate, engage, and yield results through a blend
              of a human-centric approach and development ingenuity. Hire
              skilled web developers to turn your vision into reality.
            </p>
            <p>
              Whether it&apos;s custom web applications development and SaaS
              platforms, ecommerce website development, or informative lead
              generation sites, our value proposition in web development is to
              construct solutions by prioritizing the context and needs of
              end-users, ensuring meaningful results. Whether for enterprise or
              small business web development, we strive for excellence as an
              award-winning web development company, with a presence in London
              and India.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {supportItems.map(({ title, text, icon: Icon }, index) => (
              <div
                key={title}
                className={`flex gap-5 ${
                  index > 0 ? "sm:border-l sm:border-slate-200 sm:pl-8" : ""
                }`}
              >
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-800">
                  <Icon className="h-8 w-8" />
                </span>
                <div>
                  <h3 className="text-base font-extrabold tracking-normal text-[#07122f]">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm font-medium leading-7 tracking-normal text-slate-600">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {statCards.map(({ value, title, text, icon: Icon, size }) => (
            <article
              key={title}
              className={`relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-8 shadow-[0_22px_70px_rgba(15,23,42,0.08)] ${
                size === "wide" ? "sm:col-span-2" : "min-h-[330px]"
              }`}
            >
              <div className={`flex ${size === "wide" ? "items-center gap-8" : "flex-col items-center text-center"}`}>
                <span className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border-4 border-blue-50 bg-blue-50/70 text-blue-800 shadow-inner">
                  <Icon className="h-14 w-14" />
                </span>
                <div className={size === "wide" ? "text-left" : "mt-8"}>
                  <div className="text-5xl font-extrabold tracking-normal text-blue-800 sm:text-6xl">
                    {value}
                  </div>
                  <h3 className="mt-4 text-xl font-extrabold tracking-normal text-[#07122f]">
                    {title}
                  </h3>
                  <p className="mt-2 text-base font-medium tracking-normal text-slate-600">
                    {text}
                  </p>
                  <div className="mt-8 h-1 w-12 rounded-full bg-gradient-to-br from-blue-800 to-blue-800" />
                </div>
              </div>

              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 opacity-60">
                <div className="h-full w-full bg-[radial-gradient(ellipse_at_bottom,_rgba(37,99,235,0.16),_transparent_65%)]" />
              </div>
              {size === "wide" && (
                <div className="pointer-events-none absolute right-8 top-1/2 hidden h-36 w-64 -translate-y-1/2 opacity-40 sm:block">
                  <div className="h-full w-full bg-[radial-gradient(circle,_#93c5fd_2px,_transparent_2px)] [background-size:12px_12px]" />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Belowherosection;
