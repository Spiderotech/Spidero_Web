import React from "react";
import img from "../../assets/expertise/mobile.jpg";

const Mobile = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-items-center items-cente p-0 md:p-10 bg-white">
      <div className=" w-full h-auto  flex flex-row justify-center items-center p-5 gap-5 ">
        <div className=" w-full h-auto  flex flex-col  lg:flex-row justify-center items-center p-5 gap-5 ">
          
          <div className=" w-full lg:w-[40%] h-auto ">
            <img
              src={img}
              alt="profile"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className=" w-full lg:w-[50%] h-auto p-0  md:p-10">
            <div className="text-[30px] font-sans leading-10 font-bold underline">
            Mobile Apps
            </div>
            <div className="text-[19px] font-sans font-normal mt-4 ">
            Leveraging mobility to bring business stability and visibility for you, we make your product next gen ready with the best of technology.
            </div>
            <ul className=" mt-4 ml-6 text-[18px] font-sans leading-10  font-semibold">
              <li><span style={{ marginRight: "0.5rem" }}>&#10137;</span>iOS app development</li>
              <li><span style={{ marginRight: "0.5rem" }}>&#10137;</span>Android app development</li>
              <li><span style={{ marginRight: "0.5rem" }}>&#10137;</span>React Native app development</li>
              <li><span style={{ marginRight: "0.5rem" }}>&#10137;</span>Enterprise Mobility</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
