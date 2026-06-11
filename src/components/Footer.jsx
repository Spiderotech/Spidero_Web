import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  ArrowUpIcon,
  ChevronRightIcon,
  EnvelopeIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import skyline from "../assets/footer-banner1_2x.png";
import logo from "../assets/Logo.png";
import twitter from "../assets/twitter.png";
import fb from "../assets/fb.png";
import IG from "../assets/ig.png";
import lN from "../assets/ln.png";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/expertice" },
  { label: "Contact Us", href: "/contact" },
];

const services = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/spidero-technology/",
    icon: lN,
  },
  { label: "Twitter", href: "/", icon: twitter },
  { label: "Facebook", href: "/", icon: fb },
  { label: "Instagram", href: "/", icon: IG },
];

const SectionTitle = ({ children }) => (
  <div>
    <h3 className="text-lg font-bold text-[#071034]">{children}</h3>
    <span className="mt-3 block h-[2px] w-8 rounded-full bg-[#1f63ff]" />
  </div>
);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#f8fbff] font-sans text-[#4e5875]">
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto grid min-h-[330px] w-full max-w-[1536px] items-center px-6 py-10 md:grid-cols-[0.9fr_1.4fr] md:px-16 lg:min-h-[390px] lg:px-[88px]">
          <div className="relative z-10 max-w-[560px] text-left">
            <h2 className="text-[30px] font-bold leading-tight text-[#071034] sm:text-[36px] lg:text-[40px]">
              Like what you see?
              <br />
              Let&apos;s start a{" "}
              <span className="text-[#2563ff]">conversation.</span>
            </h2>
            <p className="mt-5 max-w-[330px] text-base leading-7 text-[#5b6685] sm:text-lg">
              We&apos;re here to help you build, grow and scale your digital
              ideas.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex h-[54px] items-center gap-4 rounded-lg bg-[#145dff] px-6 text-base font-semibold text-white shadow-[0_16px_30px_rgba(20,93,255,0.22)] transition hover:-translate-y-0.5 hover:bg-[#064bea]"
            >
              <PaperAirplaneIcon className="h-6 w-6 -rotate-45" />
              Get In Touch
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </div>

          <div className="relative mt-8 h-[170px] md:mt-0 md:h-[235px] lg:h-[300px]">
            <img
              src={skyline}
              alt="London skyline"
              className="absolute inset-x-0 bottom-0 h-full w-full object-contain object-bottom "
            />
           
          </div>
        </div>
      </section>

      <section className="border-t border-[#eef3fb] bg-[#f8fbff]">
        <div className="mx-auto max-w-[1360px] px-6 py-16 md:px-12 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.35fr_0.9fr_1.05fr_1.2fr_1.15fr] lg:gap-0">
            <div className="lg:pr-12">
              <Link to="/" aria-label="Spidero Technology home">
                <img
                  src={logo}
                  alt="Spidero Technology"
                  className="h-auto w-[238px] max-w-full"
                />
              </Link>
              <p className="mt-8 max-w-[300px] text-base leading-8">
                We build innovative digital solutions that help businesses grow,
                scale and succeed in the digital world.
              </p>
              <div className="mt-9 flex items-center gap-4">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : "_self"}
                    rel="noreferrer"
                    aria-label={item.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eef2f8] transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
                  >
                    <img
                      src={item.icon}
                      alt=""
                      className="h-5 w-5 object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>

            <div className="border-[#e5ebf5] lg:border-l lg:px-12">
              <SectionTitle>Quick Links</SectionTitle>
              <ul className="mt-7 space-y-4">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className="group flex items-center justify-between gap-4 text-base transition hover:text-[#145dff]"
                    >
                      {item.label}
                      <ChevronRightIcon className="h-4 w-4 text-[#8a94ad] transition group-hover:translate-x-1 group-hover:text-[#145dff]" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-[#e5ebf5] lg:border-l lg:px-12">
              <SectionTitle>Services</SectionTitle>
              <ul className="mt-7 space-y-4">
                {services.map((item) => (
                  <li key={item} className="text-base">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-[#e5ebf5] lg:border-l lg:px-12">
              <SectionTitle>Contact Us</SectionTitle>
              <address className="mt-7 space-y-6 not-italic">
                <div className="flex gap-4">
                  <MapPinIcon className="mt-1 h-5 w-5 shrink-0 text-[#145dff]" />
                  <p className="max-w-[260px] text-base leading-7">
                    2 Westbourne Crescent, London, W2 3DB, UK
                  </p>
                </div>
                <a
                  href="tel:+447468333505"
                  className="flex gap-4 text-base transition hover:text-[#145dff]"
                >
                  <PhoneIcon className="h-5 w-5 shrink-0 text-[#145dff]" />
                  +44 7468 333 505
                </a>
              </address>
            </div>

            <div className="border-[#e5ebf5] lg:border-l lg:pl-12">
              <SectionTitle>India Office</SectionTitle>
              <address className="mt-7 space-y-7 not-italic">
                <div className="flex gap-4">
                  <MapPinIcon className="mt-1 h-5 w-5 shrink-0 text-[#145dff]" />
                  <p className="max-w-[270px] text-base leading-7">
                    Ennakkad Ulunthy Rd, Ennakkad Gramam, Kerala, 689624, India
                  </p>
                </div>
                <a
                  href="tel:+919496046046"
                  className="flex gap-4 text-base transition hover:text-[#145dff]"
                >
                  <PhoneIcon className="h-5 w-5 shrink-0 text-[#145dff]" />
                  +91 9496 046 046
                </a>
              </address>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-6 border-t border-[#dfe6f2] pt-10 text-sm text-[#3f4863] md:flex-row md:items-center md:justify-between">
            <p>© 2024 Spidero Technology Inc. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <Link to="/privacy-policy" className="transition hover:text-[#145dff]">
                Privacy Policy
              </Link>
              <span className="h-5 w-px bg-[#c6cedd]" />
              <Link
                to="/terms-conditions"
                className="transition hover:text-[#145dff]"
              >
                Terms & Conditions
              </Link>
            </div>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex h-12 w-12 items-center justify-center rounded-lg bg-white text-[#145dff] shadow-[0_8px_20px_rgba(20,33,61,0.12)] transition hover:-translate-y-0.5 hover:bg-[#145dff] hover:text-white md:ml-4"
            >
              <ArrowUpIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
