import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import hero from "../../assets/Customhero.png";

const Herosection = () => {
  return (
    <section className="overflow-hidden bg-white px-5 pt-24 font-sans text-[#1d2433] sm:px-6 md:pt-32 lg:pt-40">
      <div className="mx-auto grid min-h-[auto] max-w-[1536px] items-center gap-8 py-10 sm:gap-10 lg:min-h-[620px] lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-0">
        <div className="max-w-[690px] text-left lg:pl-16">
          <h1 className="text-[32px] font-bold leading-tight text-[#07122f] sm:text-[46px] lg:text-[42px]">
            Top-Tier Software
            <br />
            Development Company
          </h1>
          <span className="mt-6 block h-[3px] w-16 bg-gradient-to-br from-blue-800 to-blue-800 sm:mt-8" />

          <p className="mt-6 text-[15px] leading-7 text-[#2f3a4e] sm:mt-9 sm:text-[18px] sm:leading-9">
            We specialize in strategic planning, design, development, and the
            seamless, scalable implementation of tailor-made software solutions.
            Employing a highly consultative approach, we are trusted
            collaborative partners committed to delivering measurable results
            and elevating business performance. Our custom-engineered software
            solutions are meticulously crafted to meet the unique needs of
            diverse industry verticals, ensuring optimal outcomes for our
            clients.
          </p>

          <a
            href="/expertice"
            className="mt-8 inline-flex h-14 w-full items-center justify-between border border-blue-800 bg-white px-7 text-base font-semibold uppercase tracking-wide text-blue-800 transition hover:bg-blue-800 hover:text-white sm:mt-10 sm:w-[280px] sm:px-11 sm:text-lg"
          >
            Explore Us
            <ArrowRightIcon className="h-7 w-7" />
          </a>
        </div>

        <div className="relative flex min-h-[260px] items-end justify-center sm:min-h-[360px] lg:min-h-[560px] lg:justify-end">
          <img
            src={hero}
            alt="Custom software architecture interface"
            className="w-full max-w-[780px] object-contain drop-shadow-[0_34px_70px_rgba(30,64,175,0.18)] lg:max-w-[900px]"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Herosection;
