import React from "react";
import web1 from "../../assets/custom/custom-01.svg";
import web2 from "../../assets/custom/custom-development-features-icon-02.svg";
import web3 from "../../assets/custom/custom-development-features-icon-03.svg";
import web4 from "../../assets/custom/custom-development-features-icon-04.svg";
import web5 from "../../assets/custom/custom-development-features-icon-05.svg";
import web6 from "../../assets/custom/custom-development-features-icon-06.svg";
import web7 from "../../assets/custom/custom-development-features-icon-07.svg";
import web8 from "../../assets/custom/custom-development-features-icon-08.svg";

const services = [
  {
    icon: web1,
    title: "Web Development",
    description:
      "Unlock tailored web-based software solutions tailored to address your unique business challenges. Our seasoned experts specialize in crafting bespoke digital solutions, including web portals, web applications, SaaS offerings, and other mission-critical web-based properties. Regardless of your business's size or complexity, our team is dedicated to providing efficient solutions that drive essential processes.",
  },
  {
    icon: web2,
    title: "App Development",
    description:
      "As a premier software development company based in London and India, we leverage over 4 years of expertise to craft cutting-edge applications and innovative solutions for renowned global brands. Our commitment to excellence ensures seamless user experiences across the latest platforms and devices, setting your brand apart in the digital landscape.",
  },
  {
    icon: web3,
    title: "Product Engineering",
    description:
      "To propel your business objectives forward, our dedicated team strategizes, designs, develops, tests, and scales software solutions. We specialize in bespoke software product development, encompassing ideation, development, and continuous innovation, ensuring your product stands out in the competitive market.",
  },
  {
    icon: web4,
    title: "App Modernization",
    description:
      "Providing specialized consultancy and global modernization services for legacy applications, we harness cutting-edge technologies, contemporary user experiences, and advanced cloud infrastructures. In today's dynamic digital landscape, opting for legacy application modernization is imperative for businesses seeking to stay ahead.",
  },
  {
    icon: web5,
    title: "Web 3.0 Development",
    description:
      "Where we specialize in constructing distributed and decentralized web-based systems. Utilizing cutting-edge technologies such as smart contracts, blockchain, DeFi, IoT, AI, VR, and ML, we offer an innovative solution set. Invest in our Web 3.0 Development Service to witness a substantial and measurable impact on your business.",
  },
  {
    icon: web6,
    title: "API & Microservices",
    description:
      "Empower your IT systems with our expertise in modernization through API integration and agile microservices. Following an API-first methodology, we specialize in crafting end-to-end digital applications, ensuring independent and seamless application integration for enhanced efficiency.",
  },
  {
    icon: web7,
    title: "MVP & POC Development",
    description:
      "Efficiently pursue diverse objectives with our Proof of Concept (PoC) and Minimum Viable Product (MVP) development services. Designed to validate your product idea and assess market adoption, these services offer a strategic approach for those facing time or resource constraints.",
  },
  {
    icon: web8,
    title: "Blockchain Development",
    description:
      "Empower your business to leverage the rising demand for blockchain-based applications. Our services enable secure, efficient, and time-stamped user-data transactions through a distributed digital ledger. This accelerates time to market, ensuring a highly safe and secured environment. Seize the opportunities of blockchain technology for your business growth.",
  },
];

const DotGrid = ({ className = "" }) => (
  <div
    className={`pointer-events-none absolute grid grid-cols-6 gap-3 ${className}`}
    aria-hidden="true"
  >
    {Array.from({ length: 36 }).map((_, index) => (
      <span key={index} className="h-1 w-1 rounded-full bg-[#b7ccff]" />
    ))}
  </div>
);

const Developmemt_service = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8fbff] px-5 py-12 font-sans sm:px-6 md:py-16 lg:px-10 lg:py-20">
      <DotGrid className="left-10 top-24 hidden lg:grid" />
      <DotGrid className="right-14 top-24 hidden lg:grid" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="mx-auto max-w-[1050px] text-center">
          <h2 className="text-[28px] font-bold leading-tight text-[#071734] sm:text-[42px] lg:text-[46px]">
            End-To-End Custom Software Development Services
          </h2>
          <p className="mt-5 text-[15px] leading-7 text-[#59657d] sm:mt-6 sm:text-lg sm:leading-8">
            Explore Spidero Technology&apos;s robust, secure, and scalable
            software development solutions, crafted to amplify business value.
            From collaborative ideation and strategic product planning to
            meticulous product engineering, thorough testing, and seamless
            scaling, our expert software developers drive efficient outcomes for
            global businesses. Transform your software vision into reality with
            Spidero Technology, delivering exceptional end-user experiences for
            sustained success.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="min-h-[auto] rounded-xl border border-[#e8edf6] bg-white p-5 text-left tracking-normal shadow-[0_12px_30px_rgba(14,32,64,0.055)] sm:min-h-[300px] sm:p-6"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#edf2ff]">
                <img
                  src={service.icon}
                  alt=""
                  className="h-7 w-7 object-contain"
                />
              </div>
              <h3 className="mt-6 text-[19px] font-bold leading-snug tracking-normal text-[#071734]">
                {service.title}
              </h3>
              <span className="mt-4 block h-[2px] w-9 rounded-full bg-gradient-to-br from-blue-800 to-blue-800" />
              <p className="mt-5 text-[14px] leading-7 tracking-normal text-[#202b44]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Developmemt_service;
