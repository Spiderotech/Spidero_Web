import React from "react";
import twitter from "../../assets/twitter.png";
import fb from "../../assets/fb.png";
import IG from "../../assets/ig.png";
import lN from "../../assets/ln.png";

const Footer = () => {
  return (
    <footer>
      <div className="w-full bg-white p-2 flex flex-row justify-center text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200 gap-10 mb-4">
        {/* <img src={twitter} alt="Logo" className="object-contain h-6 w-6" />
        <img src={fb} alt="Logo" className="object-contain h-6 w-6" />
        <img src={IG} alt="Logo" className="object-contain h-6 w-6" /> */}
        <img src={lN} alt="Logo" className="object-contain h-6 w-6  cursor-pointer" />
      </div>
      <div className="w-full bg-neutral-200 p-2 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
        © 2023 Spidero Technology Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
