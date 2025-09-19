import React, { useState, useEffect } from "react";
import cookies from "../../assets/cookies.png";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-DZGQXZB8PM"; 
const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");

    if (!consent) {
      setVisible(true); 
    } else if (consent === "accepted") {
      ReactGA.initialize(TRACKING_ID);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    ReactGA.initialize(TRACKING_ID); 
    setVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-12 left-5 w-[90%] sm:w-[80%] md:w-[60%] lg:w-1/3 h-auto bg-white rounded-2xl shadow-lg z-50 p-4 flex flex-col sm:flex-row items-center gap-3">
      {/* Cookie Icon */}
      <img src={cookies} alt="cookie" className="w-8 h-8 shrink-0" />

      {/* Text */}
      <p className="text-sm text-gray-700 flex-1 text-center sm:text-left">
        We use cookies to enhance your experience.
      </p>

      {/* Buttons */}
      <div className="flex gap-2 mt-2 sm:mt-0">
        <button
          onClick={rejectCookies}
          className="px-4 py-2 text-sm rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
        >
          Reject
        </button>
        <button
          onClick={acceptCookies}
          className="px-4 py-2 text-sm rounded-full bg-orange-500 text-white hover:bg-orange-600 transition"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
