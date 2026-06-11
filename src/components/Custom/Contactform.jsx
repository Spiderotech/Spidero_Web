import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import web7 from "../../assets/about1 (1).jpg";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  BuildingOffice2Icon,
  ChatBubbleLeftRightIcon,
  CurrencyDollarIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  PaperAirplaneIcon,
  PencilSquareIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const inputWrap =
  "flex h-[58px] items-center gap-3 rounded-lg border border-[#d8dee8] bg-white px-5 transition focus-within:border-blue-400 focus-within:shadow-[0_0_0_4px_rgba(37,99,235,0.08)]";
const inputClass =
  "h-full w-full bg-transparent text-[15px] font-medium text-[#152033] outline-none placeholder:text-[#2d3546]";
const errorClass = "mt-1 text-xs text-red-500";

const Contactform = () => {
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    companyName: Yup.string().required("Company Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    countryCode: Yup.string().required("Country Code is required"),
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
      countryCode: "+44",
      phone: "",
      areaOfInterest: "",
      budget: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await toast.promise(
          emailjs.send(
            "YOUR_SERVICE_ID",
            "YOUR_TEMPLATE_ID",
            {
              fullName: values.fullName,
              companyName: values.companyName,
              email: values.email,
              countryCode: values.countryCode,
              phone: values.phone,
              areaOfInterest: values.areaOfInterest,
              budget: values.budget,
              message: values.message,
            },
            "YOUR_PUBLIC_KEY"
          ),
          {
            loading: "Sending email...",
            success: "Email sent successfully!",
            error: "Failed to send email.",
          }
        );

        resetForm();
      } catch (error) {
        console.error("EmailJS Error:", error);
        toast.error("Something went wrong. Please try again.");
      }
    },
  });

  return (
    <section className="relative overflow-hidden bg-[#f6f9fe] px-5 py-12 font-sans sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute left-12 top-12 hidden h-20 w-20 opacity-50 md:block">
        <div className="h-full w-full bg-[radial-gradient(circle,_#cfe0f8_1.8px,_transparent_1.8px)] [background-size:16px_16px]" />
      </div>
      <div className="pointer-events-none absolute -left-24 bottom-[-120px] h-72 w-72 rounded-full border border-blue-100/70" />

      <div className="relative mx-auto grid max-w-[1420px] gap-6 lg:grid-cols-[0.76fr_1.14fr]">
        <div className="relative flex min-h-[520px] items-center justify-center py-8">
          <article className="relative mx-auto mt-10 max-w-[500px] rounded-xl bg-white px-7 pb-9 pt-20 text-center shadow-[0_20px_55px_rgba(15,23,42,0.12)] sm:px-11">
            <img
              src={web7}
              alt="Akshay Madhusudhanan"
              className="absolute left-1/2 top-0 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border-[6px] border-white object-cover shadow-[0_16px_30px_rgba(15,23,42,0.15)]"
            />
            <span className="absolute left-8 top-11 text-[60px] font-bold leading-none text-[#1374f6]">
              “
            </span>
            <div className="pointer-events-none absolute right-7 top-8 h-12 w-12 opacity-70">
              <div className="h-full w-full bg-[radial-gradient(circle,_#cbd8e8_2px,_transparent_2px)] [background-size:16px_16px]" />
            </div>
            <p className="mx-auto max-w-[390px] text-[17px] leading-8 text-black sm:text-[20px] sm:leading-9">
              Cooking up innovation at Spidero Technology , we're dedicated to pushing boundaries and delivering cutting-edge solutions
            </p>
            <span className="mx-auto mt-6 block h-1 w-14 rounded-full bg-[#1178ff]" />
            <h3 className="mt-5 text-[19px] font-bold text-black">
              Taha Farooqui
            </h3>
            <p className="mt-1.5 text-[15px] font-medium text-[#5d6778]">
              Chief Technology Officer,Spidero Technology
            </p>
          </article>
        </div>

        <div className="rounded-[22px] bg-white p-5 shadow-[0_22px_65px_rgba(15,23,42,0.10)] sm:p-6 lg:p-8">
          <div className="mb-6 flex items-center gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#eef5ff] text-[#0877ff]">
              <EnvelopeIcon className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-[28px] font-bold leading-tight text-[#071435] md:text-[34px]">
                Connect With Us
              </h3>
              <p className="mt-1.5 text-[15px] font-medium text-[#6a7183] md:text-[17px]">
                Tell us about your custom software requirement.
              </p>
            </div>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="fullName" className="sr-only">
                  Full Name
                </label>
                <div className={inputWrap}>
                  <UserIcon className="h-6 w-6 shrink-0 text-[#697386]" />
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={inputClass}
                    placeholder="Full Name *"
                  />
                </div>
                {formik.touched.fullName && formik.errors.fullName && (
                  <div className={errorClass}>{formik.errors.fullName}</div>
                )}
              </div>

              <div>
                <label htmlFor="companyName" className="sr-only">
                  Company Name
                </label>
                <div className={inputWrap}>
                  <BuildingOffice2Icon className="h-6 w-6 shrink-0 text-[#697386]" />
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    value={formik.values.companyName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={inputClass}
                    placeholder="Company Name *"
                  />
                </div>
                {formik.touched.companyName && formik.errors.companyName && (
                  <div className={errorClass}>{formik.errors.companyName}</div>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <div className={inputWrap}>
                <EnvelopeIcon className="h-6 w-6 shrink-0 text-[#697386]" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={inputClass}
                  placeholder="Email *"
                />
              </div>
              {formik.touched.email && formik.errors.email && (
                <div className={errorClass}>{formik.errors.email}</div>
              )}
            </div>

            <div className="grid overflow-hidden rounded-lg border border-[#d8dee8] bg-white transition focus-within:border-blue-400 focus-within:shadow-[0_0_0_4px_rgba(37,99,235,0.08)] md:grid-cols-[0.48fr_0.52fr]">
              <div className="flex min-h-[58px] items-center gap-3 border-b border-[#d8dee8] px-5 md:border-b-0 md:border-r">
                <GlobeAltIcon className="h-6 w-6 shrink-0 text-[#697386]" />
                <div className="min-w-0 flex-1">
                  <span className="mb-0.5 block text-[15px] font-medium text-[#2d3546]">
                    Country Code <span className="text-red-500">*</span>
                  </span>
                  <PhoneInput
                    id="countryCode"
                    country="gb"
                    value={formik.values.countryCode}
                    onChange={(value) =>
                      formik.setFieldValue("countryCode", value)
                    }
                    onBlur={() => formik.setFieldTouched("countryCode", true)}
                    inputStyle={{
                      width: "100%",
                      height: "24px",
                      border: "0",
                      paddingLeft: "48px",
                      fontSize: "15px",
                      fontWeight: "600",
                      color: "#152033",
                      background: "transparent",
                      boxShadow: "none",
                    }}
                    buttonStyle={{
                      border: "0",
                      background: "transparent",
                    }}
                    containerStyle={{ width: "100%" }}
                    dropdownStyle={{ zIndex: 30 }}
                  />
                </div>
              </div>
              <div className="flex min-h-[58px] items-center px-5">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={inputClass}
                  placeholder="Phone *"
                />
              </div>
            </div>
            {(formik.touched.countryCode && formik.errors.countryCode) ||
            (formik.touched.phone && formik.errors.phone) ? (
              <div className={errorClass}>
                {formik.errors.countryCode || formik.errors.phone}
              </div>
            ) : null}

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="areaOfInterest" className="sr-only">
                  Area Of Interest
                </label>
                <div className={inputWrap}>
                  <BriefcaseIcon className="h-6 w-6 shrink-0 text-[#697386]" />
                  <select
                    id="areaOfInterest"
                    name="areaOfInterest"
                    value={formik.values.areaOfInterest}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="">Area Of Interest *</option>
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
                </div>
                {formik.touched.areaOfInterest &&
                  formik.errors.areaOfInterest && (
                    <div className={errorClass}>
                      {formik.errors.areaOfInterest}
                    </div>
                  )}
              </div>

              <div>
                <label htmlFor="budget" className="sr-only">
                  Budget
                </label>
                <div className={inputWrap}>
                  <CurrencyDollarIcon className="h-6 w-6 shrink-0 text-[#697386]" />
                  <select
                    id="budget"
                    name="budget"
                    value={formik.values.budget}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="">Budget *</option>
                    <option value="$500-$5000">$500-$5000</option>
                    <option value="$5000-$20000">$5000-$20000</option>
                    <option value="$20,000-$40,000">$20,000-$40,000</option>
                    <option value="$50,000-$100k">$50,000-$100k</option>
                    <option value="$100k-$250k">$100k-$250k</option>
                    <option value="$250k & Above">$250k & Above</option>
                  </select>
                </div>
                {formik.touched.budget && formik.errors.budget && (
                  <div className={errorClass}>{formik.errors.budget}</div>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Your Message
              </label>
              <div className="flex min-h-[126px] items-start gap-3 rounded-lg border border-[#d8dee8] bg-white px-5 py-5 transition focus-within:border-blue-400 focus-within:shadow-[0_0_0_4px_rgba(37,99,235,0.08)]">
                <PencilSquareIcon className="mt-1 h-6 w-6 shrink-0 text-[#697386]" />
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="min-h-[86px] w-full resize-y bg-transparent text-[15px] font-medium text-[#152033] outline-none placeholder:text-[#2d3546]"
                  placeholder="Your Message *"
                />
              </div>
              {formik.touched.message && formik.errors.message && (
                <div className={errorClass}>{formik.errors.message}</div>
              )}
            </div>

            <div className="grid gap-4 pt-1 md:grid-cols-[0.82fr_0.94fr]">
              <button
                type="submit"
                className="flex h-[62px] items-center justify-center gap-3 rounded-lg bg-[#e96f3f] px-6 text-[17px] font-bold text-white shadow-[0_16px_34px_rgba(8,119,255,0.22)] transition hover:bg-[#0068e5]"
              >
                <PaperAirplaneIcon className="h-6 w-6" />
                Send Message
              </button>
              <a
                href="/contact"
                className="flex h-[62px] items-center justify-center gap-3 rounded-lg bg-[#f3f7fc] px-5 text-[15px] font-bold text-[#071435] transition hover:bg-[#eaf2fb]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0877ff]">
                  <ChatBubbleLeftRightIcon className="h-6 w-6" />
                </span>
                <span className="text-left">
                  <span className="block">Need a quick answer?</span>
                  <span className="flex items-center gap-2 text-[#0877ff]">
                    Get Pricing <ArrowRightIcon className="h-4 w-4" />
                  </span>
                </span>
              </a>
            </div>
          </form>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </section>
  );
};

export default Contactform;
