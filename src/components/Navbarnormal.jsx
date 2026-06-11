import React, { useEffect, useState } from "react";
import logo from "../assets/Logo.png";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  companyLinks,
  DesktopDropdown,
  HeaderContactButton,
  MobileDropdown,
  services,
} from "./HeaderDropdowns";

const Navbarnormal = () => {
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

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-20 shadow-md transition-colors duration-300 ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex">
          <a href="/" className="cursor-pointer">
            <img
              className="h-[30px] w-[160px] md:h-[50px] md:w-[280px]"
              src={logo}
              alt="Spidero Technology"
            />
          </a>
        </div>

        <div className="flex md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
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

        <Popover.Group className="hidden md:flex md:items-center md:gap-x-10 lg:ml-[18%] xl:ml-[25%]">
          <a
            href="/hire_developers"
            className="text-[18px] font-semibold tracking-wider text-gray-900 transition hover:text-violet-600"
          >
            Hire
          </a>
          <DesktopDropdown
            label="Expertise"
            items={services}
            footerHref="/expertice"
            footerLabel="View All Expertise"
          />
          <a
            href="/ourprocess"
            className="text-[18px] font-semibold tracking-wider text-gray-900 transition hover:text-violet-600"
          >
            Our Process
          </a>
          <DesktopDropdown label="Company" items={companyLinks} compact />
        </Popover.Group>

        <div className="hidden md:flex lg:flex-1 ml-8">
          <HeaderContactButton />
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10 bg-slate-950/30" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Spidero Technology</span>
              <img className="h-8 w-auto" src={logo} alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-8 flow-root">
            <div className="space-y-2">
              <a
                href="/hire_developers"
                className="-mx-3 block rounded-xl px-3 py-3 text-[17px] font-semibold leading-7 text-gray-950 transition hover:bg-violet-50"
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
                className="-mx-3 block rounded-xl px-3 py-3 text-[17px] font-semibold leading-7 text-gray-950 transition hover:bg-violet-50"
              >
                Our Process
              </a>
              <MobileDropdown label="Company" items={companyLinks} />
              <a
                href="/contact"
                className="mt-5 block rounded-2xl bg-slate-950 px-5 py-4 text-center text-[13px] font-bold uppercase tracking-[0.16em] text-white"
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

export default Navbarnormal;
