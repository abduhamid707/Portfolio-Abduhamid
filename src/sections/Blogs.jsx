const blogData = [
    {
        id: 1,
        title: "Frontend Development: The Future of Web",
        date: "2024-02-15",
        description: "Frontend texnologiyalarining kelajagi va React, Vue, Svelte kabi frameworklar haqida batafsil ma’lumot.",
    }
];

const Blogs = () => {
    return (
        <section className="mt-24 py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-accent mb-8 text-left">
                    Blogs
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {blogData.map((blog) => (
                        <div key={blog.id} className=" rounded-lg overflow-hidden shadow-lg">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-accent">{blog.title}</h3>
                                <p className="text-gray-400 text-sm mb-3">{blog.date}</p>
                                <p className="text-gray-300">{blog.description}</p>
                                <button className="mt-4 px-4 py-2 bg-accent text-gray-900 font-semibold rounded hover:bg-accent-dark">
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;
