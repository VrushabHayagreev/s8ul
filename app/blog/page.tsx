import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

const Blog = () => {
  return (
    <>
    
      <Breadcrumb
        pageName="Our Creators"
        description="Get To Know The Creators of S8ul"
      />
      
      <section className="bg-gradient-to-br from-[#0083f5] via-[#00bfd8] to-[#0083f5] ">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          
        </div>
      </section>
    </>
  );
};

export default Blog;
