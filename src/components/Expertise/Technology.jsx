import React from 'react'
import img from "../../assets/expertise/tech.jpg";

const Technology = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-items-center items-cente p-10 bg-[#efefef]">
      <div className=" w-full h-auto  flex flex-col  md:flex-row justify-center items-center p-5 gap-5 ">
        <div className=" w-full md:w-[50%] h-auto p-0  md:p-10">
          <div className="text-[30px] font-sans leading-10 font-bold underline">
          Technology
          </div>
          <div className="text-[19px] font-sans font-normal mt-4 ">
          Check out what leading technologies we work on to create elegant, robust and scalable application to move your business forward.
          </div>
          <ul className=" mt-4 ml-6 text-[18px] font-sans leading-10 font-semibold">
            <li><span style={{ marginRight: "0.5rem" }}>&#10136;</span>Laravel</li>
            <li><span style={{ marginRight: "0.5rem" }}>&#10136;</span>Node.JS</li>
            <li><span style={{ marginRight: "0.5rem" }}>&#10136;</span>AngularJS</li>
            <li><span style={{ marginRight: "0.5rem" }}>&#10136;</span>Web Developers</li>
          </ul>
        </div>
        <div className=" w-full md:w-[40%] h-auto ">
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

export default Technology