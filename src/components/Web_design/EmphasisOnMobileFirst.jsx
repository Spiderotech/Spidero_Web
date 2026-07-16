import React from "react";
import {
  ArrowRightIcon,
  DevicePhoneMobileIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import img1 from "../../assets/EmphasisOnMobileFirst.png";

const EmphasisOnMobileFirst = () => {
  return (
    <section className="overflow-hidden bg-white px-5 py-10 font-sans sm:px-8 lg:px-10 lg:py-12">
      <div className="mx-auto grid max-w-[1280px] items-center gap-8 lg:grid-cols-[minmax(0,0.86fr)_minmax(440px,1.14fr)] xl:gap-10">
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2 rounded-xl bg-blue-50 px-3.5 py-2 text-xs font-extrabold uppercase tracking-normal text-blue-800 shadow-[0_16px_45px_rgba(30,64,175,0.08)]">
            <DevicePhoneMobileIcon className="h-5 w-5" />
            Mobile-First Approach
          </div>

          <h2 className="mt-6 max-w-[520px] text-3xl font-extrabold leading-tight tracking-normal text-[#07122f] sm:text-4xl lg:text-[46px]">
            Emphasis On{" "}
            <span className="text-blue-800">Mobile First</span> Web Design
          </h2>

          <div className="mt-4 flex items-center gap-3">
            <span className="h-0.5 w-9 rounded-full bg-gradient-to-br from-blue-800 to-blue-800" />
            <span className="h-0.5 w-5 rounded-full bg-blue-200" />
          </div>

          <div className="mt-5 max-w-[540px] space-y-4 text-sm font-medium leading-6 tracking-normal text-slate-700 sm:text-[15px]">
            <p>
              In this era of information, mobile phones are not just a trend but
              a necessity. Our designers meticulously craft user experiences
              that seamlessly adapt to every platform. From small to large
              screens, we build prototypes ensuring responsiveness.
            </p>
            <p>
              As a distinguished responsive web design company, we prioritize
              crucial aspects of web design content, recognizing the limited
              real estate on smaller screens.
            </p>
            <p>
              Given the current emphasis on mobile indexing and ranking by
              Google, developing professional mobile web designs has become
              increasingly vital.
            </p>
          </div>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-800 shadow-[0_16px_40px_rgba(30,64,175,0.1)] sm:h-14 sm:w-14">
              <SparklesIcon className="h-7 w-7" />
            </span>
            <div>
              <h3 className="text-xl font-extrabold uppercase tracking-normal text-blue-800">
                Convinced?
              </h3>
              <p className="mt-1 text-sm font-medium tracking-normal text-slate-600">
                Let's build something amazing together.
              </p>
            </div>
          </div>

          <a
            href="/contact"
            className="mt-6 inline-flex h-12 min-w-[260px] items-center justify-center gap-4 rounded-lg bg-gradient-to-br from-blue-800 to-blue-800 px-7 text-xs font-extrabold uppercase tracking-normal text-white shadow-[0_18px_42px_rgba(30,64,175,0.24)] transition hover:-translate-y-1"
          >
            Discuss Your Project
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>

        <div className="relative min-h-[380px] overflow-hidden rounded-[28px] bg-blue-50 shadow-[0_22px_65px_rgba(30,64,175,0.11)] sm:min-h-[500px] lg:min-h-[640px]">
          <img
            src={img1}
            alt="Mobile-first web design showcase"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default EmphasisOnMobileFirst;
