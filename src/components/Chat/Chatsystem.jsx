import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.jpg";
import emailjs from "@emailjs/browser";
import {
  ChatBubbleLeftRightIcon,
  CubeIcon,
  DocumentTextIcon,
  PaperAirplaneIcon,
  PaperClipIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Chatsystem = () => {
  const [isChatModalOpen, setChatModalOpen] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [inputStage, setInputStage] = useState("name");
  const [isOpenback, setIsOpenback] = useState(false);
  const [userCategory, setUserCategory] = useState("");
  const [userName, setUserName] = useState("");


 

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
      setCurrentDateTime(`Today, ${now.toLocaleTimeString("en-US", options)}`);
    };

    const loadChatMessages = () => {
      setTimeout(() => {
        setIsLoading(false);
        startChat();
      }, 2000);
    };

    setTimeout(() => {
      setChatModalOpen(true);
    }, 5000);

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    loadChatMessages();

    return () => clearInterval(intervalId);
  }, []);

  const openChatModal = () => {
    setChatModalOpen(true);
  };

  const closeChatModal = () => {
    setChatModalOpen(false);
  };

  const handleUserMessageClick = () => {
    setChatMessages((prevMessages) => [
      ...prevMessages,
      {
        sender: "Spidero",
        message:
          "We need you to provide  details so that we can discuss your project. First, what's your name?",
      },
    ]);

    setIsOpen(true);
  };


  useEffect(() => {
    
    const script = document.createElement('script');
    

    script.src = 'https://smtpjs.com/v3/smtp.js';
    
    
    document.body.appendChild(script);
    
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleUserInputSubmit = async () => {
    if (inputStage === "name") {
      const submittedName = userInput;
      setUserName(submittedName);
      setChatMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "User",
          message: submittedName,
        },
        {
          sender: "Spidero",
          message: "What kind of project are you looking for? (e.g., Web Development, Mobile App Development)",
        },
      ]);
      setInputStage("category");
    } else if (inputStage === "category") {
      setUserCategory(userInput);
      setChatMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "User",
          message: userInput,
        },
        {
          sender: "Spidero",
          message: "Your email:",
        },
      ]);
      setInputStage("email");
    } else if (inputStage === "email") {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "User",
          message: userInput,
        },
        {
          sender: "Spidero",
          message: "Processing...",
        },
      ]);
      try {
       
        Email.send({
          Host: "smtp.elasticemail.com",
          Username: "contact@spiderotechnology.com",
          Password: "C9FDC5CD4B4719C4310C9C5FF078133E3816",
          To: "contact@spiderotechnology.com",
          From: "contact@spiderotechnology.com",
          Subject: " contact from chat from spidero technology website",
          Body: `Name: ${userName}\nEmail: ${userInput}\nMessage: ${userCategory}`,
        }),
  
        setChatMessages((prevMessages) => [
          ...prevMessages,
          {
            sender: "Spidero",
            message:
              "Got it! Spidero Technology team will be in touch as soon as they can. If you have any further questions, please contact us at contact@spiderotechnology.com . Thanks!",
          },
        ]);
        setInputStage("finished");
        setIsOpenback(true);
        setIsOpen(false);
      } catch (error) {
        console.error("Error while sending email:", error);
       
      }
    }
  
    setUserInput("");
  };


  const startChat = () => {
    setIsLoading(false);
    setChatMessages([]); 
    setIsTyping(true);
  
    setTimeout(() => {
      setIsTyping(false);
  
      setChatMessages([
        {
          sender: "Spidero",
          message: "Typing...",
        },
      ]);
  
      setTimeout(() => {
        setChatMessages((prevMessages) => [
          ...prevMessages.slice(0, -1),
          {
            sender: "Spidero",
            message: "Welcome to Spidero!\nHow can I help you today?",
          },
        ]);
  
        setTimeout(() => {
          setChatMessages((prevMessages) => [
            ...prevMessages,
            {
              sender: "Spidero",
              message: "What are you looking for?",
            },
          ]);
  
          setTimeout(() => {
            setChatMessages((prevMessages) => [
              ...prevMessages,
              {
                sender: "User",
                message: "1. Product Information",
              },
              {
                sender: "User",
                message: "2. Project Estimation",
              },
            ]);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 2000);
  };
  

  const handleresetchat = () => {
    setChatMessages([]);
    setIsLoading(true);
    setIsTyping(false);
    setUserInput("");
    setInputStage("name");
    setIsOpen(false);
    setIsOpenback(false);

  
    setTimeout(() => {
      startChat();
    }, 1000);
  };

  const getOptionIcon = (message) => {
    if (message.includes("Product")) return CubeIcon;
    if (message.includes("Project")) return DocumentTextIcon;
    return DocumentTextIcon;
  };

  const isChoiceOption = (message) =>
    message === "1. Product Information" || message === "2. Project Estimation";



  return (
    <div className="relative font-sans">
      {!isChatModalOpen && (
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3 sm:bottom-7 sm:right-7">
          <button
            className="hidden rounded-full border border-orange-100 bg-white px-4 py-2.5 text-xs font-bold text-slate-950 shadow-[0_14px_34px_rgba(15,23,42,0.14)] transition hover:-translate-y-0.5 hover:border-orange-200 hover:bg-orange-50 lg:block"
            onClick={openChatModal}
            type="button"
          >
            Get Pricing
          </button>
          <button
            className="group flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#ff6b3d] to-[#e9361f] text-white shadow-[0_16px_34px_rgba(233,63,34,0.32)] transition hover:-translate-y-1 hover:from-blue-800 hover:to-blue-800 hover:shadow-[0_20px_40px_rgba(30,64,175,0.32)]"
            onClick={openChatModal}
            type="button"
            aria-label="Open chat"
          >
            <ChatBubbleLeftRightIcon className="h-6 w-6 transition group-hover:scale-110" />
          </button>
        </div>
      )}
      
      {isChatModalOpen && (
        <div className="fixed inset-x-4 bottom-4 z-50 mx-auto flex max-h-[calc(100vh-32px)] max-w-[430px] flex-col overflow-hidden rounded-[22px] border border-white/80 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.2)] sm:bottom-7 sm:right-7 sm:left-auto sm:mx-0 sm:w-[430px]">
          <div className="flex items-center gap-3 border-b border-slate-200/80 bg-white px-5 py-4">
            <div className="relative">
              <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#ff6b3d] to-[#e9341d] p-1.5 shadow-[0_12px_26px_rgba(233,63,34,0.25)]">
                <img
                  className="h-full w-full rounded-full object-cover"
                  src={logo}
                  alt="Spidero"
                />
              </span>
              <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500" />
            </div>
            <div>
              <div className="text-xl font-extrabold tracking-normal text-slate-950">
                Spidero
              </div>
              <div className="mt-0.5 text-xs font-semibold text-emerald-600">
                Online
              </div>
            </div>
            <button
              className="ml-auto flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-950"
              onClick={closeChatModal}
              type="button"
              aria-label="Close chat"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <div
            className="min-h-[330px] flex-1 overflow-y-auto bg-gradient-to-br from-white via-[#f8fbff] to-[#eef5ff] px-5 py-5"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="mb-5 flex items-center gap-3 text-xs font-semibold text-slate-400">
              <span className="h-px flex-1 bg-slate-200" />
              {currentDateTime}
              <span className="h-px flex-1 bg-slate-200" />
            </div>
            <div className="space-y-4 text-slate-950">
              {isLoading && chatMessages.length === 0 && (
                <div className="flex items-start gap-3">
                  <img
                    className="h-8 w-8 rounded-full object-cover"
                    src={logo}
                    alt="Spidero"
                  />
                  <div className="rounded-2xl bg-white px-4 py-3 text-xs shadow-[0_12px_26px_rgba(15,23,42,0.08)]">
                    Loading...
                  </div>
                </div>
              )}
              {chatMessages.map((message, index) => (
                message.sender === "Spidero" ? (
                  <div key={index} className="flex items-start gap-3">
                    <img
                      className="mt-1 h-8 w-8 rounded-full object-cover"
                      src={logo}
                      alt="Spidero"
                    />
                    <div className="max-w-[78%] rounded-2xl bg-white px-4 py-3 text-sm font-medium leading-6 text-slate-950 shadow-[0_12px_26px_rgba(15,23,42,0.08)]">
                      <p className="whitespace-pre-line">
                        {isTyping ? "Typing..." : message.message}
                      </p>
                    </div>
                  </div>
                ) : isChoiceOption(message.message) ? (
                  <div key={index} className="flex justify-end">
                    <button
                      className="group flex w-[78%] items-center gap-3 rounded-2xl border border-orange-200 bg-orange-50/60 px-4 py-3 text-left text-sm font-semibold text-slate-950 transition hover:border-orange-300 hover:bg-orange-100/80"
                      onClick={handleUserMessageClick}
                      type="button"
                    >
                      {React.createElement(getOptionIcon(message.message), {
                        className: "h-5 w-5 shrink-0 text-[#ef4b25]",
                      })}
                      <span>{message.message}</span>
                    </button>
                  </div>
                ) : (
                  <div key={index} className="flex justify-end">
                    <div className="max-w-[78%] rounded-2xl bg-orange-50 px-4 py-2.5 text-sm font-semibold leading-6 text-slate-950 ring-1 ring-orange-100">
                      {message.message}
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>

          {isOpen && (
            <div className="border-t border-orange-100 bg-white px-4 py-3">
              <div className="flex h-12 items-center gap-2.5 rounded-full border border-orange-200 bg-white px-3.5 shadow-[0_10px_26px_rgba(249,115,22,0.12)]">
                <PaperClipIcon className="h-5 w-5 shrink-0 text-slate-400" />
                <span className="h-7 w-px bg-slate-200" />
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleUserInputSubmit();
                  }}
                  className="min-w-0 flex-1 bg-transparent text-sm font-medium text-slate-950 outline-none placeholder:text-slate-400"
                  placeholder="Type your message..."
              />
              <button
                onClick={handleUserInputSubmit}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#ff6b3d] to-[#e9361f] text-white shadow-[0_8px_20px_rgba(233,63,34,0.28)] transition hover:from-blue-800 hover:to-blue-800"
                  type="button"
                  aria-label="Send message"
              >
                  <PaperAirplaneIcon className="h-4 w-4" />
              </button>
              </div>
            </div>
          )}

          {isOpenback && (
            <div className="border-t border-orange-100 bg-white px-4 py-3">
              <button
                className="flex h-11 w-full items-center justify-center rounded-full bg-slate-950 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-blue-800"
                onClick={handleresetchat}
                type="button"
              >
                Restart Conversation
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatsystem;
