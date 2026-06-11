import React from "react";
import {
  ArrowRightIcon,
  BoltIcon,
  ChartBarIcon,
  SparklesIcon,
  StarIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import designVisual from "../../assets/mobile/human-centered-design.png";

const designPillars = [
  {
    title: "User First",
    text: "We design with your users at the heart of everything.",
    icon: UserIcon,
    accent: "bg-violet-100 text-violet-600",
  },
  {
    title: "Value Driven",
    text: "We focus on building products that add real value.",
    icon: ChartBarIcon,
    accent: "bg-pink-100 text-pink-600",
  },
  {
    title: "Engagement",
    text: "Our designs are built to engage, retain, and convert.",
    icon: BoltIcon,
    accent: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Experience Led",
    text: "We prioritize seamless experiences that users love.",
    icon: SparklesIcon,
    accent: "bg-sky-100 text-sky-600",
  },
];

const Humancentered_design = () => {
  return (
    <section className="overflow-hidden bg-white px-5 py-10 font-sans sm:px-8 lg:px-10 lg:py-14">
      <div className="mx-auto grid max-w-[1320px] items-center gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(390px,0.92fr)] xl:gap-10">
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1.5 text-xs font-extrabold uppercase tracking-normal text-violet-600 shadow-[0_12px_30px_rgba(109,84,255,0.12)] sm:px-4">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-600 text-white">
              <StarIcon className="h-3.5 w-3.5 fill-current" />
            </span>
            #1 App Developer In UK
          </div>

          <h2 className="mt-5 max-w-[680px] text-3xl font-extrabold leading-tight tracking-normal text-[#070b26] sm:text-4xl lg:text-[42px] xl:text-[48px]">
            How Spidero Technology,{" "}
            <span className="text-violet-600">#1 app developer in UK,</span>{" "}
            makes your app idea a reality?
          </h2>

          <div className="mt-4 h-0.5 w-20 rounded-full bg-violet-500" />

          <div className="mt-5 max-w-[680px] space-y-4 text-sm font-medium leading-6 tracking-normal text-[#26304f] sm:text-[15px] sm:leading-7">
            <p>
              Visuals play a pivotal role in enhancing user experience. With
              over 3 years of expertise as a London-based mobile app design
              company, we've refined our processes to ensure heightened user
              engagement. Retaining users adds value, relevance, and usefulness
              to your app. Our approach prioritizes developing products from a
              user perspective, allowing us to understand the user experience
              firsthand.
            </p>
            <p>
              Our mobile app design process revolves around content curation,
              pixel orientation, information architecture, microinteractions,
              etc., ensuring maximum user engagement.
            </p>
          </div>

          <div className="mt-7 grid overflow-hidden rounded-xl border border-slate-100 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.07)] sm:grid-cols-2 xl:grid-cols-4">
            {designPillars.map(({ title, text, icon: Icon, accent }, index) => (
              <article
                key={title}
                className={`min-h-[128px] p-4 ${
                  index > 0 ? "xl:border-l xl:border-slate-200" : ""
                } ${index % 2 === 1 ? "sm:border-l sm:border-slate-200" : ""}`}
              >
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-lg ${accent}`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-sm font-extrabold tracking-normal text-[#070b26]">
                  {title}
                </h3>
                <p className="mt-1.5 text-xs font-semibold leading-5 tracking-normal text-[#26304f]">
                  {text}
                </p>
              </article>
            ))}
          </div>

          
        </div>

        <div className="relative min-h-[420px] overflow-hidden rounded-3xl bg-violet-50 shadow-[0_22px_70px_rgba(109,84,255,0.11)] sm:min-h-[520px] lg:min-h-[640px]">
          <img
            src={designVisual}
            alt="Mobile app interface preview held in hand"
            className="absolute inset-0 h-full w-full object-cover object-right"
          />
        </div>
      </div>
    </section>
  );
};

export default Humancentered_design;
