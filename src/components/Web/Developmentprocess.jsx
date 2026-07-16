import React from "react";
import {
  CheckCircleIcon,
  ClipboardDocumentCheckIcon,
  CodeBracketIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    title: "Technical Discovery",
    icon: MagnifyingGlassIcon,
    tint: "blue",
    items: [
      "Establish detailed understanding of business goals and objectives.",
      "Assess the current situation.",
      "Analyze the target market and competitive landscape.",
      "Analyze the target market and competitive landscape.",
      "Understand and document clients' design and branding preferences.",
    ],
  },
  {
    title: "Planning",
    icon: ClipboardDocumentCheckIcon,
    tint: "blue",
    items: [
      "Define the project plan.",
      "Outline branding guidelines for the project.",
      "Assist in developing a content strategy.",
      "Provide guidance on user acquisition strategy.",
    ],
  },
  {
    title: "IA, Web Design + Copywriting",
    icon: PencilSquareIcon,
    tint: "blue",
    items: [
      "Craft corporate branding.",
      "Design user interfaces based on approved wireframes, ensuring customer-centricity.",
      "Tailor UX for mobile, tablet, and web platforms.",
      "Obtain client approval for all UI designs.",
    ],
  },
  {
    title: "Front-end and Back-End Coding",
    icon: CodeBracketIcon,
    tint: "blue",
    items: [
      "Build website front-end to match approved designs.",
      "Develop an intuitive backend for easy management.",
      "Cater to API integration requirements.",
      "Implement an optimized code structure.",
      "Set up 2-3 week milestones/sprints with client reviews.",
    ],
  },
  {
    title: "QA & Launch",
    icon: RocketLaunchIcon,
    tint: "blue",
    items: [
      "Manually test each milestone/sprint.",
      "Report and address bugs, adding them to the product backlog.",
      "Provide a quality release and send a final demo of the sprint to the client for approval.",
      "Conduct regression testing after each sprint to ensure proper functioning of previously approved sprints.",
    ],
  },
];

const tintClasses = {
  blue: "bg-blue-50 text-blue-800",
};

const orbitIcons = [
  MagnifyingGlassIcon,
  ClipboardDocumentCheckIcon,
  PencilSquareIcon,
  CodeBracketIcon,
];

const Developmentprocess = () => {
  return (
    <section className="relative overflow-hidden bg-[#fbfcff] px-5 py-16 font-sans sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute right-8 top-0 hidden h-44 w-44 opacity-60 lg:block">
        <div className="h-full w-full bg-[radial-gradient(circle,_#dbe5ff_2px,_transparent_2px)] [background-size:16px_16px]" />
      </div>
      <div className="pointer-events-none absolute bottom-10 left-0 hidden h-56 w-56 opacity-50 lg:block">
        <div className="h-full w-full bg-[radial-gradient(circle,_#dbe5ff_2px,_transparent_2px)] [background-size:16px_16px]" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-blue-800">
            Our Development Process
          </p>
          <div className="mt-5 h-1.5 w-16 rounded-full bg-gradient-to-br from-blue-800 to-blue-800" />

          <h2 className="mt-9 max-w-lg text-4xl font-extrabold leading-tight tracking-normal text-[#07122f] sm:text-5xl">
            Our development process
          </h2>

          <div className="mt-8 max-w-md space-y-7 text-lg font-medium leading-8 tracking-normal text-slate-600">
            <p>
              Our process ensures that an interface is seamless for the end-user
              to become familiar with and competent in using during the first
              contact they make.
            </p>
            <p>
              The agile approach makes it intuitive for users to achieve their
              objectives and easy to recall on subsequent visits.
            </p>
            <p>
              Our designers work with developers to make the attributes stand
              out by turning the usability to the max.
            </p>
          </div>

          <div className="relative mt-16 hidden h-[360px] max-w-[380px] items-center justify-center lg:flex">
            <div className="absolute h-72 w-72 rounded-full border-2 border-dashed border-blue-200" />
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white text-blue-800 shadow-[0_20px_60px_rgba(37,99,235,0.12)]">
              <RocketLaunchIcon className="h-16 w-16" />
            </div>
            {orbitIcons.map((Icon, index) => {
              const positions = [
                "left-4 top-10",
                "right-4 top-10",
                "left-0 bottom-16",
                "right-0 bottom-16",
              ];

              return (
                <span
                  key={index}
                  className={`absolute ${positions[index]} flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-blue-800 shadow-[0_18px_45px_rgba(37,99,235,0.12)]`}
                >
                  <Icon className="h-10 w-10" />
                </span>
              );
            })}
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-0 hidden h-full border-l-2 border-dotted border-blue-200 lg:block" />

          <div className="space-y-9">
            {steps.map(({ title, icon: Icon, tint, items }, index) => (
              <div key={title} className="relative lg:pl-16">
                <div className="absolute left-0 top-28 hidden items-center lg:flex">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-800 to-blue-800 text-lg font-extrabold text-white shadow-[0_14px_35px_rgba(37,99,235,0.28)]">
                    {index + 1}
                  </span>
                  <span className="h-2 w-8 rounded-full bg-blue-500" />
                </div>

                <article
                  className="rounded-[1.7rem] border border-slate-100 bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)]"
                  data-aos="fade-up"
                >
                  <div className="grid gap-6 sm:grid-cols-[96px_1fr]">
                    <span className={`flex h-24 w-24 items-center justify-center rounded-2xl ${tintClasses[tint]}`}>
                      <Icon className="h-14 w-14" />
                    </span>

                    <div>
                      <h3 className="text-2xl font-extrabold leading-tight tracking-normal text-[#07122f] sm:text-3xl">
                        {title}
                      </h3>
                      <div className="mt-5 h-1 w-12 rounded-full bg-gradient-to-br from-blue-800 to-blue-800" />

                      <ul className="mt-8 space-y-4">
                        {items.map((item, itemIndex) => (
                          <li
                            key={`${title}-${itemIndex}`}
                            className="flex gap-4 text-base font-medium leading-7 tracking-normal text-slate-700"
                            data-aos="fade-up"
                          >
                            <CheckCircleIcon className="mt-1 h-5 w-5 shrink-0 text-blue-800" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Developmentprocess;
