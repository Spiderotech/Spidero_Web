import React,{useState} from 'react'
import {
    ChevronDownIcon,
    PhoneIcon,
    PlayCircleIcon,
  } from "@heroicons/react/20/solid";

const Faq = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const handleToggle = (index) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
      };
      const faqData = [
        {
          question:
            "Attention to Memory Limitations",
          answer:
            "Mobile devices do not come with huge memory like desktops. While mobile programming, we keep this in mind. And accordingly, we use codes that take smaller memory. Thus, we prevent the apps from crashing due to “out of memory”.",
        },
        {
          question:
            "Ease of Default Keyboard",
          answer:
            "The keyboard should have the compatible characters for the input text box in an app. When the reader has to write numbers, they should get the numerical keyboard, not the alphabetical one.",
        },
        {
          question:
            "Attention to Memory Limitations",
          answer:
            "Mobile devices do not come with huge memory like desktops. While mobile programming, we keep this in mind. And accordingly, we use codes that take smaller memory. Thus, we prevent the apps from crashing due to “out of memory”.",
        },
        {
          question:
            "Ease of Default Keyboard",
          answer:
            "The keyboard should have the compatible characters for the input text box in an app. When the reader has to write numbers, they should get the numerical keyboard, not the alphabetical one.",
        },
        {
          question:
            "Attention to Memory Limitations",
          answer:
            "Mobile devices do not come with huge memory like desktops. While mobile programming, we keep this in mind. And accordingly, we use codes that take smaller memory. Thus, we prevent the apps from crashing due to “out of memory”.",
        },
        {
          question:
            "Ease of Default Keyboard",
          answer:
            "The keyboard should have the compatible characters for the input text box in an app. When the reader has to write numbers, they should get the numerical keyboard, not the alphabetical one.",
        },
       
      ];
  return (
<div className=" bg-[#f8f8f8] mb-10 mt-10 " >
  <div className="faqhead">
    <h4 className='text-[22px] sm:text-[28px] md:text-[36px] lg:text-[40px] text-center font-sans font-medium ' >Best practices that we follow</h4>
    <div className=" flex justify-center items-center flex-col  " >
      {faqData.map((item, index) => (
        <div key={index} className="mt-5 border-b-2 pb-5 w-[70%]" >
          <div className="header-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 className='text-[20px]   font-medium'>{item.question}</h2>
            <button
              onClick={() => handleToggle(index)}
              style={{
                border: 'none',
                background: 'none',
                padding: 0,
                margin: 0,
                cursor: 'pointer',
                outline: 'none',
                marginLeft: '70px',
              }}
            >
              {expandedIndex === index ? (
                 <ChevronDownIcon
                 className="h-10 w-10 flex-none text-gray-400  cursor-pointer"
                 aria-hidden="true"
               />
              ) : (
                <ChevronDownIcon
                className="h-10 w-10 flex-none text-gray-400  cursor-pointer"
                aria-hidden="true"
              />
              )}
            </button>
          </div>
          {expandedIndex === index && <p className='text-[18px] font-sans font-medium text-[#333]'>{item.answer}</p>}
        </div>
      ))}
    </div>
  </div>
</div>

  )
}

export default Faq