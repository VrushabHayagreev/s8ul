import React from 'react'
import Link from "next/link";
const Profile = () => {
    
  return (
    <div> 
<link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"/>
<link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"/>

<main className="profile-page">
  <section className="relative block h-500-px">
    <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{
    backgroundImage: "url('data:image/jpeg;base64,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')"
}}>
      <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
    </div>
    <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{
    transform: "translateZ(0px) "
    }}>
      <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
        <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>
  </section>
  <section className="relative py-16 bg-blueGray-200">
    <div className="container mx-auto px-4">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
              <div className="relative">
                <img alt="..." src="data:image/jpeg;base64,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" className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"/>
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
              <div className="py-6 px-3 mt-32 sm:mt-0">
                <a href = "https://www.instagram.com/soul_regaltos/" className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                  Connect
                </a>
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4 lg:order-1">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">1M</span><span className="text-sm text-blueGray-400">Followers</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">2.7M</span><span className="text-sm text-blueGray-400">Subscribers</span>
                </div>
                
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
              Parv Singh
            </h3>
            <h3 className="text-2xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
              In Game - Soul Regaltos
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
              Delhi India
            </div>
            <div className="mb-2 text-blueGray-600 mt-10">
              <i className="fas fa-gamepad mr-2 text-lg text-blueGray-400"></i>PUBG, BGMI, Valorant
            </div>
            <div className="mb-2 text-blueGray-600">
              <i className="fas fa-birthday mr-2 text-lg text-blueGray-400"></i>December 12, 2000
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                Regaltos Real Name Is Parv Singh (born December 12, 2000) is an Indian PUBG Mobile player who currently plays for 8Bit and is a Content Creator for 8Bit Creatives.
He is a popular Gamer, YouTuber, and eSports athlete for 8bit. He was born on December 12, 2000, in New Delhi. Parv completed his schooling in Delhi.
                </p>
                <a href="#pablo" className="font-normal text-pink-500">Show more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-6/12 px-4 mx-auto text-center">
        <div className="text-sm text-blueGray-500 font-semibold py-1">
          Made with <a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank">Notus JS</a> by <a href="https://www.creative-tim.com" className="text-blueGray-500 hover:text-blueGray-800" target="_blank"> Creative Tim</a>.
        </div>
      </div>
    </div>
  </div>
</footer>
  </section>
</main>
    </div>
  )
}

export default Profile