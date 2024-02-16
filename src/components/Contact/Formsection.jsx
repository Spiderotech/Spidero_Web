import React from "react";

import web4 from "../../assets/in.svg";
import web6 from "../../assets/london.jpg";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import web5 from "../../assets/about1 (1).jpg";
import web7 from "../../assets/about1 (2).jpg";

const Formsection = () => {
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
      countryCode: "",
      phone: "",
      message: "",
    },
    validationSchema,
    onSubmit:async (values) => {
      try {
       
        const templateParams = {
          fullName: values.fullName,
          email: values.email,
          countryCode: values.countryCode,
          phone: values.phone,
          message: values.message,
        };
  
        const response = await emailjs.send(
          'service_7urphoj',
          'template_vjxigd6',
          templateParams,
          'vV-8CGzjqVUojOxcq'
        );
       
        console.log('Email sent successfully!', response);
        alert("Your message has been sent successfully!");
        resetForm();
       
  
       
      } catch (error) {
        console.error('Error sending email:', error);
  
       
      }
    },
  });

  return (
    <section className="h-auto flex flex-col  items-center justify-center text-center text-white py-0 px-3  pt-24">
      <h2 className="text-black pt-8 text-start leading-10 font-sans font-bold text-xl md:text-3xl lg:text-[48px] ">
        Awesomeness awaits!
      </h2>

      <h2 className="text-black pt-8 text-start leading-10 font-sans font-bold text-[30px]">
        Connect with our experts.
      </h2>
      <div className="flex flex-col md:flex-row w-full h-auto items-center justify-center text-center mb-10">
        <div className=" w-full md:w-[50%] h-auto bg-white md:ml-5 p-10 ">
          <form onSubmit={formik.handleSubmit}>
            <div className="relative pt-6">
              <label
                htmlFor="email"
                className="absolute left-2 bottom-10 text-sm font-medium text-black pointer-events-none transition-all "
              >
                Full Name<span className="text-red-500 ">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="shadow-none bg-transparent border-b border-gray-300 text-black text-sm  block w-[80%] p-2.5 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-none"
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
                <div className="text-red-500  text-xs mt-1  absolute left-2">
                  {formik.errors.fullName}
                </div>
              )}
            </div>

            <div className="relative pt-6 mt-6">
              <label
                htmlFor="email"
                className="absolute left-2 bottom-10 text-sm font-medium text-black pointer-events-none transition-all "
              >
                Email<span className="text-red-500 ">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="shadow-none bg-transparent border-b border-gray-300 text-black text-sm  block w-[80%] p-2.5 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-none"
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
                <div className="text-red-500  text-xs mt-1  absolute left-2">
                  {formik.errors.email}
                </div>
              )}
            </div>
            <div className="relative pt-6 mt-6 ">
              <label
                htmlFor="countryCode"
                className=" absolute left-2 bottom-10 text-sm font-medium text-black pointer-events-none transition-all "
              >
                Country Code<span className="text-red-500 ">*</span>
              </label>

              <PhoneInput
                id="countryCode"
                value={formik.values.countryCode}
                onChange={(value) => formik.setFieldValue("countryCode", value)}
                onBlur={formik.handleBlur}
                international
                className=" w-20 h-auto ml-2 mt-2  text-black bg-white"
              />
              {formik.touched.countryCode && formik.errors.countryCode && (
                <div className="text-red-500  text-xs mt-1  absolute left-2">
                  {formik.errors.countryCode}
                </div>
              )}
            </div>

            <div className="relative pt-6  mt-6">
              <label
                htmlFor="email"
                className="absolute left-2 bottom-10 text-sm font-medium text-black pointer-events-none transition-all "
              >
                Phone<span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="shadow-none bg-transparent border-b border-gray-300 text-black text-sm  block w-[80%] p-2.5 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-none"
                onFocus={(e) =>
                  e.target.previousSibling.classList.add(
                    "bottom-0",
                    "text-xs",
                    "text-gray-500"
                  )
                }
              />
              {formik.touched.phone && formik.errors.phone && (
                <div className="text-red-500  text-xs mt-1  absolute left-2">
                  {formik.errors.phone}
                </div>
              )}
            </div>

            <div className="sm:col-span-2 relative mt-16">
              <label
                htmlFor="message"
                className="absolute left-2 bottom-20 text-sm font-medium text-black pointer-events-none transition-all"
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
                className="shadow-none bg-transparent border-b border-gray-300 text-black text-sm focus:ring-primary-500 focus:border-primary-500 block w-[80%] p-2.5 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-none"
                onFocus={(e) =>
                  e.target.previousSibling.classList.add(
                    "bottom-0",
                    "text-xs",
                    "text-gray-500"
                  )
                }
              ></textarea>
              {formik.touched.message && formik.errors.message && (
                <div className="text-red-500  text-xs mt-1  absolute left-2">
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
        <div className="w-full md:w-[50%] h-auto  flex flex-col p-10">
          <div className="w-full h-56  ">
            <h2 className="text-black text-start leading-10 font-sans font-bold text-[21px] ">
              Get In Touch With Us:
            </h2>
            <div className="row mt-2 flex items-center">
              <div className="column mt-2">
                <img src={web6} alt="profile" className="w-6 h-4 " />
              </div>
              <div className="column ml-4 mt-2">
                <h2 className="text-black text-start leading-7 font-sans font-semibold text-[16px] ">
                +44 7368937674
                </h2>
              </div>
            </div>
            <div className="row mt-2 flex items-center">
              <div className="column mt-3">
                <img src={web4} alt="profile" className="w-6 h-6" />
              </div>
              <div className="column  ml-4 mt-3">
                <h2 className="text-black text-start leading-7  font-sans font-semibold text-[16px] ">
                +91 8089650271
                </h2>
              </div>
            </div>
            <a href="mailto:contact@spidero.in">
              <h2 className="text-black text-start leading-7 mt-3 font-sans  font-semibold text-[18px] ">
              contact@spiderotechnology.com
              </h2>
            </a>
          </div>

          <div className="w-full h-auto">
            <div className="w-full md:w-[70%] h-auto flex flex-col justify-center ml-0 md:ml-[5%]  border p-19 pb-5 ">
              <span className="text-black m text-[16px] sm:text-[18px] md:text-[21px] lg:text-[21px] font-sans text-start font-normal p-5">
              Spidero Technology functioned as a genuine collaborator and
                  provided a superior software solution that greatly enhanced
                  our customer experience.
              </span>
              <div className="flex flex-row ml-5  ">
                <img
                  src={web7}
                  alt="profile"
                  className="w-[20px] h-[20px] sm:w-[20px] sm:h-[20px] lg:w-[50px] lg:h-[50px] rounded-full object-cover "
                />
                <div className="flex flex-col ml-5">
                  <strong className="text-black text-sm sm:text-base md:text-lg lg:text-xl">
                  Akshay
                  </strong>
                  <span className="text-black text-sm ">
                     Founder/ Director,Spidero Technology
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-auto mt-5  ">
            <div className="w-full  md:w-[70%] h-auto flex flex-col justify-center ml-0 md:ml-[5%] border p-19 pb-5 ">
              <span className="text-black  text-[16px] sm:text-[18px] md:text-[21px] lg:text-[21px] font-sans text-start font-normal p-5">
                Spidero Technology worked like a true partner, & delivered a
                top-notch software product that significantly elevated our
                customer experience.
              </span>
              <div className="flex flex-row ml-5  ">
                <img
                  src={web5}
                  alt="profile"
                  className="w-[20px] h-[20px] sm:w-[20px] sm:h-[20px] lg:w-[50px] lg:h-[50px] rounded-full object-cover "
                />
                <div className="flex flex-col ml-5">
                  <strong className="text-black text-sm sm:text-base md:text-lg lg:text-xl">
                  Taha Farooqui
                  </strong>
                  <span className="text-black text-sm ">
                  Chief Technology Officer,Spidero Technology
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formsection;
