import React from "react";
import toast, { Toaster } from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import indiaFlag from "../../assets/in.svg";
import ukFlag from "../../assets/london.jpg";
import akshay from "../../assets/about1 (2).jpg";
import taha from "../../assets/about1 (1).jpg";
import {
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  EnvelopeIcon,
  LockClosedIcon,
  PaperAirplaneIcon,
  PencilSquareIcon,
  PhoneIcon,
  ShieldCheckIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const fieldWrap =
  "flex h-[70px] items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition focus-within:border-blue-400 focus-within:shadow-[0_0_0_4px_rgba(37,99,235,0.08)]";
const inputClass =
  "h-full w-full bg-transparent text-[15px] font-semibold tracking-normal text-[#07122f] outline-none placeholder:text-slate-600";
const errorClass = "mt-1 text-xs font-medium text-red-500";

const testimonials = [
  {
    text: "Spidero Technology served as an invaluable collaborator, delivering an exceptional software solution that significantly improved our customer experience.",
    name: "Akshay",
    role: "CEO & Founder, Spidero Technology",
    image: akshay,
  },
  {
    text: "Cooking up innovation at Spidero Technology, we’re dedicated to pushing boundaries and delivering cutting-edge solutions.",
    name: "Taha Farooqui",
    role: "Chief Technology Officer, Spidero Technology",
    image: taha,
  },
];

const benefits = [
  {
    title: "Quick Response",
    text: "We typically reply within 24 hours.",
    icon: ClockIcon,
    color: "text-blue-800 bg-blue-50",
  },
  {
    title: "Privacy Guaranteed",
    text: "Your information is secure and never shared.",
    icon: ShieldCheckIcon,
    color: "text-blue-800 bg-blue-50",
  },
  {
    title: "Expert Support",
    text: "Talk to experienced professionals.",
    icon: ChatBubbleLeftRightIcon,
    color: "text-blue-800 bg-blue-50",
  },
  {
    title: "Flexible Meetings",
    text: "Schedule a call at your convenience.",
    icon: CalendarDaysIcon,
    color: "text-blue-800 bg-blue-50",
  },
];

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
      countryCode: "+44",
      phone: "",
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
              email: values.email,
              countryCode: values.countryCode,
              phone: values.phone,
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
    <section className="relative overflow-hidden bg-[#f7faff] px-5 pb-10 pt-28 font-sans sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute left-6 top-44 hidden h-36 w-16 opacity-60 lg:block">
        <div className="h-full w-full bg-[radial-gradient(circle,_#dbe5ff_2px,_transparent_2px)] [background-size:18px_18px]" />
      </div>
      <div className="pointer-events-none absolute -right-28 top-0 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold leading-tight tracking-normal text-[#07122f] sm:text-5xl lg:text-6xl">
            Awesomeness awaits!
          </h1>
          <div className="mt-6 flex items-center justify-center gap-2">
            <span className="h-1.5 w-20 rounded-full bg-gradient-to-br from-blue-800 to-blue-800" />
            <span className="h-1.5 w-2 rounded-full bg-gradient-to-br from-blue-800 to-blue-800" />
          </div>
          <p className="mt-6 text-lg font-medium leading-8 tracking-normal text-slate-600 sm:text-xl">
            Connect with our experts and let&apos;s build something extraordinary together.
          </p>
        </div>

        <div className="mt-9 grid gap-7 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-8">
            <div className="mb-7 flex items-center gap-5">
              <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-800 to-blue-800 text-white shadow-[0_18px_38px_rgba(30,64,175,0.28)]">
                <PaperAirplaneIcon className="h-10 w-10" />
              </span>
              <div>
                <h2 className="text-2xl font-extrabold tracking-normal text-[#07122f]">
                  Let&apos;s Start a Conversation
                </h2>
                <p className="mt-2 text-base font-medium tracking-normal text-slate-600">
                  Share your ideas, and we&apos;ll get back to you within 24 hours.
                </p>
              </div>
            </div>

            <form onSubmit={formik.handleSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className="sr-only">
                    Full Name
                  </label>
                  <div className={fieldWrap}>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formik.values.fullName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={inputClass}
                      placeholder="Full Name *"
                    />
                    <UserIcon className="h-6 w-6 shrink-0 text-slate-400" />
                  </div>
                  {formik.touched.fullName && formik.errors.fullName && (
                    <div className={errorClass}>{formik.errors.fullName}</div>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="sr-only">
                    Email Address
                  </label>
                  <div className={fieldWrap}>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={inputClass}
                      placeholder="Email Address *"
                    />
                    <EnvelopeIcon className="h-6 w-6 shrink-0 text-slate-400" />
                  </div>
                  {formik.touched.email && formik.errors.email && (
                    <div className={errorClass}>{formik.errors.email}</div>
                  )}
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-[0.95fr_1.45fr]">
                <div>
                  <div className="rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition focus-within:border-blue-400 focus-within:shadow-[0_0_0_4px_rgba(37,99,235,0.08)]">
                    <span className="block text-[15px] font-semibold tracking-normal text-slate-600">
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
                        height: "28px",
                        border: "0",
                        paddingLeft: "48px",
                        fontSize: "15px",
                        fontWeight: "700",
                        color: "#07122f",
                        background: "transparent",
                        boxShadow: "none",
                      }}
                      buttonStyle={{
                        border: "0",
                        background: "transparent",
                      }}
                      containerStyle={{ width: "100%", marginTop: "8px" }}
                      dropdownStyle={{ zIndex: 30 }}
                    />
                  </div>
                  {formik.touched.countryCode && formik.errors.countryCode && (
                    <div className={errorClass}>{formik.errors.countryCode}</div>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone Number
                  </label>
                  <div className={fieldWrap}>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={inputClass}
                      placeholder="Phone Number *"
                    />
                    <PhoneIcon className="h-6 w-6 shrink-0 text-slate-400" />
                  </div>
                  {formik.touched.phone && formik.errors.phone && (
                    <div className={errorClass}>{formik.errors.phone}</div>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="sr-only">
                  Type your message here
                </label>
                <div className="flex min-h-[170px] items-start gap-3 rounded-xl border border-slate-200 bg-white px-5 py-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition focus-within:border-blue-400 focus-within:shadow-[0_0_0_4px_rgba(37,99,235,0.08)]">
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="min-h-[130px] w-full resize-y bg-transparent text-[15px] font-semibold tracking-normal text-[#07122f] outline-none placeholder:text-slate-600"
                    placeholder="Type your message here *"
                  />
                  <PencilSquareIcon className="mt-auto h-6 w-6 shrink-0 text-slate-400" />
                </div>
                {formik.touched.message && formik.errors.message && (
                  <div className={errorClass}>{formik.errors.message}</div>
                )}
              </div>

              <div className="flex flex-col gap-5 pt-2 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  className="inline-flex h-16 items-center justify-center gap-3 rounded-lg bg-gradient-to-br from-blue-800 to-blue-800 px-9 text-base font-bold text-white shadow-[0_18px_38px_rgba(30,64,175,0.26)] transition hover:from-blue-900 hover:to-blue-900"
                >
                  <PaperAirplaneIcon className="h-6 w-6" />
                  Send Message
                </button>
                <div className="flex items-center gap-3 text-sm font-semibold tracking-normal text-slate-600">
                  <LockClosedIcon className="h-5 w-5 text-slate-400" />
                  We respect your privacy. Your information is safe with us.
                </div>
              </div>
            </form>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-8">
              <h2 className="text-2xl font-extrabold tracking-normal text-[#07122f]">
                Get In Touch With Us
              </h2>
              <div className="mt-5 space-y-4">
                <a href="tel:+447368937674" className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-800">
                    <PhoneIcon className="h-6 w-6" />
                  </span>
                  <img src={ukFlag} alt="United Kingdom" className="h-6 w-9 rounded-sm object-cover" />
                  <span className="text-base font-extrabold tracking-normal text-[#07122f]">
                    +44 7368937674
                  </span>
                </a>
                <a href="tel:+918089650271" className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-800">
                    <PhoneIcon className="h-6 w-6" />
                  </span>
                  <img src={indiaFlag} alt="India" className="h-6 w-9 rounded-sm object-cover" />
                  <span className="text-base font-extrabold tracking-normal text-[#07122f]">
                    +91 8089650271
                  </span>
                </a>
                <a href="mailto:contact@spiderotechnology.com" className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-800">
                    <EnvelopeIcon className="h-6 w-6" />
                  </span>
                  <span className="text-base font-extrabold tracking-normal text-[#07122f]">
                    contact@spiderotechnology.com
                  </span>
                </a>
              </div>
            </div>

            {testimonials.map((item) => (
              <article
                key={item.name}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.06)]"
              >
                <div className="flex gap-5">
                  <span className="font-serif text-6xl font-bold leading-none text-blue-800">
                    “
                  </span>
                  <div>
                    <p className="text-base font-semibold leading-7 tracking-normal text-[#07122f]">
                      {item.text}
                    </p>
                    <div className="mt-5 flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-extrabold tracking-normal text-[#07122f]">
                          {item.name}
                        </h3>
                        <p className="text-sm font-medium tracking-normal text-slate-600">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-7 grid gap-5 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_18px_55px_rgba(15,23,42,0.06)] sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ title, text, icon: Icon, color }, index) => (
            <div
              key={title}
              className={`flex items-center gap-5 px-4 py-3 ${index > 0 ? "lg:border-l lg:border-slate-200" : ""}`}
            >
              <span className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full ${color}`}>
                <Icon className="h-8 w-8" />
              </span>
              <div>
                <h3 className="font-extrabold tracking-normal text-[#07122f]">{title}</h3>
                <p className="mt-1 text-sm font-medium leading-6 tracking-normal text-slate-600">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Toaster position="top-center" reverseOrder={false} />
    </section>
  );
};

export default Formsection;
