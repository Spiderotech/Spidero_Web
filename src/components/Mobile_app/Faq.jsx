import React, { useState } from "react";
import {
  Battery100Icon,
  ChartBarIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
  NoSymbolIcon,
  RectangleGroupIcon,
  ShieldCheckIcon,
  SignalSlashIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const principles = [
  {
    title: "Optimized Memory Management",
    summary:
      "We write clean, efficient code and use advanced profiling techniques to minimize memory usage and prevent crashes.",
    icon: CpuChipIcon,
    accent: "blue",
    benefits: [
      {
        title: "Less Memory Usage",
        text: "Optimized data handling keeps apps lightweight.",
        icon: ChartBarIcon,
      },
      {
        title: "Better Performance",
        text: "Smoother experience with faster load and response.",
        icon: CpuChipIcon,
      },
      {
        title: "Fewer Crashes",
        text: "Memory leak prevention ensures app stability.",
        icon: DevicePhoneMobileIcon,
      },
      {
        title: "Longer Battery Life",
        text: "Efficient resources help save device battery.",
        icon: Battery100Icon,
      },
    ],
  },
  {
    title: "Native Keyboard Experience",
    summary:
      "Input fields use the right native keyboard type so users can enter numbers, email, phone, and text without friction.",
    icon: RectangleGroupIcon,
    accent: "blue",
    benefits: [
      {
        title: "Faster Input",
        text: "Users get the right controls for every field.",
        icon: RectangleGroupIcon,
      },
      {
        title: "Fewer Errors",
        text: "Correct keyboard types reduce input mistakes.",
        icon: DevicePhoneMobileIcon,
      },
      {
        title: "Better Forms",
        text: "Forms feel natural on iOS and Android.",
        icon: SparklesIcon,
      },
      {
        title: "Higher Completion",
        text: "Less friction improves checkout and signup flows.",
        icon: ChartBarIcon,
      },
    ],
  },
  {
    title: "Secure Data & Encryption",
    summary:
      "We protect sensitive user data with secure storage, encrypted transfer, access control, and careful backend integration.",
    icon: ShieldCheckIcon,
    accent: "blue",
    benefits: [
      {
        title: "Encrypted Transfer",
        text: "Data moves through secure communication channels.",
        icon: ShieldCheckIcon,
      },
      {
        title: "Safe Storage",
        text: "Sensitive information is handled with care.",
        icon: DevicePhoneMobileIcon,
      },
      {
        title: "Access Control",
        text: "Permissions are scoped to user roles and needs.",
        icon: NoSymbolIcon,
      },
      {
        title: "Trust Ready",
        text: "Secure architecture supports long-term confidence.",
        icon: SparklesIcon,
      },
    ],
  },
  {
    title: "Offline First Approach",
    summary:
      "Critical app flows are planned to handle poor connectivity, cached data, retries, and graceful recovery.",
    icon: SignalSlashIcon,
    accent: "blue",
    benefits: [
      {
        title: "Works Offline",
        text: "Core actions remain useful when network drops.",
        icon: SignalSlashIcon,
      },
      {
        title: "Smart Caching",
        text: "Important content loads quickly from local data.",
        icon: CpuChipIcon,
      },
      {
        title: "Graceful Recovery",
        text: "Retries and sync flows prevent lost progress.",
        icon: DevicePhoneMobileIcon,
      },
      {
        title: "Reliable UX",
        text: "Users stay confident in unstable conditions.",
        icon: SparklesIcon,
      },
    ],
  },
  {
    title: "Performance & Speed Optimization",
    summary:
      "We optimize rendering, API calls, assets, and app architecture so mobile products feel fast from first launch.",
    icon: CpuChipIcon,
    accent: "blue",
    benefits: [
      {
        title: "Fast Startup",
        text: "Lean bundles help the app open quickly.",
        icon: CpuChipIcon,
      },
      {
        title: "Smooth Screens",
        text: "Rendering is tuned for fluid interactions.",
        icon: DevicePhoneMobileIcon,
      },
      {
        title: "Lean APIs",
        text: "Requests are shaped for fast, reliable responses.",
        icon: CpuChipIcon,
      },
      {
        title: "Better Retention",
        text: "Speed helps users stay engaged for longer.",
        icon: ChartBarIcon,
      },
    ],
  },
];

const accentStyles = {
  blue: {
    number: "text-blue-800 bg-blue-50",
    icon: "text-blue-800 bg-blue-50",
    border: "border-blue-800",
    shadow: "shadow-[0_24px_80px_rgba(37,99,235,0.16)]",
  },
};

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-white px-5 py-10 font-sans sm:px-8 lg:px-10 lg:py-12">
      <div className="pointer-events-none absolute left-16 top-24 hidden h-28 w-28 bg-[radial-gradient(circle,#c9d4ee_2px,transparent_2px)] [background-size:16px_16px] opacity-70 lg:block" />
      <div className="pointer-events-none absolute right-16 top-24 hidden h-28 w-28 bg-[radial-gradient(circle,#c9d4ee_2px,transparent_2px)] [background-size:16px_16px] opacity-70 lg:block" />
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-100/60 blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-72 w-72 rounded-full bg-blue-100/55 blur-3xl" />

      <div className="relative mx-auto max-w-[1080px]">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.14em] text-blue-800">
            <SparklesIcon className="h-4 w-4" />
            Our Engineering Principles
          </div>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-normal text-[#07122f] sm:text-4xl lg:text-[46px]">
            Best practices{" "}
            <span className="text-blue-800">that we follow</span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm font-medium leading-6 tracking-normal text-slate-600 sm:text-base">
            Proven engineering standards and methodologies that help us build
            high-performing, secure and scalable mobile applications.
          </p>
        </div>

        <div className="mt-7 space-y-3">
          {principles.map(({ title, summary, icon: Icon, accent, benefits }, index) => {
            const isExpanded = expandedIndex === index;
            const theme = accentStyles[accent];
            const itemNumber = String(index + 1).padStart(2, "0");

            return (
              <article
                key={title}
                className={`overflow-hidden rounded-xl bg-white transition ${
                  isExpanded
                    ? `border ${theme.border} ${theme.shadow}`
                    : "border border-slate-200 shadow-[0_12px_36px_rgba(15,23,42,0.08)]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="flex w-full items-center gap-3 p-4 text-left sm:gap-5 sm:p-5"
                  aria-expanded={isExpanded}
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-xl font-extrabold sm:h-12 sm:w-12 ${theme.number}`}
                  >
                    {itemNumber}
                  </span>
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full sm:h-12 sm:w-12 ${theme.icon}`}
                  >
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-base font-extrabold leading-tight tracking-normal text-[#07122f] sm:text-lg">
                      {title}
                    </span>
                    {isExpanded && (
                      <span className="mt-1.5 block max-w-2xl text-sm font-medium leading-5 tracking-normal text-slate-600">
                        {summary}
                      </span>
                    )}
                  </span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-800">
                    {isExpanded ? (
                      <ChevronUpIcon className="h-5 w-5" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5" />
                    )}
                  </span>
                </button>

                {isExpanded && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                    <div className="grid overflow-hidden rounded-xl border border-slate-200 bg-white/80 sm:grid-cols-2 lg:grid-cols-4">
                      {benefits.map(({ title: benefitTitle, text, icon: BenefitIcon }, benefitIndex) => (
                        <div
                          key={benefitTitle}
                          className={`p-4 ${
                            benefitIndex > 0 ? "lg:border-l lg:border-slate-200" : ""
                          } ${benefitIndex % 2 === 1 ? "sm:border-l sm:border-slate-200" : ""}`}
                        >
                          <span
                            className={`flex h-10 w-10 items-center justify-center rounded-full ${theme.icon}`}
                          >
                            <BenefitIcon className="h-6 w-6" />
                          </span>
                          <h3 className="mt-3 text-sm font-extrabold tracking-normal text-[#07122f]">
                            {benefitTitle}
                          </h3>
                          <p className="mt-1.5 text-xs font-medium leading-5 tracking-normal text-slate-600">
                            {text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
