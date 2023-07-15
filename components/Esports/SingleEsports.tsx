"use client";
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

import { Router, Route } from 'react-router'
const SingleEsports = ({ blog }: { blog: Blog }) => {
  const {id, title, image, paragraph, tags, publishDate } = blog;
  return (
    <><br/><br/>

    
   
        
   <div className="flex  p-10 flex-col justify-center bg-slate-100">
        <div className="group h-96 w-96 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0">
                    <img className = "h-full w-full rounded-xl object-cover shadow-xl shadow-black/40 " src = {image}/>
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/50 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex min-h-full flex-col items-center justify-center">
                       
                        <h1 className="text-3xl font-bold">
                            {title}
                        </h1>
                        <p className="text-lg">
                            {paragraph}
                        </p>
                        <p className="text-base">
                            {tags}
                        </p>
                         <h3 className="text-center">
            <Link
              href="/postdetails"
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              Know More
            </Link>
          </h3>
                    </div>
                </div>
            </div>
        </div>
      </div>
 
     
    </>
  );
};

export default SingleEsports;
