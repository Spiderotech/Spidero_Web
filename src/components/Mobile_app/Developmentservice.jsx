import React from "react";
import BallCanvas from "../Canvas/Ball";
import react from "../../assets/reactjs.png";
import andro from "../../assets/mobile/android.png";
import ios from "../../assets/mobile/ios.png";
import enter from "../../assets/mobile/normal.png";
import {
  BoltIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    title: "iOS App Development",
    description:
      "Crafting native iOS apps adhering to the Human Interface Guidelines, we harness the latest iOS frameworks for optimal performance. Our iPhone and iPad product web development undergoes rigorous split testing, ensuring valuable insights from early user feedback.",
    icon: ios,
    number: "01",
    accent: "violet",
  },
  {
    title: "Android App Development",
    description:
      "Delivering top-tier Android apps, our development adheres to the Material Design Guidelines, utilizing cutting-edge Android libraries. Our London-based Android developers bring a wealth of experience, having collaborated with both Fortune 500 companies and innovative startups.",
    icon: andro,
    number: "02",
    accent: "emerald",
  },
  {
    title: "React Native App Development",
    description:
      "Our React Native app development prioritizes code reusability, cross-platform support, and a native-like UI. This approach ensures cost-effectiveness and a higher return on investment. Consult with our certified React Native app developers to unlock the full potential of your project.",
    icon: react,
    number: "03",
    accent: "sky",
  },
  {
    title: "Enterprise Mobile Solutions",
    description:
      "Consistently surpassing expectations, we stand out among mobile app development companies by delivering intricate projects within designated timelines, solidifying our reputation as the preferred choice in London.",
    icon: enter,
    number: "04",
    accent: "purple",
  },
];

const accentStyles = {
  violet: {
    iconWrap: "bg-violet-50 border-violet-200",
    line: "bg-violet-600",
    number: "text-violet-200",
    wave: "from-violet-100/80",
  },
  emerald: {
    iconWrap: "bg-emerald-50 border-emerald-200",
    line: "bg-emerald-500",
    number: "text-emerald-200",
    wave: "from-emerald-100/80",
  },
  sky: {
    iconWrap: "bg-sky-50 border-sky-200",
    line: "bg-sky-500",
    number: "text-sky-200",
    wave: "from-sky-100/80",
  },
  purple: {
    iconWrap: "bg-purple-50 border-purple-200",
    line: "bg-purple-600",
    number: "text-purple-200",
    wave: "from-purple-100/80",
  },
};

const benefits = [
  {
    title: "Scalable Solutions",
    text: "Built to grow with your business and adapt to future needs.",
    icon: RocketLaunchIcon,
  },
  {
    title: "Secure & Reliable",
    text: "Industry-best practices to ensure data protection and app security.",
    icon: ShieldCheckIcon,
  },
  {
    title: "User-Centric Design",
    text: "Intuitive interfaces that deliver exceptional user experiences.",
    icon: UserIcon,
  },
  {
    title: "High Performance",
    text: "Optimized for speed, stability, and seamless performance.",
    icon: BoltIcon,
  },
];

const ServiceCard = ({ title, description, icon, number, accent }) => {
  const theme = accentStyles[accent];

  return (
    <article className="relative flex min-h-[430px] flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white p-7 shadow-[0_18px_55px_rgba(15,23,42,0.07)]">
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t ${theme.wave} to-transparent`}
      />
      <div className="pointer-events-none absolute bottom-4 right-6 h-28 w-28 rounded-full border border-dotted border-slate-200/70" />

      <div className="relative flex items-start justify-between gap-4">
        <span
          className={`flex h-20 w-20 items-center justify-center rounded-2xl border ${theme.iconWrap}`}
        >
          <span className="block h-12 w-12 animate-bounce">
            <BallCanvas icon={icon} />
          </span>
        </span>
        <span className={`text-5xl font-extrabold ${theme.number}`}>
          {number}
        </span>
      </div>

      <h3 className="relative mt-7 text-2xl font-extrabold leading-tight tracking-normal text-[#07122f]">
        {title}
      </h3>
      <div className={`relative mt-5 h-1 w-10 rounded-full ${theme.line}`} />
      <p className="relative mt-6 text-[15px] font-semibold leading-7 tracking-normal text-[#111827]">
        {description}
      </p>

     
    </article>
  );
};

const Developmentservice = () => {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-14 font-sans sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1360px]">
        <div className="text-center">
          <div className="inline-flex items-center gap-5 text-sm font-extrabold uppercase tracking-[0.28em] text-violet-600">
            <span className="h-px w-7 bg-violet-500" />
            Our Services
            <span className="h-px w-7 bg-violet-500" />
          </div>

          <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-normal text-[#07122f] sm:text-5xl lg:text-[56px]">
            Our <span className="text-violet-600">Mobile App</span> Development
            Services
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base font-semibold leading-7 tracking-normal text-slate-500 sm:text-lg">
            We build high-performance mobile apps that deliver seamless
            experiences, drive engagement, and accelerate business growth.
          </p>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-violet-600" />
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <div className="mx-auto mt-9 grid max-w-[1250px] gap-0 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.06)] sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ title, text, icon: Icon }, index) => (
            <div
              key={title}
              className={`flex items-center gap-5 p-6 ${
                index > 0 ? "lg:border-l lg:border-slate-200" : ""
              } ${index % 2 === 1 ? "sm:border-l sm:border-slate-200" : ""}`}
            >
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
                <Icon className="h-8 w-8" />
              </span>
              <div>
                <h3 className="text-base font-extrabold tracking-normal text-[#07122f]">
                  {title}
                </h3>
                <p className="mt-1 text-sm font-medium leading-5 tracking-normal text-slate-600">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Developmentservice;
