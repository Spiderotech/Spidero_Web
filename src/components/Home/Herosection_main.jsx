import React from "react";
import {
  ArrowRightIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import video from "../../assets/homevideo (2).mp4";
import image from "../../assets/homescreenimg.png";

const stats = [
  {
    value: "250+",
    label: "Projects Delivered",
    icon: ChartBarIcon,
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    icon: UserGroupIcon,
  },
  {
    value: "10+",
    label: "Years Experience",
    icon: ShieldCheckIcon,
  },
];

const HerosectionMain = () => {
  return (
    <section className="relative min-h-[640px] overflow-hidden px-5 py-0 font-sans text-white sm:min-h-[720px] sm:px-8 lg:min-h-screen lg:px-10">
      <div className="video-docker absolute left-0 top-0 h-full w-full overflow-hidden">
        <video
          className="absolute left-0 top-0 hidden h-full w-full object-cover sm:block"
          src={video}
          type="video/mp4"
          autoPlay
          loop
          muted
        ></video>
        <img
          className="h-full w-full object-cover sm:hidden"
          src={image}
          alt="Background Image"
        />
      </div>

      

      <div className="relative z-10 mx-auto flex min-h-[640px] max-w-[1500px] items-center py-24 sm:min-h-[720px] lg:min-h-screen">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.45fr)]">
          <div className="max-w-[760px] text-left">
            <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-white sm:text-sm">
              Innovate. Transform. Succeed.
            </p>

            <h1 className="mt-5 text-[34px] font-extrabold leading-[1.16] tracking-normal text-white sm:mt-6 sm:text-5xl lg:text-[56px] xl:text-[62px]">
              Your technology partner for innovative and impactful{" "}
              <span className="text-white">digital solutions</span>
            </h1>

            <p className="mt-5 max-w-[560px] text-sm font-medium leading-6 tracking-normal text-white/78 sm:mt-6 sm:text-base lg:text-lg">
              We help businesses harness the power of technology to drive
              growth, efficiency, and meaningful change.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
              <a
                href="/expertice"
                className="inline-flex h-12 min-w-[190px] items-center justify-center gap-4 rounded-md border border-white bg-white px-6 text-xs font-extrabold uppercase tracking-normal text-[#07122f] shadow-[0_18px_42px_rgba(109,84,255,0.3)] transition hover:-translate-y-1 hover:border-white hover:bg-black hover:text-white"
              >
                Explore Us
                <ArrowRightIcon className="h-4 w-4" />
              </a>
              <a
                href="/contact"
                className="inline-flex h-12 min-w-[180px] items-center justify-center rounded-md border border-white bg-white px-6 text-xs font-extrabold uppercase tracking-normal text-[#07122f] backdrop-blur transition hover:-translate-y-1 hover:border-white hover:bg-black hover:text-white"
              >
                Contact Us
              </a>
            </div>
          </div>

          
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 text-center text-xs font-extrabold uppercase tracking-[0.12em] text-white md:flex">
        <span className="flex h-12 w-7 items-center justify-center rounded-full border border-white/50">
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
        </span>
        Scroll To Explore
      </div>
    </section>
  );
};

export default HerosectionMain;
