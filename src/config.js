module.exports = {
  email: 'mateusz.szymon.baryla@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/matbarPL',
    },
    {
      name: 'Twitter',
      url: 'https://x.com/matbarPL',
    },
    {
      name: 'RPubs',
      url: 'https://rpubs.com/matbarPL',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/mateusz-baryla/',
    },
    {
      name: 'GoodReads',
      url: 'https://www.goodreads.com/matbarpl',
    },
  ],

  StorySocialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/matbarPL',
    },
    {
      name: 'Twitter',
      url: 'https://x.com/matbarPL',
    },
    {
      name: 'RPubs',
      url: 'https://rpubs.com/matbarPL',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/mateusz-baryla/',
    },
  ],

  navLinks: [
    {
      name: 'Story',
      url: '/#story',
    },
    {
      name: 'Expertise',
      url: '/#expertise',
    },
    {
      name: 'Tech stack',
      url: '/#tech-stack',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Blog',
      url: '/blog',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
