import React, { useState } from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  MinusIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

const faqData = [
  {
    question: "How can I choose the best custom software company for my business?",
    answer:
      "In order to choose the best bespoke software development firm that can meet your evolving business needs, you need to: Check the company's reviews to ensure you're getting the best value for money. Review the organization's portfolio to get a good idea of what services they are offering. Most software firms specialize in building projects of a certain size. So you'll want to make sure you know exactly what size your custom software will be. Identify the technology stack the company uses. See if they offer ongoing support and maintenance once the project is delivered.",
  },
  {
    question: "How can I choose the best custom software company for my business?",
    answer:
      "In order to choose the best bespoke software development firm that can meet your evolving business needs, you need to: Check the company's reviews to ensure you're getting the best value for money. Review the organization's portfolio to get a good idea of what services they are offering. Most software firms specialize in building projects of a certain size. So you'll want to make sure you know exactly what size your custom software will be. Identify the technology stack the company uses. See if they offer ongoing support and maintenance once the project is delivered.",
  },
  {
    question: "Why is customized software developed?",
    answer:
      "At Spidero Technology, we develop custom software products to speed up business processes and improve productivity without having to modify or adjust commercial off-the-shelf software applications. Since we offer scalable software services, the product grows with the ever evolving needs of your business",
  },
  {
    question:
      "Are there any differences between customized software and off-the-shelf software solutions?",
    answer:
      "A common question that comes to a business owner's mind is whether to have a custom software developed or choose an off-the-shelf software solution. The readily available off-the-shelf software usually falls short when it comes to meeting the specific needs of your business. If you opt for off-the-shelf software, your business will have to adapt to its features and capabilities. Customized software applications developed at Spidero Technology, on the other hand, caters to your exact business needs.",
  },
  {
    question:
      "How do I identify the right tech stack for my custom software application development requirements?",
    answer:
      "When it comes to choosing the tech stack, we delve deep into several factors - the existing platforms, infrastructure of the client, scalability, data types, and so on. The specific requirements and features expected from the software application play a major role in making this decision.",
  },
  {
    question: "Why should I invest in a tailored software solution?",
    answer:
      "One of the primary reasons for choosing custom software development is that traditional, free tools often can't address your unique business requirements, do not support certain integrations, have limited or expensive scalability, or may be more costly in the long term. Here at Spidero Technology, we look at the cost-effectiveness of developing custom software products and discuss preferred options with stakeholders.",
  },
  {
    question: "How long will it take to develop my software product?",
    answer:
      "The duration of a custom software development project can range from 3 months to 6 months or more depending on the nature of the software and your project structure. Also, each development sprint takes a different amount of time based on the nature and complexity of your project.",
  },
  {
    question:
      "Why should I hand over my custom software development project to Spidero Technology?",
    answer:
      "Spidero Technology is an London-based enterprise software development company you can count on, backed by a team of dedicated, passionate professionals who are focused on delivering real, quantifiable business value.",
  },
  {
    question: "Will I be able to integrate the software with other systems?",
    answer:
      "Yes, customized software can be developed to easily integrate with existing systems and legacy applications in the intended environment. Unification of several subsystems and applications will help in streamlining your business processes.",
  },
  {
    question: "What benefits will I get from your custom software solution?",
    answer:
      "By investing in our bespoke software development service, you will be able to customize the software solution to the specific needs and specifications of your business. You will be able to shape the software solution to your specific needs. Our dedicated development team will ensure that you receive technical support whenever you face a problem.",
  },
];

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleToggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="bg-white px-6 py-14 font-sans text-[#071734] lg:px-10">
      <div className="mx-auto max-w-[1180px]">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#eef3ff] px-4 py-2 text-sm font-bold uppercase tracking-wide text-[#1f63ff]">
            <QuestionMarkCircleIcon className="h-5 w-5" />
            FAQs
          </span>
          <h2 className="mt-5 text-[34px] font-bold leading-tight sm:text-[46px] lg:text-[56px]">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg font-medium text-[#5d6882]">
            Find answers to common questions about our custom software
            development services.
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {faqData.slice(0, 7).map((item, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <article
                key={`${item.question}-${index}`}
                className={`overflow-hidden rounded-xl border bg-white transition ${
                  isExpanded
                    ? "border-[#2f60ff] shadow-[0_18px_45px_rgba(47,96,255,0.09)]"
                    : "border-[#e1e7f2] shadow-[0_8px_24px_rgba(14,32,64,0.035)]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  className="flex w-full items-center gap-5 px-6 py-5 text-left"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0f4ff] text-base font-bold text-[#1f63ff]">
                    {isExpanded ? <MinusIcon className="h-5 w-5" /> : String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-lg font-bold leading-snug text-[#071734]">
                    {item.question}
                  </span>
                  {isExpanded ? (
                    <ChevronUpIcon className="h-6 w-6 shrink-0 text-[#1f63ff]" />
                  ) : (
                    <ChevronDownIcon className="h-6 w-6 shrink-0 text-[#1f2f54]" />
                  )}
                </button>

                {isExpanded && (
                  <div className="grid gap-6 px-6 pb-6 md:grid-cols-[112px_1fr] md:items-center">
                    <span className="flex h-[84px] w-[84px] items-center justify-center rounded-2xl bg-[#eef3ff] text-[#1f63ff]">
                      <QuestionMarkCircleIcon className="h-10 w-10" />
                    </span>
                    <p className="text-base font-medium leading-8 text-[#405078]">
                      {item.answer}
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
