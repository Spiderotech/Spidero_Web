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
            "How can I choose the best custom software company for my business?",
          answer:
            "In order to choose the best bespoke software development firm that can meet your evolving business needs, you need to: Check the company’s reviews to ensure you’re getting the best value for money. Review the organization’s portfolio to get a good idea of what services they are offering. Most software firms specialize in building projects of a certain size. So you’ll want to make sure you know exactly what size your custom software will be. Identify the technology stack the company uses. See if they offer ongoing support and maintenance once the project is delivered.",
        },
        {
          question:
            "How can I choose the best custom software company for my business?",
          answer:
            "In order to choose the best bespoke software development firm that can meet your evolving business needs, you need to: Check the company’s reviews to ensure you’re getting the best value for money. Review the organization’s portfolio to get a good idea of what services they are offering. Most software firms specialize in building projects of a certain size. So you’ll want to make sure you know exactly what size your custom software will be. Identify the technology stack the company uses. See if they offer ongoing support and maintenance once the project is delivered.",
        },
        {
          question:
            "Why is customized software developed?",
          answer:
            "At Spidero Technology, we develop custom software products to speed up business processes and improve productivity without having to modify or adjust commercial off-the-shelf software applications. Since we offer scalable software services, the product grows with the ever evolving needs of your business",
        },
        {
          question:
            "Are there any differences between customized software and off-the-shelf software solutions?",
          answer:
            "A common question that comes to a business owner's mind is whether to have a custom software developed or choose an off-the-shelf software solution. The readily available off-the-shelf software usually falls short when it comes to meeting the specific needs of your business. If you opt for off-the-shelf software, your business will have to adapt to its features and capabilities. Customized software applications developed at Spidero Technology, on the other hand, caters to your exact business needs.",
        },
        {
          question:
            "How do I identify the right tech stack for my custom software application development requirements?",
          answer:
            "When it comes to choosing the tech stack, we delve deep into several factors - the existing platforms, infrastructure of the client, scalability, data types, and so on. The specific requirements and features expected from the software application play a major role in making this decision.",
        },
        {
          question:
            "Why should I invest in a tailored software solution?",
          answer:
            "One of the primary reasons for choosing custom software development is that traditional, free tools often can’t address your unique business requirements, do not support certain integrations, have limited or expensive scalability, or may be more costly in the long term. Here at Spidero Technology, we look at the cost-effectiveness of developing custom software products and discuss preferred options with stakeholders.",
        },
        {
          question:
            "How long will it take to develop my software product?",
          answer:
            "The duration of a custom software development project can range from 3 months to 6 months or more depending on the nature of the software and your project structure. Also, each development sprint takes a different amount of time based on the nature and complexity of your project.",
        },
        {
          question:
            "Why should I hand over my custom software development project to Spidero Technology?",
          answer:
            "Spidero Technology is an London-based enterprise software development company you can count on, backed by a team of dedicated, passionate professionals who are focused on delivering real, quantifiable business value.",
        },
        {
          question:
            "Will I be able to integrate the software with other systems?",
          answer:
            "Yes, customized software can be developed to easily integrate with existing systems and legacy applications in the intended environment. Unification of several subsystems and applications will help in streamlining your business processes.",
        },
        {
          question:
            "What benefits will I get from your custom software solution?",
          answer:
            "By investing in our bespoke software development service, you will be able to customize the software solution to the specific needs and specifications of your business. You will be able to shape the software solution to your specific needs. Our dedicated development team will ensure that you receive technical support whenever you face a problem.",
        },
       
      ];
  return (
<div className=" bg-[#f8f8f8] mb-10 " >
  <div className="faqhead">
    <h4 className='text-[22px] sm:text-[28px] md:text-[36px] lg:text-[40px] text-center font-sans font-medium ' >Frequently Asked Questions</h4>
    <div className=" flex justify-center items-center flex-col  " >
      {faqData.map((item, index) => (
        <div key={index} className="mt-5 border-b-2 pb-5 w-[80%]" >
          <div className="header-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 className='text-[20px] font-sans font-medium'>{item.question}</h2>
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
                 className="h-10 w-10 flex-none text-gray-400 cursor-pointer"
                 aria-hidden="true"
               />
              ) : (
                <ChevronDownIcon
                className="h-10 w-10 flex-none text-gray-400 cursor-pointer"
                aria-hidden="true"
              />
              )}
            </button>
          </div>
          {expandedIndex === index && <p className='text-[18px] font-sans font-medium mt-2  text-[#333]'>{item.answer}</p>}
        </div>
      ))}
    </div>
  </div>
</div>

  )
}

export default Faq