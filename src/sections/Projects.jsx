import { useEffect, useState } from 'react';
import './Project.css';
import './swiper-bundle.min.css';
import { useTranslation } from 'react-i18next';
import portfolioData from '../db/local.js';
import i18n from '../i18n.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const Projects = () => {
    const { t } = useTranslation();
    const [categoryFilter, setCategoryFilter] = useState('');
    const [levelFilter, setLevelFilter] = useState('');
    const [techFilter, setTechFilter] = useState('');
    const [projectDatas, setProjectDatas] = useState(portfolioData.projects);
    const [projectTechs, setProjectTechs] = useState([...new Set(portfolioData.projects.flatMap((item) => item.techs))]);
    const [expandedProject, setExpandedProject] = useState(null);
    const [selectedImages, setSelectedImages] = useState([]);

    const categories = ['Full Stack', 'Frontend', 'Backend'];
    const levels = ['#High', '#Medium', '#Low', '#in-progress'];

    // Filter projects based on selected category, level, and tech
    const filteredProjects = projectDatas.filter((item) => {
        const matchesCategory = !categoryFilter || item.category[1] === categoryFilter || item.category[2] === categoryFilter;
        const matchesLevel = !levelFilter || item.level === levelFilter;
        const matchesTech = !techFilter || item.techs.includes(techFilter);
        return matchesCategory && matchesLevel && matchesTech;
    });

    const handleCategoryChange = (e) => {
        setCategoryFilter(e.target.value);
    };

    const handleLevelChange = (e) => {
        setLevelFilter(e.target.value);
    };

    const handleTechChange = (e) => {
        setTechFilter(e.target.value);
    };

    const handleCardClick = (id) => {
        setExpandedProject(expandedProject === id ? null : id);
    };

    const openModal = (images) => {
        setSelectedImages(images);
    };

    const closeModal = () => {
        setSelectedImages([]);
    };

    return (
        <section className="projects mt-24">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-accent mb-4 text-left">
                    {t("projects")}
                </h2>

                <div className="filter-project flex flex-wrap gap-6 mb-6 justify-start">
  {/* Category Filter (Full Stack, Frontend, Backend) */}
  <select
    value={categoryFilter}
    onChange={handleCategoryChange}
    className="font-bold text-white bg-gray-900 border border-white rounded-md px-2 py-1 custom-select focus:outline-none"
  >
    <option value="">{t("allCategories")}</option>
    {categories.map((category, index) => (
      <option key={index} value={category}>
        {category}
      </option>
    ))}
  </select>

  {/* Level Filter */}
  <select
    value={levelFilter}
    onChange={handleLevelChange}
    className="font-bold text-white bg-gray-900 border border-white rounded-md px-2 py-1 custom-select focus:outline-none"
  >
    <option value="">{t("allLevels")}</option>
    {levels.map((level, index) => (
      <option key={index} value={level}>
        {level}
      </option>
    ))}
  </select>

  {/* Tech Filter */}
  <select
    value={techFilter}
    onChange={handleTechChange}
    className="font-bold text-white bg-gray-900 border border-white rounded-md px-2 py-1 custom-select focus:outline-none"
  >
    <option value="">{t("allTechs")}</option>
    {projectTechs.map((tech, index) => (
      <option key={index} value={tech}>
        {tech}
      </option>
    ))}
  </select>
</div>

                {/* Project Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((item, index) => (
                        <div key={index} className="relative w-full border border-accent rounded-lg shadow-lg overflow-hidden">
                            <img
                                src={item.imgLinks[0]}
                                alt={item.title}
                                className="w-full h-48 object-cover cursor-pointer"
                                onClick={() => openModal(item.imgLinks)}
                            />
                            <div className="relative">
                                <span className="flex items-start text-xs font-semibold rounded pl-4 top-1 absolute">
                                    #{item.category[1]}
                                </span>
                            </div>
                            <div className="p-4 pt-4">
                                <div className="flex justify-between items-center mb-2 mt-2 relative">
                                    <h3 className="text-lg font-semibold text-accent text-left">
                                        {t(item.title?.[i18n.language])}
                                    </h3>
                                    <span
                                        className={`absolute top-1 right-2 text-xs font-semibold px-2 py-1 rounded z-10 ${item.level == "#High"
                                            ? "text-white bg-red-700"
                                            : item.level == "#Medium"
                                                ? "text-white bg-yellow-900"
                                                : item.level == "#in-progress"
                                                    ? "text-white bg-yellow-600"
                                                    : "text-white bg-green-700"
                                            }`}
                                    >
                                        {item.level}
                                    </span>

                                </div>
                                <p className="text-sm text-light mb-2 text-left">
                                    {expandedProject === item.id
                                        ? t(item.description?.[i18n.language])
                                        : t(item.description?.[i18n.language]).substring(0, 80)}
                                    <span
                                        className="text-gray-500 cursor-pointer"
                                        onClick={() => handleCardClick(item.id)}
                                    >
                                        {expandedProject === item.id ? " close" : "...more"}
                                    </span>
                                </p>
                                <p className="text-sm mt-3 mb-7 text-left">
                                    {item.techs.join(", ")}
                                </p>
                                <div className="flex mt-4 justify-between items-center absolute w-full bottom-3 gap-6">
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
                                        className="text-accent hover:text-accent-dark absolute right-10"
                                    >
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedImages.length > 0 && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 6000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="swiper-container"
                        >
                            {selectedImages.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <img src={image} alt={`Expanded ${index}`} className="w-full h-auto object-contain" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <span className="close" onClick={closeModal}>×</span>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
