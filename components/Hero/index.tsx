import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 bg-gradient-to-br from-[#0083f5] via-[#00bfd8] to-[#0083f5] overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Welcome to S8UL Fan Made Page
                </h1>
                <p className="mb-12 text-black text-base font-medium !leading-relaxed   sm:text-lg md:text-xl">
                One Stop for everything you want to know about S8ul from content ctreation, esports to events.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  {/* <Link
                    href="https://nextjstemplates.com/templates/saas-starter-startup"
                    className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                   Leave a Like here 
                  </Link> */}
                
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </section>
    </>
  );
};

export default Hero;
