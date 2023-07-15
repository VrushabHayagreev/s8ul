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
      <section className="pt-[40px] pb-[40px]">
        <div className="container"> 
        <a href="https://www.instagram.com/s8ul.esports/?hl=en" className="text-gray-700  block text-center  hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-3xl px-5 py-2.5 text-center mr-2 mb-2">SOUL Esports</a>

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
  


      <a href="https://www.instagram.com/8bit.esportsofficial/" className="text-gray-700  block text-center text-3xl hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg  px-5 py-2.5 text-center mr-2 mb-2">8bit Esports</a>

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
