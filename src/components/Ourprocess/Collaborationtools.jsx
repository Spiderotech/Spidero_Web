import React, { useState } from "react";
import web1 from "../../assets/Collabtools/asana1@2x-144x23 (1).webp";
import web2 from "../../assets/Collabtools/axure@2x-144x23 (1).webp";
import web3 from "../../assets/Collabtools/github@2x-144x23 (1).webp";
import web4 from "../../assets/Collabtools/invision@2x-144x23.webp";
import web5 from "../../assets/Collabtools/jira1@2x (1).webp";
import web6 from "../../assets/Collabtools/office365@2x-144x23.webp";
import web7 from "../../assets/Collabtools/skype1@2x-144x23.webp";
import web8 from "../../assets/Collabtools/slack1@2x-144x23 (1).webp";
import web9 from "../../assets/Collabtools/zeplin@2x-144x23.webp";
import web10 from "../../assets/Collabtools/zoom1@2x-144x23 (1).webp";
import {
  ClockIcon,
  PlusIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const tools = [
  { name: "Asana", logo: web1 },
  { name: "Axure RP", logo: web2 },
  { name: "GitHub", logo: web3 },
  { name: "InVision", logo: web4 },
  { name: "Jira", logo: web5 },
  { name: "Office 365", logo: web6 },
  { name: "Skype", logo: web7 },
  { name: "Slack", logo: web8 },
  { name: "Zeplin", logo: web9 },
  { name: "Zoom", logo: web10 },
];

const engagementModels = [
  {
    question: "Time and material based",
    short:
      "Pay for the actual time spent and resources used. Ideal for projects with evolving requirements.",
    answer:
      "When the scope of your idea is not clear, we tend to go with the T&M based model to provide you with more efficiency as we continue with your project.",
    icon: ClockIcon,
  },
  {
    question: "Dedicated Teams",
    short:
      "Hire a dedicated team that works exclusively on your project. Perfect for long-term commitments.",
    answer:
      "To give you control over your project, the dedicated teams will be there at your disposal. We aim to give you a sense of comfort as we work on your idea and our dedicated teams make sure that you do feel that sense of control",
    icon: UserGroupIcon,
  },
];

const SectionTitle = ({ eyebrow, title, description }) => (
  <div>
    <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-blue-800">
      {eyebrow}
    </p>
    <div className="mt-4 flex items-center gap-2">
      <span className="h-1.5 w-12 rounded-full bg-gradient-to-br from-blue-800 to-blue-800" />
      <span className="h-1.5 w-2 rounded-full bg-gradient-to-br from-blue-800 to-blue-800" />
    </div>
    <h2 className="mt-7 text-3xl font-extrabold leading-tight tracking-normal text-[#07122f] sm:text-4xl lg:text-5xl">
      {title}
    </h2>
    {description && (
      <p className="mt-7 max-w-xl text-lg font-medium leading-9 tracking-normal text-slate-600">
        {description}
      </p>
    )}
  </div>
);

const Collaborationtools = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <section className="relative overflow-hidden bg-white px-5 py-16 font-sans sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <SectionTitle
            eyebrow="Collaboration Tools"
            title="Collaboration Tools"
            description="We make sure to use the tools that are top of the market to bring your ideas into reality. Our careful selection of tools makes sure that your ideas are executed with the highest level of efficiency."
          />

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="flex h-20 items-center justify-center rounded-lg border border-slate-200 bg-white px-6 shadow-[0_12px_35px_rgba(15,23,42,0.05)] sm:h-24 sm:px-8"
              >
                <img src={tool.logo} alt={tool.name} className="max-h-12 max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-16 overflow-hidden rounded-[1.8rem] border border-slate-200/80 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-9 lg:p-12">
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full border-[54px] border-blue-50" />
          <div className="pointer-events-none absolute left-8 top-10 hidden grid-cols-2 gap-4 opacity-60 md:grid">
            {Array.from({ length: 12 }).map((_, index) => (
              <span key={index} className="h-1.5 w-1.5 rounded-full bg-blue-200" />
            ))}
          </div>

          <div className="relative grid gap-9 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <SectionTitle
              eyebrow="Engagement Models"
              title="Engagement Models"
              description="We aim to deliver excellence at every step of projects and finish our job with the top level of efficiency and dedication."
            />

            <div className="rounded-xl border border-blue-100 bg-white p-4">
              {engagementModels.map((item, index) => {
                const Icon = item.icon;
                const isExpanded = expandedIndex === index;

                return (
                  <div
                    key={item.question}
                    className={`${index > 0 ? "border-t border-slate-200" : ""} py-5 first:pt-2 last:pb-2`}
                  >
                    <button
                      type="button"
                      onClick={() => setExpandedIndex(isExpanded ? null : index)}
                      className="flex w-full items-center gap-6 text-left"
                    >
                      <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-800">
                        <Icon className="h-10 w-10" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-xl font-extrabold tracking-normal text-[#07122f]">
                          {item.question}
                        </span>
                        <span className="mt-2 block text-base font-medium leading-7 tracking-normal text-slate-600">
                          {item.short}
                        </span>
                        {isExpanded && (
                          <span className="mt-4 block text-sm font-medium leading-7 tracking-normal text-slate-600">
                            {item.answer}
                          </span>
                        )}
                      </span>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-blue-800 transition">
                        <PlusIcon
                          className={`h-8 w-8 transition duration-300 ${isExpanded ? "rotate-45" : ""}`}
                        />
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborationtools;
