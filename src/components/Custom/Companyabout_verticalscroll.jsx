import React from 'react';
import {
  ArrowRightIcon,
  BoltIcon,
  CheckBadgeIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

const cards = [
  {
    title: 'Consulting',
    icon: LightBulbIcon,
    accent: 'from-blue-500 to-cyan-400',
    text: 'Spidero Technology software consulting services seamlessly guide you in digitizing operations and streamlining workflows to align with your business objectives. Our expert advice ensures the selection of optimal solutions for accelerated business growth.',
  },
  {
    title: 'Proactivity',
    icon: BoltIcon,
    accent: 'from-violet-500 to-blue-500',
    text: 'In software outsourcing, many development firms act passively, awaiting clear instructions from clients. In contrast, we position ourselves as proactive experts, aiming to diminish operational overheads through proactive communication and engagement. We guide and monitor project progress to ensure a seamless and efficient collaboration.',
  },
  {
    title: 'Best Practices',
    icon: ShieldCheckIcon,
    accent: 'from-emerald-500 to-teal-400',
    text: 'At UI, we adhere to the belief that the key to successful, high-quality software products lies in the engineering process. Following CMMI Level 3 protocols and industry best practices, we ensure our products are crafted through a well-established set of protocols.',
  },
  {
    title: 'Accountability',
    icon: CheckBadgeIcon,
    accent: 'from-orange-500 to-amber-400',
    text: 'We consider every project a milestone in our journey, holding ourselves accountable to deliver results for our clients. Leaving no stone unturned in our quest to provide the best digital solutions, we aim for a portfolio full of success stories, not just a list of random projects.',
  },
];

const Companyabout_verticalscroll = () => {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-14 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-80 w-80 rounded-full bg-indigo-100/60 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-24">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
            <SparklesIcon className="h-4 w-4" />
            Why Choose Us
          </div>

          <h2 className="mt-5 max-w-xl text-3xl font-extrabold leading-tight tracking-normal text-[#07122f] sm:text-4xl lg:text-5xl">
            What Makes Us the Most Trusted{' '}
            <span className="text-blue-600">Custom Software</span> Development Company?
          </h2>

          <div className="mt-5 h-1 w-20 rounded-full bg-blue-600" />

          <p className="mt-6 max-w-2xl text-base leading-8 tracking-normal text-slate-600">
            Spidero Technology is dedicated to crafting cutting-edge solutions that provide a growth-oriented competitive edge for your business. Our commitment to process transparency and a consistent, well-defined methodology positions us as the ideal choice for your custom software development project.
          </p>

          <div className="mt-8 grid max-w-lg grid-cols-3 gap-3">
            {[
              ['04+', 'Core Values'],
              ['100%', 'Transparent'],
              ['24/7', 'Support'],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-blue-100 bg-white/80 px-4 py-4 text-center shadow-[0_16px_45px_rgba(18,52,125,0.08)]"
              >
                <div className="text-xl font-extrabold tracking-normal text-blue-600">{value}</div>
                <div className="mt-1 text-xs font-semibold tracking-normal text-slate-500">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-blue-200 via-blue-100 to-transparent sm:block" />

          <div className="space-y-4">
            {cards.map(({ title, icon: Icon, text, accent }, index) => (
              <article
                key={title}
                className="group relative rounded-3xl border border-slate-200/80 bg-white p-5 shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_70px_rgba(37,99,235,0.13)] sm:p-6"
              >
                <div className="flex gap-4">
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-50 shadow-inner">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${accent} opacity-10`} />
                    <Icon className="relative h-7 w-7 text-blue-600" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-[0.14em] text-blue-500">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <h3 className="mt-1 text-xl font-extrabold tracking-normal text-[#07122f]">
                          {title}
                        </h3>
                      </div>
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                        <ArrowRightIcon className="h-4 w-4" />
                      </div>
                    </div>

                    <p className="mt-3 text-sm leading-7 tracking-normal text-slate-600">
                      {text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companyabout_verticalscroll;
