// local.js
const portfolioData = {
  aboutme: [
    {
      key: 'name',
      label: 'Ism',
      value: 'Abduhamid Botirov',
    },
    {
      key: 'age',
      label: 'Yosh',
      value: '25',
    },
    {
      key: 'profession',
      label: 'Kasb',
      value: 'Web Dasturchi',
    },
    {
      key: 'experience',
      label: 'Umumiy Tajriba',
      value: '5 yil',
    },
    {
      key: 'goal',
      label: 'Maqsad',
      value: 'Zamonaviy texnologiyalar asosida samarali veb ilovalar yaratish.',
    },
    {
      key: 'education',
      label: "O'qigan joylarim",
      value: 'TDTU, Kompyuter fanlari fakulteti',
    },
    {
      key: 'character',
      label: 'Xarakterim',
      value: 'Javobgarlikni yaxshi his qilaman, jamoada ishlashga moyilman.',
    },
    {
      key: 'skills',
      label: 'Qobiliyatlar',
      value: 'JavaScript, React, Node.js, TailwindCSS, HTML, CSS',
    },
    {
      key: 'images',
      label: 'Bu yerni bosing',
      imgs: [
        '../../public/me2.png',
        '../../public/me2.png',
        '../../public/me2.png',
      ],
    },
  ],
  experience: [
    {
      company: 'ABC Ltd.',
      duration: 'Jan 2021 - Dec 2022',
      position: 'Web Developer',
      link: 'https://abc.com',
    },
    {
      company: 'XYZ Inc.',
      duration: 'Jan 2020 - Dec 2020',
      position: 'Frontend Developer',
      link: 'https://xyz.com',
    },
    {
      company: 'QWE Solutions',
      duration: 'Jan 2019 - Dec 2019',
      position: 'Intern',
      link: 'https://qwe.com',
    },
  ],
  projects: [
    {
      id: 1,
      title: 'ShopingUz',
      description:
        'This is a brief description of Project One. It includes information on what was achieved in the project.',
      category: 'ecommercy',
      techs: ['Node Js', 'ReactJs', 'Html/Css'],
      githubLink: 'https://github.com/username/project-one', // GitHub havolasi
      liveDemo: 'https://projectone.live', // Loyihaning faol sahifasi
    },
    {
      id: 2,
      title: 'FoodieHub',
      description:
        'FoodieHub is a platform for food lovers where users can share recipes, review dishes, and discover new restaurants.',
      category: 'food',
      techs: ['Angular', 'Node Js', 'MongoDB'],
      githubLink: 'https://github.com/username/foodiehub',
      liveDemo: 'https://foodiehub.live',
    },
    {
      id: 3,
      title: 'FitTrack',
      description:
        'FitTrack is a fitness app designed to help users track their workouts, set goals, and monitor their progress.',
      category: 'fitness',
      techs: ['React Native', 'Firebase', 'Express'],
      githubLink: 'https://github.com/username/fittrack',
      liveDemo: 'https://fittrack.live',
    },
    {
      id: 4,
      title: 'TaskMaster',
      description:
        'TaskMaster is a productivity app that allows users to organize their tasks, set deadlines, and track their productivity.',
      category: 'productivity',
      techs: ['VueJs', 'Vuetify', 'Node Js'],
      githubLink: 'https://github.com/username/taskmaster',
      liveDemo: 'https://taskmaster.live',
    },
    {
      id: 5,
      title: 'TravelPal',
      description:
        'TravelPal is a travel planning app that helps users discover travel destinations, create itineraries, and share experiences.',
      category: 'travel',
      techs: ['ReactJs', 'Node Js', 'MongoDB'],
      githubLink: 'https://github.com/username/travelpal',
      liveDemo: 'https://travelpal.live',
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
