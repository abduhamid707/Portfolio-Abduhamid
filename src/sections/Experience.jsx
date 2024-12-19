import React from 'react';
import portfolioData from '../db/local.js'; // local.js faylidan import qiling

const Experience = () => {
    return (
        <section className="experience mt-24">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-accent mb-5 text-left">Experience</h2>
                <div className="overflow-x-auto"> 
                    <table className="table-auto w-full shadow-md rounded-md">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 text-left border border-accent">Kompaniya</th>
                                <th className="px-4 py-2 text-left border border-accent">Muddati</th>
                                <th className="px-4 py-2 text-left border border-accent">Lavozim</th>
                                <th className="px-4 py-2 text-left border border-accent">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {portfolioData.experience.map((item, index) => (
                                <tr key={index} className="border-t border-accent">
                                    <td className="px-4 py-2 border border-accent whitespace-nowrap">{item.company}</td>
                                    <td className="px-4 py-2 border border-accent whitespace-nowrap">{item.duration}</td>
                                    <td className="px-4 py-2 border border-accent whitespace-nowrap">{item.position}</td>
                                    <td className="px-4 py-2 border border-accent">
                                        <a href={item.link} className="text-accent hover:underline">Visit</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Experience;
