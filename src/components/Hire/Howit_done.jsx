import React from "react";
import call from "../../assets/Hire/discovery-call.png"
import agile from "../../assets/Hire/agile.png"
import dev from "../../assets/Hire/dev.png"
import Test from "../../assets/Hire/testing.png"
import invoice from "../../assets/Hire/invoice.png"
import communication from "../../assets/Hire/communication.png"
import escaltion from "../../assets/Hire/escalatiom.png"
const Howit_done = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-items-center items-cente p-5 md:p-10 bg-white pt-10 md:pt-40">
      <p className="text-[42px] font-sans  tracking-[2px] text-center  font-bold  mb-2 lg:mb-3">
        Here's How it is Done
      </p>

      <div className=" w-full h-auto  flex flex-col  lg:flex-row justify-center items-center p-5 gap-5 ">
        <div className=" w-full lg:w-[40%] h-auto flex justify-center items-center ">
          <img src={call} alt="profile" className="w-60 h-52 object-contain" />
        </div>
        <div className=" w-full lg:w-[50%] h-auto p-0  md:p-10">
          <div className="text-[30px] font-sans leading-10 font-bold ">
            <a href="/mobile" className=" cursor-pointer">
              Initial discovery call
            </a>
          </div>
          <div className="text-[19px] font-sans font-normal mt-4 ">
            Our Business analysts and Tech Leads understand your needs,
            development goals, market dynamics and propose you the right team
            size, skills, and development skills. A team is allocated to the
            project after this phase.
          </div>
        </div>
      </div>

      <div className=" w-full h-auto  flex  flex-col-reverse  lg:flex-row justify-center items-center p-5 gap-5  ">
        <div className=" w-full lg:w-[50%] h-auto p-0  md:p-10">
          <div className="text-[30px] font-sans leading-10 font-bold">
            <a href="/web" className=" cursor-pointer">
              Agile Development
            </a>
          </div>
          <div className="text-[19px] font-sans font-normal mt-4 ">
            The whole scope is broken into 2 weeks sprints with clear
            deliverables expectations, your Project Manager will manage the
            whole process, give you daily updates followed by bi-weekly
            releases, arrange for any tech or non tech skill needed inside the
            Team Plan hours you have.
          </div>
          <div className="text-[19px] font-sans font-normal mt-4 ">
          Basically plays the role of total
            accountability and management. We take care of side things like
            UI/UX, Testing, DevOps on a need basis all the time.

          </div>
        </div>
        <div className=" w-full lg:w-[40%] h-auto flex justify-center items-center ">
          <img src={agile} alt="profile" className=" w-32 h-32 object-contain" />
        </div>
      </div>
      <div className=" w-full h-auto  flex flex-col  lg:flex-row justify-center items-center p-5 gap-5 ">
        <div className=" w-full lg:w-[40%] h-auto flex justify-center items-center  ">
          <img src={dev} alt="profile" className="w-32 h-32 object-contain" />
        </div>
        <div className=" w-full lg:w-[50%] h-auto p-0  md:p-10">
          <div className="text-[30px] font-sans leading-10 font-bold ">
            <a href="/mobile" className=" cursor-pointer">
              Deliverables/ DevOPS
            </a>
          </div>
          <div className="text-[19px] font-sans font-normal mt-4 ">
            Depending upon your priorities, we do the deployment on live
            bi-weekly or monthly so we develop, ship, and develop fluidly in a
            truly Agile way. 
          </div>
          <div className="text-[19px] font-sans font-normal mt-4 ">
          You don't need to pay additional for DevOps as we
            cover all skills inside the retainer hours plan.

          </div>
        </div>
      </div>

      <div className=" w-full h-auto flex  flex-col-reverse  lg:flex-row justify-center items-center p-5 gap-5  ">
        <div className=" w-full lg:w-[50%] h-auto p-0  md:p-10">
          <div className="text-[30px] font-sans leading-10 font-bold">
            <a href="/web" className=" cursor-pointer">
              Testing
            </a>
          </div>
          <div className="text-[19px] font-sans font-normal mt-4 ">
            Every size of the team (big or small) has a Tester involved and
            becomes more and more involved as the project progresses.
          </div>
        </div>
        <div className="  w-full lg:w-[40%] h-auto flex justify-center items-center  ">
          <img src={Test} alt="profile" className="w-32 h-32 object-contain" />
        </div>
      </div>
      <div className=" w-full h-auto  flex flex-col  lg:flex-row justify-center items-center p-5 gap-5 ">
        <div className=" w-full lg:w-[40%] h-auto flex justify-center items-center ">
          <img src={communication} alt="profile" className="w-32 h-32 object-contain" />
        </div>
        <div className=" w-full lg:w-[50%] h-auto p-0  md:p-10">
          <div className="text-[30px] font-sans leading-10 font-bold ">
            <a href="/mobile" className=" cursor-pointer">
              Communication & Management
            </a>
          </div>
          <div className="text-[19px] font-sans font-normal mt-4 ">
            Depending upon your availability and need, we can have daily
            stand-up or twice a week stand-ups.
          </div>
          <div className="text-[19px] font-sans font-normal mt-4 ">
          Our Project Manager will be
            available to talk to you the whole work day + can extend hours
            anytime according to your time-zone.The timesheets and hours are
            tracked real time, and you can check the sheets whenever you want
            to.

          </div>
         
        </div>
      </div>

      <div className=" w-full h-auto flex  flex-col-reverse lg:flex-row justify-center items-center p-5 gap-5  ">
        <div className=" w-full lg:w-[50%] h-auto p-0  md:p-10">
          <div className="text-[30px] font-sans leading-10 font-bold">
            <a href="/web" className=" cursor-pointer">
              Invoicing
            </a>
          </div>
          <div className="text-[19px] font-sans font-normal mt-4 ">
            For the first month, we charge 50% of total monthly fee upfront to
            start the work and 50% at the end of the work month. Post that, it
            is 100% within the first week of every work month.
          </div>
          <div className="text-[19px] font-sans font-normal mt-4 ">
          You can pay us
            via payoneer, bank wire/ ACH, credit card, debit card etc. The
            currency will be United States Dollars.

          </div>
         
        </div>
        <div className="w-full lg:w-[40%] h-auto flex justify-center items-center ">
          <img src={invoice} alt="profile" className="w-32 h-32 object-contain" />
        </div>
      </div>
      <div className=" w-full h-auto  flex flex-col  lg:flex-row justify-center items-center p-5 gap-5 ">
        <div className=" w-full lg:w-[40%] h-auto flex justify-center items-center ">
          <img src={escaltion} alt="profile" className="w-32 h-32 object-contain" />
        </div>
        <div className=" w-full lg:w-[50%] h-auto p-0  md:p-10">
          <div className="text-[30px] font-sans leading-10 font-bold ">
            <a href="/mobile" className=" cursor-pointer">
              Escalation Points
            </a>
          </div>
          <div className="text-[19px] font-sans font-normal mt-4 ">
            Your Escalation contact would be our CEO, CTO, Engineering Manager.
            Our leadership makes sure that your team never goes off track and
            you always get the best return on your investment.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howit_done;
