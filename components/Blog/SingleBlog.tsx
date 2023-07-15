"use client";
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

import { Router, Route } from 'react-router'
const SingleBlog = ({ blog }: { blog: Blog }) => {
  const {id, name,role, imagecard } = blog;
  const refr = "/blog/" + String(id)
  console.log(refr)
  return (
    <><br/><br/>
    
   
        
        <div className="flex  p-10 flex-col justify-center bg-slate-100">
        <div className="group h-96 w-96 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0">
                    <img className = "h-full w-full rounded-xl object-cover shadow-xl shadow-black/40 " src = {imagecard}/>
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/50 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex min-h-full flex-col items-center justify-center">
                       
                        <h1 className="text-3xl font-bold">
                            {name}
                        </h1>
                        <p className="text-lg">
                            {role}
                        </p>
                        <br/><br/>
                         <h3 className="text-center">
            <Link
              href={refr}
              className="mb-4 block text-xl font-bold bg-primary rounded-full p-3 text-white hover:text-black dark:text-white dark:hover:text-black sm:text-2xl"
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

export default SingleBlog;
