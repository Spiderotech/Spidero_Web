import React from "react";
import {
  CodeBracketSquareIcon,
  ComputerDesktopIcon,
  GlobeAltIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";
import img from "../../assets/expertise/web.jpg";
import ExpertiseServiceSection from "./ExpertiseServiceSection";

const Web = () => {
  return (
    <ExpertiseServiceSection
      className="pt-28 lg:pt-36"
      intro={{
        eyebrow: "Our Services",
        title: (
          <>
            Startup or a Fortune 500 company,{" "}
            <span className="text-blue-600">Spidero Technology</span> will act
            as your consultant and development partners to transform your idea
            into success.
          </>
        ),
        subtitle: "Take advantage of our full-service capabilities.",
      }}
      services={[
        {
          title: "Web",
          href: "/web",
          icon: GlobeAltIcon,
          image: img,
          reverse: false,
          description:
            "We understand the science of enhancing user experience with a combination of human-centric approach and development ingenuity.",
          features: [
            { label: "Web app development", icon: CodeBracketSquareIcon },
            { label: "Web design", icon: PaintBrushIcon },
            { label: "Progressive web apps", icon: ComputerDesktopIcon },
            { label: "UX UI Design", icon: PaintBrushIcon },
          ],
        },
      ]}
    />
  );
};

export default Web;
