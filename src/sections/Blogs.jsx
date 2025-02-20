import { useState } from "react";
import ReactPaginate from "react-paginate";
import BlogCard from "../Components/BlogComponents";
import portfolioData from "../db/local";

const Blogs = () => {
    const { blogData } = portfolioData;

    // Bir sahifada nechta blog chiqishi kerak
    const itemsPerPage = 6;

    // Pagination uchun state
    const [currentPage, setCurrentPage] = useState(0);

    // Sahifalar bo‘yicha postlarni olish
    const offset = currentPage * itemsPerPage;
    const currentItems = blogData.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(blogData.length / itemsPerPage);

    // Sahifani o‘zgartirish
    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <section className="mt-24 py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-accent mb-8 text-left">
                    Blogs
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {currentItems.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-8">
                    <ReactPaginate
                        previousLabel={"←"}
                        nextLabel={"→"}
                        breakLabel={"..."}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={3}
                        onPageChange={handlePageClick}
                        containerClassName={"flex space-x-2"}
                        pageClassName={"px-3 py-2 bg-gray-800 rounded-md text-white cursor-pointer"}
                        activeClassName={"bg-blue-500"}
                        previousClassName={"px-3 py-2 bg-gray-600 rounded-md text-white cursor-pointer"}
                        nextClassName={"px-3 py-2 bg-gray-600 rounded-md text-white cursor-pointer"}
                    />
                </div>
            </div>
        </section>
    );
};

export default Blogs;
