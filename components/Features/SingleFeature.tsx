"use client";
import React, { useState, useEffect, useRef } from "react";
import CLOUD from "vanta/dist/vanta.clouds.min";
import * as THREE from "three";
import { Feature } from "@/types/feature";


const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  // const [vantaEffect, setVantaEffect] = useState(0);
  // const vantaRef = useRef(null);

  // useEffect(() => {
  //   if (!vantaEffect) {
  //     setVantaEffect(
  //       CLOUD({
  //         el: vantaRef.current,
  //         THREE: THREE,
  //         mouseControls: true,
  //         touchControls: true,
  //         gyroControls: false,
  //         minHeight: 50,
  //         minWidth: 50,
  //         skyColor : "#0284c7",
  //         cloudColor:"#bae6fd",
     
  //         scale: 5.0,
  //         scaleMobile: 5.0,
  //       })
  //     );
  //   }
  //   return () => {
  //     if (vantaEffect) vantaEffect.toString();
  //   };
  // }, [vantaEffect]);
  return (
    
    <div  className="w-full dark:shadow-xl dark:shadow-primary  rounded-md  shadow-2xl shadow-black p-3 rounded-xl ">
      <div className="wow fadeInUp " data-wow-delay=".15s">
        
        <div className="mb-8 flex h-[70px] w-[70px]  items-center justify-center rounded-md   text-black/90">
          <img src={icon}/>
        </div>
        <h3 className="mb-5 text-xl  font-bold text-black  dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-black/90  dark:text-white">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
