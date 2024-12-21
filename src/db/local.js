// local.js
const portfolioData = {
  aboutme: [
    {
      key: 'name',
      label: {
        uz: 'Ism',
        ru: 'Имя',
        eng: 'Name',
      },
      value: {
        uz: 'Abduhamid Botirov',
        ru: 'Абдухамид Ботиров',
        eng: 'Abduhamid Botirov',
      },
    },
    {
      key: 'age',
      label: {
        uz: 'Yosh',
        ru: 'Возраст',
        eng: 'Age',
      },
      value: {
        uz: '25',
        ru: '25',
        eng: '25',
      },
    },
    {
      key: 'profession',
      label: {
        uz: 'Kasb',
        ru: 'Профессия',
        eng: 'Profession',
      },
      value: {
        uz: 'Web Dasturchi',
        ru: 'Веб-разработчик',
        eng: 'Web Developer',
      },
    },
    {
      key: 'experience',
      label: {
        uz: 'Umumiy Tajriba',
        ru: 'Общий опыт',
        eng: 'Total Experience',
      },
      value: {
        uz: '5 yil',
        ru: '5 лет',
        eng: '5 years',
      },
    },
    {
      key: 'goal',
      label: {
        uz: 'Maqsad',
        ru: 'Цель',
        eng: 'Goal',
      },
      value: {
        uz: 'Zamonaviy texnologiyalar asosida samarali veb ilovalar yaratish.',
        ru: 'Создание эффективных веб-приложений на основе современных технологий.',
        eng: 'Creating efficient web applications based on modern technologies.',
      },
    },
    {
      key: 'education',
      label: {
        uz: "O'qigan joylarim",
        ru: 'Места учебы',
        eng: 'Education',
      },
      value: {
        uz: 'TDTU, Kompyuter fanlari fakulteti',
        ru: 'ТДТУ, Факультет компьютерных наук',
        eng: 'TDTU, Faculty of Computer Science',
      },
    },
    {
      key: 'character',
      label: {
        uz: 'Xarakterim',
        ru: 'Мой характер',
        eng: 'Character',
      },
      value: {
        uz: 'Javobgarlikni yaxshi his qilaman, jamoada ishlashga moyilman.',
        ru: 'Я чувствую ответственность и склонен работать в команде.',
        eng: 'I feel responsible and tend to work in a team.',
      },
    },
    {
      key: 'skills',
      label: {
        uz: 'Qobiliyatlar',
        ru: 'Навыки',
        eng: 'Skills',
      },
      value: {
        uz: 'JavaScript, React, Node.js, TailwindCSS, HTML, CSS',
        ru: 'JavaScript, React, Node.js, TailwindCSS, HTML, CSS',
        eng: 'JavaScript, React, Node.js, TailwindCSS, HTML, CSS',
      },
    },
    {
      key: 'images',
      label: {
        uz: 'Bu yerni bosing',
        ru: 'Нажмите сюда',
        eng: 'Click here',
      },
      imgs: [
        '../../public/me2.png',
        '../../public/me2.png',
        '../../public/me2.png',
      ],
    },
  ],
  experience: [
    {
      company: {
        uz: 'ABC MChJ',
        ru: 'ООО АБЦ',
        eng: 'ABC Ltd.',
      },
      duration: {
        uz: 'Yanvar 2021 - Dekabr 2022',
        ru: 'Январь 2021 - Декабрь 2022',
        eng: 'Jan 2021 - Dec 2022',
      },
      position: {
        uz: 'Veb Dasturchi',
        ru: 'Веб-разработчик',
        eng: 'Web Developer',
      },
      link: 'https://abc.com',
    },
  ],
  projects: [
    {
      id: 1,
      title: {
        uz: 'ShopingUz',
        ru: 'ShopingUz',
        eng: 'ShopingUz',
      },
      description: {
        uz: "Bu loyiha haqida qisqacha ma'lumot. Loyihadagi erishilgan natijalar.",
        ru: 'Краткое описание проекта. Что было достигнуто в проекте.',
        eng: 'This is a brief description of the project. It includes information on what was achieved in the project.',
      },
      category: 'e-commerce',
      techs: ['Node Js', 'ReactJs', 'Html/Css'],
      githubLink: 'https://github.com/username/project-one',
      liveDemo: 'https://projectone.live',
    },
    {
      id: 3,
      title: {
        uz: 'ShopingUz2',
        ru: 'ShopingUz22',
        eng: 'ShopingUz22',
      },
      description: {
        uz: "Bu loyiha haqida qisqacha ma'lumot. Loyihadagi erishilgan natijalar.",
        ru: 'Краткое описание проекта. Что было достигнуто в проекте.',
        eng: 'This is a brief description of the project. It includes information on what was achieved in the project.',
      },
      category: 'traveling',
      techs: ['Node Js', 'Typescript', 'Html/Css'],
      githubLink: 'https://github.com/username/project-one',
      liveDemo: 'https://projectone.live',
    },
  ],
  contact: {
    phone: '+998997867075',
    email: 'abduhamidbotirovwork@gmail.com',
    linkedin: 'https://www.linkedin.com/in/abduhamiddev/',
    instagram: 'https://www.instagram.com/abduhamid_botirov_/',
    telegram: 'https://t.me/AbduhamidBotirov',
    telegramBlog: 'https://t.me/shaxsiy_bosqich',
  },
}

export default portfolioData
