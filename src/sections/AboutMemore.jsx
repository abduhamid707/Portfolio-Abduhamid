

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
import competetion from "../../src/Images/competition.png";
import aytipark from "../../src/Images/aytipark.png";
import najotfinish from "../../src/Images/najotfinish.png";
Modal.setAppElement('#root');

const achievements = [
    {
        img: competetion,
        text: "🏆 Najot Ta'limda faxrli 2-o‘rin! 3 kishilik jamoamiz bilan yirik Frontend loyihasini yaratib, kuchli raqobatchilar orasida yuqori o‘rinni egalladik!"
    },
    {
        img: aytipark,
        text: "🚀 IT Park Center – Dasturlashga ilk qadam! Frontend kursini muvaffaqiyatli yakunlab, sertifikatga ega bo‘ldim."
    },
    {
        img: najotfinish,
        text: "🎓 Najot Ta'lim – Full Stack dasturchilikni o‘rgandim va kursni muvaffaqiyatli tamomladim!"
    }
];

const AboutMemore = () => {
    const images = [
        { src: my_img4, alt: "Image 4" },
        { src: my_img3, alt: "Image 3" },
    ];
    const { t, i18n } = useTranslation();
    let myData = portfolioData.aboutMeMore;
    const [isTablet, setIsTablet] = useState(false);
    return (
        <section className="about-me mt-24" >
            <div className="container mt-24">
                <h2 className="text-2xl sm:text-3xl font-bold text-accent mb-5 text-left">
                    {t('aboutMeMore')}
                </h2>
                <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left p-6 rounded-lg shadow-lg w-full gap-4 mt-16">
                    {/* Rasm slayder tashqarisida */}


                    <div className="text-center w-[100%] flex justify-center ">
                        <img
                            src={myData[0].img}
                            alt="Main Image"
                            className="w-60 h-60 object-cover rounded-full mb-4 md:mb-0"
                        />
                    </div>

                    {/* Matn uchun Swiper */}
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            renderBullet: (index, className) => `<span class='${className} text-accent'></span>`,
                        }}
                        // navigation
                        modules={[Autoplay, Pagination, Navigation]}
                        className="w-full"
                    >
                        {myData.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="text-center w-[100%]">
                                    <h3 className="font-semibold text-accent mb-2 text-center text-2xl">
                                        {t(item.title?.[i18n.language])}
                                    </h3>
                                    <p className="text-gray-100 text-lg text-center">
                                        {t(item.desc?.[i18n.language])}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

   
        </section>
    );
};

export default AboutMemore;
