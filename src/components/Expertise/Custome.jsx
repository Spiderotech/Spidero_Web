import React from "react";
import {
  AcademicCapIcon,
  Cog6ToothIcon,
  CubeIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/outline";
import img from "../../assets/expertise/ecomm.jpg";
import ExpertiseServiceSection from "./ExpertiseServiceSection";

const Custome = () => {
  return (
    <ExpertiseServiceSection
      services={[
        {
          title: "Custom Software Development",
          href: "/custom",
          icon: PuzzlePieceIcon,
          image: img,
          reverse: false,
          description:
            "Web or mobile, we have devised the best custom software development solution following agile methodology.",
          features: [
            { label: "eLearning", icon: AcademicCapIcon },
            { label: "Agile development", icon: Cog6ToothIcon },
            { label: "Custom platforms", icon: PuzzlePieceIcon },
            { label: "Scalable systems", icon: CubeIcon },
          ],
        },
      ]}
    />
  );
};

export default Custome;
