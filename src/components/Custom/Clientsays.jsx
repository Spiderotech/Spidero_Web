import React from "react";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import web5 from "../../assets/client3.webp";

const Clientsays = () => {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-14 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-blue-50 px-5 py-2 text-sm font-bold uppercase tracking-[0.12em] text-blue-600">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-white shadow-[0_8px_18px_rgba(37,99,235,0.28)]">
              <ChatBubbleLeftRightIcon className="h-4 w-4" />
            </span>
            Testimonial
          </div>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-normal text-[#07122f] sm:text-4xl lg:text-5xl">
            What Our <span className="text-blue-600">Client</span> Says...
          </h2>

          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="h-1.5 w-24 rounded-full bg-blue-600" />
            <span className="h-1.5 w-4 rounded-full bg-blue-600" />
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white px-6 py-10 shadow-[0_24px_80px_rgba(15,23,42,0.09)] sm:px-10 lg:px-14 lg:py-14">
          <div className="pointer-events-none absolute -bottom-28 -left-24 h-64 w-64 rounded-full border-[54px] border-blue-50" />
          <div className="pointer-events-none absolute left-5 top-16 grid grid-cols-6 gap-4 opacity-60">
            {Array.from({ length: 24 }).map((_, index) => (
              <span key={index} className="h-1.5 w-1.5 rounded-full bg-blue-200" />
            ))}
          </div>

          <div className="relative grid items-center gap-8 lg:grid-cols-[230px_1fr_310px]">
            <div className="flex justify-center lg:justify-start">
              <div className="flex h-32 w-32 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-100 text-blue-600 shadow-[0_18px_45px_rgba(37,99,235,0.12)] sm:h-36 sm:w-36">
                <span className="font-serif text-8xl font-bold leading-none">“</span>
              </div>
            </div>

            <blockquote className="border-y border-blue-100 py-8 text-center lg:border-x lg:border-y-0 lg:px-10 lg:text-left">
              <p className="text-2xl font-extrabold leading-relaxed tracking-normal text-[#07122f] sm:text-3xl lg:text-[34px]">
                Spidero Technology functioned as a genuine collaborator and provided a superior software solution that greatly enhanced our customer experience.
              </p>
            </blockquote>

            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <img
                src={web5}
                alt="Alvin"
                className="h-24 w-24 rounded-full border-8 border-white object-cover shadow-[0_16px_40px_rgba(15,23,42,0.16)] sm:h-28 sm:w-28"
              />
              <div className="mt-6">
                <h3 className="text-2xl font-extrabold tracking-normal text-[#07122f]">Alvin</h3>
                <p className="mt-2 max-w-[220px] text-base font-semibold leading-7 tracking-normal text-slate-500">
                  Head of Development, GetMyRoom
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-9 flex justify-center gap-5">
          <span className="h-3.5 w-3.5 rounded-full bg-blue-100" />
          <span className="h-3.5 w-3.5 rounded-full bg-blue-600" />
          <span className="h-3.5 w-3.5 rounded-full bg-blue-100" />
        </div>
      </div>
    </section>
  );
};

export default Clientsays;
