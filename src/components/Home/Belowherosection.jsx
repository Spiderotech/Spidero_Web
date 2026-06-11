import React from "react";
import acc from "../../assets/financial-time.png";
import qu from "../../assets/salary-mail.png";
import proa from "../../assets/credit-card-bill.png";
import agi from "../../assets/investment-time.png";
import logo from "../../assets/logo.jpg";

const values = [
  {
    title: "Accountability",
    icon: acc,
    accent: "blue",
    card: "border-blue-100",
    iconBg: "bg-blue-50",
    line: "bg-blue-500",
  },
  {
    title: "Quality",
    icon: qu,
    accent: "orange",
    card: "border-orange-100",
    iconBg: "bg-orange-50",
    line: "bg-orange-500",
  },
  {
    title: "Proactivity",
    icon: proa,
    accent: "emerald",
    card: "border-emerald-100",
    iconBg: "bg-emerald-50",
    line: "bg-emerald-500",
  },
  {
    title: "Agility",
    icon: agi,
    accent: "purple",
    card: "border-purple-100",
    iconBg: "bg-purple-50",
    line: "bg-purple-500",
  },
];

const Belowherosection = () => {
  return (
    <section className="relative mt-8 overflow-hidden bg-white px-6 py-10 font-sans sm:px-10 md:px-14 lg:px-20 lg:py-14">
      <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-blue-50" />
      <div className="pointer-events-none absolute -right-28 top-0 h-[430px] w-[430px] rounded-full bg-sky-50" />
      <div className="pointer-events-none absolute left-[44%] top-14 hidden h-24 w-24 opacity-50 md:block">
        <div className="h-full w-full bg-[radial-gradient(circle,_#b9d7ff_1.7px,_transparent_1.7px)] [background-size:16px_16px]" />
      </div>

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-9 lg:grid-cols-[0.9fr_1fr] lg:gap-12">
        <div>
          <div className="inline-flex rounded-full bg-[#eef5ff] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#1d6df2]">
            Our Value Proposition
          </div>

          <h2 className="mt-6 max-w-[600px] text-[32px] font-bold leading-tight text-[#071435] md:text-[42px] lg:text-[46px]">
            Our Value Proposition
          </h2>

          <div className="mt-5 flex items-center gap-4">
            <span className="h-1 w-16 rounded-full bg-[#ff4d37]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff735f]" />
          </div>

          <div className="mt-7 max-w-[580px] space-y-4 text-[15px] leading-7 text-[#4b5568] md:text-[17px] md:leading-8">
            <p>
              In London's dynamic digital landscape, amidst ongoing
              disruptions, businesses need expert guidance and proven solutions
              to navigate web development challenges with confidence.
            </p>
            <p>
              That's where we come in. As a highly responsive and innovative
              software development agency based in London, we craft tailored
              digital solutions that empower businesses with cutting-edge
              technology to outperform competitors and excel in the
              ever-changing digital environment.
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[680px]">
          <div className="absolute left-1/2 top-1/2 z-10 hidden h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#edf3ff] bg-white shadow-[0_16px_45px_rgba(15,23,42,0.12)] md:flex">
            <span className="absolute inset-[-14px] rounded-full border border-dashed border-[#e4d1ff]" />
            <img
              src={logo}
              className="h-12 w-12 object-contain"
              alt="Spidero Technology logo"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:gap-5">
            {values.map((value) => (
              <article
                key={value.title}
                className={`min-h-[190px] rounded-[22px] border ${value.card} bg-white/90 p-6 shadow-[0_14px_38px_rgba(15,23,42,0.06)] backdrop-blur-sm md:min-h-[220px] md:p-7`}
                data-aos="flip-up"
                data-aos-duration="1000"
              >
                <div
                  className={`flex h-24 w-24 items-center justify-center rounded-2xl ${value.iconBg}`}
                >
                  <img
                    src={value.icon}
                    className="h-16 w-16 object-contain"
                    alt={`${value.title} icon`}
                  />
                </div>
                <h3 className="mt-5 text-[20px] font-bold leading-tight text-[#071435] md:text-[23px]">
                  {value.title}
                </h3>
                <span
                  className={`mt-4 block h-0.5 w-11 rounded-full ${value.line}`}
                />
              </article>
            ))}
          </div>
        </div>
      </div>

      <span className="pointer-events-none absolute bottom-24 left-40 h-6 w-6 rounded-full bg-rose-200/80 blur-[1px]" />
      <span className="pointer-events-none absolute bottom-32 left-[40%] h-5 w-5 rounded-full bg-orange-200/90 blur-[1px]" />
      <span className="pointer-events-none absolute right-16 top-1/2 h-5 w-5 rounded-full bg-blue-300" />
    </section>
  );
};

export default Belowherosection;
