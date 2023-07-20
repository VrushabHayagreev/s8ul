'use client';
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Carousel } from 'flowbite-react';


  const Blog = () => {
 
    
   
  return (
    <>
    
      <Breadcrumb
    pageName="Our Achievements"
    description="Trophies and other Milestones"
      />
      
      <section className="pt-[30px] dark:bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-[#374151] via-[#111827] to-black  pb-[30px]  ">
    
   


        <div className="container ">
   
       
<div className="max-w-2xl rounded-lg mx-auto pt-10 pb-20">

   <p className="text-black  block text-center text-3xl   mt-2  opacity-80 text-3xl  dark:text-white font-bold tracking-tight md:text-3xl xl:text-5xl">Soul Esports</p><br/><br/>
    
        <div className="overflow-hidden rounded-lg relative h-80 bg-black  shadow-2xl shadow-black dark:shadow-primary sm:h-64 xl:h-80 2xl:h-96">
        
        <Carousel>
        {achsoul.map((data) => (
                <div key={data.id} className="relative  shadow-2xl  rounded-lg">
                <img className= "transition opacity-40 ease-in-out delay-100 bg-blue-500 hover:-translate-y-4 hover:scale-110 hover:bg-indigo-500 duration-300 shadow-5xl hover:-translate-y-1 " src={data.img} />
                <h1 className="absolute text-2xl text-bold text-white text-center w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {data.title}</h1>
               
                <h3 className="absolute text-white text-xl text-bold text-blue-300 top-5 left-5">{data.place}</h3>
                <h3 className="absolute text-xl text-yellow text-bold text-green-300 bottom-5 right-5">{data.prize}</h3>
             </div>
          
            ))}

    </Carousel>
       
        </div>
 
        <br/><br/>
  
 
    </div>
    <div className="max-w-2xl pb-10 rounded-lg mx-auto">

<p className="text-black  block text-center text-3xl   mt-2  opacity-80 text-3xl  dark:text-white font-bold tracking-tight md:text-3xl xl:text-5xl">8bit Esports</p><br/><br/>
 
     <div className="overflow-hidden relative h-80 rounded-lg  bg-black shadow-2xl shadow-black dark:shadow-primary sm:h-64 xl:h-80 2xl:h-96">
     
     <Carousel >
     {ach8bit.map((data) => (
             <div key={data.id} className="relative bg-black shadow-2xl  rounded-lg">
             <img className= "transition opacity-40 ease-in-out delay-100 bg-blue-500 hover:-translate-y-4 hover:scale-110 hover:bg-indigo-500 duration-300 shadow-5xl hover:-translate-y-1 " src={data.img} />
             <h1 className="absolute text-2xl text-bold text-white text-center w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                 {data.title}</h1>
            
             <h3 className="absolute text-xl text-white text-bold text-blue-300 top-5 left-5">{data.place}</h3>
             <h3 className="absolute text-xl  text-bold text-yellow  bottom-5 right-5">{data.prize}</h3>
          </div>
       
         ))}

 </Carousel>
  
     </div>




 </div>
	
   
</div> 
    
      </section>
    </>
  );
};

export default Blog;


const achsoul = [
    {id:"1",
      title : "PUBG Mobile India Series 2019 ",
      img : "https://gumlet.assettype.com/afkgaming%2Fimport%2Fmedia%2Fimages%2F96473-847481388c28327908969380f5650bda.jpg?auto=format%2Ccompress&dpr=1.0&w=1200",
      place :"1st",
      prize : "$41,807"
    },
    {id:"2",
    title : "PUBG Mobile Club Open - Spring Split: India ",
    img : "https://assets.gqindia.com/photos/5d08e445eaf24a4ab754d94c/16:9/pass/Pubg-mobile-club-open-team-soul-India-berlin.jpg",
    place :"1st",
    prize : "$60,000"
  },
  {id:"3",
  title : "PUBG Mobile Club Open - Fall Split: South Asia",
  img : "https://img.gurugamer.com/resize/1200x-/2019/11/11/untitled-eba0.png",
  place :"2nd",
  prize : "$30,000"
},
{id:"4",
title : "PUBG Mobile Club Open - Fall Split Global Finals",
img : "https://imgk.timesnownews.com/story/soul1.jpg?tr=w-1200,h-900",
place :"12th",
prize : "$8,000"
},
{id:"5",
title : "Peacekeeper Elite Championship 2019 ",
img : "https://www.talkesport.com/wp-content/uploads/Mortalpec.jpg",
place :"12th",
prize : "$6,424"
},
{id:"6",
title : "Pro Warrior Cup S2: Conquest Round ",
img : "https://img.jagrantv.com/article/rc1030253/1650526497-bgmi-warrior-2.jpg",
place :"1st",
prize : "$3,926"
},
{id:"7",
title : "Battlegrounds Mobile India Pro Series - Season 1",
img : "https://staticg.sportskeeda.com/editor/2022/06/dec5f-16550485261327-1920.jpg?w=840",
place :"1st",
prize : "$96,258"
},
 {id:"8",
title : "BGMI Masters Series",
img : "https://assets.mspimages.in/gear/wp-content/uploads/2022/07/zq9JqhYHzsM-HD.jpg",
place :"6th",
prize : "$8,138"
},
{id:"9",
title : "PUBG Mobile World Invitational 2022",
img : "https://thebridge.in/h-upload/2022/08/11/36038-untitled-design-2022-08-11t212343604.webp",
place :"11th",
prize : "$58,500"
},
{id:"10",
title : "Skyesports Champions Series",
img : "https://i.ytimg.com/vi/cDRSqL3pLBQ/maxresdefault.jpg",
place :"2nd",
prize : "$7,327"
},
   
  ]

  
const ach8bit = [
  {id:"1",
    title : "PUBG Mobile Club Open - Spring Split: India",
    img : "https://i.ytimg.com/vi/uXA7BRTZhnw/maxresdefault.jpg",
    place :"12th",
    prize : "$2,000"
  },
  {id:"2",
  title : "THUG Invitational",
  img : "https://gumlet.assettype.com/afkgaming%2F2022-08%2F684e4145-3fac-40a2-9f43-cf2e44a02b76%2F301029536_852703476161668_5254093610709328975_n.jpg?compress=true&dpr=1&w=1200",
  place :"1st",
  prize : "	$1,075"
},
{id:"3",
title : "Skyesports Championship 3.0",
img : "https://staticg.sportskeeda.com/editor/2021/06/3dd84-16226310264742-800.jpg",
place :"3rd",
prize : "	$4,074"
},
{id:"4",
title : "LOCO Diwali Battle: Grand Finals",
img : "https://img.jagrantv.com/article/rc1025378/1637317994-loco-diwali-battle.jpg",
place :"2nd",
prize : "$4,131"
},
{id:"5",
title : "BGMI Masters Series",
img : "https://i.ytimg.com/vi/TIMp7ZqqGUo/maxresdefault.jpg",
place :"12th",
prize : "$5,258"
},
{id:"6",
title : "Novum Overpower Series Season 1 ",
img : "https://thegamingjournal.in/sites/default/files/styles/blog_image/public/field/image/New%20Project%20%2838%29.png?itok=b0qk7RsEg",
place :"2nd",
prize : "$1,526"
},
{id:"7",
title : "Fight Night Pro Scrims",
img : "https://prosettings.net/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=pad%2Cheight=675%2Cq=85%2Csharpen=2%2Cwidth=1200/wp-content/uploads/global-esports.png",
place :"1st",
prize : "$1,832"
},
{id:"8",
title : "Nodwin BGMI Champions Cup",
img : "https://assets.mspimages.in/gear/wp-content/uploads/2022/07/zq9JqhYHzsM-HD.jpg",
place :"3rd",
prize : "$3,659"
},
{id:"9",
title : "Villager Esports Pro Invitational 2023",
img : "https://sportstiger-images.s3.ap-south-1.amazonaws.com/media/villager-esports-pro-invitational-2023-finals-1688985945393-original.jpg",
place :"2nd",
prize : "	$6,053"
},
{id:"10",
title : "Ranbhoomi Season 2",
img : "https://www.insidesport.in/wp-content/uploads/2023/07/8Bit-Becomes-the-Winner-of-Ranbhoomi-Season-2-Check-the-Overall-Standings.png",
place :"1st",
prize : "$8,475"
},
 
]