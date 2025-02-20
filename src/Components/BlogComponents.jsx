import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/blog/${blog.id}`)}
            className="rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
        >
            <div className="p-6">
                <h3 className="text-xl text-left font-semibold text-accent">{blog.title}</h3>
                <p className="text-gray-300 text-left">{blog.description.split(" ").slice(0, 10).join(" ")}...</p>
            </div>
        </div>
    );
};

export default BlogCard;
