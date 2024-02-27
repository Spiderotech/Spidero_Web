import React from "react";
import img from "../../assets/expertise/Bc.jpg";
import img1 from "../../assets/expertise/cyber-monday-shopping-sales.jpg";

const Ecommerce = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-items-center items-cente p-3  md:p-10 bg-[#efefef]">
      <div className=" w-full h-auto  flex flex-col  lg:flex-row justify-center items-center p-5 gap-5 ">
      <div className=" w-full lg:w-[50%] h-auto ">
          <img
            src={img1}
            alt="profile"
            className="w-[80%] h-auto object-contain"
          />
          <div className="text-[30px] font-sans leading-10 font-bold underline mt-5">
          eCommerce
          </div>
          <div className="text-[19px] font-sans font-normal mt-4  w-full md:w-3/5">
          Make your business online market ready with our distinctive ecommerce web and app development solutions.
          </div>
        
        </div>
        <div className=" w-full lg:w-[50%] h-auto  ">
          <img
            src={img}
            alt="profile"
            className="w-[80%] h-auto object-contain"
          />
          <div className="text-[30px] font-sans leading-10 font-bold underline mt-5">
          Blockchain Development
          </div>
          <div className="text-[19px] font-sans font-normal mt-4  w-full md:w-3/5 ">
          We take pride in building secure and powerful Blockchain applications- from smart contracts to cryptocurrencies.
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
