

import { useState } from 'react';
import Modal from 'react-modal';
import portfolioData from '../db/local.js';
import "./aboutme.css"
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
Modal.setAppElement('#root');

const AboutMe = () => {
    const { t, i18n } = useTranslation();
    let myData = portfolioData.aboutMeMore;
    const openModal = (image) => {
        setIsModalOpen(true);
        setImages([image]);
    };

    return (
        <section className="about-me mt-24">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-accent mb-5 text-left">
                    {t('aboutMe')}
                </h2>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full shadow-md rounded-md text-left">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 text-left border border-accent">{t('thAboutMeData')}</th>
                                <th className="px-4 py-2 text-left border border-accent text-gray-100">{t('thAboutMeInfo')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {portfolioData.aboutme.map((item) => {
                                return (
                                    <tr key={item.key} className="border-t border-accent">
                                        <th className="px-4 py-2 border border-accent  ">{t(item.label?.[i18n.language])}</th>
                                        <td className="px-4 py-2 border border-accent text-gray-100">{t(item.value?.[i18n.language])}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="container mt-24">
                <h2 className="text-2xl sm:text-3xl font-bold text-accent mb-5 text-left">
                    {t('aboutMeMore')}
                </h2>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 8000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        renderBullet: (index, className) => `<span class='${className} text-accent'></span>`,
                    }}
                    navigation
                    modules={[Autoplay, Pagination, Navigation]}
                    className="w-full"
                >
                    {myData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left p-6  rounded-lg shadow-lg w-full gap-4">
                                <div className='text-center w-[100%] flex justify-center'>
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-60 h-100 object-cover rounded-full mb-4 md:mb-0"
                                    />
                                </div>
                                <div className='text-center  w-[100%]'>
                                    <h3 className=" font-semibold text-accent mb-2 text-center text-2xl">{t(item.title?.[i18n.language])}</h3>
                                    <p className="text-gray-100 text-lg text-center">{t(item.desc?.[i18n.language])}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
};

export default AboutMe;


