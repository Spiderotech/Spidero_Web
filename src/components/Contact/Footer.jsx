import React from "react";
import twitter from "../../assets/twitter.png";
import fb from "../../assets/fb.png";
import IG from "../../assets/ig.png";
import lN from "../../assets/ln.png";

const Footer = () => {
  return (
    <footer>
      <div className="mb-4 flex w-full flex-row justify-center gap-10 bg-white p-2 text-center text-[#07122f]">
        {/* <img src={twitter} alt="Logo" className="object-contain h-6 w-6" />
        <img src={fb} alt="Logo" className="object-contain h-6 w-6" />
        <img src={IG} alt="Logo" className="object-contain h-6 w-6" /> */}
        <img src={lN} alt="Logo" className="object-contain h-6 w-6  cursor-pointer" />
      </div>
      <div className="w-full bg-blue-50 p-2 text-center text-[#07122f]">
        © 2023 Spidero Technology Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
