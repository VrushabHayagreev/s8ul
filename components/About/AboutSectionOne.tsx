"use client"; 
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";


const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md text-black/90  text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
  
    <section id="about" className="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-[#0284c7] to-[#38bdf8] pt-5 md:pt-8 lg:pt-10">
  
{/*     
          <div>
             <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto"> */}
       
{/*       
          <div className="flex flex-wrap -m-4">
          <div className="flex min-h-screen p-10 flex-col justify-center bg-slate-100">
        <div className="group h-96 w-96 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0">
                    <img className = "h-full w-full rounded-xl object-cover shadow-xl shadow-black/40 " src = "https://yt3.googleusercontent.com/S9xWprcFyvLqpr2YVxa8WhnEtu3BCBD0l-ZkeOdfxIUjMzy-JC5a2Uaq2QIkU1txrtFv7XurOLk=s900-c-k-c0x00ffffff-no-rj "/>
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/50 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex min-h-full flex-col items-center justify-center">
                       
                        <h1 className="text-3xl font-bold">
                            Vrushab Hanumesh
                        </h1>
                        <p className="text-lg">
                            Gaming
                        </p>
                        <p className="text-base">
                            details
                        </p>
                        <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900"> Page</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="flex min-h-screen p-10 flex-col justify-center bg-slate-100">
        <div className="group h-96 w-96 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0">
                    <img className = "h-full w-full rounded-xl object-cover shadow-xl shadow-black/40 " src = "https://aflence.com/wp-content/uploads/2023/03/Soul-Viper-Cover-1.png "/>
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/50 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex min-h-full flex-col items-center justify-center">
                       
                        <h1 className="text-3xl font-bold">
                            Vrushab Hanumesh
                        </h1>
                        <p className="text-lg">
                            Gaming
                        </p>
                        <p className="text-base">
                            details
                        </p>
                        <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900"> Page</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
              <div className="flex min-h-screen flex-col p-10 justify-center bg-slate-100">
        <div className="group h-96 w-96 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] [backface-visibility:hidden] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0">
                    <img className = "h-full w-full rounded-xl object-cover shadow-xl shadow-black/40 " src = "https://fampediabiographydata.files.wordpress.com/2022/09/naman-mathur-1-edited.jpg"/>
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black px-12 text-center  bg-soul bg-cover  [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex min-h-full flex-col items-center justify-center">
                       
                        <h1 className="text-3xl font-bold">
                            Vrushab Hanumesh
                        </h1>
                        <p className="text-lg">
                            Gaming
                        </p>
                        <p className="text-base">
                            details
                        </p>
                        <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900"> Page</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full rounded-xl shadow-cla-blue bg-white bg-opacity-50 from-indigo-50 to-blue-50 overflow-hidden">
                <img className="lg:h-80 md:h-60 w-full object-cover  scale-110 transition-all duration-400 hover:scale-100" src="https://yt3.googleusercontent.com/S9xWprcFyvLqpr2YVxa8WhnEtu3BCBD0l-ZkeOdfxIUjMzy-JC5a2Uaq2QIkU1txrtFv7XurOLk=s900-c-k-c0x00ffffff-no-rj " alt="blog"/>
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY-1</h2>
                  <h1 className="title-font text-lg font-medium text-gray-600 mb-3">The Catalyzer</h1>
                  <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  <div className="flex items-center flex-wrap ">
                    <button className="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">Learn more</button>
                   
                  </div>
                </div>
              </div>
            </div>
       
            <div className="p-4 md:w-1/3">
              <div className="h-full rounded-xl shadow-cla-blue bg-white bg-opacity-50 from-indigo-50 to-blue-50 overflow-hidden">
                <img className="lg:h-80 md:h-60 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="https://aflence.com/wp-content/uploads/2023/03/Soul-Viper-Cover-1.png" alt="blog"/>
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY-1</h2>
                  <h1 className="title-font text-lg font-medium text-gray-600 mb-3">The Catalyzer</h1>
                  <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  <div className="flex items-center flex-wrap ">
                    <button className="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">Learn more</button>
                   
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full rounded-xl shadow-cla-blue bg-white bg-opacity-50 from-indigo-50 to-blue-50 overflow-hidden">
                <img className="lg:h-80 md:h-60 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="https://fampediabiographydata.files.wordpress.com/2022/09/naman-mathur-1-edited.jpg" alt="blog"/>
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY-1</h2>
                  <h1 className="title-font text-lg font-medium text-gray-600 mb-3">The Catalyzer</h1>
                  <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  <div className="flex items-center flex-wrap ">
                    <button className="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">Learn more</button>
                   
                  </div>
                </div>
              </div>
            </div>
           
             
          </div>
        </div>
      </section>
    </div> */}
  
       <section className="pt-20 pb-48 text-black/90">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl text-black/90 font-semibold">The Owners</h2>
                <p className="text-lg leading-relaxed m-4 text-black/90">
                  Here are the owners of s8ul
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="images/owners/mortal.png"
                    className="rounded-full px-30 py-30 mx-auto h-90 w-90 md:h-80 md:w-80"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Naman Mathur (Mortal)</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Owner
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="images/owners/thug.png"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Animesh Agarwal (Thug)</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Owner
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="images/owners/goldybhai.png"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Lokesh Jain (Goldy Bhai)</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Owner
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="images/owners/mercy.png"
                    className="rounded-full px-30 py-30 mx-auto h-90 w-90 md:h-80  max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Mrinmoy Lahka (Mercy)</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      owner 8bit
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </section>
  );
};

export default AboutSectionOne;
