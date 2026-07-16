import React, { useEffect } from "react";
import AOS from "aos";
import {
  CalendarDaysIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const stats = [
  {
    value: "4+",
    label: "Years in Business",
    icon: CalendarDaysIcon,
    iconBg: "bg-[#eef5ff]",
    iconClass: "text-blue-800",
    valueClass: "text-blue-800",
  },
  {
    value: "98%",
    label: "Client Retention",
    icon: UserGroupIcon,
    iconBg: "bg-blue-50",
    iconClass: "text-blue-800",
    valueClass: "text-blue-800",
  },
  {
    value: "100+",
    label: "Solutions Delivered",
    icon: RocketLaunchIcon,
    iconBg: "bg-blue-50",
    iconClass: "text-blue-800",
    valueClass: "text-blue-800",
  },
  {
    value: "10x",
    label: "Growth in 4 Years",
    icon: ChartBarIcon,
    iconBg: "bg-blue-50",
    iconClass: "text-blue-800",
    valueClass: "text-blue-800",
  },
];

const Companygrowthcard = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="relative overflow-hidden bg-white px-6 py-8 font-sans sm:px-10 md:px-14 lg:px-20 lg:py-10">
      <div className="pointer-events-none absolute -left-28 bottom-[-220px] h-[390px] w-[390px] rounded-full bg-[#eef5ff]" />
      <div className="pointer-events-none absolute right-10 top-8 hidden h-24 w-24 opacity-60 md:block">
        <div className="h-full w-full bg-[radial-gradient(circle,_#b8d3ff_1.8px,_transparent_1.8px)] [background-size:16px_16px]" />
      </div>

      <div className="relative mx-auto max-w-[1320px]">
        <div className="mx-auto max-w-[920px] text-center">
          <div className="flex items-center justify-center gap-5 text-[12px] font-bold uppercase tracking-[0.32em] text-blue-800 md:text-[14px]">
            <span className="h-px w-5 bg-blue-800" />
            <span>Our Growth Journey</span>
            <span className="h-px w-5 bg-blue-800" />
          </div>
          <span className="mx-auto mt-3 block h-1 w-16 rounded-full bg-gradient-to-br from-blue-800 to-blue-800" />
        </div>

        <div className="mt-10 grid gap-y-10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-y-0">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className={`relative flex flex-col items-center px-5 text-center ${
                  index !== stats.length - 1
                    ? "lg:border-r lg:border-[#d9dee8]"
                    : ""
                }`}
                data-aos="flip-up"
                data-aos-duration="1000"
              >
                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-full ${stat.iconBg} md:h-24 md:w-24`}
                >
                  <Icon className={`h-10 w-10 stroke-[2.1] ${stat.iconClass}`} />
                </div>

                <div
                  className={`mt-6 text-[38px] font-bold leading-none md:text-[46px] ${stat.valueClass}`}
                >
                  {stat.value}
                </div>

                <div className="mt-4 text-[17px] font-medium leading-6 text-[#252b3a] md:text-[20px]">
                  {stat.label}
                </div>

                <span className="mt-5 h-1 w-12 rounded-full bg-gradient-to-br from-blue-800 to-blue-800" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Companygrowthcard;
