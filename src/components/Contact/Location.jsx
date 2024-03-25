import React from "react";
import web4 from "../../assets/in.svg";
import web6 from "../../assets/london.jpg";

const Location = () => {
  return (
    <div className="w-full h-auto flex flex-col lg:flex-row justify-items-center items-center p-5 lg:p-32 gap-10">
      <div className=" w-full lg:w-[50%] h-auto  flex flex-col p-10 border shadow-lg ">
        <div className="row  flex items-center">
          <div className="column mt-4">
            <img src={web6} alt="profile" className="w-9 h-6 " />
          </div>
          <div className="column ml-4 mt-4">
            <span className="text-[23px] font-sans ">United Kingdom</span>
          </div>
        </div>
        <h2 className="text-black text-start leading-10 font-sans font-bold text-[21px] ">
        2 Westbourne Crescent, London, W2 3DB
        </h2>
        <h2 className="text-black text-start leading-10 font-sans font-bold text-[18px] ">
        +44 7368937674
        </h2>
        <h2 className="text-black text-start leading-10 font-sans font-bold text-[16px]  cursor-pointer ">
        contact@spiderotechnology.com
        </h2>
        <div className="mt-5 mb-5  cursor-pointer">
          <iframe
            width="100%"
            height="150"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=2%20Westbourne%20Crescent,%20London,%20W2%203DB+(Spidero%20Technology)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.maps.ie/population/">
              Population Estimator map
            </a>
          </iframe>
        </div>
      </div>
      <div className="w-full lg:w-[50%] h-auto border shadow-lg    p-10">
        <div className="row  flex items-center">
          <div className="column mt-5">
            <img src={web4} alt="profile" className="w-10 h-6" />
          </div>
          <div className="column  ml-4 mt-4">
            <span className="text-[23px] font-sans ">India</span>
          </div>
        </div>
        <h2 className="text-black text-start leading-10 font-sans font-bold text-[21px] ">
        Ennakkad Ulunthy Rd, Ennakkad Gramam, Kerala
        </h2>
        <h2 className="text-black text-start leading-10 font-sans font-bold text-[18px] ">
        +91 8089650271
        </h2>
        <h2 className="text-black text-start leading-10 font-sans font-bold text-[16px]  cursor-pointer ">
        contact@spiderotechnology.com
        </h2>
        <div className="mt-5 mb-5  cursor-pointer">
          <iframe
            width="100%"
            height="150"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Ennakkad%20Ulunthy%20Rd,%20Ennakkad%20Gramam,%20Kerala,%20689624+(Spidero%20Technology)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.maps.ie/population/">Find Population on Map</a>
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
