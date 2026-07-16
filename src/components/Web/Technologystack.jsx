import React from "react";
import web1 from "../../assets/techlogo/angular.webp";
import web2 from "../../assets/techlogo/node-js.webp";
import web3 from "../../assets/techlogo/java.webp";
import web4 from "../../assets/techlogo/php.webp";
import web5 from "../../assets/techlogo/python.webp";
import web6 from "../../assets/techlogo/react.webp";

import db1 from "../../assets/DB/mongodb.webp";
import db3 from "../../assets/DB/mysql.webp";
import db4 from "../../assets/DB/oracle.webp";
import db5 from "../../assets/DB/psql-icon.webp";
import db6 from "../../assets/DB/redis.webp";
import db7 from "../../assets/DB/sql.webp";

import open1 from "../../assets/Open/drupal.png";
import open2 from "../../assets/Open/magento.png";
import open3 from "../../assets/Open/woocommerce.png";
import open4 from "../../assets/Open/wordpress.png";
import open5 from "../../assets/Open/shopify.png";

import {
  CodeBracketSquareIcon,
  CircleStackIcon,
  ServerStackIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";

const rows = [
  {
    title: "Front-end",
    description: "Technologies we use to build fast and interactive user interfaces.",
    icon: CodeBracketSquareIcon,
    color: "blue",
    items: [
      { name: "Angular", logo: web1 },
      { name: "Java", logo: web3 },
      { name: "React", logo: web6 },
    ],
  },
  {
    title: "Back-end",
    description: "Robust technologies that power our server-side applications.",
    icon: ServerStackIcon,
    color: "blue",
    items: [
      { name: "Node.js", logo: web2 },
      { name: "Java", logo: web3 },
      { name: "PHP", logo: web4 },
      { name: "Python", logo: web5 },
    ],
  },
  {
    title: "OpenSource",
    description: "Powerful open-source platforms we trust and contribute to.",
    icon: ShareIcon,
    color: "blue",
    items: [
      { name: "Drupal", logo: open1 },
      { name: "Magento", logo: open2 },
      { name: "WooCommerce", logo: open3 },
      { name: "WordPress", logo: open4 },
      { name: "Shopify", logo: open5 },
    ],
  },
  {
    title: "Database",
    description: "Reliable database systems that ensure data integrity and performance.",
    icon: CircleStackIcon,
    color: "blue",
    items: [
      { name: "MongoDB", logo: db1 },
      { name: "MySQL", logo: db3 },
      { name: "Oracle", logo: db4 },
      { name: "PostgreSQL", logo: db5 },
      { name: "Redis", logo: db6 },
      { name: "SQL Server", logo: db7 },
    ],
  },
];

const theme = {
  blue: {
    border: "border-l-blue-800",
    text: "text-blue-800",
    bg: "bg-blue-50",
  },
};

const Technologystack = () => {
  return (
    <section className="bg-white px-5 py-16 font-sans sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl text-center">
          <div className="flex items-center justify-center gap-4 text-sm font-extrabold uppercase tracking-[0.22em] text-blue-800">
            <span className="hidden h-5 w-5 bg-[radial-gradient(circle,_#c4b5fd_1.8px,_transparent_1.8px)] [background-size:7px_7px] sm:block" />
            Technology Stack
            <span className="hidden h-5 w-5 bg-[radial-gradient(circle,_#c4b5fd_1.8px,_transparent_1.8px)] [background-size:7px_7px] sm:block" />
          </div>
          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-normal text-[#07122f] sm:text-5xl lg:text-6xl">
            Technology Stack{" "}
            <span className="bg-gradient-to-br from-blue-800 to-blue-800 bg-clip-text text-transparent">
              We Practice
            </span>
          </h2>
          <div className="mx-auto mt-6 h-1.5 w-16 rounded-full bg-gradient-to-br from-blue-800 to-blue-800" />
          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 tracking-normal text-slate-600">
            We leverage modern technologies and robust frameworks to build
            scalable, secure, and future-ready digital solutions.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {rows.map(({ title, description, icon: Icon, color, items }) => {
            const colors = theme[color];

            return (
              <article
                key={title}
                className={`grid gap-6 rounded-xl border border-slate-200/80 border-l-4 ${colors.border} bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.06)] lg:grid-cols-[360px_1fr] lg:items-center`}
              >
                <div className="grid gap-5 sm:grid-cols-[92px_1fr] sm:items-center">
                  <span className={`flex h-24 w-24 items-center justify-center rounded-2xl ${colors.bg} ${colors.text}`}>
                    <Icon className="h-12 w-12" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-extrabold tracking-normal text-[#07122f]">
                      {title}
                    </h3>
                    <p className="mt-3 max-w-xs text-sm font-medium leading-6 tracking-normal text-slate-600">
                      {description}
                    </p>
                  </div>
                </div>

                <div className="grid gap-5 border-slate-200 lg:border-l lg:pl-10 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
                  {items.map(({ name, logo }) => (
                    <div key={name} className="text-center">
                      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-xl bg-white p-4 shadow-[0_12px_35px_rgba(15,23,42,0.07)]">
                        <img src={logo} alt={name} className="max-h-full max-w-full object-contain" />
                      </div>
                      <p className="mt-3 text-sm font-semibold tracking-normal text-[#07122f]">
                        {name}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Technologystack;
