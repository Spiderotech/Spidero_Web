import React from "react";
import {
  ArrowRightIcon,
  CodeBracketIcon,
  PaintBrushIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const jobs = [
  {
    title: "React Developer",
    location: "UK",
    vacancies: "2 Vacancies",
    icon: CodeBracketIcon,
  },
  {
    title: "UI/UX Designer",
    location: "UK",
    vacancies: "1 Vacancy",
    icon: PaintBrushIcon,
  },
  {
    title: "Python Developer",
    location: "UK",
    vacancies: "1 Vacancy",
    icon: CodeBracketIcon,
  },
];

const Jobcards = () => {
  return (
    <section id="open-positions" className="bg-white px-5 pb-16 pt-12 font-sans sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center gap-6">
          <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-800">
            <UserGroupIcon className="h-10 w-10" />
          </span>
          <div>
            <h2 className="text-3xl font-extrabold tracking-normal text-[#07122f] sm:text-4xl">
              Open Positions
            </h2>
            <p className="mt-3 text-lg font-medium tracking-normal text-slate-600">
              Explore current opportunities and become a part of our journey.
            </p>
          </div>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {jobs.map(({ title, location, vacancies, icon: Icon }) => (
            <article
              key={title}
              className="relative rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-[0_18px_50px_rgba(15,23,42,0.065)] sm:p-8"
            >
              <span className="absolute left-6 top-6 rounded-md bg-blue-50 px-4 py-2 text-sm font-extrabold tracking-normal text-blue-800">
                {location}
              </span>

              <span className="mx-auto mt-10 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-blue-800">
                <Icon className="h-10 w-10" />
              </span>

              <h3 className="mt-8 text-2xl font-extrabold tracking-normal text-[#07122f]">
                {title}
              </h3>

              <div className="mx-auto my-7 h-px w-full bg-slate-200" />

              <div className="flex items-center justify-center gap-2 text-base font-medium tracking-normal text-slate-600">
                <UserGroupIcon className="h-5 w-5" />
                <span>{vacancies}</span>
              </div>

              <a
                href="/contact"
                className="mt-8 inline-flex items-center justify-center gap-3 text-base font-extrabold tracking-normal text-blue-800 transition hover:text-blue-700"
              >
                View Details
                <ArrowRightIcon className="h-5 w-5" />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="mailto:contact@spiderotechnology.com"
            className="inline-flex h-14 items-center justify-center gap-4 rounded-lg border border-blue-800 bg-white px-8 text-base font-extrabold tracking-normal text-blue-800 transition hover:bg-blue-50"
          >
            Can’t find the right role? Send us your CV
            <ArrowRightIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Jobcards;
