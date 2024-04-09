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
            " Is there a minimum commitment that you require from me in terms of longevity of the project?",
          answer:
            "Spiderotechnology - Not at all, you can run the team as long or as short as you want. There is no minimum commitment and we go by month on month basis. You can pause after a month or restart after an interval, increase or decrease team size, ask for any skills other than the core skills needed for your project. Do as you may please!",
        },
        {
          question:
            "Does this plan cover the cost of AI development also?",
          answer:
            "Spiderotechnology - Yes, it does!",
        },
        {
          question:
            " Can I swap the engineering skill on the basis of my project?",
          answer:
            "Spiderotechnology - Yes, inside the development hours you can pick any skill that you want for the project for some of the hours or all the hours. Ultimately you're paying for the collective hours of the work covering all skills.",
        },
        {
          question:
            " What are the Tech stack that your developers use?",
          answer:
            "Spiderotechnology - Multiple:React.js, Node.js, React Native, iOS native (swift), Android native (Kotline), AI - OpenAI, GPT, Python, Angular, PHP, Laravel, Wordpress, .NET, Asp.NET, DevOps (Azure, AWS, Google cloud), HTML, JS, Figma and so on.",
        },
        {
          question:
            " What are the non tech skills that I can buy?",
          answer:
            "Spiderotechnology - Multiple:Digital Marketing, Email Marketing, Investment pitchers, Lead Generation, PPC management, Meta Ads management, Customer care executive (Voice/ non voice), Market Research, Content writer/ copywriter, Video creator and editor. Every skill that we use for ourselves for non-tech business requirements is available to you",
        },
        {
          question:
            "How would I pay?",
          answer:
            "Spiderotechnology - You can pay using bank wire, ACH, Credit Card, Debit Card. Our online payment system supports all possible payment options. We'll send you a payment link every month according to your invoice cycle.",
        },
        {
          question:
            "I need a team bigger than 3 core developers?",
          answer:
            "Spiderotechnology -Contact contact@spiderotechnology.com directly and we'll give you as large a team as you want.",
        },
        {
          question:
            " Are all your engineers and other staff in-house?",
          answer:
            "Spiderotechnology - Yes, it is. You'll only work with a full time Spiderotechnology'ian, every single time.",
        },
        {
          question:
            "What is the experience level of Developers in these plans?",
          answer:
            "Spiderotechnology -Minimum 3 years, and then bigger and complex the project the more experienced ones are introduced in the team.",
        },
        {
          question:
            "Can I talk to your development team before hiring you?",
          answer:
            "Spiderotechnology - Yes, that's what we would like you to do too. Be our guest!",
        },
        {
            question:
              "Is there any free trial?",
            answer:
              "Spiderotechnology -We offer a one week trial for one project. You can give us a task and we'll accomplish that.",
          },
          {
            question:
              "Do you replace a developer or a team if they don't perform up to the mark?",
            answer:
              "Spiderotechnology - We never needed to do that so far, but if such a situation arises you just notify us and we'll replace an individual or a whole team for you.",
          },
          {
            question:
              "Who's accountable for my work, the team, or developer individually or whole Spiderotechnology?",
            answer:
              "Spiderotechnology - It's always Spiderotechnology which is 100% accountable for your project, irrespective of whichever team you work with. The client will never be under-served!",
          },
          {
            question:
              " Can I use my retainer hours in more than one project?",
            answer:
              "Spiderotechnology - Yes, its your hours, your team. Utilize them for one project or many - do as you may please!",
          },

       
      ];
  return (
<div className="  mb-10 mt-28 " >
  <div className="faqhead">
    <h4 className='text-[22px] sm:text-[28px] md:text-[36px] lg:text-[40px] text-center font-sans font-medium ' >Frequently Asked Questions</h4>
    <p class="mb-4 text-[18px] text-center font-sans font-light  text-[#424242] p-5 md:p-10">
    Some of the most frequently asked questions when it comes to Cost of App development are answered here. If you have a specific question then feel free to write to <a href="mailto: contact@spiderotechnology.com"><span className='text-orange-400'>contact@spiderotechnology.com</span></a> and we’ll solve that for you because that’s what we do!
          </p>
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