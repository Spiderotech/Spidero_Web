import React from "react";
import cryptoImage from "../../assets/largo-mobile@2x.54a7127676655a6669a8.png";
import mdxImage from "../../assets/mdxapp.png";
import fizzbellHome from "../../assets/mobile/projects/fizzbell-home.png";
import fizzbellSplash from "../../assets/mobile/projects/fizzbell-splash.png";
import doradrinkHome from "../../assets/mobile/projects/doradrink-home.png";
import doradrinkSplash from "../../assets/mobile/projects/doradrink-splash.png";
import struwaaHome from "../../assets/mobile/projects/struwaa-home.png";
import struwaaSplash from "../../assets/mobile/projects/struwaa-splash.png";
import {
  ArrowRightIcon,
  BuildingOffice2Icon,
  ChartBarIcon,
  BanknotesIcon,
  BellAlertIcon,
  BriefcaseIcon,
  SparklesIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";

const projectData = [
  {
    title: "MDX FOOD APP",
    image: mdxImage,
    subTitle: "Food ordering app",
    companyName: "MDX University",
    description:
      "We meticulously designed and engineered a user-centric food ordering app,This application simplifies meal ordering for users, offering a seamless integration of technology and convenience. ",
    accent: "blue",
    icon: TruckIcon,
  },
  {
    title: "Crypto Live.ai",
    image: cryptoImage,
    subTitle: "Crpto live",
    companyName: "Spidero technology",
    description:
      "Our team crafted a cutting-edge AI-driven video streaming application, focusing on delivering an unparalleled user experience.",
    accent: "blue",
    icon: ChartBarIcon,
  },
  {
    title: "Fizzbell",
    images: [fizzbellHome, fizzbellSplash],
    subTitle: "Smart finance tracker",
    companyName: "Fizzbell",
    description:
      "Fizzbell helps users take control of monthly finances with clear expense tracking, payment reminders, income insights, and a smooth mobile dashboard.",
    accent: "blue",
    icon: BanknotesIcon,
  },
  {
    title: "DoraDrink",
    images: [doradrinkHome, doradrinkSplash],
    subTitle: "Hydration habit app",
    companyName: "DoraDrink",
    description:
      "DoraDrink builds healthier hydration routines with smart water goals, reminders, rewards, progress tracking, and an engaging daily-use experience.",
    accent: "blue",
    icon: BellAlertIcon,
  },
  {
    title: "Struwaa",
    images: [struwaaHome, struwaaSplash],
    subTitle: "Service marketplace",
    companyName: "Struwaa",
    description:
      "Struwaa connects users with service providers through a clean mobile marketplace experience, category discovery, user profiles, and simple service access.",
    accent: "blue",
    icon: BriefcaseIcon,
  },
];

const accents = {
  blue: {
    text: "text-blue-800",
    bg: "bg-blue-50",
    iconBg: "bg-blue-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]",
    button:
      "border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white",
    line: "bg-gradient-to-br from-blue-800 to-blue-800",
  },
};

const ProjectVisual = ({ title, image, images = [], theme }) => {
  if (images.length > 1) {
    return (
      <div
        className={`relative flex h-[320px] items-center justify-center overflow-hidden rounded-xl ${theme.bg} px-4 py-7 sm:h-[360px] lg:h-[390px]`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.9),transparent_42%)]" />
        <div className="relative flex h-full w-full max-w-[390px] items-center justify-center">
          <img
            src={images[0]}
            alt={`${title} screen 1`}
            className="relative  max-h-[88%] w-auto max-w-[58%] -rotate-3 object-contain drop-shadow-[0_24px_32px_rgba(15,23,42,0.22)]"
          />
          <img
            src={images[1]}
            alt={`${title} screen 2`}
            className="relative  -ml-12 max-h-[82%] w-auto max-w-[58%] rotate-6 object-contain  drop-shadow-[0_22px_30px_rgba(15,23,42,0.2)] sm:-ml-16"
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex min-h-[260px] items-center justify-center overflow-hidden rounded-xl ${theme.bg}`}
    >
      <img
        src={image}
        alt={title}
        className="h-full max-h-[350px] w-full object-contain"
      />
    </div>
  );
};

const ProjectCard = ({
  title,
  image,
  images,
  subTitle,
  companyName,
  description,
  accent,
  icon: Icon,
}) => {
  const theme = accents[accent];

  return (
    <article className="grid overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_18px_55px_rgba(15,23,42,0.07)] lg:grid-cols-[0.95fr_1fr] lg:p-6">
      <ProjectVisual title={title} image={image} images={images} theme={theme} />

      <div className="flex flex-col justify-center px-1 py-7 sm:px-5 lg:px-10 lg:py-6">
        <div className="flex items-start gap-5">
          <span
            className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full ${theme.iconBg} ${theme.text}`}
          >
            <Icon className="h-8 w-8" />
          </span>
          <div>
            <h3 className="text-3xl font-extrabold leading-tight tracking-normal text-[#07122f] lg:text-[34px]">
              {title}
            </h3>
            <div className={`mt-4 h-1 w-9 rounded-full ${theme.line}`} />
          </div>
        </div>

        <p className="mt-5 text-lg font-bold tracking-normal text-slate-600">
          {subTitle}
        </p>

        <div className="mt-5 flex items-center gap-3 text-base font-bold tracking-normal text-slate-600">
          <BuildingOffice2Icon className={`h-5 w-5 ${theme.text}`} />
          {companyName}
        </div>

        <p className="mt-5 max-w-xl text-base font-semibold leading-7 tracking-normal text-slate-600">
          {description}
        </p>

        <a
          href="/contact"
          className={`mt-7 inline-flex h-12 w-fit items-center justify-center gap-5 rounded-lg border px-7 text-sm font-extrabold uppercase tracking-normal transition ${theme.button}`}
        >
          View Case Study
          <ArrowRightIcon className="h-5 w-5" />
        </a>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <section className="relative scroll-mt-28 overflow-hidden bg-white px-5 py-14 font-sans sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1250px]">
        <div className="text-center">
          <div className="inline-flex items-center gap-5 text-sm font-extrabold uppercase tracking-[0.08em] text-blue-800">
            <span className="h-px w-6 bg-blue-800" />
            Our Mobile App Projects
            <span className="h-px w-6 bg-blue-800" />
          </div>

          <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-normal text-[#07122f] sm:text-5xl lg:text-[58px]">
            Innovative Apps.{" "}
            <span className="text-blue-800">Real Impact.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base font-semibold leading-7 tracking-normal text-slate-500 sm:text-lg">
            We design and develop powerful mobile applications that solve real
            problems, drive engagement, and deliver exceptional user
            experiences.
          </p>
        </div>

        <div className="mt-10 space-y-7">
          {projectData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
