import React, { useEffect, useState } from "react";
import logo from "../assets/Logo (1).png";
import logo1 from "../assets/Logo.png";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  companyLinks,
  DesktopDropdown,
  HeaderContactButton,
  MobileDropdown,
  services,
} from "./HeaderDropdowns";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isDarkNav = !isScrolled;

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-20 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8 lg:py-6"
        aria-label="Global"
      >
        <div className="flex">
          <a href="/" className="cursor-pointer">
            <img
              className="h-auto w-[170px] sm:w-[220px] lg:ml-5 lg:w-[280px]"
              src={isScrolled ? logo1 : logo}
              alt="Spidero Technology"
            />
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className={`inline-flex items-center justify-center rounded-md p-2.5 ${
              isDarkNav ? "text-white" : "text-gray-700"
            }`}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <span className="sr-only">
              {mobileMenuOpen ? "Close main menu" : "Open main menu"}
            </span>
            {mobileMenuOpen ? (
              <XMarkIcon className="h-9 w-9" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-9 w-9" aria-hidden="true" />
            )}
          </button>
        </div>

        <Popover.Group className="hidden lg:ml-[8%] lg:flex lg:items-center lg:gap-x-7 xl:ml-[18%] xl:gap-x-10 2xl:ml-[25%]">
          <a
            href="/hire_developers"
            className={`text-[18px] font-semibold tracking-wider transition ${
              isDarkNav ? "text-white hover:text-blue-200" : "text-gray-900 hover:text-blue-800"
            }`}
          >
            Hire
          </a>
          <DesktopDropdown
            label="Expertise"
            items={services}
            isDark={isDarkNav}
            footerHref="/expertice"
            footerLabel="View All Expertise"
          />
          <a
            href="/ourprocess"
            className={`text-[18px] font-semibold tracking-wider transition ${
              isDarkNav ? "text-white hover:text-blue-200" : "text-gray-900 hover:text-blue-800"
            }`}
          >
            Our Process
          </a>
          <DesktopDropdown
            label="Company"
            items={companyLinks}
            isDark={isDarkNav}
            compact
          />
        </Popover.Group>

        <div className="ml-5 hidden lg:flex lg:flex-1">
          <HeaderContactButton isDark={isDarkNav} />
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10 bg-slate-950/35" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 flex w-full max-w-full flex-col overflow-y-auto bg-white px-5 py-5 shadow-2xl sm:max-w-[520px] sm:px-7 md:max-w-[560px] md:px-8 lg:ring-1 lg:ring-gray-900/10">
          <div className="flex items-center justify-between gap-5 border-b border-slate-200 pb-5">
            <a href="/" className="min-w-0 p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-800">
              <span className="sr-only">Spidero Technology</span>
              <img className="h-auto w-[190px] max-w-full sm:w-[230px]" src={logo1} alt="" />
            </a>
            <button
              type="button"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-gray-700 transition hover:bg-slate-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-5 flow-root">
            <div className="space-y-2.5">
              <a
                href="/hire_developers"
                className="block rounded-xl px-3 py-3 text-[17px] font-semibold leading-7 text-gray-950 transition hover:bg-blue-50 sm:text-[18px]"
              >
                Hire
              </a>
              <MobileDropdown
                label="Expertise"
                items={services}
                footerHref="/expertice"
                footerLabel="View All Expertise"
              />
              <a
                href="/ourprocess"
                className="block rounded-xl px-3 py-3 text-[17px] font-semibold leading-7 text-gray-950 transition hover:bg-blue-50 sm:text-[18px]"
              >
                Our Process
              </a>
              <MobileDropdown label="Company" items={companyLinks} />
              <a
                href="/contact"
                className="mt-6 block rounded-2xl bg-gradient-to-br from-blue-800 to-blue-800 px-5 py-4 text-center text-[13px] font-bold uppercase tracking-[0.16em] text-white sm:py-5"
              >
                Contact Us
              </a>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
