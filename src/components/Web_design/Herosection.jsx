import React, { useEffect, useRef } from "react";
import { particlesCursor } from "https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';

const Herosection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    
    const script = document.createElement('script');
    

    script.src = 'https://smtpjs.com/v3/smtp.js';
    
    
    document.body.appendChild(script);
    
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    console.log("useEffect is running");

    const canvas = document.createElement("canvas");
    canvas.id = "particlesCanvas";
    canvasRef.current = canvas;

    document.getElementById("app").appendChild(canvas);

    const pc = particlesCursor({
      el: document.getElementById("app"),
      gpgpuSize: 512,
      colors: [0x00ff00, 0x0000ff],
      color: 0xff0000,
      coordScale: 0.5,
      noiseIntensity: 0.001,
      noiseTimeCoef: 0.0001,
      pointSize: 5,
      pointDecay: 0.0025,
      sleepRadiusX: 250,
      sleepRadiusY: 250,
      sleepTimeCoefX: 0.001,
      sleepTimeCoefY: 0.002,
    });

    document.body.addEventListener("click", () => {
      pc.uniforms.uColor.value.set(Math.random() * 0xffffff);
      pc.uniforms.uCoordScale.value = 0.001 + Math.random() * 2;
      pc.uniforms.uNoiseIntensity.value = 0.0001 + Math.random() * 0.001;
      pc.uniforms.uPointSize.value = 1 + Math.random() * 10;
    });

    return () => {
      document.getElementById("app").removeChild(canvasRef.current);
    };
  }, []);

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    countryCode: Yup.string().required("Country Code is required"),
    phone: Yup.string()
      .required("Phone is required")
      .matches(/^\d{10}$/, "Phone number must be 10 digits"),
    message: Yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      countryCode: "" || "+44",
      phone: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await toast.promise(
          Email.send({
            Host: "smtp.elasticemail.com",
            Username: "contact@spiderotechnology.com",
            Password: "C9FDC5CD4B4719C4310C9C5FF078133E3816",
            To: "contact@spiderotechnology.com",
            From: "contact@spiderotechnology.com",
            Subject: "contact from submition from spidero technology website",
            Body: `Name: ${values.fullName}\nEmail: ${values.email}\nCountry Code: ${values.countryCode}\nPhone: ${values.phone}\nMessage: ${values.message}`,
          }),
          {
            loading: 'Sending email...',
            success: 'Email sent successfully!',
            error: 'Failed to send email.',
            
          }
        );
        resetForm();
      } catch (error) {
        console.error("Error sending email:", error);
      }
    },
  });

  return (
    <section className="relative h-auto flex flex-col  text-white py-0  bg-white mb-10">
      <div className="absolute w-full h-full mt-[-190px] " id="app"></div>
      <div className="flex flex-row w-[90%] h-auto  pt-32 mb-20">
        <div className="w-full lg:w-[50%]  relative flex justify-center items-center  ">
          <div className="flex flex-col items-start  ">
            <span className="text-white  text-start  font-sans font-bold text-3xl md:text-3xl lg:text-[48px] ml-14 h-auto  ">
              A top-rated web design
            </span>
            <span className="text-white  text-start  font-sans font-bold text-3xl md:text-3xl lg:text-[48px] ml-14 h-auto mt-5  ">
              company in UK
            </span>

            <div className="ml-14 mt-20 mb-9">
            <a href="/expertice">
              <button className=" w-[150px] h-[40px]  lg:w-[198px] lg:h-[51px] font-sans leading-6 tracking-2px text-[16px] font-medium text-black bg-white transition-all ease-in-out hover:bg-black hover:text-white">
                EXPLORE US
              </button>
            </a>
            </div>
          </div>
        </div>
        <div className="w-[40%] h-auto  hidden lg:block relative bg-black">
          <div className="p-10 ">
            <form onSubmit={formik.handleSubmit} className=" mt-5 ">
            <h3 className=" text-[24px] md:text-[36px] lg:text-[28px] sm:text-[26px] xl:text-[32px] font-bold   font-sans text-white ">
                Connect With Us
              </h3>
              <div className="relative mt-5 pt-6">
                <label
                  htmlFor="email"
                  className="absolute left-0 bottom-9 text-[16px] font-medium text-gray-300 pointer-events-none transition-all "
                >
                  Full Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="shadow-none bg-transparent border-b border-gray-300 text-white text-sm  block w-full p-1 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-none"
                  placeholder=""
                  onFocus={(e) =>
                    e.target.previousSibling.classList.add(
                      "bottom-0",
                      "text-xs",
                      "text-gray-500"
                    )
                  }
                />
                {formik.touched.fullName && formik.errors.fullName && (
                  <div className="text-red-500  text-xs mt-1">
                    {formik.errors.fullName}
                  </div>
                )}
              </div>

              <div className="relative pt-6 mt-4">
                <label
                  htmlFor="email"
                  className="absolute left-0 bottom-9 text-[16px] font-medium text-gray-300 pointer-events-none transition-all "
                >
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="shadow-none bg-transparent border-b border-gray-300 text-white text-sm  block w-full p-1 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-none"
                  placeholder=""
                  onFocus={(e) =>
                    e.target.previousSibling.classList.add(
                      "bottom-0",
                      "text-xs",
                      "text-gray-500"
                    )
                  }
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-500  text-xs mt-1">
                    {formik.errors.email}
                  </div>
                )}
              </div>
              <div className="relative pt-3 mt-5  ">
                <label
                  htmlFor="countryCode"
                  className="absolute left-0 bottom-9 text-[16px] font-medium text-gray-300 mb-2 "
                >
                  Country Code<span className="text-red-500 ">*</span>
                </label>

                <PhoneInput
                  id="countryCode"
                  value={formik.values.countryCode}
                  onChange={(value) =>
                    formik.setFieldValue("countryCode", value)
                  }
                  onBlur={formik.handleBlur}
                  international
                  defaultCountry="GB"
                  className=" mt-4  text-black bg-black " 
                  inputStyle={{ width: "6rem", pointerEvents: "none", }}
                />
                {formik.touched.countryCode && formik.errors.countryCode && (
                  <div className="text-red-500  text-xs mt-1">
                    {formik.errors.countryCode}
                  </div>
                )}
              </div>

              <div className="relative pt-6  mt-4">
                <label
                  htmlFor="email"
                  className="absolute left-0 bottom-9 text-[16px] font-medium text-gray-300 pointer-events-none transition-all "
                >
                  Phone<span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="shadow-none bg-transparent border-b border-gray-300 text-white text-sm  block w-full p-1 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-none"
                  onFocus={(e) =>
                    e.target.previousSibling.classList.add(
                      "bottom-0",
                      "text-xs",
                      "text-gray-500"
                    )
                  }
                />
                {formik.touched.phone && formik.errors.phone && (
                  <div className="text-red-500  text-xs mt-1">
                    {formik.errors.phone}
                  </div>
                )}
              </div>

              <div className="sm:col-span-2 relative mt-12 ">
                <label
                  htmlFor="message"
                  className="absolute left-0 bottom-16 text-[16px] font-medium text-gray-300 pointer-events-none transition-all"
                >
                  Type your message here
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows="2"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="shadow-none bg-transparent border-b border-gray-300 text-white text-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-1 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-none"
                  onFocus={(e) =>
                    e.target.previousSibling.classList.add(
                      "bottom-0",
                      "text-xs",
                      "text-gray-500"
                    )
                  }
                ></textarea>
                {formik.touched.message && formik.errors.message && (
                  <div className="text-red-500  text-xs mt-1">
                    {formik.errors.message}
                  </div>
                )}
              </div>

              {/* <div className="mt-10">
                    <button className="border border-white w-[180px] h-[51px] font-sans leading-6 tracking-{2px} text-[16px] font-medium text-white  bg-black ">
                      UPLOAD FILE
                      <input
                      id="fileInput"
                      type="file"
                      className="hidden"
                      multiple
                      onChange={handleFileChange}
                    />
                    </button> 
                </div> */}
              <button
                type="submit"
                className="border mt-10 mr-20 border-black w-[198px] h-[51px] font-sans leading-6 tracking-{2px} text-[16px] font-medium text-black  bg-white transition-all ease-in-out hover:bg-black hover:text-white hover:border-white"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </section>
  );
};

export default Herosection;
