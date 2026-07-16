import React from "react";
import img from "../../assets/about.jpg";
import {
  CalendarDaysIcon,
  ChartBarIcon,
  HeartIcon,
  LightBulbIcon,
  PlayCircleIcon,
  ShieldCheckIcon,
  SparklesIcon,
  TrophyIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const stats = [
  {
    value: "100+",
    label: "Solutions Delivered",
    icon: TrophyIcon,
    color: "text-blue-800",
    bg: "bg-blue-50",
  },
  {
    value: "10+",
    label: "Technology Experts",
    icon: UserGroupIcon,
    color: "text-blue-800",
    bg: "bg-blue-50",
  },
  {
    value: "10x",
    label: "Growth in 4 Years",
    icon: ChartBarIcon,
    color: "text-blue-800",
    bg: "bg-blue-50",
  },
  {
    value: "4",
    label: "Years of Excellence",
    icon: CalendarDaysIcon,
    color: "text-blue-800",
    bg: "bg-blue-50",
  },
];

const values = [
  {
    title: "People First",
    text: "We value relationships and believe long-term partnerships create lasting impact.",
    icon: HeartIcon,
  },
  {
    title: "Innovation Driven",
    text: "We constantly explore and adopt new technologies to build future-ready solutions.",
    icon: LightBulbIcon,
  },
  {
    title: "Ownership & Accountability",
    text: "We take full responsibility and are accountable for the results we deliver.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Quality Obsession",
    text: "Excellence is in our process, our code, and our commitment to you.",
    icon: SparklesIcon,
  },
];

const Herosection = () => {
  return (
    <section className="bg-[#f5f7fb] px-4 pb-10 pt-24 font-sans sm:px-6 lg:px-8 lg:pt-28">
      <div className="mx-auto max-w-[1500px] overflow-hidden rounded-2xl bg-white px-6 py-10 shadow-[0_24px_90px_rgba(15,23,42,0.08)] sm:px-10 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[0.83fr_1.17fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-blue-800">
              About Spidero
            </p>
            <div className="mt-4 h-1.5 w-16 rounded-full bg-gradient-to-br from-blue-800 to-blue-800" />

            <h1 className="mt-7 max-w-xl text-4xl font-extrabold leading-tight tracking-normal text-[#07122f] sm:text-5xl">
              It’s always about YOU at{" "}
              <span className="text-blue-800">Spidero Technology</span>
            </h1>

            <div className="mt-6 max-w-2xl space-y-4 text-base font-medium leading-8 tracking-normal text-slate-600">
              <p>
                Spidero Technology puts together a bunch of passionate minds to
                transform your visions into reality imparting an awesome digital
                experience for your users.
              </p>
              <p>
                From website design, development, scalable mobile apps to SaaS
                platforms, the solution we engineer accelerate efficiency and
                fuel growth for our clients.
              </p>
              <p>
                From 2022, we are committed to achieving and pushing the level
                of performance at all times. Leveraging the power of technology,
                we deliver end-to-end solutions for multi-million dollar funded
                start-ups to small and medium enterprises.
              </p>
              <p>
                Art and culture inspire us too, and our office presence at UK
                and India is a true reflection.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/expertice"
                className="inline-flex h-14 items-center justify-center rounded-lg bg-gradient-to-br from-blue-800 to-blue-800 px-8 text-base font-bold text-white shadow-[0_16px_34px_rgba(37,99,235,0.22)] transition hover:translate-y-[-2px]"
              >
                Explore Our Services
              </a>
              <a
                href="/contact"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-lg border border-blue-800 px-8 text-base font-bold text-blue-800 transition hover:bg-blue-50"
              >
                <PlayCircleIcon className="h-7 w-7" />
                Let&apos;s Talk
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -right-8 top-8 hidden h-32 w-32 opacity-70 lg:block">
              <div className="h-full w-full bg-[radial-gradient(circle,_#d7ddff_2px,_transparent_2px)] [background-size:16px_16px]" />
            </div>

            <div className="overflow-hidden rounded-3xl shadow-[0_24px_70px_rgba(15,23,42,0.14)]">
              <img
                src={img}
                alt="Spidero Technology team collaboration"
                className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[460px]"
              />
            </div>

            <div className="relative z-10 mx-auto -mt-16 grid max-w-4xl gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map(({ value, label, icon: Icon, color, bg }) => (
                <div
                  key={label}
                  className="rounded-2xl bg-white px-5 py-6 text-center shadow-[0_22px_55px_rgba(15,23,42,0.12)]"
                >
                  <span className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${bg} ${color}`}>
                    <Icon className="h-7 w-7" />
                  </span>
                  <div className={`mt-4 text-4xl font-extrabold tracking-normal ${color}`}>
                    {value}
                  </div>
                  <p className="mt-2 text-base font-semibold leading-6 tracking-normal text-[#07122f]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 rounded-2xl border border-blue-100 bg-[#f8fbff] p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)] lg:grid-cols-[1fr_280px] lg:p-8">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {values.map(({ title, text, icon: Icon }) => (
              <div key={title} className="text-center">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-800">
                  <Icon className="h-8 w-8" />
                </span>
                <h3 className="mt-4 text-base font-extrabold tracking-normal text-[#07122f]">
                  {title}
                </h3>
                <p className="mx-auto mt-3 max-w-[230px] text-sm font-medium leading-7 tracking-normal text-slate-600">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="border-blue-100 lg:border-l lg:pl-10">
            <h3 className="text-lg font-extrabold tracking-normal text-[#07122f]">
              Our Presence
            </h3>
            <div className="mt-5 space-y-3">
              <div className="flex items-center gap-4 rounded-lg border border-blue-100 bg-white px-4 py-3">
                <span className="flex h-9 w-12 items-center justify-center rounded-md bg-blue-50 text-xs font-extrabold text-blue-800">
                  UK
                </span>
                <span className="text-sm font-semibold tracking-normal text-[#07122f]">
                  London, UK
                </span>
              </div>
              <div className="flex items-center gap-4 rounded-lg border border-blue-100 bg-white px-4 py-3">
                <span className="flex h-9 w-12 items-center justify-center rounded-md bg-blue-50 text-xs font-extrabold text-blue-800">
                  IN
                </span>
                <span className="text-sm font-semibold tracking-normal text-[#07122f]">
                  Kerala, India
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm font-bold tracking-normal text-blue-800">
              And growing globally!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
