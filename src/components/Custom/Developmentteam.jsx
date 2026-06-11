import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  ChartBarSquareIcon,
  ClipboardDocumentCheckIcon,
  CodeBracketSquareIcon,
  Cog6ToothIcon,
  MinusIcon,
  PaintBrushIcon,
  PaperAirplaneIcon,
  PencilSquareIcon,
  PlusIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import discovery from "../../assets/custom/discovery.svg";
import planning from "../../assets/custom/planning.svg";
import design from "../../assets/custom/design.svg";
import development from "../../assets/custom/development.svg";
import testing from "../../assets/custom/testing.svg";
import maintainance from "../../assets/custom/maintainance.svg";

const processSteps = [
  {
    title: "Discovery Workshop",
    description: "This brings alignment in terms of end-user persona and business needs",
    icon: discovery,
  },
  {
    title: "Planning",
    description: "Emphasize on planning to get everything documented without assumption",
    icon: planning,
  },
  {
    title: "Design",
    description: "Next step is to design the UI based on the approved wireframes",
    icon: design,
  },
  {
    title: "Development",
    description: "Crafting an optimized clean code structure is our objective at this stage",
    icon: development,
  },
  {
    title: "Testing",
    description: "Once bug fixing is done, the final sprint demo is sent for the client's approval",
    icon: testing,
  },
  {
    title: "Maintenance",
    description: "We also upgrade the system regularly based on new software/version release",
    icon: maintainance,
  },
];

const faqData = [
  {
    question: "Project Managers",
    answer:
      "Our project manager micromanages everything from planning and developing project ideas, tracking progress to the evaluation of project performance.",
    toolsUsed: ["JIRA", "Trello", "Asana"],
    Icon: UserGroupIcon,
    theme: "blue",
  },
  {
    question: "Business Analyst",
    answer:
      "Our expert business analysts form detailed insights and suggest business changes through meticulous analysis and documentation.",
    toolsUsed: ["Lucidchart", "Microsoft Visio", "Balsamiq"],
    Icon: ChartBarSquareIcon,
    theme: "violet",
  },
  {
    question: "UI Designers",
    answer:
      "Our experienced UI designers work in tandem with web designers to create modern and interactive interfaces to ensure enhanced user experience and conversion rates.",
    toolsUsed: ["Figma", "Adobe XD", "Sketch"],
    Icon: PaintBrushIcon,
    theme: "cyan",
  },
  {
    question: "Frontend Developers",
    answer:
      "Our front-end developers are responsible for creating compelling visual elements on a page and building the website's client side. They ensure that the viewers have the best experience and interaction.",
    toolsUsed: ["React", "Vue.js", "Angular"],
    Icon: CodeBracketSquareIcon,
    theme: "orange",
  },
  {
    question: "Backend Developers",
    answer:
      "Our backend developers focus on managing data exchange between the users and server. They develop server-side logic, maintain a central database, and endure responsiveness to front-end requests.",
    toolsUsed: ["Node.js", "Express.js", "Django"],
    Icon: BriefcaseIcon,
    theme: "rose",
  },
  {
    question: "DevOps",
    answer:
      "Our DevOps engineers play a pivotal role in ensuring the seamless operation of the IT architecture. They rely on CI/CD practices to combine codes and maintain and manage applications.",
    toolsUsed: ["Docker", "Kubernetes", "Jenkins"],
    Icon: Cog6ToothIcon,
    theme: "violet",
  },
  {
    question: "Testing and QA Teams",
    answer:
      "To ensure optimum software solution performance and functionality, our sedulous QA engineers and testing teams employ various testing methodologies from manual to intricate automated testing.",
    toolsUsed: ["Selenium", "Jest", "Cypress"],
    Icon: ShieldCheckIcon,
    theme: "green",
  },
];

const themeClasses = {
  blue: "bg-[#eef4ff] text-[#1f63ff]",
  violet: "bg-[#f1ebff] text-[#754cff]",
  cyan: "bg-[#e8fbff] text-[#14b8d1]",
  orange: "bg-[#fff2e5] text-[#ff861f]",
  rose: "bg-[#ffeaf2] text-[#f04483]",
  green: "bg-[#e9fbef] text-[#22c55e]",
};

const Developmentteam = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleToggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="bg-white px-6 py-10 font-sans text-[#071734] lg:px-10">
      <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.72fr_1.15fr] lg:items-start">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#eef4ff] px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-[#1f63ff]">
            <UserGroupIcon className="h-4 w-4" />
            Build Your Team
          </span>
          <h2 className="mt-4 max-w-[560px] text-[30px] font-bold leading-tight sm:text-[38px] lg:text-[42px]">
            Build Your Custom Software{" "}
            <span className="text-[#2f60ff]">Development Team</span>
          </h2>
          <div className="mt-4 flex items-center gap-2">
            <span className="h-1 w-12 rounded-full bg-[#2f60ff]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#2f60ff]" />
          </div>

          <div className="relative mt-6 space-y-3">
            <div className="absolute bottom-6 left-5 top-6 hidden border-l-2 border-dashed border-[#c8d6f3] sm:block" />
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative grid gap-4 sm:grid-cols-[64px_56px_1fr] sm:items-center">
                <span className="z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#c7d7ff] bg-white text-base font-bold text-[#2f60ff] shadow-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="hidden h-2.5 w-2.5 rounded-full bg-[#2f60ff] sm:block" />
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#edf4ff] p-3 shadow-[0_12px_26px_rgba(14,32,64,0.07)]">
                    <img
                      src={step.icon}
                      alt=""
                      className="h-9 w-9 object-contain"
                    />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#071734]">
                      {step.title}
                    </h3>
                    <p className="mt-1 max-w-[280px] text-[13px] font-medium leading-5 text-[#405078]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-[#e6ecf5] bg-white p-5 shadow-[0_20px_55px_rgba(14,32,64,0.07)] lg:p-6">
          <div className="space-y-3">
            {faqData.map((item, index) => {
              const isExpanded = expandedIndex === index;
              const Icon = item.Icon;

              return (
                <div
                  key={item.question}
                  className={`rounded-xl border transition ${
                    isExpanded
                      ? "border-transparent bg-white px-4 py-4"
                      : "border-[#e6ecf5] bg-white px-4 py-3 shadow-[0_10px_24px_rgba(14,32,64,0.04)]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => handleToggle(index)}
                    className="flex w-full items-center gap-5 text-left"
                  >
                    <span
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${
                        themeClasses[item.theme]
                      }`}
                    >
                      <Icon className="h-7 w-7" />
                    </span>
                    <span className="flex-1 text-lg font-bold text-[#111827]">
                      {item.question}
                    </span>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef3ff] text-[#1f63ff]">
                      {isExpanded ? (
                        <MinusIcon className="h-6 w-6" />
                      ) : (
                        <PlusIcon className="h-6 w-6" />
                      )}
                    </span>
                  </button>

                  {isExpanded && (
                    <div className="ml-[76px] mt-4 pr-8">
                      <p className="max-w-[780px] text-base font-medium leading-7 text-[#405078]">
                        {item.answer}
                      </p>
                      <h4 className="mt-4 text-sm font-bold text-black">
                        Tools:
                      </h4>
                      <div className="mt-3 flex flex-wrap gap-3">
                        {item.toolsUsed.map((tool) => (
                          <span
                            key={tool}
                            className="rounded-full bg-[#eef2f7] px-4 py-1.5 text-sm font-bold text-[#1f63ff]"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex flex-col gap-5 rounded-xl bg-[#eef4ff] p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-5">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#e2ebff] text-[#1f63ff]">
                <PaperAirplaneIcon className="h-9 w-9 -rotate-45" />
              </span>
              <div>
                <h3 className="text-xl font-bold text-[#071734]">
                  Ready to get started?
                </h3>
                <p className="mt-1 max-w-[480px] text-sm font-medium leading-6 text-[#405078]">
                  Share your project requirements and we'll get back to you with
                  the perfect team for your needs.
                </p>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex h-12 shrink-0 items-center justify-center gap-4 rounded-lg bg-[#225cff] px-6 text-sm font-bold uppercase text-white shadow-[0_14px_28px_rgba(34,92,255,0.22)] transition hover:bg-[#174be0]"
            >
              Share Project Requirement
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Developmentteam;
