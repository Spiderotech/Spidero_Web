import React from "react";
import {
  CodeBracketIcon,
  CubeTransparentIcon,
  CircleStackIcon,
  DocumentTextIcon,
  FunnelIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  UserCircleIcon,
  ViewColumnsIcon,
} from "@heroicons/react/24/outline";
import security from "../../assets/Customsecurity.png";

const vulnerabilities = [
  {
    title: "SQL Injection",
    description:
      "An attacker employing malevolent SQL code to manipulate databases and expose sensitive information.",
    Icon: CircleStackIcon,
  },
  {
    title: "Cross-site Scripting (XSS)",
    description:
      "An attacker employing malevolent SQL code to manipulate databases and expose sensitive information.",
    Icon: CodeBracketIcon,
  },
  {
    title: "Cross-site Request Forgery",
    description:
      "A remote attack injecting a file onto a web application server, triggering the execution of malicious scripts.",
    Icon: CubeTransparentIcon,
  },
  {
    title: "Remote File Inclusion",
    description:
      "A remote attack injecting a file onto a web application server, triggering the execution of malicious scripts.",
    Icon: DocumentTextIcon,
  },
];

const securityFeatures = [
  { title: "Ingress traffic filtering", Icon: FunnelIcon },
  { title: "Bad Bot Protection", Icon: CubeTransparentIcon },
  { title: "Application Firewall", Icon: ViewColumnsIcon },
  { title: "Access Control (2FA)", Icon: UserCircleIcon },
  { title: "Encrypting URL parameters", Icon: LockClosedIcon },
  { title: "SSL secured", Icon: ShieldCheckIcon },
];

const Webvulnarability = () => {
  return (
    <section className="bg-white px-6 py-8 font-sans text-[#071734] lg:px-10">
      <div className="mx-auto grid max-w-[1500px] items-start gap-6 rounded-[24px] border border-[#e6ecf5] bg-white p-5 shadow-[0_18px_50px_rgba(14,32,64,0.06)] lg:grid-cols-[0.9fr_1fr] lg:p-8">
        <div className="self-start">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#eef4ff] px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-[#2f60ff]">
            <ShieldCheckIcon className="h-4 w-4" />
            Security First
          </span>

          <h2 className="mt-4 max-w-[520px] text-[28px] font-bold leading-tight text-[#071734] sm:text-[34px] lg:text-[38px]">
            No compromises when it comes to securing{" "}
            <span className="text-[#365cff]">your application.</span>
          </h2>
          <span className="mt-3 block h-1 w-14 rounded-full bg-[#365cff]" />

          <div className="mt-5">
            <h3 className="text-base font-bold uppercase tracking-wide text-[#315cff]">
              Web Application Vulnerabilities
            </h3>
            <p className="mt-2 max-w-[590px] text-sm font-medium leading-5 text-[#283651]">
              Vulnerabilities often stem from inadequate input/output
              sanitization, allowing potential attack vectors to be exploited,
              including:
            </p>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {vulnerabilities.map(({ title, description, Icon }) => (
              <article
                key={title}
                className="rounded-xl border border-[#e7edf6] bg-white p-3.5 shadow-[0_12px_28px_rgba(14,32,64,0.05)]"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef2ff] text-[#365cff]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="text-[15px] font-bold text-[#071734]">
                      {title}
                    </h4>
                    <p className="mt-1.5 text-[13px] font-medium leading-5 text-[#405078]">
                      {description}
                    </p>
                  </div>
                </div>
                <span className="mt-2.5 block h-[2px] w-6 rounded-full bg-[#365cff]" />
              </article>
            ))}
          </div>
        </div>

        <div className="self-start rounded-[22px] bg-[#06142d] p-5 text-white shadow-[0_24px_60px_rgba(6,20,45,0.25)] lg:p-6">
          <div className="grid gap-5 xl:grid-cols-[0.95fr_1fr] xl:items-center">
            <div className="relative flex min-h-[240px] items-center justify-center overflow-hidden rounded-2xl">
              <div className="absolute h-[220px] w-[220px] rounded-full border border-dashed border-[#3389ff]/60" />
              <div className="absolute h-[170px] w-[170px] rounded-full border border-[#2b6dff]/45" />
              <img
                src={security}
                alt="Application security shield"
                className="relative z-10 h-[220px] w-[220px] object-contain"
              />
            </div>

            <div className="space-y-2.5">
              {securityFeatures.map(({ title, Icon }) => (
                <div
                  key={title}
                  className="flex items-center gap-4 border-b border-white/10 pb-2.5 last:border-b-0"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/12 bg-white/[0.045] text-[#3d6dff]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="text-base font-bold text-white">{title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 flex items-center gap-4 rounded-2xl bg-white/[0.07] p-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#284dff] text-white">
              <ShieldCheckIcon className="h-6 w-6" />
            </span>
            <p className="text-sm font-medium leading-6 text-white">
              We follow industry-leading security practices to protect your
              application, data, and users at every layer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Webvulnarability;
