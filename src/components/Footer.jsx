import React from "react";
import foot from "../assets/footer-banner1_2x.jpeg";
import web4 from "../assets/in.svg";
import web5 from "../assets/london.jpg";
import twitter from "../assets/twitter.png";
import fb from "../assets/fb.png";
import IG from "../assets/ig.png";
import lN from "../assets/ln.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col text-center  lg:text-left ">
      <div className="  text-neutral-800 dark:text-neutral-200 w-full ">
        <div className="flex flex-col-reverse  md:flex-col-reverse lg:flex-row">
          <div className="  bg-white lg:bg-black text-black lg:text-white float-left h-auto w-full lg:w-[47%] p-5 lg:p-20">
            <div className="text-[40px] md:text-[36px] lg:text-[40px] sm:text-[26px] font-bold  mt-5  font-sans hidden md:block ">
              Like what you see?<br></br> Let’s start a conversation.
            </div>

            <div className="mt-[40px] hidden md:block">
              <a href="/contact" className="cursor-pointer">
                <button className="border  border-white  w-[184px] h-[54px] font-sans leading-6 tracking-{2px} text-[16px] font-medium text-white  bg-black transition-all ease-in-out hover:bg-white hover:text-black hover:border-black cursor-pointer">
                  <b>GET IN TOUCH</b>
                </button>
              </a>
            </div>

            <div className=" lg:mt-20 text-start">
              <span className="text-lg md:text-xl lg:text-xl tracking-wide ">
                Visit us at,
              </span>
              <div className="flex-row mt-5 flex items-center ">
                <div className=" ">
                  <img src={web5} alt="profile" className="w-5 h-4 lg:h-3" />
                </div>
                <div className=" ml-4 ">
                  <span className="text-lg md:text-xl lg:text-xl font-sans">
                    2 Westbourne Crescent, London, W2 3DB
                  </span>
                </div>
              </div>
              <div className=" flex-row mt-2 flex items-center   ">
                <div className="">
                  <img src={web4} alt="profile" className="w-6 h-6" />
                </div>
                <div className="column ml-4   ">
                  <span className="text-lg md:text-xl lg:text-xl font-sans text-start">
                    Ennakkad Ulunthy Rd, Ennakkad Gramam, Kerala, 689624
                  </span>
                </div>
              </div>
            </div>

            <div className="social-links   mt-4 flex ">
              <div className="w-full  p-2  flex flex-row justify-center  text-neutral-700  dark:text-neutral-200 gap-5 md:gap-10">
                {/* <img
                  src={twitter}
                  alt="Logo"
                  className="object-contain h-6 w-6"
                />
                <img src={fb} alt="Logo" className="object-contain h-6 w-6" />
                <img src={IG} alt="Logo" className="object-contain h-6 w-6" /> */}
                <a href="https://www.linkedin.com/company/spidero-technology/" target="new" className=" cursor-pointer">
                <img src={lN} alt="Logo" className="object-contain h-6 w-6" />

                </a>
               
              </div>
            </div>
          </div>

          <div className=" items-center justify-center">
            <img
              src={foot}
              alt="Image Description"
              className=" w-full  lg:h-[700px] object-contain "
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-neutral-200 p-2 text-center text-neutral-700  dark:text-neutral-200 ">
        <div className="md:flex md:justify-between">
          <div className="mb-2 md:mb-0">
            <span className="mr-4">
              <a
                href="/privacy-policy"
                className="text-neutral-700 hover:text-black text-sm "
              >
                Privacy Policy
              </a>
            </span>
            <span>
              <a
                href="/terms-conditions"
                className="text-neutral-700 hover:text-black text-sm"
              >
                Terms and Conditions
              </a>
            </span>
          </div>
          <div className="text-center text-neutral-700 text-sm">
            © 2023 Spidero Technology Inc. All rights reserved.
          </div>
        </div>
      </div>

      {/* <div className="md:hidden fixed bottom-0 w-full h-auto z-10  ">
        <a href="/contact" className="cursor-pointer">
          <button className="  border border-white w-full h-[51px] font-sans leading-6 tracking-{2px} text-[16px] font-medium text-white bg-black transition-all ease-in-out hover:bg-white hover:text-black hover:border-black cursor-pointer">
           GET IN TOUCH
          </button>
        </a>
      </div> */}
    </footer>
  );
};

export default Footer;
