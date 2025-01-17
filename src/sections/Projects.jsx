import { useEffect, useState } from 'react';
import './Project.css';
import './swiper-bundle.min.css';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n.js';
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import portfolioData from '../db/local.js';
const Projects = () => {
    const { t } = useTranslation();
    const [categoryFilter, setCategoryFilter] = useState('');
    const [projectDatas, setProjectDatas] = useState(portfolioData.projects);
    const [projectTechs, setProjectTechs] = useState([]);
    const [techFilter, setTechFilter] = useState('');
    const [expandedProject, setExpandedProject] = useState(null);
    const [selectedImages, setSelectedImages] = useState([]); // Modal uchun tanlangan rasmlar
    // const techList = portfolioData.projects.map((t) => {
    //     const match = t.tech.match(/^[a-zA-Z]+/) // Texnologiya nomini boshidan olish
    //     return match ? match[0] : t.tech // Agar moslik topilsa, texnologiya nomini qaytaradi
    //   })
    useEffect(() => {
        axios.get('http://localhost:5000/api/projects')
            .then((response) => {
                setProjectDatas(response.data);
                // console.log('response.data :', response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
        axios.get('http://localhost:5000/api/projects/techs')
            .then((response) => {
                setProjectTechs(response.data);
                console.log('response.data :', response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const categories = [...new Set(projectDatas.map((item) => item.category))];

    const filteredProjects = projectDatas.filter((item) => {
        const techList = item.techs.map((t) => {
            const match = t.match(/^[a-zA-Z]+/); // Texnologiya nomini boshidan olish
            return match; // Agar moslik topilsa, texnologiya nomini qaytaradi
        }).flat();
        const matchesCategory =
            !categoryFilter || item.category === categoryFilter;
        const matchesTech =
            !techFilter || techList.includes(techFilter);
        return matchesCategory && matchesTech;
    });

    const handleCategoryChange = (e) => {
        setCategoryFilter(e.target.value);
    };

    const handleTechChange = (e) => {
        setTechFilter(e.target.value);
    };

    const handleCardClick = (id) => {
        setExpandedProject(expandedProject === id ? null : id);
    };

    // Modalni ochish uchun tasvirlarni tanlash
    const openModal = (images) => {
        setSelectedImages(images);
    };

    // Modalni yopish
    const closeModal = () => {
        setSelectedImages([]);
    };

    return (
        <section className="projects mt-24">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-accent mb-4 text-left">
                    {t("projects")}
                </h2>

                <div className="flex gap-6 mb-6 justify-end">
                    {/* Category Filter */}
                    {/* <select
                        value={categoryFilter}
                        onChange={handleCategoryChange}
                        className="font-bold text-white bg-transparent border border-white rounded-md px-2 py-1 custom-select focus:outline-none"
                    >
                        <option value="" className="text-accent bg-transparent">
                            {t("allCats")}
                        </option>
                        {categories.map((category, index) => (
                            <option key={index} value={category} className="text-accent bg-transparent">
                                {category}
                            </option>
                        ))}
                    </select> */}

                    {/* Tech Filter */}
                    {/* <select
                        value={techFilter}
                        onChange={handleTechChange}
                        className="font-bold text-white bg-transparent border border-white rounded-md px-2 py-1 custom-select focus:outline-none"
                    >
                        <option value="" className="text-accent bg-transparent">{t("allTechs")}</option>
                        {projectTechs.map((tech, index) => (
                            <option key={index} value={tech} className="text-accent bg-transparent">
                                {tech}
                            </option>
                        ))}
                    </select> */}
                </div>

                {/* Project Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((item, index) => (
                        <div key={index} className="relative   w-full border border-accent rounded-lg shadow-lg overflow-hidden">
                            {/* Tasvir */}

                            <img
                                src={item.imgLinks[0]}
                                alt={item.title}
                                className="w-full h-48 object-cover cursor-pointer"
                                onClick={() => openModal(item.imgLinks)} // Tasvirlarni modalda ochish
                            />
                            <div className="relative">
                                <span
                                    className={`flex items-start text-xs font-semibold  rounded pl-4 top-1 absolute`}
                                >
                                    #{item.category[1]}
                                </span>
                            </div>
                            <div className="p-4 pt-3">

                                {/* Loyiha nomi va kategoriyasi */}
                                <div className="flex justify-between items-center mb-2 mt-2 relative">
                                    <h3 className="text-lg font-semibold text-accent text-left">
                                        {t(item.title?.[i18n.language])}
                                        {/* {t(item.title?.[i18n.language]).split(' ')[0]} */}
                                    </h3>

                                    <span
                                        className={`absolute top-1 right-2 text-xs font-semibold px-2 py-1 rounded  z-10${item.level === "#High"
                                            ? "text-red-700 bg-red-700"
                                            : item.level === "#Medium"
                                                ? "text-yellow-700 bg-yellow-700"
                                                : "text-green-700 bg-green-700"
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

                                {/* Texnologiyalar */}
                                <p className="text-sm  mt-3 mb-7 text-left">
                                    {/* <strong className='text-gray-500'>{t("technolog")}:</strong> */}
                                    {item.techs.join(", ")}
                                </p>

                                {/* GitHub va Live Demo */}
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
                            spaceBetween={10}            // Space between slides
                            slidesPerView={1}           // Show 1 slide at a time
                            loop={true}                 // Infinite loop mode
                            autoplay={{                 // Auto slide configuration
                                delay: 2500,            // Delay between each slide (in ms)
                                disableOnInteraction: false, // Keep autoplay even when user interacts with the Swiper
                            }}
                            navigation={{              // Enable next/previous buttons
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            pagination={{              // Pagination dots
                                clickable: true,
                            }}
                            className="swiper-container"
                        >
                            {selectedImages.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <img src={image} alt={`Expanded ${index}`} className="w-full h-auto" />
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
