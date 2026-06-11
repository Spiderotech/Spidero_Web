import React from "react";
import {
  HeartIcon,
  PencilIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const values = [
  {
    title: "User-Centric",
    text: "Designs that put people first.",
    icon: UserIcon,
  },
  {
    title: "Meaningful Design",
    text: "Creating visuals that communicate clearly.",
    icon: PencilIcon,
  },
  {
    title: "Deeper Connections",
    text: "Building experiences that resonate.",
    icon: HeartIcon,
  },
];

const Message_that = () => {
  return (
    <section className="overflow-hidden bg-white px-5 py-10 font-sans sm:px-8 lg:px-10 lg:py-12">
      <div className="mx-auto grid max-w-[1180px] items-center gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(390px,1.15fr)] xl:gap-10">
        <div className="min-w-0">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-indigo-600">
            Our Philosophy
          </p>
          <div className="mt-4 h-0.5 w-16 rounded-full bg-indigo-600" />

          <h2 className="mt-6 max-w-[520px] text-3xl font-extrabold leading-tight tracking-normal text-[#07122f] sm:text-4xl lg:text-[48px]">
            Messages That Mean{" "}
            <span className="text-indigo-500">Something</span>
          </h2>

          <div className="mt-5 h-1.5 w-16 rounded-full bg-indigo-500" />

          <div className="mt-6 max-w-[560px] space-y-5 text-sm font-medium leading-7 tracking-normal text-slate-700 sm:text-base">
            <p>
              When crafting a compelling narrative for website design,
              impulsivity is not an option. Our approach focuses on creating
              visually captivating designs, whether for enterprise or
              educational websites, fostering deeper connections with the
              audience.
            </p>
            <p>
              Our user-centric models set us apart from other web design and
              development companies in London.
            </p>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            {values.map(({ title, text, icon: Icon }, index) => (
              <article
                key={title}
                className={`${
                  index > 0 ? "sm:border-l sm:border-slate-200 sm:pl-6" : ""
                }`}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-base font-extrabold tracking-normal text-[#07122f]">
                  {title}
                </h3>
                
              </article>
            ))}
          </div>
        </div>

        <div className="relative min-h-[380px] overflow-hidden rounded-[28px] bg-indigo-50 shadow-[0_22px_60px_rgba(79,70,229,0.09)] sm:min-h-[500px] lg:min-h-[560px]">
          <div className="pointer-events-none absolute left-16 top-16 h-24 w-24 bg-[radial-gradient(circle,#b8b7ff_2px,transparent_2px)] [background-size:18px_18px] opacity-70" />
          <div className="absolute inset-8 rounded-[24px] bg-indigo-100/70" />
          <div className="absolute left-1/2 top-1/2 w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-8 shadow-[0_22px_60px_rgba(79,70,229,0.11)] sm:p-10">
            <div className="text-[68px] font-extrabold leading-none text-indigo-500">
              &ldquo;
            </div>
            <div className="mt-6 space-y-4">
              <span className="block h-2 w-full rounded-full bg-indigo-100" />
              <span className="block h-2 w-full rounded-full bg-indigo-100" />
              <span className="block h-2 w-4/5 rounded-full bg-indigo-100" />
              <span className="block h-2 w-[92%] rounded-full bg-indigo-100" />
              <span className="block h-2 w-2/5 rounded-full bg-indigo-100" />
            </div>
            <span className="mt-9 block h-2.5 w-24 rounded-full bg-gradient-to-r from-violet-600 to-indigo-500" />
          </div>
          <span className="absolute bottom-[26%] right-[13%] flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-white shadow-[0_22px_50px_rgba(79,70,229,0.3)] sm:h-24 sm:w-24">
            <PencilIcon className="h-10 w-10 sm:h-12 sm:w-12" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Message_that;
