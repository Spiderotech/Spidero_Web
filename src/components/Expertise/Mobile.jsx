import React from "react";
import {
  BuildingOfficeIcon,
  DevicePhoneMobileIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import img from "../../assets/expertise/mobile.jpg";
import ExpertiseServiceSection from "./ExpertiseServiceSection";

const Mobile = () => {
  return (
    <ExpertiseServiceSection
      services={[
        {
          title: "Mobile Apps",
          href: "/mobile",
          icon: DevicePhoneMobileIcon,
          image: img,
          reverse: true,
          description:
            "Leveraging mobility to bring business stability and visibility for you, we make your product next gen ready with the best of technology.",
          features: [
            { label: "iOS app development", icon: DevicePhoneMobileIcon },
            { label: "Android app development", icon: DevicePhoneMobileIcon },
            { label: "React Native app development", icon: RocketLaunchIcon },
            { label: "Enterprise Mobility", icon: BuildingOfficeIcon },
          ],
        },
      ]}
    />
  );
};

export default Mobile;
