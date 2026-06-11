import React, { useEffect, useState } from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CodeBracketSquareIcon,
  DocumentMagnifyingGlassIcon,
  MapIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import Discovery from "../../assets/custom/development.jpg";
import Journey from "../../assets/custom/design.jpg";
import System from "../../assets/custom/quality.jpg";
import Quality from "../../assets/custom/planing.jpg";
import Ultimate from "../../assets/custom/discovery.jpg";

const content = [
  {
    title: "Discovery & Planning",
    shortDescription: "Understanding your goals and requirements",
    description:
      "In the initial software product development stage, the discovery and planning phase takes precedence. This pivotal step aims to comprehend the end-user persona, delineate project scope and goals, and assess associated risks. Our dedicated discovery team conducts thorough planning, research, data collection, and analysis to evaluate the feasibility, practicality, and usability of the product concept.",
    image: Discovery,
    Icon: DocumentMagnifyingGlassIcon,
    accent: "blue",
  },
  {
    title: "User Journey Mapping to System Design",
    shortDescription: "Designing intuitive and impactful solutions",
    description:
      "Insufficient design depth can adversely affect the delivery and functionality of your software solution, aligning with stakeholders' and users' needs. Building on the insights from the prior phase, our team focuses on software design, encompassing architecture, database tables, and user interface mock-ups. The ultimate design specification outlines the technical implementation of the project, ensuring a robust and tailored solution.",
    image: Journey,
    Icon: MapIcon,
    accent: "cyan",
  },
  {
    title: "System Engineering & Development",
    shortDescription: "Building robust, scalable and secure systems",
    description:
      "Embarking on the functional development of the new software system, this phase marks the first real-world assessment of the evolving system. It provides a chance to detect potential bottlenecks in the development or planning process, allowing our team to troubleshoot and innovate solutions for any errors found. By addressing issues and devising innovative approaches, we pave the way for their implementation in the final system.",
    image: System,
    Icon: CodeBracketSquareIcon,
    accent: "blue",
  },
  {
    title: "Quality Analysis & Testing",
    shortDescription: "Ensuring performance, security & reliability",
    description:
      "In the quality assurance & testing stage, we transition the system to the test environment, conducting comprehensive testing, including integration and system testing. The final phase involves user acceptance testing by end users to ensure the system meets their expectations. Potential bugs may surface, requiring additional work in analysis, design, or coding. Upon approval from all stakeholders, the implementation and deployment process commences for a seamless project conclusion.",
    image: Quality,
    Icon: ShieldCheckIcon,
    accent: "violet",
  },
  {
    title: "Ultimate Deployment",
    shortDescription: "Seamless delivery and continuous support",
    description:
      "Deployment complexity varies with the project scope. Our experienced software developers utilize appropriate deployment tools, integration servers, and a robust rollback strategy. We provide essential training for end-users, operations, and IT on-call staff. Deployment strategies range from gradual implementation across branches to a full-scale rollout, ensuring a smooth process.",
    image: Ultimate,
    Icon: RocketLaunchIcon,
    accent: "orange",
  },
];

const accentClasses = {
  blue: {
    card: "border-[#2b74ff]",
    icon: "bg-[#edf4ff] text-[#1d6cff]",
    number: "bg-[#1d6cff] text-white",
    dot: "border-[#1d6cff] bg-[#1d6cff]",
  },
  cyan: {
    card: "border-[#e8edf7]",
    icon: "bg-[#e9fbff] text-[#17b8d6]",
    number: "bg-[#dff8ff] text-[#18a9c6]",
    dot: "border-[#9fb0d1] bg-white",
  },
  violet: {
    card: "border-[#e8edf7]",
    icon: "bg-[#f1ebff] text-[#754cff]",
    number: "bg-[#eee8ff] text-[#754cff]",
    dot: "border-[#9fb0d1] bg-white",
  },
  orange: {
    card: "border-[#e8edf7]",
    icon: "bg-[#fff1e5] text-[#ff841f]",
    number: "bg-[#fff1e5] text-[#ff841f]",
    dot: "border-[#9fb0d1] bg-white",
  },
};

const HowWeApproach = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const activeStep = content[currentSlide];
  const ActiveIcon = activeStep.Icon;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % content.length);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % content.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + content.length) % content.length
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#f8fbff] px-6 py-8 font-sans text-[#071734] sm:px-8 lg:px-16">
      <div className="pointer-events-none absolute bottom-[-160px] right-[-100px] h-[360px] w-[360px] rounded-full border border-dotted border-[#bcd4ff]" />
      <div className="pointer-events-none absolute right-8 top-12 hidden grid-cols-6 gap-2 lg:grid">
        {Array.from({ length: 36 }).map((_, index) => (
          <span key={index} className="h-1 w-1 rounded-full bg-[#c7d8ff]" />
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1560px]">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.78fr] lg:items-start">
          <div>
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[#1d6cff]">
              Our Development Process
              <span className="h-px w-10 bg-[#9bbdff]" />
            </p>
            <h2 className="mt-2 max-w-[760px] text-[28px] font-bold leading-tight sm:text-[36px] lg:text-[42px]">
              How We Approach Custom Software Development
            </h2>
          </div>
          <p className="border-[#cad6eb] text-sm font-semibold leading-6 text-[#405078] sm:text-base lg:border-l lg:pl-6">
            Leveraging a deliberately designed software development process, we
            strictly adhere to industry-leading security practices. Our focus is
            on crafting customized software solutions for clients worldwide,
            ensuring unparalleled quality and security.
          </p>
        </div>

        <div className="mt-7 grid gap-7 lg:grid-cols-[390px_1fr]">
          <div className="relative lg:pl-8">
            <div className="absolute bottom-5 left-[8px] top-5 hidden border-l-2 border-dashed border-[#b7c6e4] lg:block" />
            <div className="space-y-2.5">
              {content.map((item, index) => {
                const Icon = item.Icon;
                const isActive = currentSlide === index;
                const colors = accentClasses[isActive ? "blue" : item.accent];

                return (
                  <button
                    type="button"
                    key={item.title}
                    onClick={() => setCurrentSlide(index)}
                    className={`relative flex w-full items-center gap-3 rounded-xl border bg-white p-3 text-left shadow-[0_10px_24px_rgba(14,32,64,0.05)] transition hover:-translate-y-0.5 ${
                      isActive
                        ? `${colors.card} shadow-[0_14px_30px_rgba(29,108,255,0.1)]`
                        : "border-[#e8edf7]"
                    }`}
                  >
                    <span
                      className={`absolute left-[-31px] top-1/2 hidden h-4 w-4 -translate-y-1/2 rounded-full border-2 lg:block ${
                        isActive ? accentClasses.blue.dot : colors.dot
                      }`}
                    />
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${colors.icon}`}
                    >
                      <Icon className="h-7 w-7" />
                    </span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${colors.number}`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <strong className="block text-base leading-snug text-[#071734]">
                        {item.title}
                      </strong>
                      <span className="mt-1 block text-xs font-medium leading-4 text-[#405078]">
                        {item.shortDescription}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <div className="relative overflow-hidden rounded-3xl shadow-[0_24px_60px_rgba(24,55,105,0.16)]">
              <img
                src={activeStep.image}
                alt={activeStep.title}
                className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[430px]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0b1a35]/20 via-transparent to-[#1d6cff]/10" />
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous process step"
                className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#071734] shadow-lg transition hover:bg-[#edf4ff]"
              >
                <ArrowLeftIcon className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next process step"
                className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#071734] shadow-lg transition hover:bg-[#edf4ff]"
              >
                <ArrowRightIcon className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-3 flex justify-center gap-3">
              {content.map((item, index) => (
                <button
                  type="button"
                  key={item.title}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to ${item.title}`}
                  className={`h-2 w-2 rounded-full transition ${
                    currentSlide === index ? "bg-[#1d6cff]" : "bg-[#c9d6eb]"
                  }`}
                />
              ))}
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-[52px_1fr]">
              <span className="flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-white text-[#1d6cff] shadow-[0_14px_30px_rgba(29,108,255,0.14)]">
                <ActiveIcon className="h-7 w-7" />
              </span>
              <div>
                <h3 className="text-[22px] font-bold leading-tight text-[#071734]">
                  {activeStep.title}
                </h3>
                <p className="mt-2 text-sm font-medium leading-6 text-[#405078]">
                  {activeStep.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeApproach;
