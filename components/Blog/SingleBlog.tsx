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
    
   
        
        <div className="p-4 flex flex-col justify-center text-white bg-slate-100">
        <div className="group h-96 w-96 [perspective:1000px]  rounded-3xl">
            <div className="relative h-full w-full rounded-3xl  shadow-2xl shadow-black dark:shadow-primary transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0">
                    <img className = "h-full w-full rounded-xl object-cover shadow-xl shadow-black " src = {imagecard}/>
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-cover px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]"  style={{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.6), rgba(0,0,0, 0.6)), url('https://pbs.twimg.com/profile_images/1607008301786763264/dID8FBx-_400x400.jpg')"}}>
                    <div className="flex min-h-full flex-col items-center justify-center">
                       
                        <h1 className="text-2xl font-bold">
                            {name}
                        </h1>
                        <p className="text-lg">
                            {role}
                        </p>
                        <br/><br/>
                         <h3 className="text-center">
            <Link
              href={refr}
              className="mb-4 block text-l font-bold bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-[#0284c7] to-[#38bdf8] rounded-full p-2 text-white hover:text-black dark:text-white dark:hover:text-black sm:text-m"
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
