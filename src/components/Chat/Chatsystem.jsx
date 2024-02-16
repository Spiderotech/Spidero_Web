import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.jpg";

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

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = {
        weekday: "long",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
      setCurrentDateTime(now.toLocaleDateString("en-US", options));
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

   const handleUserInputSubmit = () => {
    if (inputStage === "name") {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "User",
          message: userInput,
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
        {
          sender: "Spidero",
          message:
            "Got it! Spidero Technology team will be in touch as soon as they can. If you have any further questions, please contact us at contact@spidero.in. Thanks!",
        },
      ]);
      setInputStage("finished");
      setIsOpenback(true);
      setIsOpen(false);
    }

    setUserInput("");
  };


  const startChat = () => {
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
            message: "Welcome to Spidero!",
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
                message: "1.Product Information",
              },
              {
                sender: "User",
                message: "2.project estimation",
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

  



  return (
    <div className="relative">
      <button
        className="fixed bottom-20 right-10  bg-[#e96f3f] text-white px-4 py-3 rounded-md z-10"
        onClick={openChatModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 0 0 1.28.53l4.184-4.183a.39.39 0 0 1 .266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0 0 12 2.25ZM8.25 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm2.625 1.125a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <butoon
       className="fixed bottom-20 right-28 text-md bg-white shadow-xl shadow-slate-400  text-black px-8 py-3 rounded-2xl z-10 hidden lg:block"
      >
        Get Pricing
        <span className="text-[20px]">
        &#x1F44B;

        </span>

      </butoon>
      
      {isChatModalOpen && (
        <div className="fixed bottom-20 right-5 w-4/5 md:w-1/4 h-auto bg-slate-50 rounded-md shadow-lg  z-10">
          <div className="flex items-center  p-2 bg-white overflow-hidden rounded-md">
            <img
              className="w-10 h-10 rounded-full mr-2"
              src={logo}
              alt="User Avatar"
            />
            <div className="text-black  font-medium ml-5">Spidero</div>

            <button
              className="absolute top-4 right-4 px-2 py-1 rounded"
              onClick={closeChatModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            className="overflow-y-auto p-2 text-white h-72"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="text-center text-sm text-black p-2">
              {currentDateTime}
            </div>
            <div className="overflow-y-auto p-2 text-black">
              {chatMessages.map((message, index) => (
                <div
                  key={index}
                  className={
                    message.sender === "Spidero"
                      ? "flex items-start mb-2"
                      : "flex items-end mb-2 justify-end"
                  }
                >
                  {message.sender === "Spidero" && (
                    <img
                      className="w-8 h-8 rounded-full mr-2"
                      src={logo}
                      alt="User Avatar"
                    />
                  )}
                  <div
                    className="bg-gray-200 p-3  rounded-md"
                    onClick={
                      message.sender === "User"
                        ? handleUserMessageClick
                        : undefined
                    }
                    style={{
                      cursor: message.sender === "User" ? "pointer" : "default",
                    }}
                  >
                    <span className="text-gray-400 text-sm"></span>
                    <p>{isTyping ? "Typing..." : message.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {isOpen && (
            <div className="flex items-center m-2 bg-white ml-5 rounded-md">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="border border-gray-300 p-2 rounded-md mr-2 w-3/4"
                placeholder="Type your response..."
              />
              <button
                onClick={handleUserInputSubmit}
                className="bg-[#e96f3f] text-white px-4 py-2 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                </svg>
              </button>
            </div>
          )}

          {isOpenback && (
            <div className="flex items-center justify-center m-2 bg-white ml-5 rounded-md">
              <h1 className=" text-center text-orange-600 cursor-pointer"  onClick={handleresetchat}>Restart conversation</h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatsystem;
