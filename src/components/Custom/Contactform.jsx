import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import emailjs from "@emailjs/browser";

const Contactform = () => {
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    companyName: Yup.string().required("Company Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
      countryCode: Yup.string().required('Country Code is required'),
    phone: Yup.string().required("Phone is required"),
    areaOfInterest: Yup.string().required("Area Of Interest is required"),
    budget: Yup.string().required("Budget is required"),
    message: Yup.string().required("Your Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      companyName: "",
      email: "",
      countryCode:"",
      phone: "",
      areaOfInterest: "",
      budget: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const templateParams = {
          name: values.fullName,
          company: values.companyName,
          email: values.email,
          countryCode: values.countryCode,
          phone: values.phone,
          areaOfInterest: values.areaOfInterest,
          budget: values.budget,
          message: values.message,
        };

        const response = await emailjs.send(
          "service_7urphoj",
          "template_vflpuqd",
          templateParams,
          "vV-8CGzjqVUojOxcq"
        );

        console.log("Email sent successfully!", response);
        alert("Your message has been sent successfully!");
        form.reset();
      } catch (error) {
        console.error("Error sending email:", error);
      }
    },
  });

  return (
    <div className="max-w-screen-lg mx-auto p-5">
      <form className="md:col-span-8 p-10" onSubmit={formik.handleSubmit}>
        <h3 className="text-[40px] font-bold font-sans text-black mb-9 pt-5">
          Connect With Us
        </h3>
        <div className="flex flex-wrap -mx-3 mb-6 mt-20">
          {/* Full Name */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              className="appearance-none border-b-2 block w-full text-gray-700 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder=""
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.fullName && formik.errors.fullName && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.fullName}
              </p>
            )}
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="companyName"
            >
              Company Name
            </label>
            <input
              id="companyName"
              type="text"
              className="appearance-none border-b-2 block w-full text-gray-700 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder=""  
              value={formik.values.companyName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.companyName && formik.errors.companyName && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.companyName}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="text"
              className="appearance-none border-b-2 block w-full text-gray-700 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder=""
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
            )}
          </div>
          <div className="w-full  md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <div className=" flex flex-row">
              <PhoneInput
                id="countryCode"
                value={formik.values.countryCode}
                onChange={(value) => formik.setFieldValue("countryCode", value)}
                onBlur={formik.handleBlur}
                international
                className=" w-20 h-auto ml-2 mt-2  text-black bg-white "
              />
              <input
                id="phone"
                type="text"
                className="appearance-none border-b-2 block w-full text-gray-700 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder=""
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            {formik.touched.phone && formik.errors.phone && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.phone}</p>
            )}
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="areaOfInterest"
            >
              Area Of Interest
            </label>
            <select
              id="areaOfInterest"
              className="appearance-none border-b-2 block w-full text-gray-700 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={formik.values.areaOfInterest}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="">Select an option</option>
              <option value="CMS Design">CMS Design</option>
              <option value="Custom Software Development">
                Custom Software Development
              </option>
              <option value="Application Development">
                Application Development
              </option>
              <option value="Mobile Development">Mobile Development</option>
              <option value="Other">Other</option>
            </select>
            {formik.touched.areaOfInterest && formik.errors.areaOfInterest && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.areaOfInterest}
              </p>
            )}
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="budget"
            >
              Budget
            </label>
            <select
              id="budget"
              className="appearance-none border-b-2 block w-full text-gray-700 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={formik.values.budget}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="">Select an option</option>
              <option value="$500-$5000">$500-$5000</option>
              <option value="$5000-$20000">$5000-$20000</option>
              <option value="$20,000-$40,000">$20,000-$40,000</option>
              <option value="$50,000-$100k">$50,000-$100k</option>
              <option value="$100k-$250k">$100k-$250k</option>
              <option value="$250k & Above">$250k & Above</option>
            </select>
            {formik.touched.budget && formik.errors.budget && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.budget}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="message"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows="3"
              className="appearance-none border-b-2 block w-full text-gray-700 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              {...formik.getFieldProps("message")}
            ></textarea>
            {formik.touched.message && formik.errors.message && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.message}
              </p>
            )}
          </div>
          {/* <div className="mt-10">
            <label
              htmlFor="fileInput"
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input id="fileInput" type="file" className="hidden" multiple />
              <button className="border border-black w-[120px] h-[40px] font-sans leading-6 tracking-{2px} text-[12px] font-medium text-black  bg-white ">
                UPLOAD FILE
              </button>
            </label>
          </div> */}
          <div className="flex justify-between w-full px-3">
            <button
              type="submit"
              className="border mt-10 mr-20 border-black w-[198px] h-[51px] font-sans leading-6 tracking-{2px} text-[16px] font-medium text-black bg-white transition-all ease-in-out hover:bg-black hover:text-white hover:border-white"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contactform;
