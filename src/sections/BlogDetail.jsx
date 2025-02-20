import { useParams } from "react-router-dom";
import portfolioData from "../db/local.js";

const BlogDetail = () => {
    const { id } = useParams();
    const blog = portfolioData.blogData.find((b) => b.id == id);
    if (!blog) {
        return <p className="text-center text-red-500 text-xl">Blog topilmadi</p>;
    }

    return (
        <section className="mt-24 py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-accent mb-8">{blog.title}</h2>
                <p className="text-gray-300">{blog.description}</p>
            </div>
        </section>
    );
};

export default BlogDetail;
