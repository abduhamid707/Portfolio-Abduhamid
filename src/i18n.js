// src/i18n.js
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import portfolioData from './db/local.js'
// Til sozlamalari
const resources = {
  uz: {
    translation: {
      fullName: 'Abduhamid Botirov',
      thAboutMeData: 'Malumot',
      thAboutMeInfo: 'Tasnif',
      aboutMe: 'Mening haqimda',
      experience: 'Tajribalarim',
      experienceTableHrComp: 'Kompaniya',
      experienceTableHrDate: 'Muddati',
      experienceTableHrPositon: 'Lavozim',
      experienceTableHrAction: 'Hodisalar',
      visit: 'Tashrif buyurish',
      projects: 'Loyihalar',
      contact: 'Aloqa',
      feedback: 'Fikrlaringizni ulashing',
      copyright: '© 2024 Abduhamid Botirov. Barcha huquqlar himoyalangan.',
      allCats: 'Hamma Kategoriyalar',
      allTechs: 'Hamma Texnologiyalar',
      technolog: "Texnalogiyalar",
    
    },
    datas: portfolioData,
  },
  ru: {
    translation: {
      fullName: 'Абдухамид Ботиров',
      thAboutMeData: 'Информация',
      thAboutMeInfo: 'Классификация',
      aboutMe: 'Обо мне',
      experience: 'Мой опыт',
      experienceTableHrComp: 'Компания',
      experienceTableHrDate: 'Срок',
      experienceTableHrPositon: 'Должность',
      experienceTableHrAction: 'Действия',
      visit: 'Посетить',
      projects: 'Проекты',
      contact: 'Контакт',
      feedback: 'Поделитесь своими мыслями',
      copyright: '© 2024 Абдухамид Ботиров. Все права защищены.',
      allCats: 'Все категории',
      allTechs: 'Все технологии',
      technolog:"Технологии",
    },
    datas: portfolioData,
  },
  eng: {
    translation: {
      fullName: 'Abduhamid Botirov',
      thAboutMeData: 'Information',
      thAboutMeInfo: 'Classification',
      aboutMe: 'About Me',
      experience: 'My Experience',
      experienceTableHrComp: 'Company',
      experienceTableHrDate: 'Duration',
      experienceTableHrPositon: 'Position',
      experienceTableHrAction: 'Actions',
      visit: 'Visit',
      projects: 'Projects',
      contact: 'Contact',
      feedback: 'Share Your Thoughts',
      copyright: '© 2024 Abduhamid Botirov. All rights reserved.',
      allCats: 'All Categories',
      allTechs: 'All Technologies',
      technolog:"Technologies",

    },
    datas: portfolioData,
  },
}

i18n
  .use(initReactI18next) // React bilan integratsiya qilish
  .init({
    resources,
    lng: 'uz', // dastlabki til
    fallbackLng: 'uz', // agar til topilmasa, shu tilni ishlatish
    interpolation: {
      escapeValue: false, // XSS himoyasi
    },
  })

export default i18n
