"use client";
import React, { useState, useEffect, useRef } from "react";
import CLOUD from "vanta/dist/vanta.clouds.min";
import * as THREE from "three";

const MyComponent = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        CLOUD({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 600.0,
          minWidth: 600.0,
          skyColor : "#0284c7",
          scale: 5.0,
          scaleMobile: 5.0
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.toString();
    };
  }, [vantaEffect]);
  return (

    <div  ref={vantaRef}>
         <br/> <br/> <br/>   <br/> <br/> <br/> <br/> <br/> <br/> 
  
      <h1 className="mt-2 hover:animate-bounce opacity-80 text-5xl text-black text-center font-bold tracking-tight md:text-6xl xl:text-7xl">
            S8UL OFFICIAL <br /><span className=" text-4xl ">Get To Know Your Creators</span>
          </h1>
      <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> 
    </div>
 
  );
};
export default MyComponent;