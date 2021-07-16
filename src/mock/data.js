import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Aaron Wilson / Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'FullStack Web Developer specializing in M.E.R.N stack ecommerce applications', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Aaron Wilson',
  subtitle: 'I am a Fullstack Developer specializing in M.E.R.N stack projects',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile1.jpg',
  paragraphOne:  'Hello my name is Aaron Wilson, I am a Fullstack Developer specializing in the M.E.R.N stack Development.',
  paragraphTwo: 'I use React, Express, MongoDB, Node and many other technologies in order to bring my clients fast, reliable, fully fledged web applications.',
  paragraphThree: 'I enojoy spending my time bettering myself and my skills within the realm of web development.  below are some of the projects I have worked on. Please have a browse and If I can help in anyway feel free to contact me',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'gallery-ecom-img.jpg',
    title: 'Ecommerce M.E.R.N stack Gallery',
    info: 'an ecommerce app built with M.E.R.N stack and Redux with admin panel using C.R.U.D functionality.',
    info2: 'fully deployed app on heroku using AWS s3 for image storage and PayPal for payment',
    url: 'https://www.emsiart.com/',
    repo: 'https://github.com/aaronwilsondev/ecom-w-admin', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bd-tattoo-portfolio.jpg',
    title: 'Portfolio site with React',
    info: 'A portfolio site for a Tattoo parlour based in Dublins Temple bar with contact us functionality',
    info2: ' Using React light box wrapper for gallery image blow up and optional image download',
    url: 'https://bdtattoo.herokuapp.com/',
    repo: 'https://github.com/aaronwilsondev/bulldog-tattoo', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'crwn-fashion-ecom.jpg',
    title: 'Ecommerce fashion site using React',
    info: 'A React ecommerce fashion site with Redux using Firebase for google OAuth sign in and database storage',
    info2: 'Using Stripe integration for payment handling',
    url: 'https://e-com-crwn1.herokuapp.com/',
    repo: 'https://github.com/aaronwilsondev/crwn-clothing', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'aaronwilson1234@outlook.ie',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'envelope',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/aaronwilsondev',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
