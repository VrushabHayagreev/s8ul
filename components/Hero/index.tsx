import React, { useState, useEffect, useRef } from "react";
import CLOUD from "vanta/dist/vanta.clouds.min";
import * as THREE from "three";
import { useTheme } from 'next-themes';

const MyComponent = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
  
    const lightModeOptions = {
      el: vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 600.0,
      minWidth: 600.0,
      skyColor: "#38bdf8",
      cloudColor: "#f0f9ff",
      sunlightColor: "#38bdf8",
      sunColor : "#38bdf8",
      sunGlareColor : "#38bdf8",
      scale: 5.0,
      scaleMobile: 5.0,
    };

    const darkModeOptions = {
      el: vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 600.0,
      minWidth: 600.0,
      skyColor: "#020617",
      cloudColor: "#f8fafc",
      sunlightColor: "#9ca3af",
      sunColor : "#9ca3af",
      sunGlareColor : "#9ca3af",
      scale: 5.0,
      scaleMobile: 5.0,
    };


    const destroyEffect = () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };


    if (theme === 'dark') {
      destroyEffect();
      setVantaEffect(CLOUD(darkModeOptions));
    } else {
      destroyEffect();
      setVantaEffect(CLOUD(lightModeOptions));
    }

    return destroyEffect; 
  }, [theme]);

  return (
    <div  ref={vantaRef} className="">
    <br/> <br/> <br/>   <br/> <br/> <br/> <br/> <br/> <br/> 

 <h1 className="mt-2 hover:animate-bounce opacity-80 text-5xl text-black dark:text-white text-center font-bold tracking-tight md:text-6xl xl:text-7xl">
       S8UL OFFICIAL <br /><span className=" text-4xl ">Get To Know Your Creators</span>
     </h1>
 <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> 
</div>
  );
};

export default MyComponent;
