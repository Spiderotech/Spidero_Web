import React from "react";
import web1 from "../../assets/techlogo/angular.png";
import web2 from "../../assets/techlogo/node-js.png";
import web3 from "../../assets/techlogo/java.png";
import web4 from "../../assets/techlogo/php.png";
import web5 from "../../assets/techlogo/python.png";
import web6 from "../../assets/techlogo/react.png";
import web7 from "../../assets/techlogo/vuejs.png";
import web8 from "../../assets/techlogo/laravel.png";
import web9 from "../../assets/techlogo/microsoft-dotnet.png";
import web10 from "../../assets/techlogo/ember.png";

import db1 from "../../assets/DB/mongodb.png"
import db2 from "../../assets/DB/mariadb.png"
import db3 from "../../assets/DB/mysql.png"
import db4 from "../../assets/DB/oracle.png"
import db5 from "../../assets/DB/psql-icon.webp"
import db6 from "../../assets/DB/redis.png"
import db7 from "../../assets/DB/sql.png"

import open1 from "../../assets/Open/drupal.png"
import open2 from "../../assets/Open/magento.png"
import open3 from "../../assets/Open/woocommerce.png"
import open4 from "../../assets/Open/wordpress.png"
import open5 from "../../assets/Open/shopify.png"

const Technologystack = () => {
  return (
    <div class=" w-full  h-auto flex justify-center items-center flex-col mb-10 mt-10 ">
      <h2 className="text-[22px] font-sans leading-10 font-bold sm:text-[22px] md:text-[38px] lg:text-[22px] xl:text-[30px]   ">
        Technology Stack We Practice
      </h2>
      <div className="w-full  lg:w-[60%]   mt-5 flex flex-col md:flex-row  items-center">
        <div className="w-[200px]">
          <h2 className="ml-5 font-sans text-[18px]  leading-7 font-medium tracking-normal text-start  text-black">
            Back-end:
          </h2>
        </div>
        <div className=" lg:w-[80%]  h-auto">
          <div class="p-3  grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 xl:gap-x-28 ">
            <div className="w-[113px] h-[80px] flex items-center p-5 ">
              <img src={web2} alt="Logo" className="object-contain" />
            </div>
            <div className="w-[113px] h-[80px] flex items-center p-5 ">
              <img src={web3} alt="Logo" className="object-contain" />
            </div>
            <div className="w-[113px] h-[80px] flex items-center p-5 ">
              <img src={web4} alt="Logo" className="object-contain" />
            </div>
            <div className="w-[113px] h-[80px] flex items-center p-5 ">
              <img src={web5} alt="Logo" className="object-contain" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  lg:w-[60%]   mt-5 flex flex-col md:flex-row  items-center">
        <div className="w-[200px]">
          <h2 className="ml-5 font-sans text-[18px]  leading-7 font-medium tracking-normal text-start  text-black">
            Front-end:
          </h2>
        </div>
        <div className=" lg:w-[80%]  h-auto">
          <div class="p-3  grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 xl:gap-x-28 ">
            <div className="w-[113px] h-[80px] flex items-center p-5 ">
              <img src={web1} alt="Logo" className="object-contain" />
            </div>
            <div className="w-[113px] h-[80px] flex items-center p-5 ">
              <img src={web3} alt="Logo" className="object-contain" />
            </div>
            <div className="w-[113px] h-[80px] flex items-center p-5 ">
              <img src={web6} alt="Logo" className="object-contain" />
            </div>
            {/* <div className="w-[113px] h-[80px] flex items-center ">
              <img src={web5} alt="Logo" className="object-contain" />
            </div> */}
          </div>
        </div>
      </div>
      <div className="w-full  lg:w-[60%]   flex flex-col md:flex-row  items-center">
        <div className="w-[200px]">
          <h2 className="ml-5 font-sans text-[18px]  leading-7 font-medium tracking-normal text-start  text-black">
            Database:
          </h2>
        </div>
        <div className="lg:w-[90%]  h-auto">
          <div class="p-3  grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 xl:gap-x-28 ">
            <div className="w-[113px] h-[80px] flex items-center p-5">
              <img src={db1} alt="Logo" className="object-contain" />
            </div>
            <div className="w-[113px] h-[80px] flex items-center p-5 ">
              <img src={db2} alt="Logo" className="object-contain" />
            </div>
            <div className="w-[113px] h-[80px] flex items-center p-5 ">
              <img src={db3} alt="Logo" className="object-contain" />
            </div>
            <div className="w-[113px] h-[80px] flex items-center p-5">
              <img src={db4} alt="Logo" className="object-contain" />
            </div>
            <div className="w-[113px] h-[80px] flex items-center ">
              <img src={db5} alt="Logo" className="object-contain" />
            </div>
            <div className="w-[113px] h-[80px] flex items-center p-8 ">
              <img src={db6} alt="Logo" className="object-contain" />
            </div>
            <div className="w-[113px] h-[80px] flex items-center p-5 ">
              <img src={db7} alt="Logo" className="object-contain" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  lg:w-[60%]  flex flex-col md:flex-row  items-center">
        <div className="w-[200px]">
          <h2 className="ml-5 font-sans text-[18px]  leading-7 font-medium tracking-normal text-start  text-black">
            OpenSource:
          </h2>
        </div>
        <div className="lg:w-[90%]  h-auto">
          <div class="p-3  grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 xl:gap-x-28 ">
            <div className="w-[113px] h-[80px] flex items-center p-8">
              <img src={open1} alt="Logo" className="object-contain" />
            </div>
            <div className="w-[113px] h-[80px] flex items-center p-5 ">
              <img src={open2} alt="Logo" className="object-contain" />
            </div>
            <div className="w-[113px] h-[80px] flex items-center p-5 ">
              <img src={open3} alt="Logo" className="object-contain" />
            </div>
            <div className="w-[113px] h-[80px] flex items-center p-8 ">
              <img src={open4} alt="Logo" className="object-contain" />
            </div>
            <div className="w-[113px] h-[80px] flex items-center p-8 ">
              <img src={open5} alt="Logo" className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologystack;
