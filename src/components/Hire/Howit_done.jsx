import React from "react";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";
import call from "../../assets/Hire/discovery-call.webp";
import agile from "../../assets/Hire/agile.webp";
import dev from "../../assets/Hire/dev.webp";
import testing from "../../assets/Hire/testing.webp";
import invoice from "../../assets/Hire/invoice.webp";
import communication from "../../assets/Hire/communication.webp";
import escalation from "../../assets/Hire/escalatiom.webp";

const processSteps = [
  {
    title: "Initial Discovery Call",
    description:
      "We understand your needs, goals, market dynamics and propose the right team size, skills, and development approach. A team is allocated to the project after this phase.",
    image: call,
    points: [
      "Business analysis",
      "Goal & risk assessment",
      "Team recommendation",
    ],
  },
  {
    title: "Agile Development",
    description:
      "The project is broken into 2-week sprints with clear deliverables. Your Project Manager manages the entire process, provides daily updates and arranges any skills needed within the team plan.",
    image: agile,
    points: [
      "Sprint planning & execution",
      "Daily updates & bi-weekly releases",
      "UI/UX, Testing, DevOps as needed",
    ],
  },
  {
    title: "Deliverables / DevOps",
    description:
      "We deploy on live bi-weekly or monthly based on your priorities and ensure smooth, continuous delivery in a truly Agile way.",
    image: dev,
    points: [
      "Continuous deployment",
      "Infrastructure & DevOps",
      "Monitoring & optimization",
    ],
  },
  {
    title: "Testing",
    description:
      "Every team member, big or small, has a tester involved and becomes more involved as the project progresses.",
    image: testing,
    points: [
      "Manual & automation testing",
      "Cross-browser & device testing",
      "Quality assurance",
    ],
  },
  {
    title: "Communication & Management",
    description:
      "We adapt to your availability with daily or twice-a-week standups. Our Project Manager is available all workday and you can track time in real-time.",
    image: communication,
    points: [
      "Daily standups / regular syncs",
      "Time tracking & timesheets",
      "Tools: Slack, Jira, Zoom",
    ],
  },
  {
    title: "Invoicing",
    description:
      "For the first month, we charge 50% upfront and 50% at the end of the month. Post that, it is 100% within the first week of every work month.",
    image: invoice,
    points: ["Multiple payment methods", "Transparent billing", "Currency: USD"],
  },
  {
    title: "Escalation Points",
    description:
      "Your escalation contacts include our CEO, CTO and Engineering Manager. Our leadership ensures your project stays on track and delivers maximum value.",
    image: escalation,
    points: [
      "Leadership oversight",
      "Quick resolution",
      "Accountability & transparency",
    ],
  },
];

const CheckItem = ({ children }) => (
  <li className="flex items-start gap-2 text-sm font-semibold leading-5 text-[#101b32]">
    <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
    <span>{children}</span>
  </li>
);

const ProcessCard = ({ step, index }) => (
  <article
    className="relative rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
    data-aos="fade-up"
    data-aos-duration="900"
    data-aos-delay={(index % 2) * 120}
  >
    <h3 className="text-xl font-extrabold leading-7 text-[#071435]">
      {step.title}
    </h3>
    <p className="mt-3 text-sm font-medium leading-7 text-[#526078]">
      {step.description}
    </p>
    <ul className="mt-5 space-y-3">
      {step.points.map((point) => (
        <CheckItem key={point}>{point}</CheckItem>
      ))}
    </ul>
  </article>
);

const ProcessImage = ({ step, index }) => (
  <div
    className="flex min-h-[220px] items-center justify-center"
    data-aos="zoom-in"
    data-aos-duration="900"
    data-aos-delay={(index % 2) * 120}
  >
    <div className="relative flex h-48 w-48 items-center justify-center rounded-full bg-[#eef0ff]">
      <span className="absolute inset-5 rounded-full border border-dashed border-red-200" />
      <img
        src={step.image}
        alt=""
        className="relative z-10 max-h-40 max-w-[180px] object-contain drop-shadow-[0_18px_22px_rgba(30,64,175,0.12)]"
      />
    </div>
  </div>
);

const DesktopRow = ({ step, index }) => {
  const cardFirst = index % 2 === 1;

  return (
    <div className="relative hidden grid-cols-[1fr_90px_1fr] items-center gap-5 lg:grid">
      {cardFirst ? (
        <ProcessCard step={step} index={index} />
      ) : (
        <ProcessImage step={step} index={index} />
      )}

      <div className="relative z-10 flex justify-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-red-100 bg-white text-lg font-extrabold text-red-500 shadow-[0_10px_28px_rgba(239,68,68,0.16)]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {cardFirst ? (
        <ProcessImage step={step} index={index} />
      ) : (
        <ProcessCard step={step} index={index} />
      )}
    </div>
  );
};

const MobileRow = ({ step, index }) => (
  <div className="relative grid gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_14px_34px_rgba(15,23,42,0.08)] lg:hidden">
    <div className="flex items-center gap-3">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-red-50 text-base font-extrabold text-red-500">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="text-lg font-extrabold text-[#071435]">{step.title}</h3>
    </div>
    <ProcessImage step={step} index={index} />
    <p className="text-sm font-medium leading-7 text-[#526078]">
      {step.description}
    </p>
    <ul className="space-y-3">
      {step.points.map((point) => (
        <CheckItem key={point}>{point}</CheckItem>
      ))}
    </ul>
  </div>
);

const Howit_done = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f9fbff] to-white px-5 py-16 font-sans sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute left-1/2 top-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-50 blur-3xl" />
      <div className="relative mx-auto max-w-[1180px]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-red-500">
            Our Process
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-normal text-[#071435] sm:text-4xl lg:text-[46px]">
            Here's How it is Done
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-7 text-[#526078]">
            A transparent, collaborative and agile approach to deliver
            high-quality digital solutions.
          </p>
        </div>

        <div className="relative mt-10 space-y-8 lg:mt-14 lg:space-y-4">
          <span className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-red-100 to-transparent lg:block" />

          {processSteps.map((step, index) => (
            <React.Fragment key={step.title}>
              <DesktopRow step={step} index={index} />
              <MobileRow step={step} index={index} />
            </React.Fragment>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-slate-100 bg-white px-6 py-5 shadow-[0_18px_45px_rgba(15,23,42,0.08)] md:flex-row">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-500">
              <RocketLaunchIcon className="h-7 w-7" />
            </span>
            <p className="max-w-xl text-sm font-extrabold leading-6 text-[#071435]">
              We follow a proven process to deliver results that drive your
              business forward.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex h-12 shrink-0 items-center justify-center gap-4 rounded-xl bg-red-500 px-7 text-sm font-extrabold uppercase tracking-[0.12em] text-white shadow-[0_14px_30px_rgba(239,68,68,0.24)] transition hover:-translate-y-0.5 hover:bg-blue-800"
          >
            Let's Get Started
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Howit_done;
