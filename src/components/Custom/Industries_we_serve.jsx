import React, { useEffect, useState } from "react";
import {
  AcademicCapIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  BanknotesIcon,
  BuildingOffice2Icon,
  ChartBarSquareIcon,
  CodeBracketSquareIcon,
  Cog6ToothIcon,
  HeartIcon,
  PlayCircleIcon,
  ShieldCheckIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import Finance from "../../assets/custom/finace.jpg";
import education from "../../assets/custom/education.jpg";
import logistics from "../../assets/custom/logistics.jpg";
import healthcare from "../../assets/custom/medical.jpg";
import media from "../../assets/custom/media.jpg";
import realestate from "../../assets/custom/real.jpg";
import software from "../../assets/custom/software.jpg";

const headingsData = [
  {
    id: 1,
    title: "Finance",
    content:
      "Since inception, we've delivered top-tier banking and financial software services to fintech firms, financial institutions, and banks. Our focus is on supporting digital transformation, ensuring seamless end-user experiences for both customers and internal stakeholders.",
    image: Finance,
    Icon: BanknotesIcon,
  },
  {
    id: 2,
    title: "Education",
    content:
      "We provide top-notch and impactful eLearning software solutions to forward thinking Edtech companies that deliver enhanced end-user experiences and meet key objectives. Our engineering expertise combined with our deep understanding of the education industry allows us to meet the needs of EduTech leaders around the world.",
    image: education,
    Icon: AcademicCapIcon,
  },
  {
    id: 3,
    title: "Healthcare",
    content:
      "Explore our comprehensive healthcare solutions, encompassing custom applications, interactive EMRs, business problem-solving SaaS products, and AI-driven analytics. Our offerings align with required compliances, regulatory guidelines, and robust data privacy protection. Leverage our demonstrated expertise in healthcare software development to elevate your business efficiency.",
    image: healthcare,
    Icon: HeartIcon,
  },
  {
    id: 4,
    title: "Software & IT",
    content:
      "As an intelligent and agile software firm, we offer comprehensive IT consulting services to surmount significant business challenges, fostering enduring success at scale. Whether revitalizing your IT strategy, developing a SaaS product, modernizing legacy systems, or recovering from a software project, our accomplished developers have you well-supported.",
    image: software,
    Icon: CodeBracketSquareIcon,
  },
  {
    id: 5,
    title: "Real Estate",
    content:
      "Spidero Technology has crafted tailor-made software solutions, including ERP CRM and SaaS offerings, empowering real estate businesses to digitize operational processes and achieve scalable growth.",
    image: realestate,
    Icon: BuildingOffice2Icon,
  },
  {
    id: 6,
    title: "Logistics",
    content:
      "Dedicated to Consulting, Deployment, Support, and Development, our custom software services cater specifically to Logistics and Transportation Solutions. We aim to aid L&T businesses in optimizing logistics costs, boosting asset productivity, and elevating the overall customer experience.",
    image: logistics,
    Icon: TruckIcon,
  },
  {
    id: 7,
    title: "Media",
    content:
      "Harness our custom software development services in London to propel your business forward. Craft a Media & Entertainment solution pivotal in enhancing viewer engagement, modernizing processes, and bolstering your bottom line.",
    image: media,
    Icon: PlayCircleIcon,
  },
];

const benefits = [
  {
    title: "Custom Solutions",
    description: "Tailored to your business needs",
    Icon: Cog6ToothIcon,
  },
  {
    title: "Scalable Growth",
    description: "Built to grow with your business",
    Icon: ChartBarSquareIcon,
  },
  {
    title: "Trusted Partner",
    description: "Committed to your success",
    Icon: ShieldCheckIcon,
  },
];

const Industries_we_serve = () => {
  const [selectedHeading, setSelectedHeading] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === headingsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const selectIndustry = (heading) => {
    setSelectedHeading(heading);
    setCurrentIndex(headingsData.findIndex((item) => item.id === heading.id));
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? headingsData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === headingsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const activeIndustry = headingsData[currentIndex];

  return (
    <section className="overflow-hidden bg-[#020b18] px-6 py-10 font-sans text-white md:py-12 lg:px-10">
      <div className="mx-auto max-w-[1320px]">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-blue-300">
            Empowering businesses across diverse industries
          </p>
          <h2 className="mt-3 text-[30px] font-bold leading-tight sm:text-[40px] lg:text-[46px]">
            Industries We Serve
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/78 sm:text-base">
            At Spidero Technology, we collaborate with rapidly expanding
            enterprises, deploying dedicated teams to develop innovative,
            flawless, and enduring software solutions. Trust us on your
            mission-critical journey, as Spidero Technology is poised to be your
            guiding force.
          </p>
        </div>

        <div className="mt-7 grid gap-5 lg:grid-cols-[1fr_360px]">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
            <img
              src={activeIndustry.image}
              alt={activeIndustry.title}
              className="h-[260px] w-full object-cover sm:h-[330px] lg:h-[390px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020b18]/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 rounded-full bg-black/45 px-4 py-2 text-base font-bold backdrop-blur-md">
              {String(currentIndex + 1).padStart(2, "0")}
              <span className="text-blue-300">
                {" "}
                / {String(headingsData.length).padStart(2, "0")}
              </span>
            </div>
            <div className="absolute bottom-5 right-5 flex gap-2">
              <button
                type="button"
                onClick={goToPrevious}
                aria-label="Previous industry"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-md transition hover:bg-white/20"
              >
                <ArrowLeftIcon className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={goToNext}
                aria-label="Next industry"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-800 to-blue-800 text-white shadow-[0_12px_30px_rgba(30,64,175,0.35)] transition hover:from-blue-900 hover:to-blue-900"
              >
                <ArrowRightIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/[0.035] p-3 shadow-[0_24px_70px_rgba(0,0,0,0.25)]">
            {headingsData.map((heading) => {
              const Icon = heading.Icon;
              const isActive =
                (selectedHeading && selectedHeading.id === heading.id) ||
                currentIndex ===
                  headingsData.findIndex((item) => item.title === heading.title);

              return (
                <button
                  type="button"
                  key={heading.id}
                  onClick={() => selectIndustry(heading)}
                  className={`group flex w-full items-center gap-4 border-b border-white/10 px-3 py-2.5 text-left transition last:border-b-0 ${
                    isActive
                      ? "rounded-xl border border-blue-300/45 bg-blue-950/70 shadow-[0_16px_32px_rgba(30,64,175,0.16)]"
                      : "hover:bg-white/[0.04]"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${
                      isActive
                        ? "border-blue-300 bg-blue-800 text-white"
                        : "border-white/15 bg-white/[0.04] text-white/85"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="flex-1 text-base font-semibold text-white">
                    {heading.title}
                  </span>
                  <ArrowRightIcon className="h-5 w-5 text-white transition group-hover:translate-x-1" />
                </button>
              );
            })}
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-[700px] text-center text-base leading-7 text-white/78">
          {activeIndustry.content}
        </p>

        <div className="mx-auto mt-7 grid max-w-[900px] gap-5 md:grid-cols-3">
          {benefits.map(({ title, description, Icon }, index) => (
            <div
              key={title}
              className={`flex items-center gap-5 ${
                index > 0 ? "md:border-l md:border-white/12 md:pl-8" : ""
              }`}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-950 text-blue-300">
                <Icon className="h-6 w-6" />
              </span>
              <span>
                <strong className="block text-base text-white">{title}</strong>
                <span className="mt-1 block text-sm text-white/68">
                  {description}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries_we_serve;
