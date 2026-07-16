import React, { useEffect } from "react";
import { particlesCursor } from "https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js";
import {
  ArrowRightIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  SparklesIcon,
  StarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const stats = [
  {
    value: "250+",
    label: "Projects Completed",
    icon: StarIcon,
    color: "text-blue-300",
  },
  {
    value: "150+",
    label: "Happy Clients",
    icon: UserGroupIcon,
    color: "text-blue-300",
  },
  {
    value: "10+",
    label: "Years Experience",
    icon: RocketLaunchIcon,
    color: "text-blue-300",
  },
  {
    value: "UK Based",
    label: "Serving Worldwide",
    icon: GlobeAltIcon,
    color: "text-blue-300",
  },
];

const Herosection = () => {
  useEffect(() => {
    const app = document.getElementById("web-design-particles");
    if (!app) return undefined;

    const pc = particlesCursor({
      el: app,
      gpgpuSize: 512,
      colors: [0x1e40af, 0x60a5fa],
      color: 0x1e40af,
      coordScale: 0.62,
      noiseIntensity: 0.0012,
      noiseTimeCoef: 0.00015,
      pointSize: 3.5,
      pointDecay: 0.002,
      sleepRadiusX: 260,
      sleepRadiusY: 220,
      sleepTimeCoefX: 0.001,
      sleepTimeCoefY: 0.002,
    });

    const handleClick = () => {
      pc.uniforms.uColor.value.set(Math.random() > 0.5 ? 0x1e40af : 0x60a5fa);
      pc.uniforms.uCoordScale.value = 0.45 + Math.random() * 0.7;
      pc.uniforms.uNoiseIntensity.value = 0.0005 + Math.random() * 0.001;
      pc.uniforms.uPointSize.value = 2.5 + Math.random() * 4;
    };

    document.body.addEventListener("click", handleClick);

    return () => {
      document.body.removeEventListener("click", handleClick);
      app.querySelector("canvas")?.remove();
    };
  }, []);

  return (
    <section className="relative min-h-[750px] overflow-hidden bg-[#02040a] px-5 pt-32 pb-10 font-sans text-white sm:px-8 lg:px-10 lg:pt-36">
      <div
        id="web-design-particles"
        className="absolute inset-y-0 right-0 z-0 w-full opacity-95 lg:w-[64%]"
      />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_80%_34%,rgba(30,64,175,0.2),transparent_32%),linear-gradient(90deg,#02040a_0%,rgba(2,4,10,0.94)_34%,rgba(2,4,10,0.42)_72%,rgba(2,4,10,0.72)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-52 bg-gradient-to-t from-[#02040a] to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[580px] max-w-[1500px] flex-col justify-between">
        <div className="max-w-[790px]">
          <div className="inline-flex items-center gap-3 rounded-full border border-blue-300/35 bg-black/40 px-5 py-2.5 text-sm font-extrabold uppercase tracking-normal text-white shadow-[0_0_34px_rgba(30,64,175,0.24)] backdrop-blur">
            <SparklesIcon className="h-5 w-5 text-blue-300" />
            Top Rated In The UK
          </div>

          <h1 className="mt-9 text-5xl font-extrabold leading-[1.08] tracking-normal text-white sm:text-6xl lg:text-[74px] xl:text-[82px]">
            A top-rated{" "}
            <span className="text-blue-300">
              web design
            </span>{" "}
            company in the UK
          </h1>

          <p className="mt-7 max-w-[620px] text-base font-medium leading-7 tracking-normal text-white/72 sm:text-lg">
            We create high-performance websites that help brands stand out,
            engage users, and grow their business.
          </p>

          <a
            href="/expertice"
            className="mt-9 inline-flex h-14 items-center justify-center gap-8 rounded-md bg-white px-8 text-sm font-extrabold uppercase tracking-normal text-[#060817] shadow-[0_18px_45px_rgba(255,255,255,0.12)] transition hover:-translate-y-1 hover:bg-blue-800 hover:text-white"
          >
            Explore Us
            <ArrowRightIcon className="h-5 w-5" />
          </a>
        </div>

       
      </div>
    </section>
  );
};

export default Herosection;
