
import img1 from "../../assets/ourprocess/discovery.jpg";
import img2 from "../../assets/ourprocess/planing.jpg";
import img3 from "../../assets/ourprocess/design.jpg";
import img4 from "../../assets/ourprocess/development.jpg";
import img5 from "../../assets/ourprocess/testing.jpg";
import img6 from "../../assets/ourprocess/maintenance.jpg";
import React, { useEffect } from "react";




const How_wework = () => {
  useEffect(() => {
    function updateProgressBar() {
      const progressBar = document.querySelector('.progress-bar');
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      progressBar.style.width = progress + '%';
    }

    function updateProgressCircle() {
      const progressElement = document.querySelector('.progress-circle-bar');
      const scrollToTopElement = document.querySelector('.scroll-to-top');
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      let progress = (window.pageYOffset / totalHeight) * 283;
      progress = Math.min(progress, 283);
      progressElement.style.strokeDashoffset = 283 - progress;

      if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
        scrollToTopElement.style.opacity = '1';
      } else {
        scrollToTopElement.style.opacity = '0';
      }
    }

    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    window.addEventListener('scroll', () => {
      updateProgressBar();
      updateProgressCircle();
    });

    window.addEventListener('resize', () => {
      updateProgressBar();
      updateProgressCircle();
    });

    const scrollToTopElement = document.querySelector('.scroll-to-top');
    scrollToTopElement.addEventListener('click', scrollToTop);

    return () => {
      window.removeEventListener('scroll', updateProgressBar);
      window.removeEventListener('resize', updateProgressBar);
      window.removeEventListener('scroll', updateProgressCircle);
      window.removeEventListener('resize', updateProgressCircle);
    };
  }, []);
 
  return (
    <section className=" relative h-auto flex flex-col justify-center text-center  text-white py-0 px-3 bg-white  lg:pl-40 ">
      <div className="w-full lg:w-[70%] mt-32  mb-10  " >
        <h2 className="text-black pt-3 text-start  tracking-[2px]   font-sans font-bold  mb-5">
          HOW WEWORK
        </h2>
        <p className="font-sans text-[28px]  md:text-[28px]   lg:text-[37px] font-bold tracking-normal lg:leading-[47px] text-start mb-3  text-black">
          The process is defined as a sequence of steps. When followed, it helps
          to achieve a goal. We consider it - the art of thinking through.
        </p>
      </div>
      <div className="w-full lg:w-[50%]   ">
        <h2 className="text-black pt-3 sm:text-[28px] md:text-[30px] lg:text-[40px] text-start leading-3 font-sans font-bold  ml-10">
          Let’s talk about the specifics
        </h2>
      </div>


      <div className=" w-full lg:w-[80%] flex flex-col bg-white h-auto  mt-10    ">
        <div className="w-full lg:w-[90%] flex flex-col lg:flex-row  h-auto " >
          <div className=" w-full lg:w-[70%] h-auto bg-black p-5  lg:p-10  ">
            <h1 className=" text-start font-sans text-3xl">1. Discovery Workshop</h1>
            <h1 className=" text-start font-sans font-semibold  mt-10">OBJECTIVE</h1>
            <ul className=" font-sans text-start  text-[18px] p-5 list-disc ">
              <li className="mb-2 ">
                Run through the entire project with the client based on the
                initial proposal and agreement.
              </li>
              <li className="mb-2">
              
                Establish a detailed idea about the goals and business
                objectives of the client.
              </li>
              <li className="mb-2">Understanding the competitive landscape.</li>
              <li className="mb-2">Understanding the target audience, market & geography</li>
              <li className="mb-2">
              
                Clarifying all queries and doubts which the team has, post
                initial analysis.
              </li>
              <li className="mb-2">
              
                Understanding and documenting client’s design and branding
                preferences
              </li>
              <li className="mb-2">Laying down assumptions and constrains!</li>
              <li className="mb-2">Coming with a high level epic mapping.</li>
            </ul>
          </div>
          <div className=" w-full lg:w-[70%] h-auto bg-black p-10 flex justify-center" >
            <img
              src={img1}
              alt="profile"
              className="w-full h-auto  object-contain"
            />
          </div>
        </div>
        <div className="w-full md:w-[70%] h-auto text-black   p-10  " data-aos="fade-up">
          <h1 className=" text-start text-[16px] font-semibold">OUTCOME</h1>
          <ul className=" text-start text-[18px] font-medium p-5 leading-8 list-disc ">
            <li>
           
              Have a precise and clear idea about the client’s and project’s
              goals
            </li>
            <li>
           
              Have a clear idea about the likes and dislikes of the client.
            </li>
            <li>
           
              Getting client’s inputs and clarification on all open-ended points
            </li>
            <li>Having all the information required for the planning phase.</li>
          </ul>

          <h1 className=" text-start text-[16px] font-semibold">TEAM MEMBERS INVOLVED</h1>
          <ul className=" text-start p-5 font-sans leading-8  text-[18px] font-medium list-disc">
            <li> Project Manager</li>
            <li>Tech Lead</li>
            <li>Project Owner / Client</li>
            <li>Business Analyst</li>
          </ul>
        </div>
      </div>






      <div className="w-full lg:w-[80%] flex flex-col bg-white h-auto  mt-10  ">
        <div className="w-full lg:w-[90%] flex flex-col lg:flex-row   h-auto" >
          <div className="w-full lg:w-[70%] h-auto bg-black  p-10  ">
            <h1 className=" text-start text-3xl">2. Planning</h1>
            <h1 className=" text-start font-sans font-semibold mt-5">OBJECTIVE</h1>
            <ul className=" text-start p-5 list-disc text-[18px] ">
              <li className="mb-2">
              
              Creation of all relevant documentation required for successful execution of the project
              </li>
              <li className="mb-2">
              
              Getting confirmation and approval from the client on the documents and materials
              </li>
              <li className="mb-2">Defining the project plan</li>
              <li className="mb-2">Defining the design and branding guidelines of the project</li>
            </ul>
          </div>
          <div className="w-full lg:w-[70%] h-auto flex justify-center bg-black p-10">
            <img
              src={img2}
              alt="profile"
              className="w-full h-auto   object-contain"
            />
          </div>
        </div>
        <div className="w-full lg:w-[70%] h-auto text-black   p-10  " data-aos="fade-up">
          <h1 className=" text-start text-[16px] font-semibold">OUTCOME</h1>
          <ul className=" text-start  text-[18px] font-medium p-5 leading-8 list-disc  ">
            <li >
           
            To get everything documented in detail, leaving nothing for chance or assumption
            </li>
            <li>
           
            To get client’s approval and signoff on the documentation and project plan
            </li>
            <li>
           
            To have a well-defined and precise planning of the project
            </li>
            
          </ul>

          <h1 className=" text-start text-[16px] font-semibold">DELIVERABLES</h1>
          <ul className=" text-start p-5 font-sans text-[18px] leading-8 font-medium  list-disc">
            <li>Detailed technical Specification</li>
            <li>Wire-frames</li>
            <li>User Stories</li>
            <li>Project plan with detailed milestone/sprint planning</li>
            <li>Test cases and scenarios</li>
          </ul>

          <h1 className=" text-start text-[16px] font-semibold">TEAM MEMBERS INVOLVED</h1>
          <ul className=" text-start p-5 font-sans text-[18px] leading-8 font-medium  list-disc">
            <li>Project Manager</li>
            <li>Tech Lead</li>
            <li>IA & UX Lead</li>
            <li>UI Design Lead</li>
            <li>Test Lead</li>
          </ul>
        </div>
      </div>

      <div className="w-full lg:w-[80%] flex flex-col bg-white h-auto  mt-10  ">
      <div className="w-full lg:w-[90%] flex flex-col lg:flex-row   h-auto" >
          <div className="w-full lg:w-[70%] h-auto bg-black  p-5  lg:p-10  ">
            <h1 className=" text-start text-3xl">3. Design</h1>
            <h1 className=" text-start font-sans font-semibold mt-5">OBJECTIVE</h1>
            <ul className=" text-start p-5 list-disc text-[18px] ">
            <li className="mb-2">
            
            UI Design of all the project screens based on the approved wire-frames and design guidelines
            </li>
            <li className="mb-2">
           
            Web, Tablet and Mobile specific designs.
            </li>
            <li className="mb-2">
           
            Getting system UI Designs approved and confirmed by the client.
            </li>
            </ul>
          </div>
          <div className="w-full lg:w-[70%] h-auto flex justify-center bg-black p-10">
            <img
              src={img3}
              alt="profile"
              className="w-full h-auto   object-contain"
            />
          </div>
        </div>
        <div className="w-full lg:w-[70%] h-auto text-black   p-10  " data-aos="fade-up">
          <h1 className=" text-start text-[16px] font-semibold">DELIVERABLES</h1>
          <ul className=" text-start p-5 font-sans text-[18px] leading-8 font-medium list-disc ">
            <li>UI Designs of the projects</li>
            <li>Clickable prototype on Invision platform -example link</li>
            <li>Source files in either Photoshop or Sketch format</li>
          </ul>
         

          <h1 className=" text-start text-[16px] font-semibold">TEAM MEMBERS INVOLVED</h1>
          <ul className=" text-start p-5 font-sans text-[18px] leading-8 font-medium list-disc ">
            <li>Project Manager</li>
            <li>IA & UX Lead</li>
            <li>UI Design Lead</li>
            <li>UI Designer</li>
          </ul>
        </div>
      </div>






      <div className="  w-full lg:w-[80%] flex flex-col bg-white h-auto  mt-10  ">
        <div className="w-full lg:w-[90%] flex flex-col lg:flex-row   h-auto">
          <div className="w-full lg:w-[70%] h-auto bg-black p-5  lg:p-10  ">
            <h1 className=" text-start text-3xl">4. Development</h1>
            <h1 className=" text-start mt-5 font-semibold">OBJECTIVE</h1>
            <ul className=" text-[18px] text-start p-5 list-disc  ">
              <li className="mb-2">
              
              Catering the requirement for frontend, backend, web services, and API development integration.
              </li>
              <li className="mb-2">
              
              Prepare a strategy for Agile Scrum methodology
              </li>
              <li className="mb-2">Factor the aspects of multi-tenancy, scalability, 3rd party integration</li>
              <li className="mb-2">To set up a 2-3 week frequency for sprints/milestones</li>
              <li className="mb-2">
              
                Clarifying all queries and doubts which the team has, post
                initial analysis.
              </li>
              <li className="mb-2">
              
              Crafting an optimized clean code structure
              </li>
              <li>Involve client review in each sprint/milestone</li>
            </ul>
          </div>
          <div className="w-full lg:w-[70%] h-auto bg-black p-10 flex justify-center" >
            <img
              src={img4}
              alt="profile"
              className="w-full h-auto  mt-10 object-contain"
            />
          </div>
        </div>
        <div className="w-full lg:w-[70%] h-auto text-black   p-10  " data-aos="fade-up">
          <h1 className=" text-start text-[16px] font-semibold">WEB TECHNOLOGIES</h1>
          <ul className=" text-start font-sans text-[18px] p-5 leading-8 font-medium list-disc ">
            <li>
           
            Back-end. : Laravel, Ruby, Python, Node.JS, Java
            </li>
            <li>
           
            Front-end. : AngularJS, ReactJS, VueJS Html5, CSS
            </li>
            <li>
           
            Database. : MongoDB, Mysql, PostgreSQL, Firebase
            </li>
            <li> OpenSource : Drupal, Magento, Wordpress</li>
          </ul>
          <h1 className=" text-start text-[16px] font-semibold">MOBILE TECHNOLOGIES</h1>
          <ul className=" text-start font-sans p-5 text-[18px] leading-8 font-medium list-disc ">
            <li>
           
            iOS : ObjectiveC, Swift, xCode
            </li>
            <li>
           
            Android. : Java, Android studio
            </li>
            <li>
           
            Hybrid. : Ionic, ReactNative
            </li>
            
          </ul>

          <h1 className=" text-start text-[16px] font-semibold">TEAM MEMBERS INVOLVED</h1>
          <ul className=" text-start p-5 text-[18px] font-sans leading-8 font-medium list-disc">
            <li>Project Manager</li>
            <li>Team Lead</li>
            <li>Front-End Developers</li>
            <li>Back-End Developers</li>
            <li>QA Engineer</li>
          </ul>
        </div>
      </div>
      <div className="testing   w-full lg:w-[80%] flex flex-col bg-white h-auto  mt-10  ">
        <div className="w-full lg:w-[90%] flex flex-col lg:flex-row   h-auto">
          <div className="w-full lg:w-[70%] h-auto bg-black p-5  lg:p-10  " >
            <h1 className=" text-start text-3xl">5. Testing</h1>
            <h1 className=" text-start mt-5 font-semibold">OBJECTIVE</h1>
            <ul className=" text-start p-5 text-[18px] list-disc">
              <li className="mb-2">
              
              Each sprint/milestone is tested manually.
              </li>
              <li className="mb-2">
              
              Bugs are reported and added to product backlog.
              </li>
              <li className="mb-2">Upon bug fixing, quality release is provided and then the final demo of the sprint is sent to the client for approval.</li>
              <li className="mb-2">Regression testing after each sprint to ensure proper functioning of the previous approved sprints/milestones.</li>
            </ul>
          </div>
          <div className="w-full lg:w-[70%] h-auto flex justify-center bg-black p-10" >
            <img
              src={img5}
              alt="profile"
              className="w-full h-auto  object-contain"
            />
          </div>
        </div>
        <div className="w-full lg:w-[70%] h-auto text-black   p-10  " data-aos="fade-up">
          <h1 className=" text-start text-[16px] font-semibold">TYPES OF TESTING</h1>
          <ul className=" text-start font-sans p-5 leading-8 font-medium text-[18px] list-disc ">
            <li>Unit Testing</li>
            <li>Manual Testing</li>
            <li>Regression Testing</li>
            <li>Security Testing</li>
            <li>Automation Testing</li>
            <li>Load & Stress Testing</li>
            <li>Performance</li>
            <li>Code Review</li>
          </ul>
          <h1 className=" text-start text-[16px] font-semibold">TEAM MEMBERS INVOLVED</h1>
          <ul className=" text-start p-5 font-sans leading-8  text-[18px] font-medium list-disc">
            <li>Account Manager</li>
            <li>Project Manager</li>
            <li>QA</li>
          </ul>
        </div>
      </div>
      <div className="maintence  w-full lg:w-[80%] flex flex-col bg-white h-auto  mt-10  ">
        <div className="w-full lg:w-[90%] flex flex-col lg:flex-row   h-auto">
          <div className="w-full lg:w-[70%] h-auto bg-black p-5  lg:p-10 " >
            <h1 className=" text-start text-3xl">6. Maintenance</h1>
            <h1 className=" text-start mt-5 font-semibold">OBJECTIVE</h1>
            <ul className=" text-start p-5  text-[18px] list-disc">
              <li className="mb-2">
             
              Product enhancement through an Agile approach
              </li>
              <li className="mb-2">
             
              Regular Security Audits
              </li>
              <li className="mb-2"> Bi-weekly code back-ups</li>
              <li className="mb-2"> Constant upgradation of the system based on new software/version release</li>
              <li className="mb-2">
             
              Full Testing the system each month to find any bugs, incompatibility and error
              </li>
              <li className="mb-2">
             
              Monitoring of the traffic and server load and optimizing according to the business needs.
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-[70%] h-auto bg-black flex justify-center p-10" >
            <img
              src={img6}
              alt="profile"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        <div className="w-full lg:w-[70%] h-auto text-black   p-10  "data-aos="fade-up">
          <h1 className=" text-start text-[16px] font-semibold">OUTCOME</h1>
          <ul className=" text-start font-sans p-5 leading-8  text-[18px] font-medium list-disc">
            <li>
           
              Have a precise and clear idea about the client’s and project’s
              goals
            </li>
            <li>
           
              Have a clear idea about the likes and dislikes of the client.
            </li>
            <li>
           
              Getting client’s inputs and clarification on all open-ended points
            </li>
            <li>Having all the information required for the planning phase.</li>
          </ul>

          <h1 className=" text-start text-[16px] font-semibold">TEAM MEMBERS INVOLVED</h1>
          <ul className=" text-start p-5 font-sans leading-8  text-[18px] font-medium list-disc ">
            <li>Project Manager</li>
            <li>Tech Lead</li>
            <li>Project Owner / Client</li>
            <li>Business Analyst</li>
          </ul>
        </div>
      </div>
      <div style={styles.progressBarContainer} >
        <div className="progress-bar" style={styles.progressBar} ></div>
      </div>


      <div style={styles.progressCircleContainer} >
        {/* <svg className="progress-circle" viewBox="0 0 100 100" style={styles.progressCircle}>
          <circle className="progress-background" cx="50" cy="50" r="45">
          

          </circle>
          <circle className="progress-circle-bar" cx="50" cy="50" r="45" style={styles.progressCircleBar}></circle>
        </svg> */}
        <div className="scroll-to-top" style={styles.scrollToTop}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  className=" w-20 h-20 stroke-black transition-all">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </div>
      </div>
      
    </section>
  );
};

const styles = {
  
  progressBarContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '5px',
    backgroundColor: '#f0f0f0',
    zIndex: 9999,
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'black',
    transition: 'all 0.3s ease',
  },
  progressCircleContainer: {
    position: 'fixed',
    top:'100px',
    right: '80px',
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  progressCircle: {
    width: '100px',
    height: '100px',
  },
  progressCircleBar: {
    fill: 'white',
    stroke: 'black',
    strokeWidth: '5',
    strokeDasharray: '283',
    strokeDashoffset: '0',
    transformOrigin: 'center',
    transition: 'strokeDashoffset 0.3s ease',
  },
  scrollToTop: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'opacity 0.3s ease',
    zIndex: 9998,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
  },
  
};

export default How_wework;
