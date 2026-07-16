import React, { useEffect } from "react";
import img1 from "../../assets/ourprocess/discovery.jpg";
import img2 from "../../assets/ourprocess/planing.jpg";
import img3 from "../../assets/ourprocess/design.jpg";
import img4 from "../../assets/ourprocess/development.jpg";
import img5 from "../../assets/ourprocess/testing.jpg";
import img6 from "../../assets/ourprocess/maintenance.jpg";
import {
  ArrowUpIcon,
  BugAntIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  ClipboardDocumentListIcon,
  CodeBracketSquareIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
  DocumentTextIcon,
  FlagIcon,
  LightBulbIcon,
  PencilSquareIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    number: "01",
    title: "Discovery Workshop",
    image: img1,
    icon: LightBulbIcon,
    objective: [
      "Run through the entire project with the client based on the initial proposal and agreement.",
      "Establish a detailed idea about the goals and business objectives of the client.",
      "Understanding the competitive landscape.",
      "Understanding the target audience, market & geography",
      "Clarifying all queries and doubts which the team has, post initial analysis.",
      "Understanding and documenting client’s design and branding preferences",
      "Laying down assumptions and constrains!",
      "Coming with a high level epic mapping.",
    ],
    details: [
      {
        title: "OUTCOME",
        icon: FlagIcon,
        items: [
          "Have a precise and clear idea about the client’s and project’s goals",
          "Have a clear idea about the likes and dislikes of the client.",
          "Getting client’s inputs and clarification on all open-ended points",
          "Having all the information required for the planning phase.",
        ],
      },
      {
        title: "TEAM MEMBERS INVOLVED",
        icon: UserGroupIcon,
        items: ["Project Manager", "Tech Lead", "Project Owner / Client", "Business Analyst"],
      },
    ],
  },
  {
    number: "02",
    title: "Planning",
    image: img2,
    icon: ClipboardDocumentListIcon,
    objective: [
      "Creation of all relevant documentation required for successful execution of the project",
      "Getting confirmation and approval from the client on the documents and materials",
      "Defining the project plan",
      "Defining the design and branding guidelines of the project",
    ],
    details: [
      {
        title: "OUTCOME",
        icon: FlagIcon,
        items: [
          "To get everything documented in detail, leaving nothing for chance or assumption",
          "To get client’s approval and signoff on the documentation and project plan",
          "To have a well-defined and precise planning of the project",
        ],
      },
      {
        title: "DELIVERABLES",
        icon: DocumentTextIcon,
        items: [
          "Detailed technical Specification",
          "Wire-frames",
          "User Stories",
          "Project plan with detailed milestone/sprint planning",
          "Test cases and scenarios",
        ],
      },
      {
        title: "TEAM MEMBERS INVOLVED",
        icon: UserGroupIcon,
        items: ["Project Manager", "Tech Lead", "IA & UX Lead", "UI Design Lead", "Test Lead"],
      },
    ],
  },
  {
    number: "03",
    title: "Design",
    image: img3,
    icon: PencilSquareIcon,
    objective: [
      "UI Design of all the project screens based on the approved wire-frames and design guidelines",
      "Web, Tablet and Mobile specific designs.",
      "Getting system UI Designs approved and confirmed by the client.",
    ],
    details: [
      {
        title: "DELIVERABLES",
        icon: DocumentTextIcon,
        items: [
          "UI Designs of the projects",
          "Clickable prototype on Invision platform -example link",
          "Source files in either Photoshop or Sketch format",
        ],
      },
      {
        title: "TEAM MEMBERS INVOLVED",
        icon: UserGroupIcon,
        items: ["Project Manager", "IA & UX Lead", "UI Design Lead", "UI Designer"],
      },
    ],
  },
  {
    number: "04",
    title: "Development",
    image: img4,
    icon: CodeBracketSquareIcon,
    objective: [
      "Catering the requirement for frontend, backend, web services, and API development integration.",
      "Prepare a strategy for Agile Scrum methodology",
      "Factor the aspects of multi-tenancy, scalability, 3rd party integration",
      "To set up a 2-3 week frequency for sprints/milestones",
      "Clarifying all queries and doubts which the team has, post initial analysis.",
      "Crafting an optimized clean code structure",
      "Involve client review in each sprint/milestone",
    ],
    details: [
      {
        title: "WEB TECHNOLOGIES",
        icon: CpuChipIcon,
        items: [
          "Back-end. : Laravel, Ruby, Python, Node.JS, Java",
          "Front-end. : AngularJS, ReactJS, VueJS Html5, CSS",
          "Database. : MongoDB, Mysql, PostgreSQL, Firebase",
          "OpenSource : Drupal, Magento, Wordpress",
        ],
      },
      {
        title: "MOBILE TECHNOLOGIES",
        icon: DevicePhoneMobileIcon,
        items: ["iOS : ObjectiveC, Swift, xCode", "Android. : Java, Android studio", "Hybrid. : Ionic, ReactNative"],
      },
      {
        title: "TEAM MEMBERS INVOLVED",
        icon: UserGroupIcon,
        items: ["Project Manager", "Team Lead", "Front-End Developers", "Back-End Developers", "QA Engineer"],
      },
    ],
  },
  {
    number: "05",
    title: "Testing",
    image: img5,
    icon: BugAntIcon,
    objective: [
      "Each sprint/milestone is tested manually.",
      "Bugs are reported and added to product backlog.",
      "Upon bug fixing, quality release is provided and then the final demo of the sprint is sent to the client for approval.",
      "Regression testing after each sprint to ensure proper functioning of the previous approved sprints/milestones.",
    ],
    details: [
      {
        title: "TYPES OF TESTING",
        icon: ClipboardDocumentListIcon,
        items: [
          "Unit Testing",
          "Manual Testing",
          "Regression Testing",
          "Security Testing",
          "Automation Testing",
          "Load & Stress Testing",
          "Performance",
          "Code Review",
        ],
      },
      {
        title: "TEAM MEMBERS INVOLVED",
        icon: UserGroupIcon,
        items: ["Account Manager", "Project Manager", "QA"],
      },
    ],
  },
  {
    number: "06",
    title: "Maintenance",
    image: img6,
    icon: WrenchScrewdriverIcon,
    objective: [
      "Product enhancement through an Agile approach",
      "Regular Security Audits",
      "Bi-weekly code back-ups",
      "Constant upgradation of the system based on new software/version release",
      "Full Testing the system each month to find any bugs, incompatibility and error",
      "Monitoring of the traffic and server load and optimizing according to the business needs.",
    ],
    details: [
      {
        title: "OUTCOME",
        icon: FlagIcon,
        items: [
          "Have a precise and clear idea about the client’s and project’s goals",
          "Have a clear idea about the likes and dislikes of the client.",
          "Getting client’s inputs and clarification on all open-ended points",
          "Having all the information required for the planning phase.",
        ],
      },
      {
        title: "TEAM MEMBERS INVOLVED",
        icon: UserGroupIcon,
        items: ["Project Manager", "Tech Lead", "Project Owner / Client", "Business Analyst"],
      },
    ],
  },
];

const BulletList = ({ items }) => (
  <ul className="mt-4 space-y-3">
    {items.map((item) => (
      <li key={item} className="flex gap-3 text-sm font-medium leading-7 tracking-normal text-slate-700 sm:text-[15px]">
        <CheckCircleIcon className="mt-1 h-4 w-4 shrink-0 text-blue-800" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const How_wework = () => {
  useEffect(() => {
    const progressBar = document.querySelector(".progress-bar");
    const scrollToTopElement = document.querySelector(".scroll-to-top");

    function updateProgressBar() {
      if (!progressBar) return;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.pageYOffset / totalHeight) * 100 : 0;
      progressBar.style.width = `${progress}%`;
    }

    function updateScrollButton() {
      if (!scrollToTopElement) return;
      if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 20) {
        scrollToTopElement.style.opacity = "1";
      } else {
        scrollToTopElement.style.opacity = "0";
      }
    }

    function handleScroll() {
      updateProgressBar();
      updateScrollButton();
    }

    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    scrollToTopElement?.addEventListener("click", scrollToTop);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      scrollToTopElement?.removeEventListener("click", scrollToTop);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-white px-5 py-44 font-sans sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-1/3 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-5xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-blue-800">
            HOW WE WORK
          </p>
          <div className="mt-4 flex items-center gap-3">
            <span className="h-1.5 w-20 rounded-full bg-gradient-to-br from-blue-800 to-blue-800" />
            <span className="h-1.5 w-2 rounded-full bg-gradient-to-br from-blue-800 to-blue-800" />
          </div>
          <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-normal text-[#07122f] sm:text-4xl lg:text-5xl">
            The process is defined as a sequence of steps. When followed, it helps to achieve a goal. We consider it -{" "}
            <span className="text-blue-800">the art of thinking through.</span>
          </h1>
        </div>

        <div className="mt-12 flex items-center gap-5">
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-800">
            <ChatBubbleLeftRightIcon className="h-8 w-8" />
          </span>
          <h2 className="text-2xl font-extrabold tracking-normal text-[#07122f] sm:text-3xl">
            Let’s talk about the specifics
          </h2>
        </div>

        <div className="mt-8 space-y-10">
          {steps.map((step) => {
            const StepIcon = step.icon;

            return (
              <article key={step.number} className="relative">
                <div className="overflow-hidden rounded-[1.7rem] border border-slate-200/80 bg-white shadow-[0_22px_70px_rgba(15,23,42,0.08)]">
                  <div className="grid lg:grid-cols-2">
                    <div className="relative border-l-4 border-blue-800 bg-[#f7faff] p-6 sm:p-8 lg:p-10">
                      <div className="flex items-center gap-5">
                        <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-800 to-blue-800 text-2xl font-extrabold text-white shadow-[0_16px_32px_rgba(37,99,235,0.26)]">
                          {step.number}
                        </span>
                        <div>
                          <div className="flex items-center gap-3 text-blue-800">
                            <StepIcon className="h-6 w-6" />
                            <span className="text-xs font-extrabold uppercase tracking-[0.16em]">
                              Step {step.number}
                            </span>
                          </div>
                          <h3 className="mt-2 text-2xl font-extrabold tracking-normal text-[#07122f] sm:text-3xl">
                            {step.title}
                          </h3>
                          <div className="mt-3 flex items-center gap-3">
                            <span className="h-1.5 w-14 rounded-full bg-gradient-to-br from-blue-800 to-blue-800" />
                            <span className="h-1.5 w-2 rounded-full bg-gradient-to-br from-blue-800 to-blue-800" />
                          </div>
                        </div>
                      </div>

                      <h4 className="mt-8 text-sm font-extrabold uppercase tracking-[0.08em] text-blue-800">
                        Objective
                      </h4>
                      <BulletList items={step.objective} />
                    </div>

                    <div className="min-h-[320px] overflow-hidden bg-slate-100 lg:min-h-[440px]">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {step.details.map((detail) => {
                    const DetailIcon = detail.icon;

                    return (
                      <div
                        key={detail.title}
                        className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.07)]"
                      >
                        <div className="flex items-center gap-4">
                          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-800">
                            <DetailIcon className="h-7 w-7" />
                          </span>
                          <div>
                            <h4 className="text-base font-extrabold uppercase tracking-normal text-[#07122f]">
                              {detail.title}
                            </h4>
                            <div className="mt-2 flex items-center gap-2">
                              <span className="h-1 w-12 rounded-full bg-gradient-to-br from-blue-800 to-blue-800" />
                              <span className="h-1 w-2 rounded-full bg-gradient-to-br from-blue-800 to-blue-800" />
                            </div>
                          </div>
                        </div>
                        <BulletList items={detail.items} />
                      </div>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div style={styles.progressBarContainer}>
        <div className="progress-bar" style={styles.progressBar} />
      </div>

      <div style={styles.progressCircleContainer}>
        <button className="scroll-to-top" style={styles.scrollToTop} aria-label="Scroll to top">
          <ArrowUpIcon className="h-7 w-7 text-white" />
        </button>
      </div>
    </section>
  );
};

const styles = {
  progressBarContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "5px",
    backgroundColor: "#f0f0f0",
    zIndex: 9999,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#2563eb",
    transition: "all 0.3s ease",
  },
  progressCircleContainer: {
    position: "fixed",
    right: "28px",
    bottom: "28px",
    zIndex: 9999,
  },
  scrollToTop: {
    height: "52px",
    width: "52px",
    backgroundColor: "#2563eb",
    borderRadius: "9999px",
    cursor: "pointer",
    transition: "opacity 0.3s ease",
    zIndex: 9998,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0,
    boxShadow: "0 18px 40px rgba(37, 99, 235, 0.28)",
    border: "0",
  },
};

export default How_wework;
