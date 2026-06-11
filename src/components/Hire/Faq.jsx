import React, { useState } from "react";
import {
  ChatBubbleLeftRightIcon,
  ChevronDownIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const faqData = [
  {
    question:
      "Is there a minimum commitment that you require from me in terms of longevity of the project?",
    answer:
      "Spiderotechnology - Not at all, you can run the team as long or as short as you want. There is no minimum commitment and we go by month on month basis. You can pause after a month or restart after an interval, increase or decrease team size, ask for any skills other than the core skills needed for your project. Do as you may please!",
  },
  {
    question: "Does this plan cover the cost of AI development also?",
    answer: "Spiderotechnology - No",
  },
  {
    question: "Can I swap the engineering skill on the basis of my project?",
    answer:
      "Spiderotechnology - Yes, inside the development hours you can pick any skill that you want for the project for some of the hours or all the hours. Ultimately you're paying for the collective hours of the work covering all skills.",
  },
  {
    question: "What are the Tech stack that your developers use?",
    answer:
      "Spiderotechnology - Multiple: React.js, Node.js, React Native, iOS native (swift), Android native (Kotline), AI - OpenAI, GPT, Python, Angular, PHP, Laravel, Wordpress, .NET, Asp.NET, DevOps (Azure, AWS, Google cloud), HTML, JS, Figma and so on.",
  },
  {
    question: "What are the non tech skills that I can buy?",
    answer:
      "Spiderotechnology - Multiple: Digital Marketing, Email Marketing, Investment pitchers, Lead Generation, PPC management, Meta Ads management, Customer care executive (Voice/ non voice), Market Research, Content writer/ copywriter, Video creator and editor. Every skill that we use for ourselves for non-tech business requirements is available to you.",
  },
  {
    question: "How would I pay?",
    answer:
      "Spiderotechnology - You can pay using bank wire, ACH, Credit Card, Debit Card. Our online payment system supports all possible payment options. We'll send you a payment link every month according to your invoice cycle.",
  },
  {
    question: "I need a team bigger than 3 core developers?",
    answer:
      "Spiderotechnology - Contact contact@spiderotechnology.com directly and we'll give you as large a team as you want.",
  },
  {
    question: "Are all your engineers and other staff in-house?",
    answer:
      "Spiderotechnology - Yes, it is. You'll only work with a full time Spiderotechnology'ian, every single time.",
  },
  {
    question: "What is the experience level of Developers in these plans?",
    answer:
      "Spiderotechnology - Minimum 3 years, and then bigger and complex the project the more experienced ones are introduced in the team.",
  },
  {
    question: "Can I talk to your development team before hiring you?",
    answer:
      "Spiderotechnology - Yes, that's what we would like you to do too. Be our guest!",
  },
  {
    question: "Is there any free trial?",
    answer:
      "Spiderotechnology - We offer a one week trial for one project. You can give us a task and we'll accomplish that.",
  },
  {
    question:
      "Do you replace a developer or a team if they don't perform up to the mark?",
    answer:
      "Spiderotechnology - We never needed to do that so far, but if such a situation arises you just notify us and we'll replace an individual or a whole team for you.",
  },
  {
    question:
      "Who's accountable for my work, the team, or developer individually or whole Spiderotechnology?",
    answer:
      "Spiderotechnology - It's always Spiderotechnology which is 100% accountable for your project, irrespective of whichever team you work with. The client will never be under-served!",
  },
  {
    question: "Can I use my retainer hours in more than one project?",
    answer:
      "Spiderotechnology - Yes, its your hours, your team. Utilize them for one project or many - do as you may please!",
  },
];

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleToggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="relative overflow-hidden bg-[#f7faff] px-5 py-16 font-sans sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-orange-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-[1180px]">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-blue-700 shadow-sm ring-1 ring-blue-100">
            <SparklesIcon className="h-4 w-4" />
            Hiring Questions
          </div>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-normal text-[#071435] sm:text-4xl lg:text-[46px]">
            Frequently asked questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-7 text-[#5f6b85]">
            Answers to common questions about hiring dedicated developers,
            flexible teams, billing, and project support.
          </p>
        </div>

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-[0.34fr_0.66fr]">
          <aside className="h-fit rounded-2xl border border-blue-100 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] lg:sticky lg:top-28">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
              <QuestionMarkCircleIcon className="h-8 w-8" />
            </span>
            <h3 className="mt-5 text-2xl font-extrabold text-[#071435]">
              Still have a question?
            </h3>
            <p className="mt-3 text-sm font-medium leading-6 text-[#65718a]">
              Send your question to our team and we will help you choose the
              right hiring model for your project.
            </p>
            <a
              href="mailto:contact@spiderotechnology.com"
              className="mt-6 inline-flex h-12 items-center justify-center gap-3 rounded-xl bg-blue-800 px-5 text-sm font-bold text-white shadow-[0_14px_30px_rgba(30,64,175,0.24)] transition hover:-translate-y-0.5 hover:bg-blue-900"
            >
              <ChatBubbleLeftRightIcon className="h-5 w-5" />
              Contact Support
            </a>
          </aside>

          <div className="space-y-3">
            {faqData.map((item, index) => {
              const isExpanded = expandedIndex === index;

              return (
                <article
                  key={item.question}
                  className={`overflow-hidden rounded-2xl border bg-white transition duration-300 ${
                    isExpanded
                      ? "border-blue-300 shadow-[0_18px_45px_rgba(30,64,175,0.12)]"
                      : "border-slate-200 shadow-sm hover:border-blue-200"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => handleToggle(index)}
                    className="flex w-full items-center gap-4 px-5 py-4 text-left"
                    aria-expanded={isExpanded}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-extrabold ${
                        isExpanded
                          ? "bg-blue-800 text-white"
                          : "bg-blue-50 text-blue-700"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-base font-extrabold leading-6 text-[#071435]">
                      {item.question}
                    </span>
                    <ChevronDownIcon
                      className={`h-5 w-5 shrink-0 text-[#64708a] transition ${
                        isExpanded ? "rotate-180 text-blue-800" : ""
                      }`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="border-t border-slate-100 px-5 pb-5 pt-4">
                      <p className="pl-14 text-sm font-medium leading-7 text-[#526078]">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
