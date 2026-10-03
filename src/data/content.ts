export const profile = {
  name: 'Ridge Maged',
  shortLogo: 'RIDG.',
  fullName: 'Ridge Maged Ibrahim',
  role: 'Software Engineer',
  email: 'ridgemaged@outlook.com',
  linkedin: 'https://linkedin.com/in/rm-m-22a8a22b9',
  github: 'https://github.com/Ridge45',
  location: 'Alexandria, Egypt',
  degree:
    'B.Sc. Computer Science, Software Engineering — King Salman International University · Graduated 2026',
  photo: '/profile-photo.jpg',
  pitch: 'Builds systems that turn raw signal into decisions.',
  sub: 'Software engineer who works the full path — from a sensor on a circuit board, through the backend, into the screen someone actually looks at.',
  interests: ['AI / ML', 'Full-stack', 'Cloud', 'IoT'],
  mantra: ['Build', 'Solve', 'Learn', 'Repeat'],
  cvUrl: '#contact',
}

export const stats = [
  { value: '3', label: 'Shipped projects', suffix: '' },
  { value: '3', label: 'Internships', suffix: '' },
  { value: '98', label: 'Write-volume cut (IoT)', suffix: '%' },
  { value: '85', label: 'NLP accuracy', suffix: '%+' },
]

export const about = {
  headline: 'Turning raw signal into real-world decisions.',
  paragraphs: [
    "I'm a software engineer based in Alexandria, Egypt, who likes projects where the hardware and the software have to agree with each other — where a sensor reading has to survive the trip to a screen and still mean something.",
    "Across three internships and a graduation project, I've worked the stack end to end: backend systems in Django and Flask, cross-platform apps in Flutter, cloud infrastructure on Huawei Cloud and Azure, and machine learning pipelines that actually run in real time.",
    'I care about shipping things that work under real conditions, not just in the demo.',
  ],
  quote: 'Sense → Stream → Decide.',
  facts: [
    { label: 'LOCATION', value: 'Alexandria, Egypt' },
    { label: 'FOCUS', value: 'Full-stack, cloud, applied ML' },
    { label: 'STATUS', value: 'Graduated June 2026' },
  ],
}

export const projects = [
  {
    id: 'iot',
    chip: 'GRADUATION PROJECT',
    featured: true,
    title: 'IoT Real-Time Health Monitor',
    period: '2025 — 2026',
    desc: 'Wearable health system end-to-end: ESP32 streams heart rate, SpO2, motion, and temperature into Firebase. A Python rule engine plus Random Forest classifies alerts into 4 severity tiers. Flutter app shows live vitals on iOS and Android.',
    highlights: [
      'Cut Firebase write volume by ~98% with server-side aggregation',
      'Live inference pipeline — not notebook-only ML',
      '4-screen Flutter client for vitals, insights, breathe, intervals',
    ],
    stack: ['ESP32', 'Flutter', 'Firebase', 'Python', 'ML'],
    github: 'https://github.com/Ridge45',
    images: [
      '/assets/iot/iot-1.jpg',
      '/assets/iot/iot-2.jpg',
      '/assets/iot/iot-3.jpg',
      '/assets/iot/iot-4.jpg',
      '/assets/iot/iot-5.jpg',
      '/assets/iot/iot-6.jpg',
      '/assets/iot/iot-7.jpg',
    ],
    video: null as string | null,
  },
  {
    id: 'restaurant',
    chip: 'ITI CAPSTONE',
    featured: true,
    title: 'Restaurant Management System',
    period: '2025',
    desc: 'Full-stack restaurant platform from schema to UI: role-based access for admin, staff, and kitchen, with real-time order tracking and sub-200ms API responses.',
    highlights: [
      'Sub-200ms API responses',
      '3 user roles with distinct workflows',
      'Automated front-of-house → kitchen handoff',
    ],
    stack: ['Django', 'PostgreSQL', 'JavaScript', 'REST'],
    github: 'https://github.com/Ridge45',
    images: [] as string[],
    video: '/assets/restaurant-demo.mp4',
  },
  {
    id: 'nlp',
    chip: 'ML PROJECT',
    featured: false,
    title: 'Arabic NLP Sentiment Analysis',
    period: '2026',
    desc: 'Supervised sentiment classifier for Arabic customer reviews — full preprocessing pipeline feeding Scikit-learn, reaching 85%+ accuracy across 66,000+ reviews.',
    highlights: [
      '85%+ accuracy across 66,000+ reviews',
      'Full preprocessing → model pipeline',
    ],
    stack: ['Python', 'Scikit-learn', 'NLP', 'TF-IDF'],
    github: 'https://github.com/Ridge45',
    images: [] as string[],
    video: null as string | null,
  },
]

export const experience = [
  {
    year: '2025',
    date: 'AUG — SEP 2025',
    role: 'Full-Stack Development Intern',
    org: 'Information Technology Institute (ITI) · Remote',
    desc: 'Built REST APIs and full-stack apps with Django, Flask, and PostgreSQL — 30% faster API responses and real-time features.',
    type: 'work' as const,
  },
  {
    year: '2025',
    date: 'JUL — AUG 2025',
    role: 'AI / Machine Learning Intern',
    org: 'Huawei ICT Academy · On-site',
    desc: 'Built and evaluated supervised models (Random Forest, SVM, K-Means); up to 15% accuracy gains via feature engineering.',
    type: 'work' as const,
  },
  {
    year: '2024',
    date: 'SEP — OCT 2024',
    role: 'Cloud Computing Intern',
    org: 'Huawei ICT Academy · On-site',
    desc: 'Provisioned IaaS/PaaS infrastructure; led an architecture proposal ranked 1st in cohort (20% efficiency gain).',
    type: 'work' as const,
  },
  {
    year: '2026',
    date: 'JUN 2026',
    role: 'B.Sc. Computer Science',
    org: 'King Salman International University',
    desc: 'Software Engineering track. Graduation project: IoT Real-Time Health Monitor.',
    type: 'edu' as const,
  },
]

export const skills = [
  {
    group: 'Languages',
    items: ['Dart', 'Python', 'JavaScript', 'Java', 'C++'],
  },
  {
    group: 'Frameworks & Tools',
    items: ['Django', 'Flask', 'Flutter', 'REST API', 'Git'],
  },
  {
    group: 'Cloud & Data',
    items: ['Firebase', 'PostgreSQL', 'MongoDB', 'Azure', 'AWS'],
  },
  {
    group: 'AI / ML',
    items: ['Scikit-learn', 'Pandas', 'NumPy', 'Random Forest', 'NLP'],
  },
]

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]
