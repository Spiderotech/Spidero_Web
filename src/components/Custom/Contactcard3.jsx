import React from "react";
import ContactCtaCard from "./ContactCtaCard";
import icon from "../../assets/custom/hologram.png";

const Contactcard3 = () => {
  return (
    <ContactCtaCard
      eyebrow="Your industry, your solution"
      title="Didn't Find Your Industry In The List?"
      description="Don't worry, we've got you covered! Let's talk about your business needs!"
      icon={icon}
      iconClass="w-16"
      theme="emerald"
    />
  );
};

export default Contactcard3;
