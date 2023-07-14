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
      
      <section className="pt-[30px] pb-[30px]">
    
      <p className="mt-5 text-2xl text-center text-white">Soul Esports

</p><br/><br/>
        <div className="container ">
   
       
<div className="max-w-2xl mx-auto">


    
        <div className="overflow-hidden relative h-80   shadow-5xl sm:h-64 xl:h-80 2xl:h-96">
        
        <Carousel>
        {achievementData.map((data) => (
                <div class="relative  shadow-2xl  rounded-lg">
                <img className= "transition opacity-60 ease-in-out delay-100 bg-blue-500 hover:-translate-y-4 hover:scale-110 hover:bg-indigo-500 duration-300 shadow-5xl hover:-translate-y-1 " src={data.img} />
                <h1 class="absolute text-2xl text-bold text-white text-center w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {data.title}</h1>
               
                <h3 class="absolute text-xl text-bold text-blue-300 top-5 left-5">{data.place}</h3>
                <h3 class="absolute text-xl  text-bold text-green-300 bottom-5 right-5">{data.prize}</h3>
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


const achievementData = [
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
place :"12tt",
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