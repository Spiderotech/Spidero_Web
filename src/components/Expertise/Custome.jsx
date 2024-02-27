import React from 'react'
import img from "../../assets/expertise/ecomm.jpg";

const Custome = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-items-center items-cente p-10 bg-white">
      <div className=" w-full h-auto  flex flex-col  lg:flex-row justify-center items-center p-5 gap-5 ">
        <div className=" w-full lg:w-[50%] h-auto p-0  md:p-10">
          <div className="text-[30px] font-sans leading-10 font-bold underline">
          
          <a href="/custom" className=" cursor-pointer"> Custom Software Development</a>
          </div>
          <div className="text-[19px] font-sans font-normal mt-4 ">
          Web or mobile, we have devised the best custom software development solution following agile methodology.
          </div>
          <ul className=" mt-4 ml-6  font-sans leading-10 text-[18px]  font-semibold">
            <li><span style={{ marginRight: "0.5rem" }}>&#10137;</span>eLearning</li>
           
          </ul>
        </div>
        <div className=" w-full lg:w-[40%] h-auto ">
          <img
            src={img}
            alt="profile"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default Custome