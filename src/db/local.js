import myImg from '../../public/jiddiyNoBg.png'
import img1 from '../Images/1.png'
import img2 from '../Images/2.png'
import img3 from '../Images/3.png'
import img4 from '../Images/4.png'
import img5 from '../Images/5.png'
import img6 from '../Images/6.png'
import img7 from '../Images/7.png'
import img8 from '../Images/res1.png'
import img9 from '../Images/res2.png'
import img10 from '../Images/res3.png'
import img11 from '../Images/8.png'
import img12 from '../Images/9.png'
import img133 from '../Images/10.png'
import img13 from '../Images/13.png'
import img14 from '../Images/14.png'
import img15 from '../Images/15.png'
import img16 from '../Images/16.png'
import img17 from '../Images/17.png'
import img18 from '../Images/18.png'
import img19 from '../Images/19.png'
import img20 from '../Images/20.png'
import img21 from '../Images/21.png'
import img22 from '../Images/22.png'
import img23 from '../Images/23.png'
import img24 from '../Images/24.png'
import img25 from '../Images/25.png'
import img26 from '../Images/26.png'
import img27 from '../Images/27.png'
import img28 from '../Images/28.png'
import img29 from '../Images/29.png'
import img30 from '../Images/30.png'
import img31 from '../Images/31.png'
import img32 from '../Images/32.png'
import img33 from '../Images/33.png'
import img34 from '../Images/34.png'
import img35 from '../Images/35.png'
import img36 from '../Images/36.png'
import img37 from '../Images/37.png'
import backend from '../Images/backend.png'
import full from '../Images/full3.png'
import img38 from '../Images/38.png'
import img39 from '../Images/39.png'
import img40 from '../Images/40.png'
import img41 from '../Images/41.png'
import img42 from '../Images/42.png'
import img43 from '../Images/43.png'
import img44 from '../Images/44.png'
import img45 from '../Images/45.png'
import img46 from '../Images/46.png'
import img47 from '../Images/47.png'
const portfolioData = {
  projects: [
    {
      title: {
        uz: 'Yummy ',
        ru: 'Yummy',
        eng: 'Yummy',
      },
      description: {
        uz: '“Yummy” - foydalanuvchilarga mazali retseptlarni topish va ulashish imkonini beruvchi oshxona ilovasi. Bu loyiha intuitiv interfeys va keng qamrovli retseptlar to‘plami bilan pishirish jarayonini soddalashtiradi.',
        ru: '«Yummy» — это приложение для кухни, которое позволяет пользователям находить и делиться вкусными рецептами. Проект упрощает процесс приготовления благодаря интуитивному интерфейсу и обширной коллекции рецептов.',
        eng: '“Yummy” is a culinary app that allows users to discover and share delicious recipes. This project simplifies the cooking process with an intuitive interface and a wide range of recipes.',
      },
      _id: '16',
      category: ['Food & Drink', 'Frontend', 'Full Stack'],
      level: '#in-progress',
      techs: ['Node Js', 'Express Js', 'Axios'],
      imgLinks: [img46, img47],
      githubLink: 'https://github.com/abduhamid707/Yummy',
      liveDemo: 'https://yummy-v1.netlify.app/',
      __v: 0,
    },
    {
      title: {
        uz: 'So‘zlarni Yodlash',
        ru: 'Запоминание Слов',
        eng: 'Memorize Words',
      },
      description: {
        uz: 'Ushbu loyiha yangi so‘zlarni yodlash va o‘rganish jarayonini osonlashtirish uchun ishlab chiqilgan. Foydalanuvchilar so‘zlarni qo‘shishi va ularni testlar orqali mustahkamlashi mumkin.',
        ru: 'Этот проект разработан для упрощения процесса запоминания и изучения новых слов. Пользователи могут добавлять слова и закреплять их через тесты.',
        eng: 'This project is designed to simplify the process of memorizing and learning new words. Users can add words and reinforce them through tests.',
      },
      _id: '14',
      category: ['Education', 'Frontend'],
      level: '#Medium',
      techs: ['React.js', 'Tailwind CSS'],
      imgLinks: [img44, img45],
      githubLink: 'https://github.com/abduhamid707/memorize-words',
      liveDemo: 'https://momorize-words-v1.netlify.app/',
      __v: 0,
    },
    {
      title: {
        uz: 'Ish Topish',
        ru: 'Найти Работу',
        eng: 'Job Apply',
      },
      description: {
        uz: 'Ish qidiruvchilarning ish topishdagi qiyinchiliklarini yengillashtirish uchun yaratilgan. Ushbu loyiha ish qidiruvchilarga mos ishlarni topishda qo‘shimcha yordam beradi va jarayonni osonlashtiradi.',
        ru: 'Создано для облегчения трудностей поиска работы для соискателей. Этот проект предоставляет дополнительную поддержку для соискателей, испытывающих трудности с поиском подходящей работы, и ускоряет процесс.',
        eng: 'Created to alleviate the difficulties of job searching for job seekers. This project provides additional support to job seekers struggling to find suitable jobs and expedites the process.',
      },
      _id: '15',
      category: ['Job Search', 'Full Stack', 'Backend'],
      level: '#High',
      techs: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'Mongoose',
        'JWT (JSON Web Token)',
        'bcrypt.js',
        'REST API',
        'dotenv',
        'Cors',
        'Nodemailer',
      ],
      imgLinks: [full, img39, img40],
      githubLink: 'https://github.com/abduhamidweb/job/tree/master/src',
      liveDemo: 'https://hoca-thejobportal.netlify.app/',
      __v: 0,
    },
    {
      title: {
        uz: 'Portfolio websayti',
        ru: 'Вебсайт портфолио',
        eng: 'Portfolio Website',
      },
      description: {
        uz: "Bu portfolio websayti, unda siz mening tajribam va loyihalarim haqida ma'lumot olishingiz mumkin. Portfolio sifatida foydalanishingiz uchun ideal bo'lishi mumkin.",
        ru: 'Этот вебсайт портфолио, где вы можете найти информацию о моем опыте и проектах. Он идеально подходит для использования в качестве портфолио.',
        eng: 'This is a portfolio website where you can find information about my experience and projects. It is ideal for use as a portfolio.',
      },
      _id: '17',
      category: ['Portfolio', 'Frontend'],
      level: '#High',
      techs: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
      imgLinks: [img41, img42, img43],
      githubLink: 'https://github.com/abduhamid707/Portfolio-Abduhamid',
      liveDemo: 'https://abduhamid-portfolio-v1.netlify.app/',
      __v: 0,
    },

    {
      title: {
        uz: 'So‘zlarni angla',
        ru: 'Поймите слова',
        eng: 'Understand Words',
      },
      description: {
        uz: "Ingliz tilidagi so'zlarni kontekst bilan o'rganing va ularni mustahkamlab, tilni bilish qobiliyatingizni oshiring.",
        ru: 'Изучайте английские слова в контексте, закрепляйте их и улучшайте свои языковые навыки.',
        eng: 'Learn English words with context, reinforce them, and improve your language proficiency.',
      },
      _id: '14',
      category: ['Education', 'Frontend'],
      level: '#Low',
      techs: ['JavaScript'],
      imgLinks: [img36],
      githubLink: 'https://polite-douhua-6bc935.netlify.app/',
      liveDemo: 'https://polite-douhua-6bc935.netlify.app/',
      __v: 0,
    },

    {
      title: {
        uz: 'Startap Bazar',
        ru: 'Рынок Стартапов',
        eng: 'Startup Market',
      },
      description: {
        uz: 'Foydalanuvchilarga o‘z startap loyihalarini sotish yoki ularga yoqqan startap loyihalarni sotib olish imkonini beradi. Ushbu loyiha innovatsion g‘oyalarni amalga oshirish va ularni manfaatdor tomonlar bilan bog‘lash uchun qulay platforma taqdim etadi.',
        ru: 'Позволяет пользователям продавать свои стартапы или покупать понравившиеся проекты. Этот проект предоставляет удобную платформу для реализации инновационных идей и соединения заинтересованных сторон.',
        eng: 'Enables users to sell their startup projects or purchase the ones they like. This project provides a seamless platform for realizing innovative ideas and connecting interested parties.',
      },
      _id: '16',
      category: ['Marketplace', 'Full Stack'],
      level: '#High',
      techs: [
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Mongoose',
        'Redux Toolkit',
        'JWT (JSON Web Token)',
        'bcrypt.js',
        'REST API',
        'Cloudinary',
        'Material-UI',
        'dotenv',
        'Cors',
        'Nodemailer',
      ],
      imgLinks: [full],
      githubLink: 'https://github.com/abduhamidweb/startup',
      liveDemo: 'https://github.com/Rasulwebs/startUp_MERN',
      __v: 0,
    },
    {
      title: {
        uz: 'Madaniy merosi',
        ru: 'Культурное наследие',
        eng: 'Cultural Heritage',
      },
      description: {
        uz: "O'zbekistonning nomoddiy madaniy merosi haqida ma'lumot beruvchi sayt. Milliy madaniyatimizni yanada chuqurroq anglash uchun.",
        ru: 'Сайт, предоставляющий информацию о нематериальном культурном наследии Узбекистана. Для более глубокого понимания нашей национальной культуры.',
        eng: 'A website providing information about Uzbekistan’s intangible cultural heritage. Designed to deepen the understanding of our national culture.',
      },
      _id: '15',
      category: ['Education', 'Frontend'],
      level: '#Low',
      techs: ['ReactJS', 'CSS'],
      imgLinks: [img37, img38],
      githubLink:
        'https://678a8e50f0cfce00a621d0cf--silly-zabaione-029031.netlify.app/',
      liveDemo:
        'https://678a8e50f0cfce00a621d0cf--silly-zabaione-029031.netlify.app/',
      __v: 0,
    },

    {
      title: {
        uz: 'Cheksizlik Kosmosi',
        ru: 'Бесконечный Космос',
        eng: 'Infinity Cosmos',
      },
      description: {
        uz: '"Infinity & Beyond" platformasi sizni koinotning cheksiz sirlarini kashf qilishga chorlaydi. Har qanday qurilmada ishlash imkoniyati bilan bu xizmat qulay va sifatli tajriba taqdim etadi. Turli obuna rejalari orqali siz o\'zingizga mos variantni tanlab, eksklyuziv kontentdan bahramand bo\'lishingiz mumkin.',
        ru: '"Infinity & Beyond" приглашает вас исследовать бесконечные тайны Вселенной. Эта платформа обеспечивает удобный и качественный опыт на любом устройстве. Вы можете выбрать подходящий тарифный план и наслаждаться эксклюзивным контентом.',
        eng: '"Infinity & Beyond" invites you to explore the endless mysteries of the universe. This platform offers a seamless and high-quality experience on any device. You can choose a subscription plan that suits you and enjoy exclusive content.',
      },
      _id: '6787d3fb5f4333c7e61944b7',
      category: ['Astronomy', 'Frontend'],
      level: '#High',
      techs: ['JavaScript', 'SCSS', 'CSS', 'HTML', 'ReactJs'],
      imgLinks: [img1, img2, img3, img4, img5, img6, img7],
      githubLink: 'https://github.com/abduhamidweb/CosmosSpace',
      liveDemo: 'https://cosmosdev.netlify.app/',
      __v: 0,
    },
    {
      title: {
        uz: 'Restoran Boshqaruv',
        ru: 'Управление Рестораном',
        eng: 'Restaurant Management',
      },
      description: {
        uz: "Restoran buyurtmalarini boshqarish, menyuni sozlash va moliyaviy hisobotlarni ko'rish uchun platforma.",
        ru: 'Платформа для управления заказами ресторана, настройки меню и просмотра финансовых отчетов.',
        eng: 'A platform for managing restaurant orders, customizing the menu, and viewing financial reports.',
      },
      _id: '2',
      category: ['Web Application', 'Frontend'],
      level: '#Medium',
      techs: ['JavaScript', 'SCSS', 'CSS', 'HTML', 'ReactJs'],
      imgLinks: [img9, img8, img10],
      githubLink: 'https://github.com/abduhamidweb/Extra',
      liveDemo: 'https://leafy-biscuit-c5029c.netlify.app/',
      __v: 0,
    },
    {
      title: {
        uz: 'Mamlakatlar Maʼlumotlari',
        ru: 'Информация о странах',
        eng: 'Country Info',
      },
      description: {
        uz: 'Dunyo mamlakatlari haqida batafsil maʼlumot olish uchun platforma.',
        ru: 'Платформа для получения подробной информации о странах мира.',
        eng: 'A platform for detailed information about countries worldwide.',
      },
      _id: '4',
      category: ['Web Application', 'Frontend'],
      level: '#Low',
      techs: ['React', 'JavaScript', 'CSS', 'HTML'],
      imgLinks: [img11, img12, img133],
      githubLink: 'https://github.com/abduhamidweb/Countr-ReactJs',
      liveDemo: 'https://verdant-lollipop-bcb0bb.netlify.app/',
      __v: 0,
    },
    {
      title: {
        uz: 'Restoran Platformasi',
        ru: 'Платформа ресторана',
        eng: 'Restaurant Platform',
      },
      description: {
        uz: "Restoran buyurtmalarini boshqarish, menyuni sozlash va moliyaviy hisobotlarni ko'rish uchun platforma.",
        ru: 'Платформа для управления заказами ресторана, настройки меню и просмотра финансовых отчетов.',
        eng: 'A platform for managing restaurant orders, customizing the menu, and viewing financial reports.',
      },
      _id: '2',
      category: ['Web Application', 'Frontend'],
      level: '#High',
      techs: ['JavaScript', 'SCSS', 'CSS', 'HTML', 'ReactJs'],
      imgLinks: [img13, img14, img15],
      githubLink: 'https://github.com/abduhamidweb/Extra',
      liveDemo: 'https://leafy-biscuit-c5029c.netlify.app/',
      __v: 0,
    },

    {
      title: {
        uz: 'Professional Xizmat',
        ru: 'Профессиональный сервис',
        eng: 'Professional Service',
      },
      description: {
        uz: "Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga javob beradigan echimlarni yaratamiz.",
        ru: 'Мы заботимся о каждом клиенте и создаем решения, отвечающие их потребностям.',
        eng: 'We care about each client and create solutions that meet their needs.',
      },
      _id: '3',
      category: ['Professional', 'Frontend'],
      level: '#High',
      techs: ['JavaScript', 'SCSS', 'CSS', 'HTML', 'ReactJs'],
      imgLinks: [img16, img17, img18],
      githubLink: 'https://quiet-concha-ee2e99.netlify.app/',
      liveDemo: 'https://quiet-concha-ee2e99.netlify.app/',
      __v: 0,
    },
    {
      title: {
        uz: 'Soʼzlar Dunyosi',
        ru: 'Мир слов',
        eng: 'Words World',
      },
      description: {
        uz: "Berilgan so'zlarni toping va ingliz tili va lug'at darajangizni oshiring.",
        ru: 'Найдите данные слова и улучшите свой уровень английского языка и словарный запас.',
        eng: 'Find the given words and improve your English and vocabulary skills.',
      },
      _id: '7',
      category: ['Play', 'Frontend'],
      level: '#Medium',
      techs: ['JavaScript', 'HTML', 'CSS'],
      imgLinks: [img19, img20, img21, img22],
      githubLink: 'https://spiffy-platypus-cfd35d.netlify.app/index.html',
      liveDemo: 'https://spiffy-platypus-cfd35d.netlify.app/index.html',
      __v: 0,
    },
    {
      title: {
        uz: 'Namoz Vaqtlari',
        ru: 'Время намаза',
        eng: 'Prayer Times',
      },
      description: {
        uz: "O'zingizning hududingizga mos bo'lgan namoz vaqtlari saytdan ko'rib, ibodatni vaqtida ado qiling.",
        ru: 'Смотрите время намаза в вашем регионе и совершайте молитвы вовремя.',
        eng: 'Check the prayer times for your region and perform prayers on time.',
      },
      _id: '8',
      category: ['Utility', 'Frontend'],
      level: '#Low',
      techs: ['React JS'],
      imgLinks: [img23, img24],
      githubLink: 'https://nomozvaqtlaridev.netlify.app/',
      liveDemo: 'https://nomozvaqtlaridev.netlify.app/',
      __v: 0,
    },
    {
      title: {
        uz: 'Mahsulot Landing',
        ru: 'Посадочная страница продукта',
        eng: 'Product Landing',
      },
      description: {
        uz: "Muvaffaqiyatli CRM tizimini taqdim etuvchi sahifa. Jamoangiz uchun kuchli vositalar va qulay foydalanish imkoniyatlarini ko'rib chiqing.",
        ru: 'Страница, предоставляющая успешную CRM систему. Ознакомьтесь с мощными инструментами и удобствами для вашей команды.',
        eng: 'A page that presents a successful CRM system. Explore powerful tools and convenient features for your team.',
      },
      _id: '9',
      category: ['Landing', 'Frontend'],
      level: '#Medium',
      techs: ['React JS', 'Bootstrap', 'CSS'],
      imgLinks: [img25, img26],
      githubLink: 'https://resonant-cannoli-bb6330.netlify.app/',
      liveDemo: 'https://resonant-cannoli-bb6330.netlify.app/',
      __v: 0,
    },
    {
      title: {
        uz: 'Pokemonlar',
        ru: 'Покемоны',
        eng: 'Pokemons',
      },
      description: {
        uz: "Bolalar uchun sevimli Pokemonlaringizni ko'rsatuvchi oddiy va qiziqarli loyiha.",
        ru: 'Простой и увлекательный проект для показа любимых покемонов детям.',
        eng: 'A simple and fun project to show your favorite Pokemons for kids.',
      },
      _id: '10',
      category: ['Play', 'Frontend'],
      level: '#Low',
      techs: ['JavaScript', 'HTML', 'CSS'],
      imgLinks: [img28, img27, img29],
      githubLink: 'https://pokemonsdev.netlify.app/',
      liveDemo: 'https://pokemonsdev.netlify.app/',
      __v: 0,
    },
    {
      title: {
        uz: 'Portfolio',
        ru: 'Портфолио',
        eng: 'Portfolio',
      },
      description: {
        uz: "Portfolio loyiham orqali o'zim haqimda ma'lumot, tajriba va ishlarimni namoyish qilaman.",
        ru: 'С помощью проекта Portfolio я демонстрирую информацию о себе, опыте и своих работах.',
        eng: 'Through my Portfolio project, I showcase information about myself, my experience, and my work.',
      },
      _id: '11',
      category: ['Personal', 'Frontend'],
      level: '#Medium',
      techs: ['ReactJS'],
      imgLinks: [img30, img31],
      githubLink: 'https://grand-yeot-1b6cb2.netlify.app/',
      liveDemo: 'https://grand-yeot-1b6cb2.netlify.app/',
      __v: 0,
    },
    {
      title: {
        uz: 'Sidebar Component',
        ru: 'Компонент боковой панели',
        eng: 'Sidebar Component',
      },
      description: {
        uz: "Loyiha responsive sidebar komponentini yaratishga qaratilgan bo'lib, turli qurilmalarda to'g'ri ko'rinishni ta'minlaydi.",
        ru: 'Проект направлен на создание адаптивного компонента боковой панели, который корректно отображается на разных устройствах.',
        eng: 'The project focuses on creating a responsive sidebar component that ensures proper display on various devices.',
      },
      _id: '12',
      category: ['UI/UX', 'Frontend'],
      level: '#Low',
      techs: ['HTML', 'CSS', 'JavaScript'],
      imgLinks: [img32, img33],
      githubLink: 'https://gleeful-chaja-c26a7a.netlify.app/home',
      liveDemo: 'https://gleeful-chaja-c26a7a.netlify.app/home',
      __v: 0,
    },
    {
      title: {
        uz: 'YouTube Clone',
        ru: 'Клон YouTube',
        eng: 'YouTube Clone',
      },
      description: {
        uz: "YouTube platformasining ko'rinishini va funksiyalarini o'rganish va qayta yaratish uchun mo'ljallangan loyiha.",
        ru: 'Проект предназначен для изучения и воспроизведения внешнего вида и функций платформы YouTube.',
        eng: 'A project designed to study and recreate the look and functionality of the YouTube platform.',
      },
      _id: '13',
      category: ['Clone', 'Frontend'],
      level: '#Low',
      techs: ['React', 'CSS', 'Bootstrap'],
      imgLinks: [img34, img35],
      githubLink: 'https://youtubeclonedev.netlify.app/',
      liveDemo: 'https://youtubeclonedev.netlify.app/',
      __v: 0,
    },
  ],
  chatGpt: {
    uz: "Tezkor va kerakli ma'lumotlarni olish uchun so'rov yuboring. ",
    ru: 'Отправьте запрос для получения быстрых и нужных данных. ',
    eng: 'Send a request to get quick and necessary information.',
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
        uz: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'TailwindCSS', 'HTML', 'CSS', 'MongoDB', 'PostgreSQL', 'Redux/Redux Toolkit', 'GraphQL'],
        ru: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'TailwindCSS', 'HTML', 'CSS', 'MongoDB', 'PostgreSQL', 'Redux/Redux Toolkit', 'GraphQL'],
        eng: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'TailwindCSS', 'HTML', 'CSS', 'MongoDB', 'PostgreSQL', 'Redux/Redux Toolkit', 'GraphQL'],
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
    {
      company: {
        uz: 'Oʻzbekiston Respublikasi Vazirliklari',
        ru: 'Министерства Республики Узбекистан',
        eng: 'Ministries of the Republic of Uzbekistan',
      },
      duration: {
        uz: '1 oy (2024)',
        ru: '1 месяц (2024)',
        eng: '1 month (2024)',
      },
      position: {
        uz: 'Volontyor Dasturchi',
        ru: 'Волонтёр Разработчик',
        eng: 'Volunteer Developer',
      },
      link: '',
    },
    {
      company: {
        uz: 'Surprize.uz',
        ru: 'Surprize.uz',
        eng: 'Surprize.uz',
      },
      duration: {
        uz: '1 oy (2024)',
        ru: '1 месяц (2024)',
        eng: '1 month (2024)',
      },
      position: {
        uz: 'Volontyor Dasturchi',
        ru: 'Волонтёр Разработчик',
        eng: 'Volunteer Developer',
      },
      link: 'https://surprize.uz/',
    },
  ],

  contact: {
    phone: '+998887497075',
    telegram: 'https://t.me/AbduhamidBotirov',
    email: 'abduhamidbotirovwork@gmail.com',
    instagram: 'https://www.instagram.com/abduhamid.botirov',
    linkedin: 'https://www.linkedin.com/in/abduhamiddev/',
    telegramBlog: 'https://t.me/shaxsiy_bosqich',
  },
  blogData: [
    {
      id: 1,
      title: 'HTML nima?',
      description:
        'HTML (HyperText Markup Language) — bu veb-sahifalarni yaratish uchun ishlatiladigan belgilash tili. U sahifaning tuzilishini aniqlaydi.',
    },
    {
      id: 2,
      title: 'HTML elementlari va teglar',
      description:
        'HTML sahifalar turli teglar yordamida yaratiladi. Har bir element ochilish va yopilish teglari orasida joylashadi.',
    },
    {
      id: 3,
      title: 'HTML atributlari',
      description:
        'HTML atributlari elementlarga qo‘shimcha ma’lumot qo‘shish uchun ishlatiladi. Masalan, `href` atributi link manzilini belgilaydi.',
    },
    {
      id: 4,
      title: 'HTML sarlavhalari',
      description:
        'HTMLda `h1` dan `h6` gacha bo‘lgan sarlavha teglar mavjud bo‘lib, ular matnni turli darajada urg‘ulashga yordam beradi.',
    },
    {
      id: 5,
      title: 'HTML paragraflari',
      description:
        '`<p>` tegi yordamida matnni paragraflarga ajratish mumkin. Bu sahifadagi matnlarni tartibli ko‘rinishda chiqarishga yordam beradi.',
    },
    {
      id: 6,
      title: 'HTMLda rasm qo‘shish',
      description:
        '`<img>` tegi yordamida veb-sahifalarga rasm qo‘shish mumkin. `src` atributi orqali rasm manbasi ko‘rsatiladi.',
    },
    {
      id: 7,
      title: 'HTMLda link yaratish',
      description:
        'Link yaratish uchun `<a>` tegi ishlatiladi. Masalan: `<a href="https://example.com">Saytga o‘tish</a>`.',
    },
    {
      id: 8,
      title: 'HTML jadvali',
      description:
        'Jadval yaratish uchun `<table>` tegi ishlatiladi. U ichida `<tr>` (qator), `<td>` (katak) kabi teglar mavjud.',
    },
    {
      id: 9,
      title: 'HTML shakllari',
      description:
        'Foydalanuvchi bilan o‘zaro aloqada bo‘lish uchun `<form>` tegi ishlatiladi. U turli input maydonlarini o‘z ichiga olishi mumkin.',
    },
    {
      id: 10,
      title: 'HTML5 va uning yangi imkoniyatlari',
      description:
        'HTML5 video va audio teglar, `<canvas>` grafik chizish vositasi kabi ko‘plab yangi funksiyalarni taklif etadi.',
    },
  ],
}
export default portfolioData
