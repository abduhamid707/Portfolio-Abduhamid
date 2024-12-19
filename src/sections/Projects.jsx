import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import portfolioData from '../db/local.js';
import "./Project.css";

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState(portfolioData.projects[0].category);
    const containerRef = useRef(null);

    const categoriesPriority = [];
    const groupedProjects = {};

    portfolioData.projects.forEach((project) => {
        if (!groupedProjects[project.category]) {
            groupedProjects[project.category] = [];
        }
        groupedProjects[project.category].push(project);
    });

    const sortedCategories = [
        ...categoriesPriority,
        ...Object.keys(groupedProjects).filter((category) => !categoriesPriority.includes(category)),
    ];

    const calculateScrollPosition = (category) => {
        let position = 0;
        for (const cat of sortedCategories) {
            if (cat === category) break;
            position += (groupedProjects[cat]?.length || 0) * 300; // Card width: 300px
        }
        return position;
    };

    const handleCategoryClick = (category) => {
        const container = containerRef.current;
        if (!container) return;

        const targetScrollPosition = calculateScrollPosition(category);

        container.scrollTo({
            left: targetScrollPosition,
            behavior: 'smooth',
        });
    };

    const handleScroll = () => {
        const container = containerRef.current;
        if (!container) return;

        const scrollPosition = container.scrollLeft;
        let currentCategory = sortedCategories[0];
        let accumulatedWidth = 0;

        sortedCategories.forEach((category) => {
            const categoryWidth = (groupedProjects[category]?.length || 0) * 300;
            if (scrollPosition >= accumulatedWidth && scrollPosition < accumulatedWidth + categoryWidth) {
                currentCategory = category;
            }
            accumulatedWidth += categoryWidth;
        });

        setActiveCategory(currentCategory);
    };

    const handleScrollButtonClick = (a) => {
        const container = containerRef.current;
        if (!container) return;
        container.scrollBy({
            left: a ? 300 : -300,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
        }
        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <section className="projects mt-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-5">
                    <h2 className="text-2xl sm:text-3xl font-bold text-accent mb-4 sm:mb-0">Projects</h2>

                    <div className="overflow-x-auto sm:overflow-x-hidden flex gap-3 w-full sm:w-[80%] scrollbar-none flex-wrap">
                        {sortedCategories.map((category, index) => (
                            <span
                                key={index}
                                onClick={() => handleCategoryClick(category)}
                                className={`px-3 py-1 rounded-lg text-sm cursor-pointer hover:bg-accent-dark ${activeCategory === category ? 'bg-accent text-white' : 'text-accent'
                                    } whitespace-nowrap sm:whitespace-normal`}
                            >
                                {category}
                            </span>
                        ))}
                    </div>
                </div>

                <div
                    ref={containerRef}
                    className="overflow-x-auto w-full flex gap-6 flex-nowrap scrollbar-none"
                >
                    {sortedCategories.map((category) =>
                        groupedProjects[category]?.map((project) => (
                            <div
                                key={project.id}
                                className="w-[300px] flex-shrink-0"
                            >
                                <Link
                                    to={`/project/${project.id}`}
                                    className="block border border-accent rounded-lg overflow-hidden transition-transform transform hover:scale-105"
                                >
                                    <img
                                        src={`https://picsum.photos/400/200?random=${project.id}`}
                                        alt={project.title}
                                        className="w-full h-48 object-cover border-b border-accent"
                                    />
                                    <div className="p-4 text-left">
                                        <h3 className="text-lg font-semibold text-accent mb-2">{project.title}</h3>
                                        {project.category === activeCategory ? (
                                            <p className="text-sm text-accent  mb-2">{project.category}</p>
                                        ) : (
                                            <p className="text-sm text-gray-500 mb-2">{project.category}</p>
                                        )}
                                        <p>
                                            {project.description.split(' ').slice(0, 13).join(' ')}...
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        ))
                    )}
                </div>

                <div className="text-center mt-4">
                    <button
                        id="scrollButton"
                        onClick={() => handleScrollButtonClick(0)}
                        className="bg-accent text-white py-2 px-4 rounded hover:bg-accent-dark mx-4"
                    >
                        ←   Scroll
                    </button>
                    <button
                        id="scrollButton"
                        onClick={() => handleScrollButtonClick(1)}
                        className="bg-accent text-white py-2 px-4 rounded hover:bg-accent-dark mx-4"
                    >
                        Scroll →
                    </button>

                </div>
            </div>
        </section>
    );
};

export default Projects;
