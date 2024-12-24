import myImg from '../../public/jiddiyNoBg.png'
const portfolioData = {
  chatGpt: 
     {
        uz: "Tezkor va kerakli ma'lumotlarni olish uchun so'rov yuboring. ",
        ru: 'Отправьте запрос для получения быстрых и нужных данных. ',
        eng: "Send a request to get quick and necessary information.",
      },
    
  aboutMeMore: [
    {
      id: 1,
      img: myImg,
      title: {
        uz: 'Mening Xarakterim',
        ru: 'Мой характер',
        eng: 'My Character',
      },
      desc: {
        uz: "Muommoni yechmaguncha qo'ymayman. Introvertlik odamlar toifasiga kirganim uchun uzoqni ko'ra olaman. Bir vaqtning o'zida mexnatkash ongim bilan ko'p muommolarga yechim topa olaman. Juda ham kreativman. Mantiq va logikani tushunsam kod yozishda muammo bo'lmaydi. Bu mening kuchli xarakterimdan parcha.",
        ru: 'Я не останавливаюсь, пока не решу проблему. Будучи интровертом, я способен видеть далеко вперед. Одновременно с трудолюбивым мышлением я могу находить решения многим проблемам. Я очень креативен. Понимая логику и здравый смысл, у меня не возникает проблем с написанием кода. Это часть моего сильного характера.',
        eng: "I don't stop until I solve the problem. Being an introvert, I can see far ahead. With my hardworking mindset, I can solve many problems at once. I am very creative. Understanding logic and reasoning means coding is not a problem for me. This is a piece of my strong character.",
      },
    },
    {
      id: 2,
      img: myImg,
      title: {
        uz: "Akademik Sayohat va Til Ko'nikmalari",
        ru: 'Академическое путешествие и языковые навыки',
        eng: 'Academic Journey and Language Skills',
      },
      desc: {
        uz: "Hozirda Tashkent International University of Finance and Technology universitetida 2-kurs sirtqi ta'lim o‘quvchisiman va ingliz tilini juda native bo'lmasada eplay olishimga ishonaman. Mening ingliz tili bilish darajam B2.",
        ru: 'В настоящее время я являюсь студентом 2-го курса заочного обучения в Ташкентском международном университете финансов и технологий. Я уверен, что могу справляться с английским языком, хотя он не является для меня родным. Мой уровень владения английским языком — B2.',
        eng: "Currently, I am a second-year distance education student at Tashkent International University of Finance and Technology. I believe I can handle English well, even if it's not native to me. My English proficiency level is B2.",
      },
    },
    {
      id: 3,
      img: myImg,
      title: {
        uz: 'Soft Skillarim',
        ru: 'Мои мягкие навыки',
        eng: 'My Soft Skills',
      },
      desc: {
        uz: "Tinglash qobiliyati, hissiy tushunish, kam so‘z bilan muammoni aniqlash, kelishuvchanlik, ijodkorlik (Creativity), rejalashtirish, vaqtga sodiq qolish, stressni boshqarish, mas'uliyatni o‘z zimmaga olish va doimiy rivojlanishga intilish kabi yumshoq ko‘nikmalarga egaman.",
        ru: 'Способность слушать, эмоциональное понимание, определение проблемы с минимальным количеством слов, уступчивость, креативность, планирование, соблюдение сроков, управление стрессом, принятие ответственности и стремление к постоянному развитию — мои основные мягкие навыки.',
        eng: 'I possess soft skills such as listening ability, emotional understanding, identifying issues with minimal words, adaptability, creativity, planning, time management, stress control, taking responsibility, and striving for continuous growth.',
      },
    },
    {
      id: 4,
      img: myImg,
      title: {
        uz: `Innovatsion Dasturlash Ko'nikmalarim`,
        ru: `Мои инновационные навыки программирования`,
        eng: `My Innovative Programming Skills`,
      },
      desc: {
        uz: `Men har doim eng yangi texnologiyalar va ilg‘or sun’iy intellekt vositalaridan foydalanib kod yozaman. Ish jarayonida tezlik va sifatga katta ahamiyat beraman, shu bilan birga, kodning yangilanishi va samaradorligini ta'minlashga intilaman.`,
        ru: `Я всегда использую самые современные технологии и передовые инструменты искусственного интеллекта для написания кода. Я придаю большое значение скорости и качеству работы, а также стремлюсь к обновляемости и эффективности кода.`,
        eng: `I always utilize the latest technologies and advanced AI tools for coding. I place great emphasis on speed and quality while ensuring the code's up-to-date and efficient performance.`,
      },
    },
    // {
    //   id: 4,
    //   img: myImg,
    //   title: {
    //     uz: '',
    //     ru: '',
    //     eng: '',
    //   },
    //   desc: {
    //     uz: '',
    //     ru: '',
    //     eng: '',
    //   },
    // },
  ],
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
