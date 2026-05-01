export const navItems = [
  ['home', 'Home'],
  ['expertise', 'Expertise'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['architecture', 'Architecture'],
  ['testimonials', 'Testimonials'],
  ['contact', 'Contact'],
]

export const statItems = [
  { icon: 'briefcase', value: '13+', label: 'Years Experience' },
  { icon: 'folder', value: '20+', label: 'Projects Delivered' },
  { icon: 'users', value: '2M+', label: 'Users Impacted' },
  { icon: 'shield', value: '99.9%', label: 'Uptime Focus' },
]

export const expertiseCards = [
  {
    icon: 'server',
    title: 'Backend',
    text: 'Robust APIs & microservices',
    skills: ['.NET Core', 'C#', 'ASP.NET', 'Web API', 'gRPC'],
  },
  {
    icon: 'monitor',
    title: 'Frontend',
    text: 'Modern, responsive web applications',
    skills: ['Angular', 'React', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    icon: 'cloud',
    title: 'Cloud & DevOps',
    text: 'Scalable, secure & highly available',
    skills: ['Azure', 'AWS', 'Docker', 'Kubernetes', 'CI/CD'],
  },
  {
    icon: 'database',
    title: 'Databases',
    text: 'Relational & NoSQL data stores',
    skills: ['SQL Server', 'MongoDB', 'Redis', 'Elasticsearch'],
  },
  {
    icon: 'network',
    title: 'Architecture',
    text: 'Designing scalable enterprise systems',
    skills: ['Microservices', 'Event-Driven', 'DDD', 'CQRS'],
  },
]

export const experienceItems = [
  {
    company: 'emaratech',
    role: 'Senior Software Engineer',
    logoClass: 'emaratech',
    logoLabel: 'em',
    employmentType: 'Full-time',
    period: 'Dec 2019 - Present',
    duration: '6 yrs 6 mos',
    location: 'Dubai, United Arab Emirates \u00b7 On-site',
    details: [
      'Working on large-scale government and enterprise platforms within the real estate domain, supporting mission-critical systems used across multiple public-sector entities.',
      'Contributed across the full software lifecycle, including solution design, development, integrations, delivery, and production support.',
    ],
    skillsSummary:
      'Amazon Web Services (AWS), cloud platforms, enterprise integrations, and additional core skills.',
  },
  {
    company: 'Contour Software',
    logoClass: 'contour',
    logoLabel: 'CONTOUR',
    totalDuration: '2 yrs 9 mos',
    location: 'Lahore, Punjab, Pakistan',
    positions: [
      {
        title: 'Senior Software Engineer Team Lead',
        period: 'Apr 2018 - Dec 2019',
        duration: '1 yr 9 mos',
        details: [
          'Managed a development team of 3+ engineers, overseeing task allocation, code reviews, and mentoring.',
          'Provided architectural direction and production support for software platforms.',
        ],
      },
      {
        title: 'Senior Software Engineer',
        employmentType: 'Full-time',
        period: 'Apr 2017 - Apr 2018',
        duration: '1 yr 1 mo',
        details: [
          'Delivered software development and production support across enterprise platforms.',
          'Contributed to architecture decisions, code quality, and release execution.',
        ],
      },
    ],
  },
  {
    company: 'Systems Limited',
    logoClass: 'systems',
    logoLabel: 'systems',
    employmentType: 'Full-time',
    totalDuration: '2 yrs 6 mos',
    location: 'Lahore, Punjab, Pakistan',
    positions: [
      {
        title: 'Senior Software Engineer',
        period: 'Sep 2016 - Apr 2017',
        duration: '8 mos',
        details: [
          'Contributed to major systems integration and enterprise app modernization projects.',
          'Led sprint planning, system design, and production issue resolution.',
        ],
      },
      {
        title: 'Software Engineer',
        period: 'Nov 2014 - Aug 2016',
        duration: '1 yr 10 mos',
        details: ['Software development and support'],
      },
    ],
  },
  {
    company: 'CureMD',
    role: 'Software Engineer',
    logoClass: 'curemd',
    logoLabel: 'CureMD',
    employmentType: 'Full-time',
    period: 'Jul 2013 - Nov 2014',
    duration: '1 yr 5 mos',
    location: 'Lahore, Punjab, Pakistan',
    details: [
      'Designed and developed full-stack features in fast-paced Agile environments.',
      'Delivered bug fixes and enhancements for healthcare and business management solutions.',
    ],
  },
  {
    company: 'ImperialSoft Pvt. Ltd.',
    role: 'Junior Software Engineer',
    logoClass: 'imperialsoft',
    logoLabel: 'IS',
    period: 'Sep 2012 - Jul 2013',
    duration: '11 mos',
    location: 'Lahore',
    details: ['Application developer'],
  },
]

export const projectCards = [
  {
    icon: 'building',
    title: 'Government Digital Platform',
    text: 'Unified digital services for government agencies with multi-tenant architecture.',
    tags: ['.NET Core', 'Angular', 'SQL Server', 'Azure'],
    metrics: [
      ['2M+', 'Users'],
      ['500K+', 'Transactions/Day'],
      ['99.9%', 'Uptime'],
    ],
  },
  {
    icon: 'shield-badge',
    title: 'Identity & Access Management',
    text: 'Secure IAM solution with SSO, MFA, role-based access control, and audit trails.',
    tags: ['.NET Core', 'React', 'MongoDB', 'Azure'],
    metrics: [
      ['1M+', 'Users'],
      ['99.95%', 'Availability'],
      ['40%', 'Performance'],
    ],
  },
  {
    icon: 'cart',
    title: 'E-Commerce Platform',
    text: 'Scalable commerce system with payment integration and advanced order analytics.',
    tags: ['.NET Core', 'Angular', 'SQL Server', 'Redis'],
    metrics: [
      ['200K+', 'Orders'],
      ['1M+', 'Users'],
      ['35%', 'Performance'],
    ],
  },
  {
    icon: 'chart',
    title: 'Data Analytics Dashboard',
    text: 'Real-time analytics dashboard for business intelligence, KPIs, and reporting.',
    tags: ['.NET Core', 'React', 'SQL Server', 'Azure'],
    metrics: [
      ['10M+', 'Records'],
      ['50+', 'Reports'],
      ['60%', 'Faster Insights'],
    ],
  },
]

export const architectureBenefits = [
  {
    icon: 'layers',
    title: 'Modern Architecture',
    text: 'Microservices, event-driven workflows, and cloud-native patterns for resilience.',
  },
  {
    icon: 'gauge',
    title: 'Performance First',
    text: 'High-performance APIs, caching, and tuned data access for efficient systems.',
  },
  {
    icon: 'shield',
    title: 'Security & Reliability',
    text: 'Secure-by-design practices, data protection, and 99.9% uptime focus.',
  },
]

export const architectureDiagram = {
  clients: ['Web', 'Mobile', 'API'],
  services: [
    'User Service',
    'Order Service',
    'Payment Service',
    'Notification Service',
  ],
  dataLayer: ['SQL Server', 'MongoDB', 'Redis Cache'],
  externalServices: ['Email Service', 'Payment Gateway', 'Third-Party APIs'],
  cloudLabel: 'Azure / AWS Cloud',
}

export const testimonials = [
  {
    quote: 'Great personality, dedicated.',
    name: 'Rashad Maqsood',
    role: 'Software Project Manager',
    relationship: 'Colleague',
    context: 'Worked with Muhammad Husnain on the same team',
    date: 'September 15, 2020',
  },
  {
    quote:
      "I had the pleasure of working with Husnain for 2 years. I found him extremely competent and forward thinker. Not only he is ridiculously efficient with his own tasks but also help others with theirs. I always wondered about Husnain's ability to convince and get people on board with new ideas. He would be an asset to any team.",
    name: 'Aftab Ur Rehman',
    role: 'Senior Software Engineer | Full-Stack Developer | Cloud Architect',
    relationship: 'Colleague',
    context: 'Worked with Muhammad Husnain on the same team',
    date: 'June 25, 2019',
  },
  {
    quote:
      "I worked with Husnain very closely on a project at Contour Software, and I found him a very talented and smart developer. He got a good grip on the business domain, and the code very quickly and got productive within a week. When he was given a task on new technologies that he had not worked with before, he got back with implementation in a very short period of time.\n\nAny company with any business domain and technology stack would be lucky to have him as a team member.",
    name: 'Muhammad Arslan Sajid',
    role: 'TypeScript Engineer | React | Next.js | Open Source Contributor',
    relationship: 'Colleague',
    context: 'Worked with Muhammad Husnain on the same team',
    date: 'April 28, 2019',
  },
  {
    quote:
      'Husnain is enthusiastic and thrives on tackling difficult technical challenges. He is technically competent and is capable of solving tough problems with complex designs. He would be a great addition to any software engineering team.\n\nIt was a privilege working with him on the PNCVLR project.',
    name: 'Jahangir Shahzad',
    role: '.NET Architect | AngularJS Innovator | Team Leader',
    relationship: 'Senior Colleague',
    context:
      "Was senior to Muhammad Husnain, though not his direct manager",
    date: 'January 12, 2016',
  },
  {
    quote:
      'Husnain is a very good professional with brilliant ability of learning and adapting new things. He is hard working and very much committed to his assigned task.',
    name: 'Zafar Iqbal',
    role: 'Techno-Managerial Leader',
    relationship: 'Mentor',
    context: "Was Muhammad Husnain's mentor",
    date: 'January 10, 2016',
  },
  {
    quote:
      'I worked with Husnain on the VLR project. He has always been a great colleague to work with, always willing to jump in as part of the team, whether it be to fix a problem or to determine root cause. His problem solving capabilities are eminent. I would like to recommend him anytime.',
    name: 'Muhammad Salman',
    role: '.NET Engineer | Angular | SQL | AWS Solutions Architect',
    relationship: 'Colleague',
    context: 'Worked with Muhammad Husnain on the same team',
    date: 'December 31, 2015',
  },
  {
    quote:
      "Muhammad Husnain is not only an always punctual and open minded colleague but also an inspiring team player. Honest programmer who can be trusted - that's Muhammad Husnain! Creative, customer focused, energetic and forward thinking expert, understands complex matters even when outside of his direct area of expertise. When you get to connect with him, you'll discover an amazing person with unique skills!",
    name: 'Yaser Abbas',
    role: 'Co-founder, Depost AI | ML/AI & LLMs',
    relationship: 'Colleague',
    context: 'Worked with Muhammad Husnain on the same team',
    date: 'December 3, 2014',
  },
  {
    quote:
      'He is having a logical mind, and he is a hard worker and able to do work efficiently.',
    name: 'Sarwan Kumar',
    role: 'Senior Software Engineer | Java | Ruby on Rails | ReactJS',
    relationship: 'Friend',
    context: 'Studied together with Muhammad Husnain',
    date: 'July 9, 2012',
  },
]

export const contactItems = [
  {
    icon: 'mail',
    title: 'Email',
    value: 'husnain.ashraf.dev@gmail.com',
    href: 'mailto:husnain.ashraf.dev@gmail.com',
  },
  {
    icon: 'phone',
    title: 'Phone',
    value: '+971 50 123 4567',
    href: 'tel:+971501234567',
  },
  {
    icon: 'pin',
    title: 'Location',
    value: 'Dubai, UAE',
    href: '#contact',
  },
  {
    icon: 'linkedin',
    title: 'LinkedIn',
    value: 'linkedin.com/in/muhammad-husnain-ashraf',
    href: 'https://linkedin.com',
  },
]
