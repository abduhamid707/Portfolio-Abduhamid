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
        uz: '20',
        ru: '20',
        eng: '20',
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
        uz: 'Full Stack Web Dasturchi',
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
        uz: '1 yil',
        ru: '1 год',
        eng: '1 year',
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
        uz: "Web dasturlash sohasida kuchli mutaxassis bo'lish va zamonaviy web dasturlar yaratish",
        ru: 'Стать сильным специалистом в области веб-разработки и создавать современные веб-приложения',
        eng: 'To become a strong specialist in web development and create modern web applications',
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
        uz: "IT Park Sirdaryo, Najot Ta'lim Ganga",
        ru: 'ИТ Парк Сирдарья, Найот Таълим Ганга',
        eng: "IT Park Sirdarya, Najot Ta'lim Ganga",
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
        uz: "Javobgarlikni yaxshi his qilaman, vazifalarni vaqtida bajaraman, rahbarni uyaltirib qo'ymayman",
        ru: 'Я хорошо чувствую ответственность, выполняю задачи вовремя, не подведу руководителя',
        eng: 'I have a strong sense of responsibility, complete tasks on time, and never let the manager down',
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
        uz: 'JavaScript, TypeScript, React, Node.js, TailwindCSS, HTML, CSS, MongoDb, Postgres SQL, Redux/Redux Toolkit',
        ru: 'JavaScript, TypeScript, React, Node.js, TailwindCSS, HTML, CSS, MongoDb, Postgres SQL, Redux/Redux Toolkit',
        eng: 'JavaScript, TypeScript, React, Node.js, TailwindCSS, HTML, CSS, MongoDb, Postgres SQL, Redux/Redux Toolkit',
      },
    },

    // {
    //   key: 'images',
    //   label: {
    //     uz: 'Bu yerni bosing',
    //     ru: 'Нажмите сюда',
    //     eng: 'Click here',
    //   },
    //   imgs: [
    //     '../../public/me2.png',
    //     '../../public/me2.png',
    //     '../../public/me2.png',
    //   ],
    // },
  ],
  experience: [
    {
      company: {
        uz: 'Hoca Inc',
        ru: 'Хока Инк',
        eng: 'Hoca Inc',
      },
      duration: {
        uz: 'May 2023 - Dekabr 2023',
        ru: 'Май 2023 - Декабрь 2023',
        eng: 'May 2023 - December 2023',
      },
      position: {
        uz: 'Full Stack Strong Junyor Dasturchi',
        ru: 'Full Stack Strong Junior Разработчик',
        eng: 'Full Stack Strong Junior Developer',
      },
      link: 'https://glints.com/vn/en/companies/hoca-inc/14a8a216-0eaa-4232-99a6-71851cc3de05',
    },
    {
      company: {
        uz: 'CodeCrafters',
        ru: 'КодКрафтерс',
        eng: 'CodeCrafters',
      },
      duration: {
        uz: 'Iyun 2022 - Noyabr 2022',
        ru: 'Июнь 2022 - Ноябрь 2022',
        eng: 'June 2022 - November 2022',
      },
      position: {
        uz: 'Strong Junyor',
        ru: 'Сильный Джуниор',
        eng: 'Strong Junior',
      },
      link: 'https://codecrafters.io/',
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
