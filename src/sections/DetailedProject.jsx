import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DetailedProject = () => {
    const [device, setDevice] = useState('laptop'); // Default to laptop view

    // Function to handle icon clicks and update device view
    const handleDeviceClick = (deviceType) => {
        setDevice(deviceType);
    };
    const iframeStyle = {
        overflow: 'auto',
    };
    return (
        <section className="projects ">
            <div className="container mx-auto px-4">
                <div className="relative ">
                    {/* Device Icons */}
                    <div className="z-20 flex gap-6 fixed top-20 lg:top-2 left-1/2 transform -translate-x-1/2 z-50 px-12 py-2 border-b border-accent backdrop-blur-lg rounded-lg w-fit">
                        <i
                            className={`bi bi-laptop cursor-pointer text-2xl ${device === 'laptop' ? 'text-accent font-bold' : 'text-gray-400'
                                }`}
                            onClick={() => handleDeviceClick('laptop')}
                        ></i>
                        <i
                            className={`bi bi-tablet cursor-pointer text-2xl ${device === 'tablet' ? 'text-accent font-bold' : 'text-gray-400'
                                }`}
                            onClick={() => handleDeviceClick('tablet')}
                        ></i>
                        <i
                            className={`bi bi-phone cursor-pointer text-2xl ${device === 'phone' ? 'text-accent font-bold' : 'text-gray-400'
                                }`}
                            onClick={() => handleDeviceClick('phone')}
                        ></i>
                        <a href="https://kun.uz/" target="_blank" rel="noopener noreferrer" className='text-accent'>
                            Visit Site
                        </a>
                    </div>
                    <div className="overflow-x-auto ">
                        <div
                            className={`border  border-accent p-4 text-white transition-all duration-300 w-full mx-auto ${device === 'tablet'
                                ? 'max-w-[992px]'
                                : device === 'phone'
                                    ? 'max-w-[500px]'
                                    : 'w-[1600px]'
                                }`}
                        >
                            <iframe
                                src="https://kun.uz/"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                                className="w-full h-screen rounded-lg shadow-lg overflow-hidden"
                            ></iframe>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailedProject;
