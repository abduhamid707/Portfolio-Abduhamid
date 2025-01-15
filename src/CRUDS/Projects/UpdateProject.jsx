import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditProject = () => {
    const splitTechs = (techs) => {
        return techs.flatMap(tech => tech.split(',').map(item => item.trim()));
      };
    const [project, setProject] = useState({
        title: { eng: '', uz: '', ru: '' },
        description: { eng: '', uz: '', ru: '' },
        category: '',
        techs: [],
        githubLink: '',
        liveDemo: '',
    });
    // let = ['xsaaxs, xsaxsa'] =>let = ['xsaaxs', 'xsaxsa']
    // console.log('project :', project);
    const { id } = useParams();
    const history = useNavigate();

    useEffect(() => {
        fetchProject();
    }, [id]);

    const fetchProject = async () => {
        try {
            const response = await fetch(`https://portfolio-backend-3-php5.onrender.com/api/projects/${id}`);
            const data = await response.json();
            setProject(data);
        } catch (error) {
            console.error('Error fetching project:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const nameParts = name.split('.'); // To handle nested properties (e.g., title.eng)

        if (nameParts.length === 2) {
            // Update nested state properties (title.eng, description.eng, etc.)
            setProject((prevProject) => ({
                ...prevProject,
                [nameParts[0]]: {
                    ...prevProject[nameParts[0]],
                    [nameParts[1]]: value,
                },
            }));
        } else {
            // Handle non-nested state properties (category, githubLink, etc.)
            setProject({ ...project, [name]: value });
        }
    };

    const handleTechChange = (e) => {
        const tech = e.target.value;
        if (tech && !project.techs.includes(tech)) {
            setProject((prevProject) => ({
                ...prevProject,
                techs: [...prevProject.techs, tech],
            }));
        }
    };

    const handleTechRemove = (techToRemove) => {
        setProject((prevProject) => ({
            ...prevProject,
            techs: prevProject.techs.filter((tech) => tech !== techToRemove),
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            project.techs = splitTechs(project.techs)
            const response = await fetch(`https://portfolio-backend-3-php5.onrender.com/api/projects/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(project),
            });
            if (response.ok) {
                alert('Project updated successfully');
                history('/crud/projects');
            } else {
                alert('Error updating project');
            }
        } catch (error) {
            console.error('Error updating project:', error);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 shadow-lg rounded-lg mt-20 border border-accent">
            <h1 className="text-2xl font-bold mb-4 text-center text-accent">Edit Project</h1>
            <form onSubmit={handleSubmit}>
                <label>Title (English):</label>
                <input
                    type="text"
                    name="title.eng"
                    className="bg-transparent border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-accent mt-1 block w-full p-2"
                    value={project.title.eng}
                    onChange={handleInputChange}
                />

                <label>Description (English):</label>
                <textarea
                    name="description.eng"
                    className="bg-transparent border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-accent mt-1 block w-full p-2"
                    value={project.description.eng}
                    onChange={handleInputChange}
                />

                {/* Repeat similar inputs for other languages (Uzbek, Russian) */}
                <label>Title (Uzbek):</label>
                <input
                    type="text"
                    name="title.uz"
                    value={project.title.uz}
                    onChange={handleInputChange}
                    className="bg-transparent border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-accent mt-1 block w-full p-2"
                />
                <label>Description (Uzbek):</label>
                <textarea
                    name="description.uz"
                    value={project.description.uz}
                    onChange={handleInputChange}
                    className="bg-transparent border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-accent mt-1 block w-full p-2"
                />

                <label>Category:</label>
                <input
                    type="text"
                    name="category"
                    className="bg-transparent border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-accent mt-1 block w-full p-2"
                    value={project.category}
                    onChange={handleInputChange}
                />

                <label>Technologies:</label>
                <div className="mb-4">
                    <input
                        type="text"
                        className="bg-transparent border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-accent mt-1 block w-full p-2"
                        onBlur={handleTechChange}
                    />
                    <ul>
                        {project.techs.map((tech, index) => (
                            <li key={index} className="flex justify-between items-center">
                                <span>{tech}</span>
                                <button type="button" onClick={() => handleTechRemove(tech)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                </div>

                <label>GitHub Link:</label>
                <input
                    type="url"
                    name="githubLink"
                    className="bg-transparent border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-accent mt-1 block w-full p-2"
                    value={project.githubLink}
                    onChange={handleInputChange}
                />

                <label>Live Demo Link:</label>
                <input
                    type="url"
                    name="liveDemo"
                    value={project.liveDemo}
                    onChange={handleInputChange}
                    className="bg-transparent border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-accent mt-1 block w-full p-2"
                />

                <button type="submit" className="mt-4 p-2 bg-accent text-white rounded">Update Project</button>
            </form>
        </div>
    );
};

export default EditProject;
