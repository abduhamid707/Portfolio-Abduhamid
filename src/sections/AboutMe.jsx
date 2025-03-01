

import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import portfolioData from '../db/local.js';
import "./aboutme.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import my_img3 from "../../src/Images/meTop4.png";
import my_img4 from "../../src/Images/meTop5.png";
import { resources } from '../i18n.js';
import competetion from "../../src/Images/competition.png";
Modal.setAppElement('#root');



const AboutMe = () => {
    const { t, i18n } = useTranslation();

    return (
        <section className="about-me mt-24" >
                {/* <div 
                className="absolute inset-0 bg-cover bg-center z-[-1] opacity-20" 
                style={{ backgroundImage: `url(${competetion})` }}
            ></div> */}
            <div className="container mx-auto px-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-accent mb-5 text-left">
                    {t('aboutMe')}
                </h2>
                <div className="flex flex-col md:flex-row items-center gap-6">
                    {/* Table */}
                    <table className="table-auto shadow-md rounded-md text-left flex-1 border-collapse border border-accent">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 text-left border border-accent">{t('thAboutMeData')}</th>
                                <th className="px-4 py-2 text-left border border-accent text-gray-100">{t('thAboutMeInfo')}</th>
                            </tr>
                        </thead>
                        <tbody>
                        {portfolioData.aboutme.map((item) => (
  <tr key={item.key} className="border-t border-accent">
    <th className="px-4 py-2 border border-accent">{t(item.label?.[i18n.language])}</th>
    <td className="px-4 py-2 border border-accent text-gray-100">
      {item.key === 'skills' ? (
        item.value[i18n.language].map((skill, index) => (
          <span key={index} className="bg-gray-800 text-white px-2 py-1 rounded-lg mr-2 text-xs font-semibold font">
            {skill}
          </span>
        ))
      ) : (
        t(item.value?.[i18n.language])
      )}
    </td>
  </tr>
))}
                        </tbody>
                    </table>

                    {/* Image */}
                    {/* <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 6000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        // navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className=" rounded-md shadow-md max-w-[200px] md:max-w-[350px] mx-auto "
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div className="rounded-md shadow-md max-w-[200px] md:max-w-[350px] mx-auto overflow-hidden">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </SwiperSlide>

                        ))}
                    </Swiper> */}
                </div>
            </div>
            <div className="container mt-24">
                <h2 className="text-2xl sm:text-3xl font-bold text-accent mb-5 text-left">
                    {t('myAchivements')}
                </h2>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    pagination={{ clickable: true }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="w-full h-[60vh] mySwiper rounded-lg overflow-hidden  z-10"
                >
                    {resources.achievements.map((item, index) => (
                        <SwiperSlide key={index} className="relative z-10">
                            <div className="w-full h-full relative z-10">
                                <img
                                    src={item.img}
                                    alt={`Achievement ${index + 1}`}
                                    className="w-full h-full z-10 object-cover rounded-lg brightness-75"
                                />
                                <div className="absolute w-[80%]   bottom-[15%] left-1/2 transform -translate-x-1/2 bg-black bg-opacity-20  text-white text-lg font-semibold px-4 py-2 rounded ">
                                    {item.text[i18n.language]} 
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
