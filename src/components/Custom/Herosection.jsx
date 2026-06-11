import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import hero from "../../assets/Customhero.png";

const Herosection = () => {
  return (
    <section className="overflow-hidden bg-white px-6 pt-28 font-sans text-[#1d2433] md:pt-36 lg:pt-40">
      <div className="mx-auto grid min-h-[620px] max-w-[1536px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="max-w-[690px] text-left lg:pl-16">
          <h1 className="text-[34px] font-bold leading-tight text-black sm:text-[46px] lg:text-[42px]">
            Top-Tier Software
            <br />
            Development Company
          </h1>
          <span className="mt-8 block h-[3px] w-16 bg-[#1f8cff]" />

          <p className="mt-9 text-[18px] leading-9 text-[#2f3a4e]">
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
            className="mt-10 inline-flex h-[62px] w-[280px] items-center justify-between border border-black bg-white px-11 text-lg font-semibold uppercase tracking-wide text-black transition hover:bg-black hover:text-white"
          >
            Explore Us
            <ArrowRightIcon className="h-7 w-7" />
          </a>
        </div>

        <div className="relative flex min-h-[360px] items-end justify-center lg:min-h-[560px] lg:justify-end">
          <img
            src={hero}
            alt="Software developer working on custom code"
            className="w-full max-w-[780px] object-contain lg:max-w-[880px]"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Herosection;
