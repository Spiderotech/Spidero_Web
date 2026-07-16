import React from "react";
import {
  BeakerIcon,
  CodeBracketIcon,
  CpuChipIcon,
  ServerStackIcon,
} from "@heroicons/react/24/outline";
import img from "../../assets/expertise/tech.webp";
import ExpertiseServiceSection from "./ExpertiseServiceSection";

const Technology = () => {
  return (
    <ExpertiseServiceSection
      className="pb-14"
      services={[
        {
          title: "Technology",
          icon: CpuChipIcon,
          image: img,
          reverse: true,
          description:
            "Check out what leading technologies we work on to create elegant, robust and scalable application to move your business forward.",
          features: [
            { label: "Laravel", icon: CodeBracketIcon },
            { label: "Node.JS", icon: ServerStackIcon },
            { label: "AngularJS", icon: BeakerIcon },
            { label: "Web Developers", icon: CpuChipIcon },
          ],
        },
      ]}
    />
  );
};

export default Technology;
