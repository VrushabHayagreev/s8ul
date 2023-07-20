import SingleEsports from "@/components/Esports/SingleEsports";
import soul from "@/components/Esports/soul";
import Breadcrumb from "@/components/Common/Breadcrumb";
import eightbit from "@/components/Esports/8bit";
const Blog = () => {
  return (
    <>
    
      <Breadcrumb
        pageName="Our Esports Players"
        description="Our Soul and 8bit Lineup"
      />
      <section className="pt-[40px] pb-[40px] dark:bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-[#374151] via-[#111827] to-black ">
        <div className="container"> 
        
        <a href="https://www.instagram.com/s8ul.esports/?hl=en" className="dark:text-white  block text-center text-3xl   mt-2  opacity-80 text-3xl   font-bold tracking-tight md:text-3xl xl:text-5xl">SOUL Esports</a>

          <div className="-mx-4 flex flex-wrap justify-center">
            {soul.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleEsports blog={blog} />
              </div>
            ))}
      <div className="pt-20">
  


      <a href="https://www.instagram.com/8bit.esportsofficial/" className="mt-2  opacity-80 text-3xl dark:text-white text-center font-bold tracking-tight md:text-3xl xl:text-5xl">8bit Esports</a>

      </div>

            <div className="-mx-4 flex flex-wrap justify-center">
            {eightbit.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleEsports blog={blog} />
              </div>
            ))}
          </div>
          </div>
          </div>
      </section>

    </>
  );
};

export default Blog;
