// import { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import portfolioData from '../db/local.js';
// import './Project.css';

// const Projects = () => {
//     const [activeCategory, setActiveCategory] = useState(portfolioData.projects[0].category);
//     const containerRef = useRef(null);
//     const isMouseDown = useRef(false);
//     const startX = useRef(0);
//     const scrollLeft = useRef(0);

//     const categoriesPriority = [];
//     const groupedProjects = {};

//     portfolioData.projects.forEach((project) => {
//         if (!groupedProjects[project.category]) {
//             groupedProjects[project.category] = [];
//         }
//         groupedProjects[project.category].push(project);
//     });

//     const sortedCategories = [
//         ...categoriesPriority,
//         ...Object.keys(groupedProjects).filter((category) => !categoriesPriority.includes(category)),
//     ];

//     const calculateScrollPosition = (category) => {
//         let position = 0;
//         for (const cat of sortedCategories) {
//             if (cat === category) break;
//             position += (groupedProjects[cat]?.length || 0) * 300; // Card width: 300px
//         }
//         return position;
//     };

//     const handleCategoryClick = (category) => {
//         const container = containerRef.current;
//         if (!container) return;

//         const targetScrollPosition = calculateScrollPosition(category);

//         container.scrollTo({
//             left: targetScrollPosition,
//             behavior: 'smooth',
//         });
//     };

//     const handleScroll = () => {
//         const container = containerRef.current;
//         if (!container) return;

//         const scrollPosition = container.scrollLeft;
//         let currentCategory = sortedCategories[0];
//         let accumulatedWidth = 0;

//         sortedCategories.forEach((category) => {
//             const categoryWidth = (groupedProjects[category]?.length || 0) * 300;
//             if (scrollPosition >= accumulatedWidth && scrollPosition < accumulatedWidth + categoryWidth) {
//                 currentCategory = category;
//             }
//             accumulatedWidth += categoryWidth;
//         });

//         setActiveCategory(currentCategory);
//     };

//     const handleMouseDown = (e) => {
//         console.log(1);

//         isMouseDown.current = true;
//         startX.current = e.clientX;
//         scrollLeft.current = containerRef.current.scrollLeft;
//     };

//     const handleMouseMove = (e) => {
//         console.log(2);

//         if (!isMouseDown.current) return;
//         const x = e.clientX;
//         const walk = (x - startX.current) * 2; // Scroll speed multiplier
//         containerRef.current.scrollLeft = scrollLeft.current - walk;
//     };

//     const handleMouseUp = () => {
//         console.log(3);;

//         isMouseDown.current = false;
//     };

//     useEffect(() => {
//         const container = containerRef.current;
//         if (container) {
//             container.addEventListener('scroll', handleScroll);
//             // container.addEventListener('mousedown', handleMouseDown);
//             container.addEventListener('mousedown', handleMouseDown);
//             container.addEventListener('mouseup', handleMouseUp);
//             // container.addEventListener('mouseup', handleMouseUp);
//             // container.addEventListener('mouseleave', handleMouseUp);
//         }
//         return () => {
//             if (container) {
//                 container.removeEventListener('scroll', handleScroll);
//                 container.removeEventListener('mousedown', handleMouseDown);
//                 container.removeEventListener('mouseup', handleMouseUp);
//             }
//         };
//     }, []);

//     return (
//         <section className="projects mt-24">
//             <div className="container mx-auto px-4">
//                     <h2 className="text-2xl sm:text-3xl font-bold text-accent mb-4 sm:mb-0 text-left">Projects</h2>
//                 <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-5">
//                     <div className="overflow-x-auto  flex gap-3 w-full sm:w-[80%] flex-wrap mx-auto mt-5">
//                         {sortedCategories.map((category, index) => (
//                             <span
//                                 key={index}
//                                 onClick={() => handleCategoryClick(category)}
//                                 className={`px-3 py-1 rounded-lg text-sm cursor-pointer hover:bg-accent-dark ${activeCategory === category ? 'bg-accent text-white' : 'text-accent'
//                                     } whitespace-nowrap sm:whitespace-normal`}
//                             >
//                                 {category}
//                             </span>
//                         ))}
//                     </div>
//                 </div>

//                 <div
//                     ref={containerRef}
//                     className="overflow-x-auto w-full flex gap-6 flex-nowrap scrollbar-none py-4 "
//                     style={{ cursor: 'grab', overflowY: 'hidden' }}
//                 >
//                     {sortedCategories.map((category) =>
//                         groupedProjects[category]?.map((project) => (
//                             <div
//                                 key={project.id}
//                                 className="w-[300px] flex-shrink-0"
//                             >
//                                 <Link
//                                     to={`/project/${project.id}`}
//                                     className="block border border-accent rounded-lg overflow-hidden transition-transform transform hover:scale-105"
//                                 >
//                                     <img
//                                         src={`https://picsum.photos/400/200?random=${project.id}`}
//                                         alt={project.title}
//                                         className="w-full h-48 object-cover border-b border-accent"
//                                     />
//                                     <div className="p-4 text-left">
//                                         <h3 className="text-lg font-semibold text-accent mb-2">{project.title}</h3>
//                                         {project.category === activeCategory ? (
//                                             <p className="text-sm text-accent  mb-2">{project.category}</p>
//                                         ) : (
//                                             <p className="text-sm text-gray-500 mb-2">{project.category}</p>
//                                         )}
//                                         <p>
//                                             {project.description.split(' ').slice(0, 8).join(' ')}...
//                                         </p>
//                                     </div>
//                                 </Link>
//                             </div>
//                         ))
//                     )}
//                 </div>
// {/*
//                 <div className="text-center mt-4">
//                     <button
//                         id="scrollButton"
//                         onClick={() => containerRef.current.scrollBy({ left: -300, behavior: 'smooth' })}
//                         className="bg-accent text-white py-2 px-4 rounded hover:bg-accent-dark mx-4"
//                     >
//                         ← Scroll
//                     </button>
//                     <button
//                         id="scrollButton"
//                         onClick={() => containerRef.current.scrollBy({ left: 300, behavior: 'smooth' })}
//                         className="bg-accent text-white py-2 px-4 rounded hover:bg-accent-dark mx-4"
//                     >
//                         Scroll →
//                     </button>
//                 </div> */}
//             </div>
//         </section>
//     );
// };

// export default Projects;



import { useState } from 'react';
import portfolioData from '../db/local.js';
import './Project.css';

const Projects = () => {
    const projectDatas = portfolioData.projects;
    const [categoryFilter, setCategoryFilter] = useState('');
    const [techFilter, setTechFilter] = useState('');
    const [expandedProject, setExpandedProject] = useState(null);  // To track which project is expanded

    // Get unique categories and techs
    const categories = [...new Set(projectDatas.map((item) => item.category))];
    const techs = [
        ...new Set(projectDatas.flatMap((item) => item.techs)),
    ];

    // Filter projects based on selected filters
    const filteredProjects = projectDatas.filter((item) => {
        const matchesCategory =
            !categoryFilter || item.category === categoryFilter;
        const matchesTech =
            !techFilter || item.techs.includes(techFilter);
        return matchesCategory && matchesTech;
    });

    const handleCategoryChange = (e) => {
        setCategoryFilter(e.target.value);
    };

    const handleTechChange = (e) => {
        setTechFilter(e.target.value);
    };

    // Toggle the description visibility
    const handleCardClick = (id) => {
        if (expandedProject === id) {
            setExpandedProject(null);  // Close the card if it's already open
        } else {
            setExpandedProject(id);  // Open the selected card
        }
    };

    return (
        <section className="projects mt-24 bg-primary">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-accent mb-4 text-left">
                    Projects
                </h2>

                {/* Filters */}
                <div className="flex gap-6 mb-6 justify-end">
                    {/* Category Filter */}
                    <select
                        value={categoryFilter}
                        onChange={handleCategoryChange}
                        className="font-bold text-white bg-transparent border border-white rounded-md px-2 py-1 appearance-none"
                    >
                        <option value="" className="text-accent bg-primary">
                            All Categories
                        </option>
                        {categories.map((category, index) => (
                            <option key={index} value={category} className="text-accent bg-primary">
                                {category}
                            </option>
                        ))}
                    </select>


                    {/* Tech Filter */}
                    <select
                        value={techFilter}
                        onChange={handleTechChange}
                        // className="font-bold  appearance-none bg-transparent border border-accent rounded-md px-2 py-1"
                        //  className="font-bold text-white appearance-none bg-transparent border border-accent rounded-md px-2 py-1"
                        className="font-bold text-white bg-transparent border border-white rounded-md px-2 py-1 appearance-none"

                    >
                        <option value="" className="text-accent">All Technologies</option>
                        {techs.map((tech, index) => (
                            <option key={index} value={tech} className="text-accent">
                                {tech}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Project Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((item, index) => (
                        <div key={index} className="w-full border border-accent rounded-lg shadow-lg overflow-hidden">
                            <img
                                src={`https://picsum.photos/400/200?random=${item.id}`}
                                alt={item.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-xl font-semibold text-accent">{item.title}</h3>
                                    <p className="text-sm text-gray-500">{item.category}</p>
                                </div>
                                <p className="text-sm text-light mb-2 text-left">
                                    {expandedProject === item.id
                                        ? item.description  // Show full description if the project is expanded
                                        : item.description.substring(0, 80)} <span className='text-gray-500 cursor-pointer' onClick={() => handleCardClick(item.id)}>{expandedProject === item.id ? " close" : "...more"}</span>
                                </p>
                                <p className="text-sm text-light mb-2 text-left">
                                    <strong>Technologies:</strong> {item.techs.join(', ')}
                                </p>
                                <div className="flex gap-4 mt-4 flex justify-between items-center">
                                    <a
                                        href={item.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-accent hover:text-accent-dark"
                                    >
                                        View on GitHub
                                    </a>
                                    <a
                                        href={item.liveDemo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-accent hover:text-accent-dark"
                                    >
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;