"use client";
import AboutSectionOne from "@/components/About/AboutSectionOne";

import Script from 'next/script'

import ScrollUp from "@/components/Common/ScrollUp";
import { useState } from "react";

import Features from "@/components/Features";
import Hero from "@/components/Hero";

import Video from "@/components/Video";

import Contact from "@/components/Contact";

export default function Home(  ) {
 
  return (
    <>
  <Script src="https://www.googletagmanager.com/gtag/js?id=G-MQLB2KMK9G" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-MQLB2KMK9G');
        `}
      </Script>

  <ScrollUp />
      <Hero />
      <Features />
      <Video />
      {/* <Brands /> */}
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      <Contact />
  
    

 
    
    
    </>
  );
}

