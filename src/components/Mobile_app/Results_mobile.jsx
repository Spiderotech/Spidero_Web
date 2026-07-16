import React, { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {
  ArrowTrendingUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  CodeBracketIcon,
  ShieldCheckIcon,
  SignalIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";
import mdxLogo from "../../assets/mdx.jpg";
import fizzbellLogo from "../../assets/Fizzbell.png";
import struwaaLogo from "../../assets/Struwaa.png";
import doradrinkLogo from "../../assets/DoraDrink.png";
import mobile2 from "../../assets/mobile/mobile2.png";
import mobile3 from "../../assets/mobile/mobile3.png";
import mobile4 from "../../assets/mobile/mobile4.png";
import mobile5 from "../../assets/mobile/mobile5.png";
import mobile6 from "../../assets/mobile/mobile6.png";
import fizzbellHome from "../../assets/mobile/projects/fizzbell-home.png";
import fizzbellSplash from "../../assets/mobile/projects/fizzbell-splash.png";
import fizzbellScreenOne from "../../assets/mobile/projects/Simulator Screenshot - iPhone 15 Pro - 2026-01-23 at 00.28.35-portrait.png";
import fizzbellScreenTwo from "../../assets/mobile/projects/Simulator Screenshot - iPhone 15 Pro - 2026-01-23 at 00.28.42-portrait.png";
import fizzbellScreenThree from "../../assets/mobile/projects/Simulator Screenshot - iPhone 15 Pro - 2026-01-23 at 00.28.53-portrait.png";
import fizzbellScreenFour from "../../assets/mobile/projects/Simulator Screenshot - iPhone 15 Pro - 2026-01-23 at 00.29.04-portrait.png";
import doradrinkHome from "../../assets/mobile/projects/doradrink-home.png";
import doradrinkSplash from "../../assets/mobile/projects/doradrink-splash.png";
import doradrinkScreenOne from "../../assets/mobile/projects/Simulator Screenshot - iPhone 17 Pro - 2026-06-01 at 16.58.43-portrait.png";
import doradrinkScreenTwo from "../../assets/mobile/projects/Simulator Screenshot - iPhone 17 Pro - 2026-06-01 at 16.58.47-portrait.png";
import doradrinkScreenThree from "../../assets/mobile/projects/Simulator Screenshot - iPhone 17 Pro - 2026-06-01 at 16.58.50-portrait.png";
import doradrinkScreenFour from "../../assets/mobile/projects/Simulator Screenshot - iPhone 17 Pro - 2026-06-01 at 16.58.54-portrait.png";
import struwaaHome from "../../assets/mobile/projects/struwaa-home.png";
import struwaaSplash from "../../assets/mobile/projects/struwaa-splash.png";
import struwaaScreenOne from "../../assets/mobile/projects/Screenshot_1780565414-portrait.png";
import struwaaScreenTwo from "../../assets/mobile/projects/Screenshot_1780565426-portrait.png";
import struwaaScreenThree from "../../assets/mobile/projects/Screenshot_1780565487-portrait.png";
import struwaaScreenFour from "../../assets/mobile/projects/Screenshot_1780565582-portrait.png";
import struwaaScreenFive from "../../assets/mobile/projects/Screenshot_1780565619-portrait.png";

const themes = {
  red: {
    accent: "text-cyan-300",
    activeTab:
      "border-blue-500/60 bg-blue-800 text-white shadow-[0_18px_42px_rgba(37,99,235,0.26)]",
    glow:
      "bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.14),transparent_58%)]",
    sideGlow:
      "bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.11),transparent_60%)]",
    line: "bg-gradient-to-br from-blue-800 to-blue-800",
    border: "border-cyan-300",
    hoverBorder: "hover:border-cyan-300",
    softBorder: "border-cyan-300/35",
    panel: "border-cyan-300/35 bg-blue-950/10",
    cover: "from-blue-800 to-cyan-700 shadow-[0_28px_70px_rgba(37,99,235,0.28)]",
    coverIcon: "text-cyan-100/75",
    cta: "border-cyan-300 hover:bg-blue-800",
    performanceBorder: "xl:border-cyan-300/35",
  },
  green: {
    accent: "text-cyan-300",
    activeTab:
      "border-blue-500/60 bg-blue-800 text-white shadow-[0_18px_42px_rgba(37,99,235,0.26)]",
    glow:
      "bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.14),transparent_58%)]",
    sideGlow:
      "bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.11),transparent_60%)]",
    line: "bg-gradient-to-br from-blue-800 to-blue-800",
    border: "border-cyan-300",
    hoverBorder: "hover:border-cyan-300",
    softBorder: "border-cyan-300/35",
    panel: "border-cyan-300/35 bg-blue-950/10",
    cover: "from-blue-800 to-cyan-700 shadow-[0_28px_70px_rgba(37,99,235,0.28)]",
    coverIcon: "text-cyan-100/75",
    cta: "border-cyan-300 hover:bg-blue-800",
    performanceBorder: "xl:border-cyan-300/35",
  },
  blue: {
    accent: "text-cyan-300",
    activeTab:
      "border-sky-400/60 bg-sky-500 text-white shadow-[0_18px_42px_rgba(14,165,233,0.25)]",
    glow:
      "bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.14),transparent_58%)]",
    sideGlow:
      "bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.11),transparent_60%)]",
    line: "bg-gradient-to-br from-blue-800 to-blue-800",
    border: "border-cyan-300",
    hoverBorder: "hover:border-cyan-300",
    softBorder: "border-cyan-300/35",
    panel: "border-cyan-300/35 bg-blue-950/10",
    cover: "from-blue-800 to-cyan-700 shadow-[0_28px_70px_rgba(37,99,235,0.28)]",
    coverIcon: "text-cyan-100/75",
    cta: "border-cyan-300 hover:bg-blue-800",
    performanceBorder: "xl:border-cyan-300/35",
  },
  teal: {
    accent: "text-cyan-300",
    activeTab:
      "border-blue-500/60 bg-blue-800 text-white shadow-[0_18px_42px_rgba(37,99,235,0.26)]",
    glow:
      "bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.13),transparent_58%)]",
    sideGlow:
      "bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.11),transparent_60%)]",
    line: "bg-gradient-to-br from-blue-800 to-blue-800",
    border: "border-cyan-300",
    hoverBorder: "hover:border-cyan-300",
    softBorder: "border-cyan-300/35",
    panel: "border-cyan-300/35 bg-blue-950/10",
    cover: "from-blue-800 to-cyan-700 shadow-[0_28px_70px_rgba(37,99,235,0.28)]",
    coverIcon: "text-cyan-100/75",
    cta: "border-cyan-300 hover:bg-blue-800",
    performanceBorder: "xl:border-cyan-300/35",
  },
};

const projects = [
  {
    name: "MDX Food App",
    shortName: "MDX Food",
    logo: mdxLogo,
    theme: "blue",
    eyebrow: "Food ordering app",
    headline: "Results - What we will do for",
    highlight: "your business?",
    body: [
      "Whether for iOS or Android, a product's success hinges on its performance. We elevate the development process with agile delivery, smooth interactions, and strong product engineering.",
      "Our focus includes minimizing response lag, optimizing memory allocation, reducing redundancy, and protecting user data across every mobile experience.",
    ],
    screens: [
      { type: "cover", title: "MDXFOOD.COM" },
      { type: "image", image: mobile2, title: "MDX Food home screen" },
      { type: "image", image: mobile3, title: "MDX Food restaurant detail" },
      { type: "image", image: mobile4, title: "MDX Food offers screen" },
      { type: "image", image: mobile5, title: "MDX Food discount screen" },
      { type: "image", image: mobile6, title: "MDX Food customization screen" },
    ],
  },
  {
    name: "Fizzbell",
    shortName: "Fizzbell",
    logo: fizzbellLogo,
    theme: "blue",
    eyebrow: "Finance tracking app",
    headline: "Smart finance apps built for",
    highlight: "daily clarity.",
    body: [
      "Fizzbell brings expenses, reminders, and recurring payments into a clean mobile flow that helps users stay in control of monthly finances.",
      "We shape finance products around confidence, quick access, and reliable dashboards so every screen feels simple, useful, and fast.",
    ],
    screens: [
      { type: "cover", title: "FIZZBELL" },
      { type: "image", image: fizzbellHome, title: "Fizzbell dashboard screen" },
      { type: "image", image: fizzbellSplash, title: "Fizzbell splash screen" },
      { type: "image", image: fizzbellScreenOne, title: "Fizzbell expense overview screen" },
      { type: "image", image: fizzbellScreenTwo, title: "Fizzbell payment reminder screen" },
      { type: "image", image: fizzbellScreenThree, title: "Fizzbell transaction screen" },
      { type: "image", image: fizzbellScreenFour, title: "Fizzbell finance detail screen" },
    ],
  },
  {
    name: "DoraDrink",
    shortName: "DoraDrink",
    logo: doradrinkLogo,
    theme: "blue",
    eyebrow: "Hydration habit app",
    headline: "Wellness apps designed to",
    highlight: "keep users engaged.",
    body: [
      "DoraDrink turns hydration into a motivating mobile experience with progress tracking, slot-based goals, rewards, and friendly reminders.",
      "We build wellness products with polished states, responsive interactions, and memorable visuals that help users return every day.",
    ],
    screens: [
      { type: "cover", title: "DORADRINK" },
      { type: "image", image: doradrinkHome, title: "DoraDrink home screen" },
      { type: "image", image: doradrinkSplash, title: "DoraDrink splash screen" },
      { type: "image", image: doradrinkScreenOne, title: "DoraDrink hydration goal screen" },
      { type: "image", image: doradrinkScreenTwo, title: "DoraDrink rewards screen" },
      { type: "image", image: doradrinkScreenThree, title: "DoraDrink progress screen" },
      { type: "image", image: doradrinkScreenFour, title: "DoraDrink profile screen" },
    ],
  },
  {
    name: "Struwaa",
    shortName: "Struwaa",
    logo: struwaaLogo,
    theme: "blue",
    eyebrow: "Service marketplace app",
    headline: "Marketplace apps that make",
    highlight: "work simpler.",
    body: [
      "Struwaa connects customers with services through clean discovery, category browsing, and an easy request flow for remote or local needs.",
      "We design marketplace products with trust, fast navigation, and clear actions so users can move from intent to booking without friction.",
    ],
    screens: [
      { type: "cover", title: "STRUWAA" },
      { type: "image", image: struwaaHome, title: "Struwaa home screen" },
      { type: "image", image: struwaaSplash, title: "Struwaa splash screen" },
      { type: "image", image: struwaaScreenOne, title: "Struwaa service discovery screen" },
      { type: "image", image: struwaaScreenTwo, title: "Struwaa category screen" },
      { type: "image", image: struwaaScreenThree, title: "Struwaa provider screen" },
      { type: "image", image: struwaaScreenFour, title: "Struwaa booking screen" },
      { type: "image", image: struwaaScreenFive, title: "Struwaa account screen" },
    ],
  },
];

const performance = [
  {
    title: "High Performance",
    text: "Optimized for speed and reliability",
    icon: SignalIcon,
  },
  {
    title: "Secure & Robust",
    text: "Strong encryption and data protection",
    icon: ShieldCheckIcon,
  },
  {
    title: "Low Latency",
    text: "Fast response for seamless experience",
    icon: ClockIcon,
  },
  {
    title: "Agile & Innovative",
    text: "Built with the latest technologies",
    icon: CodeBracketIcon,
  },
];

const Results_mobile = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];
  const theme = themes[activeProject.theme];

  return (
    <section className="relative overflow-hidden bg-[#020304] px-5 py-9 font-sans text-white sm:px-8 lg:px-10 lg:py-12">
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-44 ${theme.glow}`}
      />
      <div
        className={`pointer-events-none absolute inset-y-0 right-0 w-1/2 ${theme.sideGlow}`}
      />

      <div className="relative mx-auto max-w-[1500px]">
        <div className="text-center">
          <p
            className={`text-xs font-extrabold uppercase tracking-[0.32em] ${theme.accent}`}
          >
            Our Featured Projects
          </p>

          <div className="mx-auto mt-4 grid max-w-[880px] overflow-hidden rounded-2xl border border-white/20 bg-black/45 shadow-[0_18px_70px_rgba(0,0,0,0.38)] backdrop-blur md:grid-cols-4">
            {projects.map((project, index) => (
              <button
                key={project.name}
                onClick={() => setActiveIndex(index)}
                className={`flex h-14 items-center justify-center gap-3 border border-transparent px-3 py-2 text-xs font-extrabold tracking-normal transition sm:h-16 ${
                  index === activeIndex
                    ? theme.activeTab
                    : "text-white/85 hover:bg-white/5 hover:text-white"
                } ${index > 0 ? "md:border-l md:border-white/15" : ""}`}
                type="button"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white p-1.5">
                  <img
                    src={project.logo}
                    alt={`${project.name} logo`}
                    className="h-full w-full object-contain"
                  />
                </span>
                <span>{project.name}</span>
              </button>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-3">
            {projects.map((project, index) => (
              <button
                key={project.name}
                type="button"
                aria-label={`Show ${project.name}`}
                onClick={() => setActiveIndex(index)}
                className={`h-1 rounded-full transition-all ${
                  index === activeIndex
                    ? `w-7 ${theme.line}`
                    : "w-5 bg-white/25 hover:bg-white/45"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-7 grid items-center gap-8 lg:grid-cols-[minmax(340px,0.82fr)_minmax(0,1.18fr)] xl:gap-10">
          <div className="relative z-10">
            <div
              className={`inline-flex items-center gap-2 rounded-full border border-white/20 bg-black px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] ${theme.accent}`}
            >
              <ArrowTrendingUpIcon className="h-4 w-4" />
              {activeProject.eyebrow}
            </div>

            <h2 className="mt-5 max-w-[560px] text-3xl font-extrabold leading-tight tracking-normal text-white sm:text-4xl lg:text-[44px]">
              {activeProject.headline}{" "}
              <span className={theme.accent}>{activeProject.highlight}</span>
            </h2>

            <div className={`mt-4 h-0.5 w-20 ${theme.line}`} />

            <div className="mt-5 max-w-[540px] space-y-4 text-sm font-medium leading-6 tracking-normal text-white/78 sm:text-[15px]">
              {activeProject.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <a
              href="/contact"
              className={`mt-6 inline-flex h-12 min-w-[260px] items-center justify-center gap-5 border bg-black px-6 text-xs font-extrabold uppercase tracking-normal text-white transition ${theme.cta}`}
            >
              Build {activeProject.shortName}
              <ChevronRightIcon className={`h-4 w-4 ${theme.accent}`} />
            </a>
          </div>

          <div className="relative min-h-[410px] min-w-0 overflow-hidden lg:min-h-[450px]">
            <div
              className={`absolute inset-x-0 top-1/2 hidden h-[270px] -translate-y-1/2 rounded-[44px] border ${theme.panel} lg:block`}
            />

            <button
              type="button"
              className={`results-mobile-prev absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black shadow-[0_16px_44px_rgba(0,0,0,0.45)] transition ${theme.accent} ${theme.hoverBorder} sm:h-12 sm:w-12`}
              aria-label="Previous mobile screen"
            >
              <ChevronLeftIcon className="h-6 w-6 sm:h-7 sm:w-7" />
            </button>

            <div className="relative z-10 h-full px-10 sm:px-14">
              <Swiper
                key={activeProject.name}
                modules={[Navigation]}
                slidesPerView={1}
                loop
                spaceBetween={18}
                navigation={{
                  prevEl: ".results-mobile-prev",
                  nextEl: ".results-mobile-next",
                }}
                breakpoints={{
                  640: { slidesPerView: 2, spaceBetween: 22 },
                  1024: { slidesPerView: 2, spaceBetween: 24 },
                  1280: { slidesPerView: 3, spaceBetween: 26 },
                }}
                className="!overflow-hidden py-3 [&_.swiper-wrapper]:items-center"
              >
                {activeProject.screens.map((screen) => (
                  <SwiperSlide
                    key={screen.title}
                    className="flex justify-center"
                  >
                    {screen.type === "cover" ? (
                      <div
                        className={`flex h-[360px] w-full max-w-[190px] flex-col items-center justify-center rounded-[28px] bg-gradient-to-br p-5 text-center ${theme.cover} sm:h-[410px] sm:max-w-[205px]`}
                      >
                        <WalletIcon className={`h-16 w-16 ${theme.coverIcon}`} />
                        <p className="mt-6 text-xl font-extrabold uppercase tracking-normal text-white">
                          {screen.title}
                        </p>
                      </div>
                    ) : (
                      <div className="h-[360px] w-full max-w-[190px] overflow-hidden rounded-[28px] bg-white shadow-[0_28px_80px_rgba(0,0,0,0.48)] sm:h-[410px] sm:max-w-[205px]">
                        <img
                          src={screen.image}
                          alt={screen.title}
                          className="h-full w-full object-contain"
                        />
                      </div>
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <button
              type="button"
              className={`results-mobile-next absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black shadow-[0_16px_44px_rgba(0,0,0,0.45)] transition ${theme.accent} ${theme.hoverBorder} sm:h-12 sm:w-12`}
              aria-label="Next mobile screen"
            >
              <ChevronRightIcon className="h-6 w-6 sm:h-7 sm:w-7" />
            </button>
          </div>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {performance.map(({ title, text, icon: Icon }, index) => (
            <article
              key={title}
              className={`flex items-center gap-4 ${
                index > 0 ? `xl:border-l ${theme.performanceBorder} xl:pl-8` : ""
              }`}
            >
              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] ${theme.accent} sm:h-14 sm:w-14`}
              >
                <Icon className="h-7 w-7" />
              </span>
              <div>
                <h3 className="text-base font-extrabold tracking-normal text-white">
                  {title}
                </h3>
                <p className="mt-1 text-sm font-medium leading-5 tracking-normal text-white/72">
                  {text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results_mobile;
