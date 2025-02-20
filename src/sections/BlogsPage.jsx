import BlogCard from "../Components/BlogComponents";
import portfolioData from "../db/local";


const BlogsPage = () => {
    let { blogData } = portfolioData;
    return (
        <section className="mt-24 py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-accent mb-8 text-left">
                    Blog
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {blogData.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogsPage;
