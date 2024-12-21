import { useState } from 'react';
import Modal from 'react-modal';
import portfolioData from '../db/local.js';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';

Modal.setAppElement('#root');

const AboutMe = () => {
    const { t, i18n } = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [images, setImages] = useState([]);

    const openModal = (image) => {
        setIsModalOpen(true);
        setImages([image]);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setImages([]);
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
                                <th className="px-4 py-2 text-left border border-accent">{t('thAboutMeInfo')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {portfolioData.aboutme.map((item) => {
                                if (item.key === 'images') {
                                    return (
                                        <tr key={item.key} className="border-t border-accent">
                                            <th className="px-4 py-2 border border-accent">{t(item.label?.[i18n.language])}</th>
                                            <td className="px-4 py-2 border border-accent cursor-pointer" onClick={() => openModal(item.imgs[0])}>
                                                {t(item.label?.[i18n.language])}
                                            </td>
                                        </tr>
                                    );
                                } else {
                                    return (
                                        <tr key={item.key} className="border-t border-accent">
                                            <th className="px-4 py-2 border border-accent">{t(item.label?.[i18n.language])}</th>
                                            <td className="px-4 py-2 border border-accent">{t(item.value?.[i18n.language])}</td>
                                        </tr>
                                    );
                                }
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal uchun image gallery */}
            {/* <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                className="modal-content p-4 rounded-lg shadow-lg w-full sm:w-96 mx-auto"
                overlayClassName="modal-overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
            >
                <div className="flex justify-between items-center">
                    <button onClick={closeModal} className="text-2xl text-white">X</button>
                </div>
                <div className="mt-8">
                    {images.length > 0 && (
                        <Swiper spaceBetween={10} slidesPerView={1}>
                            {images.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        src={image}
                                        alt={`Image ${index + 1}`}
                                        className="w-full h-96 object-cover rounded-md"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>
            </Modal> */}
        </section>
    );
};

export default AboutMe;
