import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import web7 from "../assets/about1 (2).jpg";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Contactform1 = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://smtpjs.com/v3/smtp.js";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
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
            loading: "Sending email...",
            success: "Email sent successfully!",
            error: "Failed to send email.",
          }
        );
        resetForm();
      } catch (error) {
        console.error("Error sending email:", error);
      }
    },
  });

  return (
    <footer className="flex flex-col text-center dark:bg-neutral-600 lg:text-left mt-10">
      <div className="  text-neutral-800 dark:text-neutral-200 w-full h-auto ">
        <div className="grid grid-cols-1  lg:grid-cols-2 ">
          <div className="mb-6 md:mb-0 ">
            <div className="  text-white h-auto ">
              <div className="h-auto mt-14 w-full">
                <Swiper
                  effect="coverflow"
                  modules={[Pagination]}
                  spaceBetween={50}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide>
                    <div className="sm:w-[300px] md:w-[400px] lg:w-[550px] h-auto mx-4 sm:mx-auto my-4 flex flex-col justify-center items-center mb-8">
                      <div className="w-full h-auto flex flex-col justify-center items-center">
                        <img
                          src={web7}
                          alt="profile"
                          className="w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px] rounded-full object-cover"
                        />
                        <span className="text-black  text-center mt-4 sm:mt-6 md:mt-8 lg:mt-10 text-sm sm:text-base md:text-lg lg:text-[26px] ">
                          <svg
                            className="w-8 h-8 mr-4 mx-auto  text-gray-400 dark:text-gray-600 text-start inline-block"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 18 14"
                          >
                            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                          </svg>
                          Spidero Technology served as an invaluable
                          collaborator, delivering an exceptional software
                          solution that significantly improved our customer
                          experience.
                        </span>
                        <strong className="text-black text-sm sm:text-base md:text-lg lg:text-[20px] mt-5 ">
                          Akshay
                        </strong>
                      </div>

                      <span className="text-black text-sm sm:text-base md:text-[14px] lg:text-[16px] font-medium">
                        Founder/ Director,Spidero Technology
                      </span>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>

          <div className="w-full h-auto text-start bg-black flex justify-center items-center cursor-pointer ">
            <div className="w-[65%] pt-[60px] pb-[60px] ">
              <h3 className=" text-[24px] md:text-[36px] lg:text-[28px] sm:text-[26px] xl:text-[40px] font-bold  font-sans text-white ">
                Connect With Us
              </h3>
              <form onSubmit={formik.handleSubmit} className=" mt-5 ">
                <div className="relative pt-6">
                  <label
                    htmlFor="email"
                    className="absolute left-2 bottom-9 text-[16px] font-medium text-gray-300 pointer-events-none transition-all "
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
                    className="absolute left-2 bottom-9 text-[16px] font-medium text-gray-300 pointer-events-none transition-all "
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
                <div className="relative pt-3 ">
                  <label
                    htmlFor="countryCode"
                    className=" text-sm font-medium text-gray-300 pointer-events-none transition-all    "
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
                    className="ml-2 mt-2 text-black bg-black " 
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
                    className="absolute left-2 bottom-9 text-[16px] font-medium text-gray-300 pointer-events-none transition-all "
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
                    className="absolute left-2 bottom-16 text-[16px] font-medium text-gray-300 pointer-events-none transition-all"
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
                  className="border mt-10 mr-20 border-black w-[198px] h-[51px] font-sans leading-6 tracking-{2px} text-[16px] font-medium text-black  bg-white transition-all ease-in-out hover:bg-black hover:text-white hover:border-white cursor-pointer"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </footer>
  );
};

export default Contactform1;
