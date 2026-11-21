export const profileData = {
  name: 'Rai Raksa Muhamad',
  shortName: 'Rai Raksa M',
  role: 'Backend Engineer',
  location: 'Bandung, Indonesia 🇮🇩',
  avatar: './assets/img/rai.jpg',
  resumeUrl: './file/cv.pdf',
  bio: [
    "Backend Engineer based in Bandung, Indonesia 🇮🇩, with a Bachelor's degree in Informatics Engineering (S.T.) from Widyatama University and nearly a decade of software engineering experience turning complex business problems into reliable systems.",
    'Over the years, I evolved from delivering mission-critical aviation and enterprise platforms into architecting high-throughput backend microservices in Go (Golang) with PostgreSQL, MySQL, Redis, and AWS (SNS, SQS, S3). Today, I combine resilient event-driven architecture with Grafana observability, n8n automation, and AI-assisted engineering workflows to ship fast, dependable software.',
  ],
  stats: [
    { value: '11+', description: 'Years total experience' },
    { value: '9+', description: 'Years in software' },
    { value: '15+', description: 'Projects completed' },
    { value: '5', description: 'Companies worked' },
  ],
  socials: [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/rairaksa',
      icon: 'linkedin',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/rairaksa',
      icon: 'github',
    },
  ],
  contacts: [
    {
      name: 'Email',
      url: 'mailto:rairaksa7@gmail.com',
      icon: 'email',
      external: false,
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/raydeon',
      icon: 'instagram',
      external: true,
    },
  ],
};

export const skillsData = [
  {
    category: 'Languages & Frameworks',
    data: [
      { name: 'Golang' },
      { name: 'PHP / Laravel' },
      { name: 'CodeIgniter' },
      { name: 'ReactJS' },
      { name: 'TailwindCSS' },
    ],
  },
  {
    category: 'Databases & Messaging',
    data: [
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'Redis' },
      { name: 'AWS SNS' },
      { name: 'AWS SQS' },
    ],
  },
  {
    category: 'Cloud & Observability',
    data: [
      { name: 'AWS S3' },
      { name: 'Grafana' },
      { name: 'Git' },
      { name: 'Linux CLI' },
    ],
  },
  {
    category: 'AI & Automation',
    data: [
      { name: 'AI-Assisted Workflow' },
      { name: 'n8n' },
    ],
  },
];

export const experiencesData = [
  {
    name: 'PT Setiap Hari Dipakai (Evermos)',
    data: [
      {
        year: '2022 - Present',
        position: 'Backend Engineer',
        description:
          'Design and scale high-throughput Go microservices and event-driven architectures using AWS SNS/SQS, PostgreSQL, MySQL, Redis, and S3—backed by Grafana observability, n8n workflow automation, and AI-assisted engineering.',
      },
    ],
  },
  {
    name: 'PT Hasil Sukses Indonesia (Halosis)',
    data: [
      {
        year: '2020 - 2022',
        position: 'Fullstack PHP Developer',
        description:
          'Engineered multi-tenant social commerce platforms and retail management web applications using Laravel, Yii, TailwindCSS, and MySQL.',
      },
    ],
  },
  {
    name: 'PT Bandarudara Internasional Jawa Barat',
    data: [
      {
        year: '2020',
        position: 'Manager of ICT Area Management',
        description:
          'Spearheaded airport ICT operations, mission-critical system reliability, and cross-functional infrastructure governance at Kertajati International Airport.',
      },
      {
        year: '2017 - 2020',
        position: 'System Development',
        description:
          'Architected and delivered core airport enterprise platforms—including the Operational Dashboard, E-Procurement, and Security Access Control systems.',
      },
    ],
  },
  {
    name: 'Pusat Teknologi Instrumentasi dan Otomasi ITB',
    data: [
      {
        year: '2014 - 2016',
        position: 'IT Staff',
        description:
          'Administered research center IT infrastructure and developed web platforms for academic quality assurance and institutional accreditation.',
      },
    ],
  },
  {
    name: 'PT Jalawave Cakrawala',
    data: [
      {
        year: '2012 - 2013',
        position: 'Wireless Engineer',
        description:
          'Deployed, optimized, and maintained enterprise wireless networks and high-availability connectivity infrastructure.',
      },
    ],
  },
];

export const educationData = [
  {
    name: 'Widyatama University — Bandung',
    data: [
      {
        year: '2013 - 2017',
        position: 'Bachelor of Informatics Engineering (S.T.)',
        description:
          'Focused on software engineering, algorithms, relational database design, and distributed systems architecture.',
      },
    ],
  },
];

export const portfolioHighlightsData = [
  {
    name: 'Evermos Backend & Event-Driven Services',
    year: '2022 - Present',
    type: 'company',
    context: 'Evermos',
    description:
      'High-concurrency Go microservices powering social commerce transactions, asynchronous pub/sub workflows via AWS SNS & SQS, low-latency Redis caching, S3 media pipelines, and real-time Grafana observability.',
    technologies: [
      'Golang',
      'PostgreSQL',
      'MySQL',
      'Redis',
      'AWS SNS',
      'AWS SQS',
      'AWS S3',
      'Grafana',
      'n8n',
    ],
  },
];

export const portfolioCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'company', label: 'Company / Enterprise' },
  { id: 'independent', label: 'Freelance & Independent' },
];

export const portfolioProjectsData = [
  {
    name: 'Maintenance Management System (MMS)',
    year: '2026',
    type: 'independent',
    context: 'Freelance • PT Peroksida Indonesia Pratama',
    description:
      'Industrial maintenance management platform covering preventive & corrective work orders, equipment BOM & runtime tracking, multi-step approval workflows, purchase requisitions, SLA analytics, and role-based access control.',
    technologies: ['Laravel', 'ReactJS', 'TypeScript', 'TailwindCSS', 'MySQL'],
  },
  {
    name: 'Joinan Securities Crowdfunding',
    year: '2022 - 2023',
    type: 'independent',
    context: 'Freelance • Joinan',
    description:
      'Modular backend API and back-office microservices for a securities crowdfunding investment platform, handling investor onboarding, KYC verification, issuer campaign management, transaction processing, and automated reporting.',
    technologies: ['Laravel', 'MySQL', 'Redis', 'AWS S3', 'REST API'],
  },
  {
    name: 'Snapinn Property Agent',
    year: '2021',
    type: 'independent',
    context: 'Freelance Project',
    thumbnail: 'assets/portfolio/2021-snapinn.jpg',
    description:
      'A modern property listing platform connecting real estate agents with prospective buyers.',
    technologies: ['Laravel', 'TailwindCSS', 'MySQL'],
  },
  {
    name: 'Halo Retail',
    year: '2021',
    type: 'company',
    context: 'Halosis',
    thumbnail: 'assets/portfolio/2021-retail.jpg',
    description:
      'Back-office content and inventory management platform for online retail storefronts.',
    technologies: ['Yii', 'TailwindCSS', 'MySQL'],
  },
  {
    name: 'Halosis Central',
    year: '2021',
    type: 'company',
    context: 'Halosis',
    thumbnail: 'assets/portfolio/2021-central.jpg',
    description:
      'Multi-tenant e-commerce builder featuring customizable storefront templates and custom domains.',
    technologies: ['Laravel', 'TailwindCSS', 'Bootstrap', 'MySQL'],
  },
  {
    name: 'Akansah Wedding Invitation',
    year: '2020',
    type: 'independent',
    context: 'Freelance Project',
    thumbnail: 'assets/portfolio/2020-akansah.jpg',
    description:
      'Interactive digital wedding invitation and RSVP management platform.',
    technologies: ['Laravel', 'TailwindCSS', 'Bootstrap', 'MySQL'],
  },
  {
    name: 'Airport Operational Dashboard',
    year: '2020',
    type: 'company',
    context: 'PT BIJB (Kertajati Airport)',
    thumbnail: 'assets/portfolio/2020-aod.jpg',
    description:
      'Executive real-time dashboard monitoring flight operations and daily metrics at Kertajati International Airport.',
    technologies: ['CodeIgniter', 'Bootstrap', 'MySQL'],
  },
  {
    name: 'BIJB E-Procurement',
    year: '2019',
    type: 'company',
    context: 'PT BIJB (Kertajati Airport)',
    thumbnail: 'assets/portfolio/2019-eproc.jpg',
    description:
      'End-to-end digital procurement portal for vendor registration, tendering, and contract workflows.',
    technologies: ['CodeIgniter', 'Bootstrap', 'MySQL'],
  },
  {
    name: 'Access Control System',
    year: '2018',
    type: 'company',
    context: 'PT BIJB (Kertajati Airport)',
    thumbnail: 'assets/portfolio/2018-acs.jpg',
    description:
      'Security clearance and airport pass issuance platform for restricted operational zones.',
    technologies: ['CodeIgniter', 'Bootstrap', 'MySQL'],
  },
  {
    name: 'BIJB Information System',
    year: '2017',
    type: 'company',
    context: 'PT BIJB (Kertajati Airport)',
    thumbnail: 'assets/portfolio/2017-bis.jpg',
    description:
      'Integrated enterprise resource system streamlining internal corporate workflows and approvals.',
    technologies: ['CodeIgniter', 'Bootstrap', 'MySQL'],
  },
  {
    name: 'Educational Quality Assurance',
    year: '2016',
    type: 'company',
    context: 'Pusat Teknologi Instrumentasi & Otomasi ITB',
    thumbnail: 'assets/portfolio/2016-eqa.jpg',
    description:
      'Academic accreditation tracking and continuous quality assurance monitoring platform.',
    technologies: ['CodeIgniter', 'Bootstrap', 'MySQL'],
  },
];
