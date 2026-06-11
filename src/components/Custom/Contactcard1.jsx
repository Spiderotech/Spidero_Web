import React from "react";
import ContactCtaCard from "./ContactCtaCard";
import icon from "../../assets/custom/digital.png";

const Contactcard1 = () => {
  return (
    <ContactCtaCard
      eyebrow="Let's build the future together"
      title="Foster Digital Innovation"
      description="Arrange a Free Consultation Session with Our Professionals"
      icon={icon}
      theme="violet"
    />
  );
};

export default Contactcard1;
