import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Tilt } from "react-tilt";
import {
  ArrowRightIcon,
  CursorArrowRaysIcon,
  CursorArrowRippleIcon,
  LinkIcon,
  PaintBrushIcon,
  SparklesIcon,
  Squares2X2Icon,
  UserIcon,
} from "@heroicons/react/24/outline";

const principles = [
  {
    number: "01",
    title: "Providing Limited Choices",
    text: "Hick-Hyman's law emphasizes that an excess of choices can lead users away from the intended decision. To mitigate this risk, we purposefully limit the number of options to create a more user-friendly experience. This principle guides our approach in every web design project in London.",
    action: "APPLY HICK'S LAW",
    icon: CursorArrowRippleIcon,
    theme: {
      icon: "bg-violet-100 text-violet-600",
      number: "bg-violet-50 text-violet-600",
      border: "border-b-violet-600",
      text: "text-violet-600",
    },
  },
  {
    number: "02",
    title: "Blank Spaces? Not As Bad As You Think",
    text: "Despite sounding simple, incorporating white spaces between content is crucial. It prevents the content from feeling cramped, ensuring a more readable and focused experience for viewers.As a London-based web design company, we consistently prioritize principle.",
    action: "USE NEGATIVE SPACE",
    icon: Squares2X2Icon,
    theme: {
      icon: "bg-blue-100 text-blue-600",
      number: "bg-blue-50 text-blue-600",
      border: "border-b-blue-600",
      text: "text-blue-600",
    },
  },
  {
    number: "03",
    title: "CTA Insertions In Core Visual Areas",
    text: "Ensuring a design is pro-mobile or web responsive is insufficient if it doesn't drive optimal conversions. We strategically position to compelling Call-to-Action (CTA) elements within relevant information, empowering you to achieve maximum CTA effectiveness.",
    action: "RULE OF THIRDS",
    icon: CursorArrowRaysIcon,
    theme: {
      icon: "bg-emerald-100 text-emerald-600",
      number: "bg-emerald-50 text-emerald-600",
      border: "border-b-emerald-600",
      text: "text-emerald-600",
    },
  },
  {
    number: "04",
    title: "Best Blend Of Color And Contrast",
    text: "Leveraging insights from neuromarketing studies, we understand that the right color combination significantly enhances a product's visual appeal. Our design experts, well-versed in color psychology, optimize color contrast to deliver the perfect combination of design.",
    action: "BUILD HIERARCHY",
    icon: PaintBrushIcon,
    theme: {
      icon: "bg-orange-100 text-orange-500",
      number: "bg-orange-50 text-orange-500",
      border: "border-b-orange-500",
      text: "text-orange-500",
    },
  },
  {
    number: "05",
    title: "Specific Action And Familiarity Reinforcement",
    text: "Similar to celebrity endorsements, featuring familiar faces on a web platform builds trust with users and boosts Call-to-Action (CTA) engagement. Familiarity creates empathy, making it crucial to incorporate recognizable figures into web design.",
    action: "ESTABLISH RECOGNITION",
    icon: UserIcon,
    theme: {
      icon: "bg-pink-100 text-pink-500",
      number: "bg-pink-50 text-pink-500",
      border: "border-b-pink-500",
      text: "text-pink-500",
    },
  },
  {
    number: "06",
    title: "Consistent Branding",
    text: "For a successful website marketing strategy, our seasoned web design agency in London recommends maintaining a balanced consistency in brand colors, essence, and featured faces. This approach enhances user experience across both computer and mobile-friendly web designs.",
    action: "SET THE TONE",
    icon: LinkIcon,
    theme: {
      icon: "bg-violet-100 text-violet-600",
      number: "bg-violet-50 text-violet-600",
      border: "border-b-violet-500",
      text: "text-violet-600",
    },
  },
];

const tiltOptions = {
  max: 8,
  scale: 1.01,
  speed: 450,
};

const Designprinciple = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 80,
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#fbfcff] px-5 py-12 font-sans sm:px-8 lg:px-10 lg:py-14">
      <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-indigo-50" />
      <div className="pointer-events-none absolute right-12 top-20 hidden h-28 w-28 bg-[radial-gradient(circle,#c7d2fe_2px,transparent_2px)] [background-size:18px_18px] opacity-80 lg:block" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-indigo-50" />

      <div className="relative mx-auto max-w-[1180px]">
        <div className="text-center">
          <div className="inline-flex items-center rounded-md bg-violet-50 px-5 py-2 text-sm font-extrabold uppercase tracking-[0.18em] text-violet-600">
            Our Design Philosophy
          </div>

          <h2 className="mx-auto mt-5 max-w-[980px] text-4xl font-extrabold leading-tight tracking-normal text-[#07122f] sm:text-5xl lg:text-[58px]">
            6 design principles{" "}
            <span className="text-violet-600">we follow</span>
          </h2>

          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="h-1 w-20 rounded-full bg-violet-600" />
            <span className="h-1 w-2 rounded-full bg-violet-600" />
          </div>

          <p className="mx-auto mt-7 max-w-4xl text-base font-medium leading-7 tracking-normal text-slate-600">
            Leveraging our extensive 4+ years of experience, we've honed the art
            of understanding what works and what doesn't in design. Clients
            benefit from the ability to envision their product from the outset.
            Here's our approach to achieve pixel-perfect results.
          </p>
        </div>

        <div className="mt-10 grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
          {principles.map(({ number, title, text, action, icon: Icon, theme }, index) => (
            <Tilt key={number} options={tiltOptions}>
              <article
                className={`relative flex h-full min-h-[390px] flex-col overflow-hidden rounded-xl border border-slate-200 ${theme.border} border-b-4 bg-white p-7 shadow-[0_18px_55px_rgba(15,23,42,0.08)] transition hover:shadow-[0_24px_75px_rgba(15,23,42,0.12)]`}
                data-aos="zoom-out-down"
                data-aos-duration="1000"
                data-aos-delay={index * 90}
              >
                <div className="flex items-start justify-between gap-5">
                  <span
                    className={`flex h-16 w-16 items-center justify-center rounded-xl ${theme.icon}`}
                  >
                    <Icon className="h-9 w-9" />
                  </span>
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full text-base font-extrabold ${theme.number}`}
                  >
                    {number}
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-extrabold leading-tight tracking-normal text-[#07122f]">
                  {title}
                </h3>
                <p className="mt-5 text-[15px] font-medium leading-7 tracking-normal text-slate-600">
                  {text}
                </p>

                <div className="mt-auto pt-5">
                  <div className="mb-4 h-px bg-slate-200" />
                  <a
                    href="/contact"
                    className={`flex items-center justify-between text-sm font-extrabold uppercase tracking-[0.08em] ${theme.text}`}
                  >
                    {action}
                    <ArrowRightIcon className="h-5 w-5" />
                  </a>
                </div>
              </article>
            </Tilt>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Designprinciple;
