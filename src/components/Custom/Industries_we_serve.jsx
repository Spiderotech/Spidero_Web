import React, { useState, useEffect } from "react";
import Finance from "../../assets/custom/finace.jpg"
import education from "../../assets/custom/education.jpg"
import logistics from "../../assets/custom/logistics.webp"
import healthcare from "../../assets/custom/medical.jpg"
import media from "../../assets/custom/media.webp"
import realestate from "../../assets/custom/real-estate.webp"
import software from "../../assets/custom/finace.jpg"

const headingsData = [
  {
    id: 1,
    title: "Finance",
    content: "Since inception, we've delivered top-tier banking and financial software services to fintech firms, financial institutions, and banks. Our focus is on supporting digital transformation, ensuring seamless end-user experiences for both customers and internal stakeholders.",
    image: Finance,
  },
  {
    id: 2,
    title: "Education",
    content: "We provide top-notch and impactful eLearning software solutions to forward thinking Edtech companies that deliver enhanced end-user experiences and meet key objectives. Our engineering expertise combined with our deep understanding of the education industry allows us to meet the needs of EduTech leaders around the world.",
    image: education,
  },
  {
    id: 3,
    title: "Healthcare",
    content: "Explore our comprehensive healthcare solutions, encompassing custom applications, interactive EMRs, business problem-solving SaaS products, and AI-driven analytics. Our offerings align with required compliances, regulatory guidelines, and robust data privacy protection. Leverage our demonstrated expertise in healthcare software development to elevate your business efficiency.",
    image: healthcare,
  },
  {
    id: 4,
    title: "Software & IT",
    content: "As an intelligent and agile software firm, we offer comprehensive IT consulting services to surmount significant business challenges, fostering enduring success at scale. Whether revitalizing your IT strategy, developing a SaaS product, modernizing legacy systems, or recovering from a software project, our accomplished developers have you well-supported.",
    image: software,
  },
  {
    id: 5,
    title: "Real Estate",
    content: "Spidero Technology has crafted tailor-made software solutions, including ERP CRM and SaaS offerings, empowering real estate businesses to digitize operational processes and achieve scalable growth.",
    image: realestate,
  },
  {
    id: 6,
    title: "Logistics",
    content: "Dedicated to Consulting, Deployment, Support, and Development, our custom software services cater specifically to Logistics and Transportation Solutions. We aim to aid L&T businesses in optimizing logistics costs, boosting asset productivity, and elevating the overall customer experience.",
    image: logistics,
  },
  {
    id: 7,
    title: "Media",
    content: "Harness our custom software development services in London to propel your business forward. Craft a Media & Entertainment solution pivotal in enhancing viewer engagement, modernizing processes, and bolstering your bottom line.",
    image: media,
  },
];

const Industries_we_serve = () => {
  const [selectedHeading, setSelectedHeading] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === headingsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = (event) => {
    const industryName = event.target.innerText;
    const selectedHeadingObj = headingsData.find(
      (heading) => heading.title.toLowerCase() === industryName.toLowerCase()
    );
    setSelectedHeading(selectedHeadingObj);
    
    
    const newIndex = headingsData.findIndex(
      (heading) => heading.id === selectedHeadingObj.id
    );
    setCurrentIndex(newIndex);
  };
  

  return (
    <div className="w-full h-auto flex flex-col justify-center items-center bg-black p-0 md:p-20">
      <h2 className="mb-4 text-4xl text-center tracking-tight font-bold text-white dark:text-white">
        Industries We Serve
      </h2>
      <p className="mb-4 text-[18px] font-sans text-center leading-relaxed text-white">
        At Spidero Technology, we collaborate with rapidly expanding enterprises, deploying dedicated teams to develop innovative, flawless, and enduring software solutions. Trust us on your mission-critical journey, as Spidero Technology is poised to be your guiding force.
      </p>
      <div className="flex flex-col md:flex-row w-full md:w-[80%]">
        <div className="flex-1 p-8">
          <img
            src={headingsData[currentIndex].image}
            alt={headingsData[currentIndex].title}
            className="w-full h-[360px]"
          />
          <p className="mt-4 text-white">
            {headingsData[currentIndex].content}
          </p>
        </div>
        <div className="w-full md:w-auto mt-5 flex flex-row md:flex-col border-l">
          {headingsData.map((heading) => (
            <button
              key={heading.id}
              onClick={handleButtonClick}
              className={`text-white text-start text-[10px] md:text-[16px] m-2 font-medium md:font-bold md:py-2 md:m-2 ${
                (selectedHeading && selectedHeading.id === heading.id) ||
                (currentIndex === headingsData.findIndex((item) => item.title === heading.title))
                  ? "text-blue-500 border-blue-500"
                  : "text-gray-500 border-gray-200 hover:text-gray-700 hover:border-gray-400"
              }`}
            >
              {heading.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries_we_serve;
