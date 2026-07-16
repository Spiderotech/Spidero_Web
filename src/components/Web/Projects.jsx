import React from "react";
import web1 from "../../assets/getmyroom.png";
import web2 from "../../assets/hustelmax (1).png";
import doraDrink from "../../assets/Screenshot 2026-06-09 at 2.12.10 pm.png";
import struwaa from "../../assets/Screenshot 2026-06-09 at 2.13.05 pm.png";
import fizzbell from "../../assets/Screenshot 2026-06-09 at 2.13.51 pm.png";
import {
  ArrowTrendingUpIcon,
  BanknotesIcon,
  BellAlertIcon,
  BriefcaseIcon,
  BuildingOffice2Icon,
  ChartBarIcon,
  ClockIcon,
  DevicePhoneMobileIcon,
  FunnelIcon,
  HeartIcon,
  HomeIcon,
  SparklesIcon,
  MagnifyingGlassIcon,
  ShieldCheckIcon,
  TruckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const projectData = [
  {
    title: "GetMyRoom",
    image: web1,
    subTitle: "Property Search",
    companyName: "GetMyRoom",
    description:
      "Search and find your ideal property with GetMyRoom. Explore a wide range of listings and discover your dream home today.",
    accent: "blue",
    icon: HomeIcon,
    features: [
      { label: "Smart Search", icon: MagnifyingGlassIcon },
      { label: "Save Favorites", icon: HeartIcon },
      { label: "Advanced Filters", icon: FunnelIcon },
    ],
  },
  {
    title: "Hustle Max Merchant Private Limited",
    image: web2,
    subTitle: "Product Delivery",
    companyName: "Hustle Max Merchant",
    description:
      "Discover outstanding service and trustworthiness at Hustle Max Merchant Private Limited ",
    accent: "blue",
    icon: TruckIcon,
    features: [
      { label: "Reliable Delivery", icon: TruckIcon },
      { label: "Trusted Service", icon: ShieldCheckIcon },
      { label: "Business Growth", icon: ArrowTrendingUpIcon },
    ],
  },
  {
    title: "DoraDrink",
    image: doraDrink,
    subTitle: "Hydration Coach",
    companyName: "DoraDrink",
    description:
      "DoraDrink helps users build healthy hydration habits with smart reminders, real-time tracking, motivating achievements, and an engaging mobile-first experience.",
    accent: "blue",
    icon: DevicePhoneMobileIcon,
    features: [
      { label: "Smart Reminders", icon: BellAlertIcon },
      { label: "Water Tracking", icon: ChartBarIcon },
      { label: "User Rewards", icon: SparklesIcon },
    ],
  },
  {
    title: "Struwaa",
    image: struwaa,
    subTitle: "Freelance Marketplace",
    companyName: "Struwaa",
    description:
      "Struwaa brings verified freelancers, client requests, chat, escrow, and payouts into a polished marketplace built for local and remote work.",
    accent: "blue",
    icon: BriefcaseIcon,
    features: [
      { label: "Verified Talent", icon: ShieldCheckIcon },
      { label: "Protected Escrow", icon: BanknotesIcon },
      { label: "Hiring Pipeline", icon: UserGroupIcon },
    ],
  },
  {
    title: "Fizzbell",
    image: fizzbell,
    subTitle: "Finance Tracker",
    companyName: "Fizzbell",
    description:
      "Fizzbell gives users full control of monthly finances with income tracking, expense visibility, recurring payment reminders, and a clean mobile app flow.",
    accent: "blue",
    icon: BanknotesIcon,
    features: [
      { label: "Expense Tracking", icon: ChartBarIcon },
      { label: "Payment Alerts", icon: ClockIcon },
      { label: "Mobile Dashboard", icon: DevicePhoneMobileIcon },
    ],
  },
];

const theme = {
  blue: {
    bg: "bg-gradient-to-br from-blue-800 to-blue-800",
    text: "text-blue-800",
    soft: "bg-blue-50",
    button: "bg-gradient-to-br from-blue-800 to-blue-800",
  },
};

const Project = ({ title, image, subTitle, description, icon: Icon, features, accent }) => {
  const colors = theme[accent];

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_22px_70px_rgba(15,23,42,0.08)]">
      <div className="grid lg:grid-cols-[1.18fr_0.92fr]">
        <div className="relative min-h-[300px] overflow-hidden bg-slate-100 sm:min-h-[380px] lg:min-h-[420px]">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/0 to-white/15" />
        </div>

        <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
          <div className="flex items-start gap-5">
            <span className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-xl ${colors.bg} text-white shadow-[0_16px_34px_rgba(37,99,235,0.18)]`}>
              <Icon className="h-9 w-9" />
            </span>
            <div>
              <h3 className="text-2xl font-extrabold leading-tight tracking-normal text-[#07122f] sm:text-3xl">
                {title}
              </h3>
              <p className={`mt-2 text-lg font-extrabold tracking-normal ${colors.text}`}>
                {subTitle}
              </p>
            </div>
          </div>

          <p className="mt-8 max-w-xl text-base font-medium leading-8 tracking-normal text-slate-700">
            {description}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {features.map(({ label, icon: FeatureIcon }) => (
              <div
                key={label}
                className="flex min-h-[62px] items-center justify-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-center shadow-[0_10px_28px_rgba(15,23,42,0.06)]"
              >
                <FeatureIcon className={`h-6 w-6 shrink-0 ${colors.text}`} />
                <span className="text-sm font-semibold tracking-normal text-[#07122f]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <section className="bg-white px-5 py-16 font-sans sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <h2 className="text-4xl font-extrabold tracking-normal text-[#07122f] sm:text-5xl">
            Our Projects
          </h2>
          <p className="mt-5 text-lg font-medium leading-8 tracking-normal text-slate-600">
            Explore the digital products we have helped bring to life.
          </p>
        </div>

        <div className="space-y-7">
          {projectData.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
