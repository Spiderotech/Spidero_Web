import React from "react";
import img from "../../assets/careers.jpg";
import {
  ArrowRightIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

const Herosection = () => {
  return (
    <section className="bg-white px-5 pt-28 font-sans sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.08em] text-blue-600">
            Careers
          </p>
          <div className="mt-4 h-1.5 w-12 rounded-full bg-blue-600" />

          <h1 className="mt-8 max-w-5xl text-4xl font-extrabold leading-tight tracking-normal text-black sm:text-5xl lg:text-6xl">
            We’re looking for brilliant minds to join our top-notch team and
            make it even better.{" "}
            <span className="text-blue-600">Are you ready?</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg font-medium leading-8 tracking-normal text-slate-700 sm:text-xl">
            We love curious problem solvers, creative thinkers, and passionate
            builders who want to create impact. Let’s build the future together.
          </p>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-2xl bg-[#07122f] shadow-[0_28px_90px_rgba(15,23,42,0.18)]">
          <img
            src={img}
            alt="Careers at Spidero Technology"
            className="h-[420px] w-full object-cover opacity-85 sm:h-[520px] lg:h-[620px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#021126]/85 via-[#021126]/35 to-transparent" />

          <div className="absolute left-6 top-1/2 w-[calc(100%-3rem)] -translate-y-1/2 sm:left-10 sm:w-[430px] lg:left-20">
            <div className="rounded-2xl bg-white p-8 shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:p-10">
              <div className="flex items-center gap-5">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <BriefcaseIcon className="h-9 w-9" />
                </span>
                <div>
                  <h2 className="text-xl font-extrabold tracking-normal text-[#07122f]">
                    Explore Opportunities
                  </h2>
                  <div className="mt-4 h-1 w-10 rounded-full bg-blue-600" />
                </div>
              </div>

              <p className="mt-8 text-lg font-medium leading-8 tracking-normal text-[#07122f]">
                If you love everything web & mobile, you have landed on the
                right page. Pick what describes you the best and we will walk
                the talk.
              </p>

              <a
                href="#open-positions"
                className="mt-10 inline-flex h-14 items-center justify-center gap-3 rounded-lg bg-blue-600 px-8 text-base font-bold text-white shadow-[0_16px_34px_rgba(37,99,235,0.26)] transition hover:bg-blue-700"
              >
                View Open Positions
                <ArrowRightIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <span className="absolute right-[46%] top-[18%] hidden text-base font-bold uppercase tracking-normal text-white/90 lg:block">
            Online
          </span>
          <span className="absolute right-[43%] top-[47%] hidden text-base font-bold uppercase tracking-normal text-white/90 lg:block">
            Growth
          </span>
          <span className="absolute bottom-[26%] right-[18%] hidden text-base font-bold uppercase tracking-normal text-white/90 lg:block">
            Innovation
          </span>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
