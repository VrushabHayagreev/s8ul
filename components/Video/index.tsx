"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);


  return (
    <section className="relative z-10  dark:bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-[#374151] via-[#111827] to-black   py-5 md:py-3 lg:py-10">
      <div className="container pt-10 pb-10">
        <SectionTitle
          title="Get To Know Us"
          paragraph="Here is a short video of S8ul"
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[770px] dark:shadow-xl dark:shadow-primary overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <Image src="/images/video/video.jpg" alt="video image" fill />
                <div className="absolute top-0 right-0 flex h-full w-full items-center justify-center">
                  <button
                    onClick={() => setOpen(true)}
                    className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-black bg-opacity-75 text-primary transition hover:bg-opacity-100"
                  >
                  
                  </button>
               
                  
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="dLsBFHSF3bA"
        onClose={() => setOpen(false)}
      />

      
    </section>
  );
};

export default Video;
