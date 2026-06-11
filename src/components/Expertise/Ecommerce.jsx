import React from "react";
import {
  BanknotesIcon,
  CubeTransparentIcon,
  CurrencyDollarIcon,
  LockClosedIcon,
  ShoppingBagIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import blockchainImg from "../../assets/expertise/Bc.jpg";
import ecommerceImg from "../../assets/expertise/cyber-monday-shopping-sales.jpg";
import ExpertiseServiceSection from "./ExpertiseServiceSection";

const Ecommerce = () => {
  return (
    <ExpertiseServiceSection
      services={[
        {
          title: "eCommerce",
          icon: ShoppingBagIcon,
          image: ecommerceImg,
          reverse: false,
          description:
            "Make your business online market ready with our distinctive ecommerce web and app development solutions.",
          features: [
            { label: "Online stores", icon: ShoppingBagIcon },
            { label: "Secure checkout", icon: LockClosedIcon },
            { label: "Payment integration", icon: CurrencyDollarIcon },
            { label: "Market-ready apps", icon: SparklesIcon },
          ],
        },
        {
          title: "Blockchain Development",
          icon: CubeTransparentIcon,
          image: blockchainImg,
          reverse: true,
          description:
            "We take pride in building secure and powerful Blockchain applications- from smart contracts to cryptocurrencies.",
          features: [
            { label: "Smart contracts", icon: CubeTransparentIcon },
            { label: "Cryptocurrency", icon: BanknotesIcon },
            { label: "Secure apps", icon: LockClosedIcon },
            { label: "Decentralized systems", icon: SparklesIcon },
          ],
        },
      ]}
    />
  );
};

export default Ecommerce;
