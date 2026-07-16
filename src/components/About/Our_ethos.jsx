import React from "react";
import {
  ArrowTrendingUpIcon,
  ChatBubbleLeftRightIcon,
  HeartIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const values = [
  {
    title: "Clients First",
    text: "Clients are friends. Each of their problems are ours.",
    icon: HeartIcon,
    color: "blue",
  },
  {
    title: "Thoughtful Solutions",
    text: "We don’t assume. We arrive at solutions through careful inferences.",
    icon: SparklesIcon,
    color: "blue",
  },
  {
    title: "Ownership & Accountability",
    text: "Ownership and accountability are our everyday practice.",
    icon: ShieldCheckIcon,
    color: "blue",
  },
  {
    title: "One Team",
    text: "100+ digital talents care about your project.",
    icon: UserGroupIcon,
    color: "blue",
  },
  {
    title: "Design Thinking",
    text: "Expect design thinking, creativity and problem solving.",
    icon: LightBulbIcon,
    color: "blue",
  },
  {
    title: "Innovation Driven",
    text: "We know how to play digital for brand value.",
    icon: RocketLaunchIcon,
    color: "blue",
  },
  {
    title: "Clear & Open Communication",
    text: "We're a consumer engagement one-stop shop.",
    icon: ChatBubbleLeftRightIcon,
    color: "blue",
  },
  {
    title: "Impact Focused",
    text: "We've got an eye for functional design and impactful content.",
    icon: ArrowTrendingUpIcon,
    color: "blue",
  },
];

const theme = {
  blue: { text: "text-blue-800", bg: "bg-blue-50", line: "bg-gradient-to-br from-blue-800 to-blue-800" },
};

const Our_ethos = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7faff] px-5 py-16 font-sans sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute left-0 top-28 hidden h-32 w-32 opacity-70 lg:block">
        <div className="h-full w-full bg-[radial-gradient(circle,_#dbe5ff_2px,_transparent_2px)] [background-size:16px_16px]" />
      </div>
      <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-12 right-8 hidden h-32 w-32 opacity-70 lg:block">
        <div className="h-full w-full bg-[radial-gradient(circle,_#dbe5ff_2px,_transparent_2px)] [background-size:16px_16px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.32em] text-blue-800">
            Our Ethos
          </p>
          <div className="mt-5 flex items-center justify-center gap-2">
            <span className="h-1.5 w-16 rounded-full bg-gradient-to-br from-blue-800 to-blue-800" />
            <span className="h-1.5 w-2 rounded-full bg-gradient-to-br from-blue-800 to-blue-800" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-normal text-[#07122f] sm:text-4xl lg:text-5xl">
            Our values drive <span className="text-blue-800">everything</span> we do
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-medium leading-8 tracking-normal text-slate-600">
            These principles shape the way we think, build, collaborate, and
            deliver impact for our clients.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {values.map(({ title, text, icon: Icon, color }, index) => {
            const colors = theme[color];

            return (
              <article
                key={title}
                className="relative min-h-[auto] rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.065)] sm:min-h-[280px] sm:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-full ${colors.bg} ${colors.text}`}>
                    <Icon className="h-11 w-11" />
                  </span>
                  <span className={`text-2xl font-extrabold tracking-normal ${colors.text}`}>
                    {String(index + 1).padStart(2, "0")}
                    <span className={`mt-2 block h-1 w-8 rounded-full ${colors.line}`} />
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-extrabold tracking-normal text-[#07122f]">
                  {title}
                </h3>
                <p className="mt-4 text-base font-medium leading-8 tracking-normal text-slate-600">
                  {text}
                </p>
                <span className={`absolute bottom-7 left-7 h-1 w-9 rounded-full ${colors.line}`} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Our_ethos;
