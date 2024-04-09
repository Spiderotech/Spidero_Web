import React,{useEffect} from "react";
import toast, { Toaster } from 'react-hot-toast';

import web4 from "../../assets/in.svg";
import web6 from "../../assets/london.jpg";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import web5 from "../../assets/about1 (1).jpg";
import web7 from "../../assets/about1 (2).jpg";

const Formsection = () => {

  useEffect(() => {
    
    const script = document.createElement('script');
    

    script.src = 'https://smtpjs.com/v3/smtp.js';
    
    
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
    onSubmit:async (values, { resetForm }) => {
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
    <section className="h-auto flex flex-col  items-center justify-center  text-white py-0 px-3  pt-24">
      <h2 className="text-black pt-8 text-start leading-10 font-sans font-bold text-xl md:text-3xl lg:text-[48px] ">
        Awesomeness awaits!
      </h2>

      <h2 className="text-black pt-8 text-start leading-10 font-sans font-bold text-[30px]">
        Connect with our experts.
      </h2>
      <div className="flex flex-col lg:flex-row w-full h-auto items-center justify-center mb-10   mt-10">
        <div className=" w-full lg:w-[50%] h-auto bg-white lg:ml-5 p-5 lg:p-20      ">
          <form onSubmit={formik.handleSubmit}>
            <div className="relative">
              <label
                htmlFor="email"
                className="absolute left-0 bottom-10 text-sm font-medium text-black pointer-events-none transition-all "
              >
                Full Name<span className="text-red-500  ">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="shadow-none bg-transparent border-b border-gray-300 text-black text-sm  block w-full p-2.5 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-none"
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
                className="absolute left-0 bottom-10 text-sm font-medium text-black pointer-events-none transition-all "
              >
                Email<span className="text-red-500 ">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="shadow-none bg-transparent border-b border-gray-300 text-black text-sm  block w-full p-2.5 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-none"
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
                className=" absolute left-0 bottom-10 text-sm font-medium text-black pointer-events-none transition-all "
              >
                Country Code<span className="text-red-500 ">*</span>
              </label>

              <PhoneInput
                id="countryCode"
                value={formik.values.countryCode}
                onChange={(value) => formik.setFieldValue("countryCode", value)}
                onBlur={formik.handleBlur}
                international
                defaultCountry="GB"
                className=" mt-4  text-black  " 
                inputStyle={{ width:"6rem",  pointerEvents: "none", }}
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
                className="absolute left-0 bottom-10 text-sm font-medium text-black pointer-events-none transition-all "
              >
                Phone<span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="shadow-none bg-transparent border-b border-gray-300 text-black text-sm  block w-full p-2.5 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-none"
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
                className="absolute left-0 bottom-20 text-sm font-medium text-black pointer-events-none transition-all"
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
                className="shadow-none bg-transparent border-b border-gray-300 text-black text-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-none"
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
              className="border  cursor-pointer mt-10 mr-20 border-black w-[198px] h-[51px] font-sans leading-6 tracking-{2px} text-[16px] font-medium text-black  bg-white transition-all ease-in-out hover:bg-black hover:text-white hover:border-white"
            >
              SUBMIT
            </button>
          </form>
        </div>
        <div className="w-full lg:w-[50%] h-auto  flex flex-col   ">
          <div className="w-full h-56 ml-0 p-5    lg:ml-10  ">
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
            <a href="mailto: contact@spiderotechnology.com">
              <h2 className="text-black  cursor-pointer text-start leading-7 mt-3 font-sans  font-semibold text-[18px] ">
              contact@spiderotechnology.com
              </h2>
            </a>
          </div>

          <div className="w-full h-auto">
            <div className="w-full lg:w-[70%] h-auto flex flex-col justify-center ml-0 lg:ml-[5%]  border p-19 pb-5 ">
              <span className="text-black m text-[16px] sm:text-[18px] md:text-[21px] lg:text-[21px] font-sans text-start font-normal p-5">
              Spidero Technology served as an invaluable collaborator, delivering an exceptional software solution that significantly improved our customer experience
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
                     CEO & Founder,Spidero Technology
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-auto mt-5  ">
            <div className="w-full  lg:w-[70%] h-auto flex flex-col justify-center ml-0 lg:ml-[5%] border p-19 pb-5 ">
              <span className="text-black  text-[16px] sm:text-[18px] md:text-[21px] lg:text-[21px] font-sans text-start font-normal p-5">
              Cooking up innovation at  Spidero Technology , we're dedicated to pushing boundaries and delivering cutting-edge solutions
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
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </section>
  );
};

export default Formsection;
