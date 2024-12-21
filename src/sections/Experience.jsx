import React from 'react';
import portfolioData from '../db/local.js'; // local.js faylidan import qiling
import { useTranslation } from 'react-i18next';
import i18n from '../i18n.js';

const Experience = () => {
    const { t } = useTranslation();
    return (
        <section className="experience mt-24">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-accent mb-5 text-left">{t("experience")}</h2>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full shadow-md rounded-md">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 text-left border border-accent">{t("experienceTableHrComp")}</th>
                                <th className="px-4 py-2 text-left border border-accent">{t("experienceTableHrDate")}</th>
                                <th className="px-4 py-2 text-left border border-accent">{t("experienceTableHrPositon")}</th>
                                <th className="px-4 py-2 text-left border border-accent">{t("experienceTableHrAction")}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {portfolioData.experience.map((item, index) => (
                                <tr key={index} className="border-t border-accent">
                                    <td className="px-4 py-2 border border-accent whitespace-nowrap">{t(item.company?.[i18n.language])}</td>
                                    <td className="px-4 py-2 border border-accent whitespace-nowrap">{t(item.duration?.[i18n.language])}</td>
                                    <td className="px-4 py-2 border border-accent whitespace-nowrap">{t(item.position?.[i18n.language])}</td>
                                    <td className="px-4 py-2 border border-accent">
                                        <a href={item.link} className="text-accent hover:underline">{t("visit")}</a>
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
