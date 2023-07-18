"use client";
import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { usePathname } from 'next/navigation';

const Post = () => {
  const pathname = usePathname();
  const t = Number(pathname.substring(6, ));

const r = blogData.filter(element => element.id === t)

const {name, dateofbirth,location,imageprofile, insta,loco,discord,shortdesc} = r[0]
  
  return (
    <>
  <section id="about" className="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-[#0284c7] to-[#38bdf8] pt-15 md:pt-20 lg:pt-28">


  <section className="pt-10 pb-20 ">
   <div className="container mx-auto px-4">
  
     <section className=" " >
     <div id="profile" className="container">
       <div  id="profile" className="-mx-4 flex flex-wrap justify-center">
       <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"/> 
     <link rel="stylesheet" 
 href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
 
 
 
   <div className="max-w-7xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
   
   <div id="profile" className="w-200 lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 py-5 lg:mx-0">
 
 
     <div className="p-4 md:p-12 text-center lg:text-left">
   
       <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center" ></div>
     
       <h1 className="text-3xl text-gray-700 font-bold pt-8 lg:pt-0">{name}</h1>
       <h1 className="text-xl text-gray-700  pt-8 lg:pt-0">Real Name Here</h1>
       <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
       <p className="pt-4 text-base text-gray-700 font-bold text-s flex items-center justify-center lg:justify-start"> <i className="fa fa-gamepad text-m text-blue-900"></i>&nbsp;&nbsp;Games They Play</p>
       <p className="pt-2 text-gray-700 text-s lg:text-s font-bold flex items-center justify-center lg:justify-start"><i className="fa fa-birthday-cake text-m text-blue-900"></i>&nbsp;&nbsp;&nbsp;{dateofbirth}</p>
       <p className="pt-2 text-gray-700 text-s lg:text-s font-bold flex items-center justify-center lg:justify-start"><i className="fa fa-location text-m text-blue-900"></i>&nbsp;&nbsp;&nbsp;{location}</p>
       <p className="pt-8 text-gray-900 font-semibold text-m">{shortdesc}</p>
 
       <div className="pt-12 h-20 pb-5">
         <a  href= "https://www.youtube.com/@soulregaltos9810" className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
           Subscribe Now
         </a> 
       </div>
 
       <div className="pt-5 lg:w-full mx-auto flex flex-wrap items-center">
         <a className="link" href={"https://www.instagram.com/soul_regaltos/"} ><i className="fa-brands fa-instagram text-4xl  text-gray-500"> </i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
         <a className="link" href="https://discord.gg/eKfaRx8k" data-tippy-content="@twitter_handle"><i className="fa-brands fa-discord text-4xl  text-gray-500"> </i>&nbsp;&nbsp;&nbsp;</a>
         <a className="link" href="https://loco.gg/streamers/soul-regaltos" data-tippy-content="@twitter_handle"> <img  className = " opacity-65 overflow-hidden shadow-2xl pt-3 bg- h-14 w-15" src="https://cdn108.technosports.co.in/wp-content/uploads/2022/06/Loco-Logo.png" alt="Gaming fonts"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
         <a href="https://www.fontspace.com/category/gaming"></a>
       </div>
 
 
     </div>
 
   </div>
   
 
   <div className="w-full lg:w-2/5">
 
     <img src={imageprofile} className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"/>
 
     
   </div>
   
   
 
   
 </div>
 
   
 
         </div>
         </div>
         </section>
     </div>
    
   
 </section>
 
 </section>
    </>
  );
};

export default Post;
var data = {
  1 : {
    english: "hello", french: "bonjour"
  },
  2 : {
    english: "hi", french: "ok"
  },
};