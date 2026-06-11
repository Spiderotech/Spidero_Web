import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const benefits = [
  { label: "Expert Guidance", Icon: ChatBubbleLeftRightIcon },
  { label: "Flexible Scheduling", Icon: CalendarDaysIcon },
  { label: "100% Confidential", Icon: ShieldCheckIcon },
];

const themes = {
  violet: {
    panel: "bg-[#fbfcff]",
    accent: "text-[#623cff]",
    soft: "bg-[#f0eaff]",
    orb: "bg-[#f2d9ff]/55",
    orb2: "bg-[#efd6ff]/70",
    line: "via-[#d4b7ff]",
    dot: "bg-[#dbc6ff]",
    button: "bg-[#020b1d] hover:bg-[#101b32]",
    shadow: "shadow-[0_16px_32px_rgba(98,60,255,0.18)]",
  },
  blue: {
    panel: "bg-[#f8fbff]",
    accent: "text-[#1266ff]",
    soft: "bg-[#eaf2ff]",
    orb: "bg-[#dceaff]/70",
    orb2: "bg-[#d8f0ff]/70",
    line: "via-[#acd0ff]",
    dot: "bg-[#a9cfff]",
    button: "bg-[#0b2f75] hover:bg-[#123f91]",
    shadow: "shadow-[0_16px_32px_rgba(18,102,255,0.16)]",
  },
  emerald: {
    panel: "bg-[#fbfffd]",
    accent: "text-[#0f9f6e]",
    soft: "bg-[#e9fbf3]",
    orb: "bg-[#d8f8ea]/70",
    orb2: "bg-[#d5f6ef]/70",
    line: "via-[#9fdec7]",
    dot: "bg-[#9fdec7]",
    button: "bg-[#06382b] hover:bg-[#0b4f3e]",
    shadow: "shadow-[0_16px_32px_rgba(15,159,110,0.16)]",
  },
  rose: {
    panel: "bg-[#fffafb]",
    accent: "text-[#e33d7d]",
    soft: "bg-[#ffeaf2]",
    orb: "bg-[#ffd7e7]/70",
    orb2: "bg-[#ffe1ed]/75",
    line: "via-[#ffadc9]",
    dot: "bg-[#ffadc9]",
    button: "bg-[#4a1027] hover:bg-[#681737]",
    shadow: "shadow-[0_16px_32px_rgba(227,61,125,0.16)]",
  },
};

const ContactCtaCard = ({
  eyebrow,
  title,
  description,
  icon,
  iconClass = "",
  theme = "violet",
}) => {
  const colors = themes[theme] || themes.violet;

  return (
    <section className="px-6 py-7 font-sans lg:px-10">
      <div
        className={`relative mx-auto max-w-[1320px] overflow-hidden rounded-[22px] border border-[#e8edf6] ${colors.panel} px-6 py-7 shadow-[0_16px_42px_rgba(14,32,64,0.07)] md:px-10 lg:px-12`}
      >
        <div
          className={`pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-bl-full ${colors.orb}`}
        />
        <div
          className={`pointer-events-none absolute bottom-0 right-0 h-20 w-28 rounded-tl-full ${colors.orb2}`}
        />
        <div className="pointer-events-none absolute right-[16%] top-10 hidden h-[160px] w-[440px] opacity-30 lg:block">
          <div
            className={`absolute left-0 top-6 h-px w-full bg-gradient-to-r from-transparent ${colors.line} to-transparent`}
          />
          <div
            className={`absolute left-12 top-20 h-px w-[86%] bg-gradient-to-r from-transparent ${colors.line} to-transparent`}
          />
          <div
            className={`absolute left-28 top-32 h-px w-[70%] bg-gradient-to-r from-transparent ${colors.line} to-transparent`}
          />
          <span
            className={`absolute left-20 top-4 h-2.5 w-2.5 rounded-full ${colors.dot}`}
          />
          <span
            className={`absolute left-56 top-[74px] h-2.5 w-2.5 rounded-full ${colors.dot}`}
          />
          <span
            className={`absolute right-28 top-[124px] h-2.5 w-2.5 rounded-full ${colors.dot}`}
          />
        </div>

        <div className="relative z-10 grid items-center gap-7 lg:grid-cols-[1fr_250px]">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="flex h-[96px] w-[96px] shrink-0 items-center justify-center rounded-full bg-white shadow-[0_12px_30px_rgba(74,44,255,0.1)]">
              {icon ? (
                <img
                  src={icon}
                  alt=""
                  className={`h-14 w-14 object-contain ${iconClass}`}
                />
              ) : (
                <ChatBubbleLeftRightIcon className={`h-12 w-12 ${colors.accent}`} />
              )}
            </div>

            <div>
              <p className={`text-sm font-bold uppercase tracking-wide ${colors.accent}`}>
                {eyebrow}
              </p>
              <h2 className="mt-3 text-[28px] font-bold leading-tight text-[#071734] sm:text-[34px] lg:text-[40px]">
                {title}
              </h2>
              <p className="mt-4 max-w-[560px] text-base font-medium leading-7 text-[#2f3a55] sm:text-lg">
                {description}
              </p>

              <div className="mt-6 flex flex-col gap-4 text-[#17223d] md:flex-row md:flex-wrap md:items-center">
                {benefits.map(({ label, Icon }, index) => (
                  <div key={label} className="flex items-center gap-3">
                    {index > 0 && (
                      <span className="hidden h-8 w-px bg-[#cfd6e5] md:block" />
                    )}
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${colors.soft} ${colors.accent}`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-base font-semibold">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/contact"
            className={`inline-flex h-14 w-full items-center justify-center gap-4 rounded-md ${colors.button} text-base font-bold uppercase text-white ${colors.shadow} transition hover:-translate-y-0.5 sm:w-[220px] lg:justify-self-end`}
          >
            <ArrowRightIcon className={`h-6 w-6 ${colors.accent}`} />
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactCtaCard;
