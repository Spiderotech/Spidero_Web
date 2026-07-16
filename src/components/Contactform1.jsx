import React from "react";
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
import {
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  PaperAirplaneIcon,
  PencilSquareIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const Contactform1 = () => {
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
      emailjs.send(
        "YOUR_SERVICE_ID",      // 🔁 replace
        "YOUR_TEMPLATE_ID",     // 🔁 replace
        {
          fullName: values.fullName,
          email: values.email,
          countryCode: values.countryCode,
          phone: values.phone,
          message: values.message,
        },
        "YOUR_PUBLIC_KEY"       // 🔁 replace
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
    <section className="relative mt-8 overflow-hidden bg-[#f6f9fe] px-4 py-10 font-sans sm:px-6 lg:px-10">
      <div className="pointer-events-none absolute left-12 top-12 hidden h-20 w-20 opacity-50 md:block">
        <div className="h-full w-full bg-[radial-gradient(circle,_#cfe0f8_1.8px,_transparent_1.8px)] [background-size:16px_16px]" />
      </div>
      <div className="pointer-events-none absolute -left-24 bottom-[-120px] h-72 w-72 rounded-full border border-blue-100/70" />

      <div className="relative mx-auto grid max-w-[1420px] min-w-0 gap-6 lg:grid-cols-[0.76fr_1.14fr]">
        <div className="relative flex min-h-[360px] min-w-0 items-center justify-center py-6 sm:min-h-[430px] sm:py-8">
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="contact-testimonial-swiper w-full max-w-full min-w-0 !overflow-visible !pb-10 sm:max-w-[500px]"
          >
            <SwiperSlide className="!overflow-visible">
              <article className="relative mx-auto mt-12 w-full max-w-full overflow-visible rounded-xl bg-white px-5 pb-8 pt-16 text-center shadow-[0_16px_42px_rgba(15,23,42,0.10)] sm:mt-14 sm:px-9 sm:pb-9 sm:pt-20 sm:shadow-[0_20px_55px_rgba(15,23,42,0.12)]">
                <img
                  src={web7}
                  alt="Akshay Madhusudhanan"
                  className="absolute left-1/2 top-0 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-[5px] border-white object-cover shadow-[0_16px_30px_rgba(15,23,42,0.15)] sm:h-24 sm:w-24 sm:border-[6px]"
                />
                <span className="absolute left-5 top-10 text-[46px] font-bold leading-none text-blue-800 sm:left-8 sm:top-11 sm:text-[60px]">
                  “
                </span>
                <div className="pointer-events-none absolute right-4 top-8 h-10 w-10 opacity-60 sm:right-7 sm:h-12 sm:w-12 sm:opacity-70">
                  <div className="h-full w-full bg-[radial-gradient(circle,_#cbd8e8_2px,_transparent_2px)] [background-size:16px_16px]" />
                </div>
                <p className="mx-auto max-w-full break-words px-1 text-[16px] leading-7 text-black [overflow-wrap:anywhere] sm:max-w-[390px] sm:px-0 sm:text-[20px] sm:leading-9">
                  Spidero Technology served as an invaluable collaborator,
                  delivering an exceptional software solution that significantly
                  improved our customer experience.
                </p>
                <span className="mx-auto mt-6 block h-1 w-14 rounded-full bg-gradient-to-br from-blue-800 to-blue-800" />
                <h3 className="mt-5 text-[18px] font-bold leading-tight text-black sm:text-[19px]">
                  Akshay Madhusudhanan
                </h3>
                <p className="mt-1.5 text-[14px] font-medium leading-6 text-[#5d6778] sm:text-[15px]">
                  CEO & Founder, Spidero Technology
                </p>
              </article>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="min-w-0 rounded-[18px] bg-white p-4 shadow-[0_18px_48px_rgba(15,23,42,0.09)] sm:rounded-[22px] sm:p-6 lg:p-8 lg:shadow-[0_22px_65px_rgba(15,23,42,0.10)]">
          <div className="mb-6 flex items-start gap-4 sm:items-center sm:gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-800 sm:h-16 sm:w-16">
              <EnvelopeIcon className="h-7 w-7 sm:h-8 sm:w-8" />
            </div>
            <div className="min-w-0">
              <h3 className="text-[26px] font-bold leading-tight text-[#071435] md:text-[34px]">
                Let&apos;s Connect
              </h3>
              <p className="mt-1.5 text-[14px] font-medium leading-6 text-[#6a7183] md:text-[17px]">
                We&apos;d love to hear about your project.
              </p>
            </div>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="fullName" className="sr-only">
                  Full Name
                </label>
                <div className="flex h-14 items-center gap-3 rounded-lg border border-[#d8dee8] bg-white px-4 sm:h-[60px] sm:px-5">
                  <UserIcon className="h-5 w-5 shrink-0 text-[#697386] sm:h-6 sm:w-6" />
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="h-full min-w-0 w-full bg-transparent text-[15px] font-medium text-[#152033] outline-none placeholder:text-[#2d3546] sm:text-[16px]"
                    placeholder="Full Name *"
                  />
                </div>
                {formik.touched.fullName && formik.errors.fullName && (
                  <div className="mt-1 text-xs text-red-500">
                    {formik.errors.fullName}
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <div className="flex h-14 items-center gap-3 rounded-lg border border-[#d8dee8] bg-white px-4 sm:h-[60px] sm:px-5">
                  <EnvelopeIcon className="h-5 w-5 shrink-0 text-[#697386] sm:h-6 sm:w-6" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="h-full min-w-0 w-full bg-transparent text-[15px] font-medium text-[#152033] outline-none placeholder:text-[#2d3546] sm:text-[16px]"
                    placeholder="Email *"
                  />
                </div>
                {formik.touched.email && formik.errors.email && (
                  <div className="mt-1 text-xs text-red-500">
                    {formik.errors.email}
                  </div>
                )}
              </div>
            </div>

            <div className="grid min-w-0 overflow-visible rounded-lg border border-[#d8dee8] bg-white md:grid-cols-[0.48fr_0.52fr]">
              <div className="flex min-h-[64px] min-w-0 items-center gap-3 border-b border-[#d8dee8] px-4 sm:min-h-[60px] sm:px-5 md:border-b-0 md:border-r">
                <GlobeAltIcon className="h-5 w-5 shrink-0 text-[#697386] sm:h-6 sm:w-6" />
                <div className="min-w-0 flex-1">
                  <span className="mb-0.5 block text-[15px] font-medium text-[#2d3546] sm:text-[16px]">
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
                      fontSize: "14px",
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
              <div className="flex min-h-[56px] min-w-0 items-center px-4 sm:min-h-[60px] sm:px-5">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="h-full min-w-0 w-full bg-transparent text-[15px] font-medium text-[#152033] outline-none placeholder:text-[#2d3546] sm:text-[16px]"
                  placeholder="Phone *"
                />
              </div>
            </div>
            {(formik.touched.countryCode && formik.errors.countryCode) ||
            (formik.touched.phone && formik.errors.phone) ? (
              <div className="text-xs text-red-500">
                {formik.errors.countryCode || formik.errors.phone}
              </div>
            ) : null}

            <div>
              <label htmlFor="message" className="sr-only">
                Type your message here
              </label>
              <div className="flex min-h-[120px] items-start gap-3 rounded-lg border border-[#d8dee8] bg-white px-4 py-4 sm:min-h-[130px] sm:px-5 sm:py-5">
                <PencilSquareIcon className="mt-1 h-5 w-5 shrink-0 text-[#697386] sm:h-6 sm:w-6" />
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="min-h-[82px] min-w-0 w-full resize-y bg-transparent text-[15px] font-medium text-[#152033] outline-none placeholder:text-[#2d3546] sm:min-h-[90px] sm:text-[16px]"
                  placeholder="Type your message here *"
                />
              </div>
              {formik.touched.message && formik.errors.message && (
                <div className="mt-1 text-xs text-red-500">
                  {formik.errors.message}
                </div>
              )}
            </div>

            <div className="grid min-w-0 gap-3 pt-1 sm:gap-4 md:grid-cols-[0.82fr_0.94fr]">
              <button
                type="submit"
                className="flex min-h-14 items-center justify-center gap-3 rounded-lg bg-gradient-to-br from-blue-800 to-blue-800 px-5 py-3 text-[16px] font-bold text-white shadow-[0_16px_34px_rgba(30,64,175,0.28)] transition hover:from-blue-900 hover:to-blue-900 hover:shadow-[0_20px_40px_rgba(30,64,175,0.32)] sm:h-[62px] sm:px-6 sm:py-0 sm:text-[17px]"
              >
                <PaperAirplaneIcon className="h-6 w-6" />
                Send Message
              </button>
              <a
                href="/contact"
                className="flex min-h-14 items-center justify-center gap-3 rounded-lg bg-[#f3f7fc] px-4 py-3 text-[14px] font-bold text-[#071435] transition hover:bg-[#eaf2fb] sm:h-[62px] sm:px-5 sm:py-0 sm:text-[15px]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue-800">
                  <ChatBubbleLeftRightIcon className="h-6 w-6" />
                </span>
                <span className="text-left">
                  <span className="block">Need a quick answer?</span>
                  <span className="flex items-center gap-2 text-blue-800">
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

export default Contactform1;
