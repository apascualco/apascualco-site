import type { Lang } from './translations';

export interface TimelineItem {
  position: 'left' | 'right';
  date: string;
  company: string;
  description: string;
}

export interface EducationItem {
  institution: string;
  date: string;
  description: string;
}

export interface LanguageItem {
  name: string;
  level: string;
}

export interface AboutContent {
  title: string;
  intro: string[];
  downloadCV: string;
  timeline: TimelineItem[];
  languagesTitle: string;
  languages: LanguageItem[];
  educationTitle: string;
  education: EducationItem[];
}

export const aboutContent: Record<Lang, AboutContent> = {
  es: {
    title: 'Sobre mi',
    intro: [
      'Soy <b>Alberto Pascual</b>, y voy más allá del rol de <b>Senior Backend Engineer</b>. Con más de <b>10 años de experiencia</b> diseñando y construyendo <b>soluciones escalables</b>, aporto una visión que une <b>arquitectura backend</b>, <b>eficiencia en costes</b> y <b>cultura DevOps</b>, siempre con el objetivo de que la tecnología genere <b>verdadero valor</b>.',
      'He tenido la oportunidad de trabajar con grandes personas en equipos de todos los tamaños en compañías como <b>SEAT:CODE</b>, <b>INCOM</b>, <b>BLOOCK</b> y <b>DEXMA</b>. En <b>SEAT:CODE</b> participé en la mejora del producto incorporando <b>caché distribuido</b> y migrando hacia una <b>arquitectura de servicios más eficiente</b>. En <b>VERYCHIC</b> impulsé <b>buenas prácticas de ingeniería</b> aplicando <b>principios SOLID</b> y <b>Clean Architecture</b>, reforzando la <b>calidad</b> y <b>mantenibilidad del software</b>.',
      'Mi perfil combina lo <b>técnico</b> con lo <b>personal</b>: <b>lector curioso</b>, <b>pianista aficionado</b> y, sobre todo, un apasionado de <b>resolver retos complejos</b> que van más allá de los <b>límites conocidos</b>, siempre buscando <b>nuevas perspectivas</b> y <b>soluciones creativas</b>.',
    ],
    downloadCV: 'Descargar CV',
    timeline: [
      {
        position: 'left',
        date: 'SSE <- [ Dec 2021 ]',
        company: 'SEAT:CODE',
        description:
          'Definición de arquitectura backend, control de costes y mejora continua, con colaboración transversal entre equipos.',
      },
      {
        position: 'right',
        date: '[ Mar 2022 - May 2024 ] -> Technical Lead',
        company: 'INCOM',
        description:
          'Desarrollo desde cero de plataforma y APIs, integración de pagos y control de costes, con responsabilidad total de backend e infra.',
      },
      {
        position: 'left',
        date: 'Lead Engineer <- [ Sep 2021 - Dec 2021 ]',
        company: 'BLOOCK',
        description:
          'Integración y mejora de APIs blockchain y mentoría a un equipo en rápido crecimiento.',
      },
      {
        position: 'right',
        date: '[ Oct 2020 - Sept 2021 ] -> SSE',
        company: 'Dexma',
        description:
          'Estabilidad de la plataforma, ingesta en tiempo real y desarrollo de integraciones IoT.',
      },
      {
        position: 'left',
        date: 'Backend Engineer <- [ Ene 2018 - Oct 2020 ]',
        company: 'VERYCHIC',
        description:
          'Desarrollo de APIs, procesos batch y lambdas en AWS, aplicando principios SOLID y hexagonal.',
      },
      {
        position: 'right',
        date: '[ Sep 2014 - Ene 2018 ] -> Software Developer',
        company: 'GFI España',
        description: 'Desarrollo de proyectos para múltiples clientes en consultoría tecnológica.',
      },
    ],
    languagesTitle: '- Idiomas',
    languages: [
      { name: 'Español', level: 'nativo' },
      { name: 'Catalán', level: 'lengua paterna' },
      { name: 'Inglés', level: 'nivel intermedio (en progreso)' },
    ],
    educationTitle: '- Formación académica',
    education: [
      {
        institution: 'INSTITUT OBERT DE CATALUNYA (IOC)',
        date: '2013',
        description: 'Técnico superior en desarrollo de aplicaciones multiplataforma.',
      },
      {
        institution: 'UNIVERSITAT OBERTA DE CATALUNYA (UOC)',
        date: 'Actualidad',
        description:
          'Actualmente cursando el grado en Ingeniería Informática. Disfruto especialmente del enfoque práctico y la flexibilidad de la UOC, que me permite profundizar en temas que me apasionan y conectar la teoría con la práctica profesional.',
      },
    ],
  },
  en: {
    title: 'About me',
    intro: [
      "I'm <b>Alberto Pascual</b>, and I go beyond the role of <b>Senior Backend Engineer</b>. With more than <b>10 years of experience</b> designing and building <b>scalable solutions</b>, I bring a vision that combines <b>backend architecture</b>, <b>cost efficiency</b>, and <b>DevOps culture</b>, always aiming for technology to deliver <b>true value</b>.",
      "I've had the opportunity to work with great people in teams of all sizes at companies such as <b>SEAT:CODE</b>, <b>INCOM</b>, <b>BLOOCK</b>, and <b>DEXMA</b>. At <b>SEAT:CODE</b>, I contributed to product improvement by implementing <b>distributed caching</b> and migrating towards a more <b>efficient service-oriented architecture</b>. At <b>VERYCHIC</b>, I promoted <b>engineering best practices</b> by applying <b>SOLID principles</b> and <b>Clean Architecture</b>, strengthening both <b>quality</b> and <b>software maintainability</b>.",
      'My profile combines the <b>technical</b> with the <b>personal</b>: a <b>curious reader</b>, an <b>amateur pianist</b>, and above all, someone passionate about <b>solving complex challenges</b> that go beyond <b>known limits</b>, always seeking <b>new perspectives</b> and <b>creative solutions</b>.',
    ],
    downloadCV: 'Download CV',
    timeline: [
      {
        position: 'left',
        date: 'SSE <- [ Dec 2021 ]',
        company: 'SEAT:CODE',
        description:
          'Backend architecture design, cost control, and continuous improvement, with cross-team collaboration.',
      },
      {
        position: 'right',
        date: '[ Mar 2022 - May 2024 ] -> Technical Lead',
        company: 'INCOM',
        description:
          'Built the platform and APIs from scratch, integrated payment systems, and implemented cost control, with full responsibility for backend and infrastructure.',
      },
      {
        position: 'left',
        date: 'Lead Engineer <- [ Sep 2021 - Dec 2021 ]',
        company: 'BLOOCK',
        description:
          'API integration and improvement in blockchain solutions, while mentoring a fast-growing team.',
      },
      {
        position: 'right',
        date: '[ Oct 2020 - Sept 2021 ] -> SSE',
        company: 'Dexma',
        description:
          'Ensured platform stability, developed real-time ingestion pipelines, and implemented IoT integrations.',
      },
      {
        position: 'left',
        date: 'Backend Engineer <- [ Jan 2018 - Oct 2020 ]',
        company: 'VERYCHIC',
        description:
          'Developed APIs, batch processes, and AWS Lambdas, applying SOLID principles and Hexagonal Architecture.',
      },
      {
        position: 'right',
        date: '[ Sep 2014 - Jan 2018 ] -> Software Developer',
        company: 'GFI Spain',
        description:
          'Delivered projects for multiple clients in a technology consultancy environment.',
      },
    ],
    languagesTitle: '- Languages',
    languages: [
      { name: 'Spanish', level: 'native' },
      { name: 'Catalan', level: 'native' },
      { name: 'English', level: 'intermediate level (in progress)' },
    ],
    educationTitle: '- Education',
    education: [
      {
        institution: 'INSTITUT OBERT DE CATALUNYA (IOC)',
        date: '2013',
        description: 'Higher Technician in Multiplatform Application Development.',
      },
      {
        institution: 'UNIVERSITAT OBERTA DE CATALUNYA (UOC)',
        date: 'Present',
        description:
          'Currently pursuing a degree in Computer Engineering. I especially enjoy the practical approach and flexibility of the UOC, which allows me to dive deeper into topics I am passionate about and connect theory with professional practice.',
      },
    ],
  },
};
