import React from "react";
import {
  ArrowRightIcon,
  ArrowsRightLeftIcon,
  CheckCircleIcon,
  ClockIcon,
  LifebuoyIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";
import pricecard1 from "../../assets/Hire/pricecard1.png";
import pricecard2 from "../../assets/Hire/pricecard2.png";
import pricecard3 from "../../assets/Hire/pricecard3.png";

const sharedFeatures = [
  "Shared Project Manager",
  "Shared UI/UX Expert",
  "Shared Tester",
  "Tech Lead on a need basis",
  "DevOps on a need basis.",
  "Use 200 hours on one project or on multiple. Do as you may please!",
  "Upgrade, Downgrade",
  "No minimum duration commitment from client.",
];

const plans = [
  {
    title: "Lean MVP Dev Team",
    description: "Best option for personal use & for your next project.",
    price: "$2600",
    hours: "For 200 hours",
    billing: "billed Monthly",
    image: pricecard1,
    primaryFeature:
      "A Dedicated Full Stack Developer (Any Tech - Mobile Apps, Web).",
    accent: "orange",
  },
  {
    title: "MVP+ Dev Team",
    description: "Build bigger MVPs rapidly!",
    price: "$5000",
    hours: "For 200 hours",
    billing: "billed Monthly",
    image: pricecard2,
    primaryFeature:
      "2 Dedicated Full Stack Developer (Any Tech - Mobile Apps, Web).",
    accent: "blue",
    popular: true,
  },
  {
    title: "Growth Dev Team",
    description: "Post MVP development, beat the competition!",
    price: "$7000",
    hours: "For 200 hours",
    billing: "billed Monthly",
    image: pricecard3,
    primaryFeature:
      "3 Dedicated Full Stack Developer (Any Tech - Mobile Apps, Web).",
    accent: "orange",
  },
];

const singleDeveloper = {
  title: "Hire Single Developer",
  description: "Best option for personal use & for your next project.",
  price: "$600",
  billing: "billed Monthly",
  features: [
    "A Dedicated Full Stack Developer (Any Tech - Mobile Apps, Web).",
    "Minimum 1 Year of commitment from client.",
  ],
};

const supportHighlights = [
  {
    title: "No long term lock-in",
    text: "Cancel anytime",
    icon: ShieldCheckIcon,
    color: "text-blue-700 bg-blue-50",
  },
  {
    title: "Upgrade or downgrade",
    text: "anytime, hassle-free",
    icon: ArrowsRightLeftIcon,
    color: "text-emerald-600 bg-emerald-50",
  },
  {
    title: "Real-time tracking",
    text: "& transparent reports",
    icon: ClockIcon,
    color: "text-violet-600 bg-violet-50",
  },
  {
    title: "Dedicated support",
    text: "when you need it",
    icon: LifebuoyIcon,
    color: "text-orange-500 bg-orange-50",
  },
];

const theme = {
  orange: {
    border: "border-orange-300",
    text: "text-orange-600",
    icon: "text-orange-500",
    button:
      "border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white",
    glow: "group-hover:shadow-[0_24px_60px_rgba(249,115,22,0.14)]",
  },
  blue: {
    border: "border-blue-600",
    text: "text-blue-700",
    icon: "text-blue-700",
    button: "border-blue-700 bg-blue-700 text-white hover:bg-blue-800",
    glow: "group-hover:shadow-[0_24px_60px_rgba(30,64,175,0.16)]",
  },
};

const FeatureItem = ({ children, accent }) => (
  <li className="flex items-start gap-3 text-sm font-semibold leading-5 text-[#101827]">
    <CheckCircleIcon className={`mt-0.5 h-4 w-4 shrink-0 ${theme[accent].icon}`} />
    <span>{children}</span>
  </li>
);

const PlanCard = ({ plan }) => {
  const styles = theme[plan.accent];
  const allFeatures = [plan.primaryFeature, ...sharedFeatures];

  return (
    <article
      className={`group relative flex h-full flex-col rounded-2xl border ${styles.border} bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 ${styles.glow}`}
    >
      {plan.popular && (
        <div className="absolute left-1/2 top-0 flex h-8 min-w-[170px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue-700 px-6 text-xs font-extrabold uppercase tracking-[0.12em] text-white shadow-[0_12px_28px_rgba(30,64,175,0.22)]">
          Most Popular
        </div>
      )}

      <div className="flex items-center gap-5">
        <img
          src={plan.image}
          alt=""
          className="h-24 w-24 shrink-0 rounded-2xl object-contain"
        />
        <div>
          <h3 className="text-2xl font-extrabold leading-7 text-[#071435]">
            {plan.title}
          </h3>
          <p className="mt-3 text-sm font-semibold leading-6 text-[#526078]">
            {plan.description}
          </p>
        </div>
      </div>

      <div className="my-6 h-px bg-slate-200" />

      <div className="flex items-end gap-3">
        <span className={`text-4xl font-extrabold leading-none ${styles.text}`}>
          {plan.price}
        </span>
        <span className="mb-1 h-9 w-px rotate-12 bg-slate-300" />
        <span className="mb-0.5 text-sm font-bold leading-5 text-[#526078]">
          <span className={styles.text}>{plan.hours}</span>
          <br />
          {plan.billing}
        </span>
      </div>

      <ul className="mt-6 flex-1 space-y-3">
        {allFeatures.map((feature) => (
          <FeatureItem key={feature} accent={plan.accent}>
            {feature}
          </FeatureItem>
        ))}
      </ul>

      <a
        href="/contact"
        className={`mt-7 inline-flex h-12 items-center justify-center gap-4 rounded-xl border text-sm font-extrabold uppercase tracking-[0.08em] transition ${styles.button}`}
      >
        Let's Connect
        <ArrowRightIcon className="h-4 w-4" />
      </a>
    </article>
  );
};

const Pricingcard = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f8fbff] to-white px-5 pb-16 pt-32 font-sans sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute -left-24 top-28 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-44 h-80 w-80 rounded-full bg-orange-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-[1180px]">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center rounded-full bg-orange-50 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.14em] text-orange-600">
            Flexible • Scalable • Reliable
          </div>
          <h1 className="mx-auto mt-5 max-w-[980px] text-balance text-3xl font-extrabold leading-[1.15] tracking-normal text-[#071435] sm:text-4xl sm:leading-[1.14] lg:text-[46px] lg:leading-[1.12] xl:text-[50px]">
            Plug-and-Play{" "}
            <span className="text-orange-500">Monthly Development</span>
            {" "}Teams from{" "}
            <span className="text-orange-600">$1600</span> monthly!
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base font-semibold leading-7 text-[#667085]">
            No more stuck ups with low/ no code solutions, move past the Figma
            wireframes. Developers, Testers, Designers, DevOps, Tech leads,
            Fractional CTOs, Project Managers, Marketers - All at one place.
            Pay as you use ‘em! Build great products in a painless, affordable
            and flexible way!
          </p>
        </div>

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard key={plan.title} plan={plan} />
          ))}
        </div>

        <div className="mt-8 grid overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.07)] sm:grid-cols-2 lg:grid-cols-4">
          {supportHighlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`flex items-center gap-4 px-6 py-5 ${
                  index !== supportHighlights.length - 1
                    ? "border-b border-slate-100 sm:border-r lg:border-b-0"
                    : ""
                }`}
              >
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${item.color}`}
                >
                  <Icon className="h-7 w-7" />
                </span>
                <div>
                  <p className="text-sm font-extrabold text-[#071435]">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#667085]">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-2xl border border-orange-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.07)]">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr_auto] lg:items-center">
            <div>
              <h3 className="text-2xl font-extrabold text-[#071435]">
                {singleDeveloper.title}
              </h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-[#667085]">
                {singleDeveloper.description}
              </p>
            </div>
            <div className="flex items-end gap-3">
              <span className="text-4xl font-extrabold text-orange-600">
                {singleDeveloper.price}
              </span>
              <span className="mb-1 text-sm font-bold text-[#667085]">
                {singleDeveloper.billing}
              </span>
            </div>
            <a
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-3 rounded-xl bg-orange-500 px-6 text-sm font-extrabold uppercase tracking-[0.08em] text-white transition hover:bg-blue-800"
            >
              Let's Connect
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>

          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {singleDeveloper.features.map((feature) => (
              <FeatureItem key={feature} accent="orange">
                {feature}
              </FeatureItem>
            ))}
          </ul>
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-base font-semibold leading-7 text-[#667085]">
          For bigger team requirements, pls directly contact{" "}
          <a
            href="mailto:contact@spiderotechnology.com"
            className="font-extrabold text-orange-500"
          >
            contact@spiderotechnology.com
          </a>{" "}
          or <span className="font-extrabold text-orange-500">schedule a discovery call!</span>
        </p>
      </div>
    </section>
  );
};

export default Pricingcard;
