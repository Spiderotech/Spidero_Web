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
import security from "../../assets/custom/web-vulnerability-security.png";

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
    <section className="bg-white px-5 py-10 font-sans text-[#071734] sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-[1500px] items-start gap-6 rounded-[20px] border border-[#e6ecf5] bg-white p-4 shadow-[0_18px_50px_rgba(14,32,64,0.06)] sm:rounded-[24px] sm:p-5 lg:grid-cols-[0.9fr_1fr] lg:p-8">
        <div className="self-start">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-blue-800">
            <ShieldCheckIcon className="h-4 w-4" />
            Security First
          </span>

          <h2 className="mt-4 max-w-[520px] text-[26px] font-bold leading-tight text-[#071734] sm:text-[34px] lg:text-[38px]">
            No compromises when it comes to securing{" "}
            <span className="text-blue-800">your application.</span>
          </h2>
          <span className="mt-3 block h-1 w-14 rounded-full bg-gradient-to-br from-blue-800 to-blue-800" />

          <div className="mt-5">
            <h3 className="text-base font-bold uppercase tracking-wide text-blue-800">
              Web Application Vulnerabilities
            </h3>
            <p className="mt-2 max-w-[590px] text-sm font-medium leading-5 text-[#283651]">
              Vulnerabilities often stem from inadequate input/output
              sanitization, allowing potential attack vectors to be exploited,
              including:
            </p>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {vulnerabilities.map(({ title, description, Icon }) => (
              <article
                key={title}
                className="rounded-xl border border-[#e7edf6] bg-white p-3.5 shadow-[0_12px_28px_rgba(14,32,64,0.05)]"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-800">
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
                <span className="mt-2.5 block h-[2px] w-6 rounded-full bg-gradient-to-br from-blue-800 to-blue-800" />
              </article>
            ))}
          </div>
        </div>

        <div className="self-start rounded-[18px] bg-[#06142d] p-3 text-white shadow-[0_24px_60px_rgba(6,20,45,0.25)] sm:rounded-[22px] sm:p-5 lg:p-6">
          <div className="relative min-h-[560px] overflow-hidden rounded-2xl border border-white/10 bg-[#020b18] p-4 shadow-[0_18px_45px_rgba(0,0,0,0.24)] sm:min-h-[520px] sm:p-5 lg:min-h-[620px] xl:min-h-[560px]">
            <div className="absolute inset-0">
              <img
                src={security}
                alt="Web application security protection"
                className="h-full w-full object-cover object-center opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#06142d]/92 via-[#06142d]/68 to-[#06142d]/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06142d]/88 via-transparent to-[#06142d]/20" />
            </div>

            <div className="absolute left-3 right-3 top-3 z-10 flex items-center gap-3 rounded-xl bg-[#14243f]/82 p-3 backdrop-blur-sm sm:left-5 sm:right-auto sm:top-5 sm:max-w-[82%] xl:max-w-[70%]">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-800 text-white">
                <ShieldCheckIcon className="h-5 w-5" />
              </span>
              <p className="text-[12px] font-medium leading-5 text-white sm:text-[13px]">
                We follow industry-leading security practices to protect your
                application, data, and users at every layer.
              </p>
            </div>

            <div className="absolute inset-x-4 bottom-4 z-10 grid gap-2.5 sm:inset-x-5 sm:bottom-5 sm:grid-cols-2">
              {securityFeatures.map(({ title, Icon }) => (
                <div
                  key={title}
                  className="flex min-h-[56px] items-center gap-3 rounded-xl border border-white/10 bg-[#06142d]/68 p-2.5 backdrop-blur-sm"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/12 bg-white/[0.045] text-blue-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-[12px] font-bold leading-4 text-white sm:text-[13px]">
                    {title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Webvulnarability;
