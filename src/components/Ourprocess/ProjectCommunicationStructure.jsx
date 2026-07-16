import React from "react";
import {
  CalendarDaysIcon,
  CheckCircleIcon,
  ClockIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

const cards = [
  {
    title: "Daily Scrum Standup",
    icon: CalendarDaysIcon,
    color: "blue",
    frequency: "Mon - Fri",
    duration: "30 minutes",
    items: [
      "Check previous day’s work, current day’s plans, any queries, hurdles etc.",
      "Project Manager with the entire Project Team",
    ],
  },
  {
    title: "Weekly Review",
    icon: CalendarDaysIcon,
    color: "blue",
    frequency: "Weekly",
    duration: "45-60 minutes",
    items: [
      "Improvements to process (No finger pointing!)",
      "Client along with the Project Manager & Team Lead",
    ],
  },
  {
    title: "Sprint Delivery",
    icon: RocketLaunchIcon,
    color: "blue",
    frequency: "2-3 weeks",
    duration: "1-2 hours",
    items: [
      "Demonstration for the client.",
      "Client along with the Project Manager & Team Lead.",
    ],
  },
  {
    title: "Code Reviews",
    icon: CodeBracketIcon,
    color: "blue",
    frequency: "Bi-Weekly",
    duration: "3-4 hours",
    items: ["Code Review", "Tech Lead"],
  },
];

const colorMap = {
  blue: {
    border: "border-t-blue-800",
    text: "text-blue-800",
    bg: "bg-blue-50",
    ring: "shadow-blue-100",
  },
};

const ProjectCommunicationStructure = () => {
  return (
    <section className="bg-white px-5 py-16 font-sans sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-blue-800">
            HOW WE COMMUNICATE
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="h-1.5 w-14 rounded-full bg-gradient-to-br from-blue-800 to-blue-800" />
            <span className="h-1.5 w-8 rounded-full bg-blue-100" />
            <span className="h-1.5 w-2 rounded-full bg-gradient-to-br from-blue-800 to-blue-800" />
          </div>
          <h2 className="mt-7 text-3xl font-extrabold leading-tight tracking-normal text-[#07122f] sm:text-4xl lg:text-5xl">
            Project Communication Structure
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg font-medium leading-8 tracking-normal text-slate-600">
            We follow a transparent and consistent communication cadence to keep
            everyone aligned, informed, and moving forward.
          </p>
        </div>

        <div className="mt-20 grid gap-12 md:grid-cols-2 xl:grid-cols-4">
          {cards.map(({ title, icon: Icon, color, frequency, duration, items }) => {
            const theme = colorMap[color];

            return (
              <article
                key={title}
                className={`relative rounded-2xl border border-slate-200/80 ${theme.border} border-t-4 bg-white px-7 pb-8 pt-24 shadow-[0_22px_70px_rgba(15,23,42,0.08)]`}
              >
                <div
                  className={`absolute left-1/2 top-0 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)] ${theme.ring}`}
                >
                  <span className={`flex h-20 w-20 items-center justify-center rounded-full ${theme.bg} ${theme.text}`}>
                    <Icon className="h-11 w-11" />
                  </span>
                </div>

                <h3 className="mx-auto max-w-[220px] text-center text-2xl font-extrabold leading-tight tracking-normal text-[#07122f]">
                  {title}
                </h3>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-4 text-base font-medium tracking-normal text-slate-600">
                    <CalendarDaysIcon className={`h-6 w-6 shrink-0 ${theme.text}`} />
                    <span>{frequency}</span>
                  </div>
                  <div className="flex items-center gap-4 text-base font-medium tracking-normal text-slate-600">
                    <ClockIcon className={`h-6 w-6 shrink-0 ${theme.text}`} />
                    <span>{duration}</span>
                  </div>
                </div>

                <div className="my-7 h-px bg-slate-200" />

                <div className="space-y-5">
                  {items.map((item, index) => (
                    <div key={item}>
                      <div className="flex gap-4 text-sm font-medium leading-7 tracking-normal text-slate-600">
                        <CheckCircleIcon className={`mt-1 h-5 w-5 shrink-0 ${theme.text}`} />
                        <span>{item}</span>
                      </div>
                      {index < items.length - 1 && <div className="mt-5 h-px bg-slate-200" />}
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectCommunicationStructure;
