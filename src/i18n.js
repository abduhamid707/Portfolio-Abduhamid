// src/i18n.js
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  uz: {
    translation: {
      fullName: 'Abduhamid Botirov',
      thAboutMeData: 'Malumot',
      thAboutMeInfo: 'Tasnif',
      aboutMe: 'Mening haqimda',
      aboutMeMore: "Men haqimda ko'proq",
      experience: 'Tajribalarim',
      experienceTableHrComp: 'Kompaniya',
      experienceTableHrDate: 'Muddati',
      experienceTableHrPositon: 'Lavozim',
      experienceTableHrAction: 'Hodisalar',
      visit: 'Tashrif buyurish',
      projects: 'Loyihalar',
      contact: 'Aloqa',
      feedback: 'Fikrlaringizni ulashing',
      copyright: 'Abduhamid Botirov. Barcha huquqlar himoyalangan.',
      allCats: 'Hamma Kategoriyalar',
      allTechs: 'Hamma Texnologiyalar',
      technolog: 'Texnalogiyalar',
      heading: "Fikrlaringizni Biz Bilan Bo'lishing",
      name: 'Ism',
      email: 'Elektron pochta',
      feedbackText: 'Fikrlaringiz',
      placeholderName: 'Ismingizni kiriting',
      placeholderEmail: 'Elektron pochtangizni kiriting',
      placeholderFeedback: 'Fikrlaringizni kiriting',
      buttonSubmit: 'Fikrni yuborish',
      buttonSubmitting: 'Yuborilmoqda...',
    },
  },
  ru: {
    translation: {
      fullName: 'Абдухамид Ботиров',
      thAboutMeData: 'Информация',
      thAboutMeInfo: 'Классификация',
      aboutMe: 'Обо мне',
      aboutMeMore: 'Подробнее обо мне',
      experience: 'Мой опыт',
      experienceTableHrComp: 'Компания',
      experienceTableHrDate: 'Срок',
      experienceTableHrPositon: 'Должность',
      experienceTableHrAction: 'Действия',
      visit: 'Посетить',
      projects: 'Проекты',
      contact: 'Контакт',
      feedback: 'Поделитесь своими мыслями',
      copyright: 'Абдухамид Ботиров. Все права защищены.',
      allCats: 'Все категории',
      allTechs: 'Все технологии',
      technolog: 'Технологии',
      heading: 'Поделитесь своими мыслями',
      name: 'Имя',
      email: 'Электронная почта',
      feedbackText: 'Ваши отзывы',
      placeholderName: 'Введите ваше имя',
      placeholderEmail: 'Введите вашу почту',
      placeholderFeedback: 'Введите ваше мнение',
      buttonSubmit: 'Отправить отзыв',
      buttonSubmitting: 'Отправляется...',
    },
  },
  eng: {
    translation: {
      fullName: 'Abduhamid Botirov',
      thAboutMeData: 'Information',
      thAboutMeInfo: 'Classification',
      aboutMe: 'About Me',
      aboutMeMore: 'More about me',
      experience: 'My Experience',
      experienceTableHrComp: 'Company',
      experienceTableHrDate: 'Duration',
      experienceTableHrPositon: 'Position',
      experienceTableHrAction: 'Actions',
      visit: 'Visit',
      projects: 'Projects',
      contact: 'Contact',
      feedback: 'Share Your Thoughts',
      copyright: ' Abduhamid Botirov. All rights reserved.',
      allCats: 'All Categories',
      allTechs: 'All Technologies',
      technolog: 'Technologies',
      heading: 'Share Your Thoughts',
      name: 'Name',
      email: 'Email',
      feedbackText: 'Your Feedback',
      placeholderName: 'Enter your name',
      placeholderEmail: 'Enter your email',
      placeholderFeedback: 'Enter your thoughts',
      buttonSubmit: 'Submit Feedback',
      buttonSubmitting: 'Submitting...',
    },
  },
}

i18n
  .use(initReactI18next) // React bilan integratsiya qilish
  .init({
    resources,
    lng: 'eng', // dastlabki til
    fallbackLng: 'eng', // agar til topilmasa, shu tilni ishlatish
    interpolation: {
      escapeValue: false, // XSS himoyasi
    },
  })

export default i18n
