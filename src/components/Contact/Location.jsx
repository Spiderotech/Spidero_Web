import React from "react";
import indiaFlag from "../../assets/in.svg";
import ukFlag from "../../assets/london.jpg";
import {
  BuildingOffice2Icon,
  ClockIcon,
  EnvelopeIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const offices = [
  {
    country: "United Kingdom",
    flag: ukFlag,
    address: "113 Mellitus Street, London, England, W12 0AU",
    phone: "+44 7368937674",
    email: "contact@spiderotechnology.com",
    timezone: "GMT +0",
    theme: {
      text: "text-blue-800",
      bg: "bg-blue-50",
      button: "bg-gradient-to-br from-blue-800 to-blue-800",
    },
    mapSrc:
      "https://maps.google.com/maps?width=100%25&height=300&hl=en&q=113%20Mellitus%20Street,%20London,%20England,%20W12%200AU+(Spidero%20Technology)&t=&z=14&ie=UTF8&iwloc=B&output=embed",
    directions:
      "https://www.google.com/maps/search/?api=1&query=113%20Mellitus%20Street%2C%20London%2C%20England%2C%20W12%200AU",
  },
  {
    country: "India",
    flag: indiaFlag,
    address: "Ennakkad Ulunthy Rd, Ennakkad Gramam, Kerala",
    phone: "+91 8089650271",
    email: "contact@spiderotechnology.com",
    timezone: "GMT +5:30",
    theme: {
      text: "text-blue-800",
      bg: "bg-blue-50",
      button: "bg-gradient-to-br from-blue-800 to-blue-800",
    },
    mapSrc:
      "https://maps.google.com/maps?width=100%25&height=300&hl=en&q=Ennakkad%20Ulunthy%20Rd,%20Ennakkad%20Gramam,%20Kerala,%20689624+(Spidero%20Technology)&t=&z=14&ie=UTF8&iwloc=B&output=embed",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Ennakkad%20Ulunthy%20Rd%2C%20Ennakkad%20Gramam%2C%20Kerala",
  },
];

const ContactItem = ({ icon: Icon, label, value, theme }) => (
  <div className="flex min-w-0 items-center gap-4">
    <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${theme.bg} ${theme.text}`}>
      <Icon className="h-6 w-6" />
    </span>
    <div className="min-w-0">
      <p className="text-sm font-extrabold tracking-normal text-[#07122f]">{label}</p>
      <p className="truncate text-sm font-medium tracking-normal text-slate-600">{value}</p>
    </div>
  </div>
);

const Location = () => {
  return (
    <section className="bg-[#f7faff] px-5 py-16 font-sans sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-blue-800">
            Our Global Presence
          </p>
          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-normal text-[#07122f] sm:text-5xl lg:text-6xl">
            Where ideas meet impact
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 tracking-normal text-slate-600 sm:text-xl">
            With our offices in the UK and India, we collaborate across borders
            to deliver exceptional results for our clients worldwide.
          </p>
        </div>

        <div className="mt-12 grid gap-7 lg:grid-cols-2">
          {offices.map((office) => (
            <article
              key={office.country}
              className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-8"
            >
              <div className="flex items-center gap-6">
                <span className={`flex h-24 w-24 shrink-0 items-center justify-center rounded-xl ${office.theme.bg} ${office.theme.text}`}>
                  <BuildingOffice2Icon className="h-12 w-12" />
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-4">
                    <img
                      src={office.flag}
                      alt={office.country}
                      className="h-8 w-11 rounded-sm object-cover"
                    />
                    <h3 className="text-2xl font-extrabold tracking-normal text-[#07122f]">
                      {office.country}
                    </h3>
                  </div>
                  <div className="mt-4 flex items-start gap-3 text-base font-medium leading-7 tracking-normal text-slate-600">
                    <MapPinIcon className="mt-0.5 h-6 w-6 shrink-0 text-slate-600" />
                    <span>{office.address}</span>
                  </div>
                </div>
              </div>

              <div className="my-7 h-px bg-slate-200" />

              <div className="grid gap-5 sm:grid-cols-3">
                <ContactItem icon={PhoneIcon} label="Phone" value={office.phone} theme={office.theme} />
                <ContactItem icon={EnvelopeIcon} label="Email" value={office.email} theme={office.theme} />
                <ContactItem icon={ClockIcon} label="Time Zone" value={office.timezone} theme={office.theme} />
              </div>

              <div className="relative mt-7 overflow-hidden rounded-xl bg-slate-100">
                <iframe
                  title={`${office.country} office map`}
                  width="100%"
                  height="230"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src={office.mapSrc}
                  className="block w-full"
                />
                <a
                  href={office.directions}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute bottom-5 left-5 inline-flex h-14 items-center gap-3 rounded-lg bg-white px-5 text-base font-extrabold tracking-normal text-[#07122f] shadow-[0_14px_35px_rgba(15,23,42,0.15)] transition hover:-translate-y-0.5"
                >
                  <span className={`flex h-7 w-7 items-center justify-center rounded-full ${office.theme.button} text-white`}>
                    <PaperAirplaneIcon className="h-4 w-4" />
                  </span>
                  Get Directions
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Location;
