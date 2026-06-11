import React from "react";
import ContactCtaCard from "./ContactCtaCard";
import icon from "../../assets/custom/cloud-server.png";

const Contactcard2 = () => {
  return (
    <ContactCtaCard
      eyebrow="Scale with confidence"
      title="Build Next-Gen Digital Technology Solutions"
      description="Harness our cross-domain proficiency to outpace your competitors."
      icon={icon}
      theme="blue"
    />
  );
};

export default Contactcard2;
