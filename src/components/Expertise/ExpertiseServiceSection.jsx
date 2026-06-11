import React from "react";

const ExpertiseServiceSection = ({ intro, services, className = "" }) => {
  return (
    <section className={`bg-white px-5 py-8 sm:px-8 lg:px-12 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {intro && (
          <div className="mb-9 max-w-5xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-blue-600">
              {intro.eyebrow}
            </p>
            <div className="mt-4 flex items-center gap-3">
              <span className="h-1.5 w-20 rounded-full bg-blue-600" />
              <span className="h-1.5 w-2 rounded-full bg-blue-600" />
            </div>
            <h1 className="mt-7 max-w-4xl text-3xl font-extrabold leading-tight tracking-normal text-[#07122f] sm:text-4xl lg:text-5xl">
              {intro.title}
            </h1>
            <p className="mt-6 text-lg font-medium leading-8 tracking-normal text-slate-500 sm:text-xl">
              {intro.subtitle}
            </p>
          </div>
        )}

        <div className="space-y-7">
          {services.map((service, index) => {
            const Icon = service.icon;
            const reverse = service.reverse ?? index % 2 === 1;

            return (
              <article
                key={service.title}
                className="overflow-hidden rounded-[1.8rem] border border-slate-200/80 bg-white p-4 shadow-[0_22px_70px_rgba(15,23,42,0.08)]"
              >
                <div
                  className={`grid gap-5 lg:grid-cols-2 lg:items-stretch ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="rounded-[1.4rem] bg-[#f5f8fe] p-6 sm:p-8">
                    <div className="flex items-start gap-5">
                      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-inner">
                        <Icon className="h-11 w-11" />
                      </div>
                      <div>
                        {service.href ? (
                          <a
                            href={service.href}
                            className="text-3xl font-extrabold leading-tight tracking-normal text-[#07122f] transition hover:text-blue-600 sm:text-4xl"
                          >
                            {service.title}
                          </a>
                        ) : (
                          <h2 className="text-3xl font-extrabold leading-tight tracking-normal text-[#07122f] sm:text-4xl">
                            {service.title}
                          </h2>
                        )}
                        <div className="mt-4 flex items-center gap-3">
                          <span className="h-1.5 w-16 rounded-full bg-blue-600" />
                          <span className="h-1.5 w-2 rounded-full bg-blue-600" />
                        </div>
                      </div>
                    </div>

                    <p className="mt-6 max-w-xl text-base font-medium leading-8 tracking-normal text-slate-600 sm:text-lg">
                      {service.description}
                    </p>

                    <div className="mt-7 border-t border-slate-200 pt-6">
                      <div className="grid gap-0 sm:grid-cols-2">
                        {service.features.map((feature, featureIndex) => {
                          const FeatureIcon = feature.icon;

                          return (
                            <div
                              key={feature.label}
                              className={`flex min-h-[86px] items-center gap-4 border-slate-200 py-4 ${
                                featureIndex % 2 === 0 ? "sm:border-r sm:pr-5" : "sm:pl-5"
                              } ${featureIndex < 2 ? "border-b" : ""}`}
                            >
                              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                                <FeatureIcon className="h-7 w-7" />
                              </span>
                              <span className="text-lg font-extrabold leading-6 tracking-normal text-[#07122f]">
                                {feature.label}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="min-h-[300px] overflow-hidden rounded-[1.4rem] bg-slate-100 lg:min-h-[420px]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseServiceSection;
