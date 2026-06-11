import React, { Fragment } from "react";
import { Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowRightIcon,
  BuildingOffice2Icon,
  CodeBracketIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  PaintBrushIcon,
  SparklesIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export const services = [
  {
    name: "Custom Software Development",
    href: "/custom",
    description: "Tailored platforms that solve complex business needs.",
    icon: CpuChipIcon,
    accent: "from-violet-500 to-indigo-500",
  },
  {
    name: "Web Development",
    href: "/web",
    description: "Fast, secure, and scalable websites built to grow.",
    icon: CodeBracketIcon,
    accent: "from-sky-500 to-blue-600",
  },
  {
    name: "Web Design",
    href: "/webdesign",
    description: "Conversion focused interfaces with polished visual systems.",
    icon: PaintBrushIcon,
    accent: "from-fuchsia-500 to-violet-600",
  },
  {
    name: "Mobile App Development",
    href: "/mobile",
    description: "iOS and Android products crafted for smooth user journeys.",
    icon: DevicePhoneMobileIcon,
    accent: "from-emerald-500 to-teal-500",
  },
];

export const companyLinks = [
  {
    name: "About Us",
    href: "/about",
    description: "Meet the people, story, and values behind Spidero.",
    icon: BuildingOffice2Icon,
    accent: "from-violet-500 to-indigo-500",
  },
  {
    name: "Careers",
    href: "/careers",
    description: "Join a team building thoughtful digital products.",
    icon: UsersIcon,
    accent: "from-sky-500 to-blue-600",
  },
  {
    name: "Contact Us",
    href: "/contact",
    description: "Start a conversation about your next project.",
    icon: EnvelopeIcon,
    accent: "from-fuchsia-500 to-rose-500",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const DesktopDropdown = ({
  label,
  items,
  isDark = false,
  compact = false,
  footerHref,
  footerLabel,
}) => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              "group flex items-center gap-x-1 text-[18px] font-semibold tracking-wider outline-none transition",
              isDark ? "text-white hover:text-violet-200" : "text-gray-900 hover:text-violet-600"
            )}
          >
            {label}
            <ChevronDownIcon
              className={classNames(
                open ? "rotate-180" : "",
                "h-5 w-5 flex-none transition-transform duration-200",
                isDark ? "text-white/70" : "text-gray-500"
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-2 scale-95"
            enterTo="opacity-100 translate-y-0 scale-100"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0 scale-100"
            leaveTo="opacity-0 translate-y-2 scale-95"
          >
            <Popover.Panel
              className={classNames(
                "absolute left-1/2 top-full z-40 mt-4 -translate-x-1/2 overflow-hidden rounded-2xl border border-white/60 bg-white/95 shadow-[0_20px_54px_rgba(15,23,42,0.16)] ring-1 ring-slate-900/5 backdrop-blur-xl",
                compact ? "w-[300px]" : "w-[min(600px,90vw)]"
              )}
            >
              <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 border-l border-t border-white/70 bg-white" />
              <div className="bg-gradient-to-br from-white via-[#f7f8ff] to-[#eef3ff] p-2.5">
                <div
                  className={classNames(
                    "grid gap-2",
                    compact ? "grid-cols-1" : "grid-cols-2"
                  )}
                >
                  {items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        className="group/item flex gap-2.5 rounded-xl border border-transparent bg-white/60 p-3 transition duration-200 hover:-translate-y-0.5 hover:border-violet-100 hover:bg-white hover:shadow-[0_12px_26px_rgba(79,70,229,0.12)]"
                      >
                        <span
                          className={classNames(
                            "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg",
                            item.accent
                          )}
                        >
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span className="min-w-0">
                          <span className="flex items-center gap-2 text-[14px] font-bold leading-5 text-slate-950">
                            {item.name}
                            <ArrowRightIcon className="h-4 w-4 opacity-0 transition group-hover/item:translate-x-1 group-hover/item:opacity-100" />
                          </span>
                          <span className="mt-0.5 block text-[12px] leading-4 text-slate-600">
                            {item.description}
                          </span>
                        </span>
                      </a>
                    );
                  })}
                </div>

                {footerHref && (
                  <a
                    href={footerHref}
                    className="mt-2.5 flex items-center justify-between rounded-xl border border-violet-100 bg-white px-3.5 py-2.5 text-[12px] font-bold uppercase tracking-[0.14em] text-violet-600 transition hover:border-violet-300 hover:bg-violet-50"
                  >
                    <span className="flex items-center gap-2">
                      <SparklesIcon className="h-4 w-4" />
                      {footerLabel}
                    </span>
                    <ArrowRightIcon className="h-4 w-4" />
                  </a>
                )}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export const MobileDropdown = ({ label, items, footerHref, footerLabel }) => (
  <Disclosure as="div" className="-mx-3">
    {({ open }) => (
      <>
        <Disclosure.Button className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-[16px] font-semibold leading-7 text-gray-950 transition hover:bg-violet-50">
          {label}
          <ChevronDownIcon
            className={classNames(
              open ? "rotate-180 text-violet-600" : "text-gray-500",
              "h-5 w-5 flex-none transition"
            )}
            aria-hidden="true"
          />
        </Disclosure.Button>
        <Disclosure.Panel className="mt-1.5 space-y-1.5 rounded-2xl border border-violet-100 bg-violet-50/60 p-2">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className="flex gap-2.5 rounded-xl bg-white px-3 py-2.5 text-left shadow-sm transition hover:bg-white"
              >
                <span
                  className={classNames(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white",
                    item.accent
                  )}
                >
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-[14px] font-bold leading-5 text-slate-950">
                    {item.name}
                  </span>
                  <span className="mt-0.5 block text-[11px] leading-4 text-slate-600">
                    {item.description}
                  </span>
                </span>
              </Disclosure.Button>
            );
          })}
          {footerHref && (
            <Disclosure.Button
              as="a"
              href={footerHref}
              className="flex items-center justify-between rounded-xl bg-slate-950 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white"
            >
              {footerLabel}
              <ArrowRightIcon className="h-4 w-4" />
            </Disclosure.Button>
          )}
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
);

export const HeaderContactButton = ({ isDark = false }) => (
  <a
    href="/contact"
    className={classNames(
      "group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full px-5 text-[12px] font-bold uppercase tracking-[0.16em] transition duration-300",
      isDark
        ? "border border-white/20 bg-white text-slate-950 shadow-[0_14px_34px_rgba(255,255,255,0.16)] hover:border-blue-800 hover:bg-blue-800 hover:text-white"
        : "border border-violet-100 bg-slate-950 text-white shadow-[0_14px_34px_rgba(79,70,229,0.22)] hover:border-blue-800 hover:bg-blue-800"
    )}
  >
    <span className="relative z-10 flex items-center gap-2">
      Contact Us
      <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
    </span>
  </a>
);
