import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

const ProjectsCrud = () => {
    const { t } = useTranslation();
    const [files, setFiles] = useState([]); // Fayllarni saqlash uchun holat
    const [imagePreviews, setImagePreviews] = useState([]);
    const [projects, setProjects] = useState([]);
    const history = useNavigate();
    useEffect(() => {
        fetchProjects();
    }, []);
    const fetchProjects = async () => {
        try {
            const response = await fetch('https://portfolio-backend-3-php5.onrender.com/api/projects');
            const data = await response.json();
            setProjects(data);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };
    const editProject = (id) => {
        history(`/crud/projects/edit/${id}`);
    };
    const deleteProject = async (id) => {
        try {
            const response = await fetch(`https://portfolio-backend-3-php5.onrender.com/api/projects/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                setProjects(projects.filter((project) => project._id !== id));
                // alert('Project deleted successfully');
            } else {
                alert('Error deleting project');
            }
        } catch (error) {
            console.error('Error deleting project:', error);
        }
    };



    const [formData, setFormData] = useState({
        title: { uz: '', ru: '', eng: '' },
        description: { uz: '', ru: '', eng: '' },
        category: '',
        techs: [],
        githubLink: '',
        liveDemo: '',
        image: null,
    });
    console.log('formData :', formData);

    // const [imagePreview, setImagePreview] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name.includes('.')) {
            const [field, subfield] = name.split('.');
            setFormData((prevData) => ({
                ...prevData,
                [field]: { ...prevData[field], [subfield]: value },
            }));
        } else {
            setFormData((prevData) => ({ ...prevData, [name]: value }));
        }
    };

    const handleFileChange = (event) => {
        const selectedFiles = event.target.files;
        const fileArray = Array.from(selectedFiles); // Fayllarni massivga aylantirish

        setFiles(fileArray);

        // Oldindan ko'rinishlarni olish
        const previews = fileArray.map((file) => URL.createObjectURL(file));
        setImagePreviews(previews);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('title', JSON.stringify(formData.title));
        data.append('description', JSON.stringify(formData.description));
        data.append('category', formData.category);
        data.append('techs', JSON.stringify(formData.techs));
        data.append('githubLink', formData.githubLink);
        data.append('liveDemo', formData.liveDemo);
        if (files && files.length > 0) {
            files.forEach((file) => {
                data.append('images', file);
            });
        }
        try {
            const response = await axios.post('https://portfolio-backend-3-php5.onrender.com/api/projects', data, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            alert('Loyiha muvaffaqiyatli qo‘shildi!');
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error:', error);
            alert('Loyiha qo‘shishda xatolik yuz berdi.');
        }
    };
    const handleTechChange = (e) => {
        const tech = e.target.value;
        if (tech && !formData.techs.includes(tech)) {
            setFormData((prevProject) => ({
                ...prevProject,
                techs: [...prevProject.techs, tech],
            }));
        }
    };
    return (
        <div className="max-w-4xl mx-auto p-6 shadow-lg rounded-lg mt-20 border border-accent">
            <h1 className="text-2xl font-bold mb-4 text-center text-accent">Loyihalar</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {projects.map((item, index) => (
                    <div key={index} className="w-full border border-accent rounded-lg shadow-lg overflow-hidden">
                        <img
                            src={item.imgLinks[0]}
                            alt={item.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <div className="mb-2">
                                <h3 className="text-xl font-semibold text-accent">{t(item.title?.[i18n.language])}</h3>
                                <p className="text-sm text-gray-500 w-full">{item.category}</p>
                            </div>
                            <button onClick={() => editProject(item._id)} className='w-full'>Update</button>
                            <button onClick={() => deleteProject(item._id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            <h1 className="text-2xl font-bold mb-4 text-center text-accent">Loyiha Formasi</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title fields */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {['uz', 'ru', 'eng'].map((lang) => (
                        <div key={lang}>
                            <label className="block text-sm font-medium text-gray-400">
                                Title ({lang.toUpperCase()})
                            </label>
                            <input
                                type="text"
                                name={`title.${lang}`}
                                value={formData.title[lang]}
                                onChange={handleChange}
                                className="bg-transparent border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-accent mt-1 block w-full p-2"
                                placeholder={`Title (${lang.toUpperCase()})`}
                            />
                        </div>
                    ))}
                </div>

                {/* Description fields */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {['uz', 'ru', 'eng'].map((lang) => (
                        <div key={lang}>
                            <label className="block text-sm font-medium text-gray-400">
                                Description ({lang.toUpperCase()})
                            </label>
                            <textarea
                                name={`description.${lang}`}
                                value={formData.description[lang]}
                                onChange={handleChange}
                                className="bg-transparent border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-accent mt-1 block w-full p-2"
                                placeholder={`Description (${lang.toUpperCase()})`}
                            ></textarea>
                        </div>
                    ))}
                </div>

                {/* Category */}
                <div>
                    <label className="block text-sm font-medium text-gray-400">Category</label>
                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="bg-transparent border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-accent mt-1 block w-full p-2"
                        placeholder="Category"
                    />
                </div>

                {/* Technologies */}
                <div>
                    <label className="block text-sm font-medium text-gray-400">
                        Techs
                    </label>
                    <input
                        type="text"
                        name="techs"
                        onBlur={handleTechChange}
                        // onChange={(e) => {
                        //     const techsArray = e.target.value.split(',').map((tech) => tech.trim()); // Vergullar bo'yicha ajratib, bo'shliqlarni olib tashlaydi
                        //     console.log('techsArray :', techsArray);
                        //     setFormData({ ...formData, techs: techsArray });
                        // }}
                        className="bg-transparent border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-accent mt-1 block w-full p-2"

                        placeholder="E.g., JavaScript, Node.js, React"
                    />
                </div>

                {/* GitHub and Live Demo links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-400">GitHub Link</label>
                        <input
                            type="url"
                            name="githubLink"
                            value={formData.githubLink}
                            onChange={handleChange}
                            className="bg-transparent border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-accent mt-1 block w-full p-2"
                            placeholder="GitHub Repository URL"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400">Live Demo</label>
                        <input
                            type="url"
                            name="liveDemo"
                            value={formData.liveDemo}
                            onChange={handleChange}

                            className="bg-transparent border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-accent mt-1 block w-full p-2"

                            placeholder="Live Demo URL"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-400">Project Images</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        multiple // Bir nechta faylni tanlashga ruxsat berish
                        className="bg-transparent border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-accent mt-1 block w-full p-2"
                    />

                    {/* Fayllarning oldindan ko'rinishlarini ko'rsatish */}
                    <div className="mt-4 flex flex-wrap gap-4">
                        {imagePreviews.map((preview, index) => (
                            <img
                                key={index}
                                src={preview}
                                alt={`Preview ${index + 1}`}
                                className="w-32 h-32 object-cover rounded-md shadow-md"
                            />
                        ))}
                    </div>
                </div>
                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-accent text-white font-bold rounded-md shadow-lg hover:bg-accent-dark"
                >
                    Yuborish
                </button>
            </form>
        </div>
    );
};

export default ProjectsCrud;
