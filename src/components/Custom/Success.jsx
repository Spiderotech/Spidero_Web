import React from "react";

const Success = () => {
  return (
    <section class="h-auto ">
      <div class=" mx-auto flex justify-center">
        <div class="max-w-screen-xl text-gray-500 sm:text-lg dark:text-gray-400  ">
          <div class="flex flex-wrap justify-center mt-10 mb-10">
            <h2 className="text-[40px] font-sans leading-10 font-bold ">
              Success stories
            </h2>
            <section className="bg-gray-2 dark:bg-dark pt-10  lg:pt-[50px]   ">
              <div className="container">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
                  <SingleCard
                    image="https://i.ibb.co/r2zns1m/image-01.jpg"
                    CardTitle="e-learning"
                    CardDescription="Application Modernization for an eLearning Platform acquired by McGraw Hill Education
                    media-image
                    media
                    Enterprise Web Application Development for a Fortune 50 Media Conglomerate
                    "
                    dataAos="flip-left"
                  />
                  <SingleCard
                    image="https://i.ibb.co/0nbbWM9/image-02-1.jpg"
                    CardTitle="media"
                    CardDescription="Enterprise Web Application Development for a Fortune 50 Media Conglomerate"
                    dataAos="flip-right"
                  />
                </div>
              </div>
            </section>
            <div>
                <a href="/contact">
                  <button className="border   border-white  w-[200px] h-[51px] font-sans leading-6 tracking-{2px} text-[16px]  text-white font-bold bg-black transition-all ease-in-out hover:bg-white hover:text-black hover:border-black">
                    DISCOVER MORE
                  </button>
                </a>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;

const SingleCard = ({
  image,
  CardDescription,
  CardTitle,
  titleHref,
  dataAos,
}) => {
  return (
    <>
      {/*  */}
      <div
        className="mb-10 overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3"
        data-aos={dataAos}
      >
        <img src={image} alt="" className="w-full" />
        <div className="p-8  text-start sm:p-9 md:p-7 xl:p-9">
          <h3>
            <a
              href={titleHref ? titleHref : "/#"}
              className="mb-4 block text-xl font-sans text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="mb-7 text-base leading-relaxed text-body-color font-sans dark:text-dark-6">
            {CardDescription}
          </p>
        </div>
      </div>
      {/*  */}
    </>
  );
};
