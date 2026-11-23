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

const linkedin = 'https://www.linkedin.com/in/apascualco/';

export const aboutContent: Record<Lang, AboutContent> = {
  es: {
    title: 'Sobre mi',
    intro: [
      'Soy <b>Alberto Pascual</b>, <b>Senior Backend Engineer</b> con más de <b>12 años</b> construyendo sistemas que aguantan en producción. Hoy me dedico a uno de los retos más difíciles del momento: <b>llevar la IA a producción</b> con la misma fiabilidad que exige cualquier plataforma crítica.',
      'En <b>Acai Travel</b> diseño y construyo la infraestructura de <b>agentes de IA</b> que automatiza operaciones de viaje complejas (reglas tarifarias, incidencias de vuelos, reembolsos y comunicación con viajeros), un trabajo que en grandes aerolíneas y agencias todavía depende de centros de atención con miles de personas. Trabajo con <b>orquestación de LLMs</b>, <b>flujos agénticos</b> e integración con herramientas externas, con <b>evaluación</b> y <b>observabilidad</b> de primer nivel, para clientes como <b>TravelPerk</b>, <b>Kiwi.com</b> o <b>Lufthansa City Center</b>.',
      'Mi trayectoria tiene un hilo conductor: llegar pronto a la siguiente ola tecnológica y aplicarle el rigor de los <b>sistemas distribuidos</b>. Fui el <b>primer ingeniero</b> de <b>INCOM</b>, donde construí la plataforma desde cero (APIs, pasarelas de pago e infraestructura como código) y acabé asumiendo también el puesto de <b>Chief Product Officer</b>. En <b>BLOOCK</b> lideré el backend cuando pocos sabían llevar blockchain a producción; en <b>SEAT:CODE</b> participé durante más de tres años en la arquitectura, el control de costes y la planificación de capacidad del backend; en <b>DEXMA</b> trabajé en un motor de ingesta IoT de alto volumen con cálculo en tiempo real, y en <b>Wallapop</b>, en la modernización de servicios críticos.',
      `Me muevo con soltura entre <b>tecnología, producto y negocio</b>, he sido mentor de equipos en pleno crecimiento y defiendo las prácticas que hacen que el software dure: <b>contratos claros</b>, <b>DDD</b>, <b>arquitectura limpia</b> y <b>control de costes</b> desde el primer día. Fuera del código, soy <b>lector curioso</b> y <b>pianista aficionado</b>. Si estás llevando IA a producción o necesitas convertir una idea en una plataforma sólida, <a href="${linkedin}" target="_blank" rel="noopener noreferrer">hablemos</a>.`,
    ],
    downloadCV: 'Descargar CV',
    timeline: [
      {
        position: 'left',
        date: 'SSE · AI/ML <- [ Oct 2025 - Actualidad ]',
        company: 'Acai Travel',
        description:
          'Infraestructura de IA agéntica para operaciones de viaje post-reserva: reglas tarifarias, incidencias de vuelos (IRROPS), reembolsos y comunicación con viajeros. Orquestación de LLMs, flujos de varios pasos, integración con herramientas y APIs externas, evaluación y observabilidad. Clientes como TravelPerk, Kiwi.com y Lufthansa City Center.',
      },
      {
        position: 'right',
        date: '[ May 2025 - Ago 2025 ] -> SSE',
        company: 'Wallapop',
        description:
          'Equipo SELVA: modernización de servicios backend críticos de uno de los marketplaces más conocidos de Europa. Detección de cuellos de botella, propuestas concretas de arquitectura y procesos para mejorar la fiabilidad, y difusión de buenas prácticas de ingeniería.',
      },
      {
        position: 'left',
        date: 'SSE <- [ Dec 2021 - May 2025 ]',
        company: 'SEAT:CODE',
        description:
          'Equipo backend de OVS: definición de arquitectura, control de costes y planificación de capacidad y rendimiento. Caché distribuido y migración a una arquitectura de servicios más eficiente, mejoras en la experiencia de desarrollo y participación activa en los chapters técnicos de backend.',
      },
      {
        position: 'right',
        date: '[ Mar 2022 - May 2024 ] -> Technical Lead · CPO',
        company: 'INCOM',
        description:
          'Primer ingeniero, codo con codo con la dirección: plataforma y APIs desde cero, integraciones con pasarelas de pago e infraestructura como código, optimizando costes sin perder rendimiento. Desde noviembre de 2023, también Chief Product Officer: visión, estrategia y roadmap de producto entre negocio, tecnología y experiencia de usuario.',
      },
      {
        position: 'left',
        date: 'Lead Backend Engineer <- [ Sep 2021 - Dec 2021 ]',
        company: 'BLOOCK',
        description:
          'Liderazgo del backend de una startup blockchain en plena expansión, llevando esa tecnología a producción: integración y optimización de la API existente y mentoría a un equipo joven que crecía rápido.',
      },
      {
        position: 'right',
        date: '[ Oct 2020 - Sept 2021 ] -> SSE',
        company: 'Dexma',
        description:
          'Equipo de plataforma: estabilidad y nuevas funcionalidades, integraciones con dispositivos IoT y un motor de ingesta de alto volumen con cálculo de métricas en tiempo real, fiable a escala.',
      },
      {
        position: 'left',
        date: 'Backend Engineer <- [ Ene 2018 - Oct 2020 ]',
        company: 'VERYCHIC',
        description:
          'Único ingeniero backend: API y agentes de consolidación de datos, un monolito con principios SOLID y arquitectura hexagonal, lambdas en AWS para recoger datos y procesos batch con Spring, además de la infraestructura cloud.',
      },
      {
        position: 'right',
        date: '[ Sep 2014 - Ene 2018 ] -> Software Developer',
        company: 'GFI España',
        description:
          'Consultoría para múltiples clientes, de junior a responsabilidades cada vez más complejas: diseño y desarrollo de APIs, herramientas de instrumentación para Oracle, WebSphere y Tomcat, y la definición de una arquitectura privada para un cliente.',
      },
    ],
    languagesTitle: '- Idiomas',
    languages: [
      { name: 'Español', level: 'nativo' },
      { name: 'Catalán', level: 'nativo' },
      { name: 'Inglés', level: 'B2 (intermedio alto), preparando el C1' },
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
        date: 'Online',
        description:
          'Grado en Ingeniería Informática en formato online, que compagino con mi trabajo a tiempo completo. Disfruto especialmente del enfoque práctico y la flexibilidad de la UOC, que me permite profundizar en temas que me apasionan y conectar la teoría con la práctica profesional.',
      },
    ],
  },
  en: {
    title: 'About me',
    intro: [
      "I'm <b>Alberto Pascual</b>, a <b>Senior Backend Engineer</b> with <b>12+ years</b> of building systems that hold up in production. Today I focus on one of the hardest problems in tech right now: <b>bringing AI into production</b> with the reliability any critical platform demands.",
      'At <b>Acai Travel</b>, I design and build the infrastructure behind <b>AI agents</b> that automate complex travel operations (fare rules, flight disruptions, refunds and traveler communications), work that major airlines and agencies still run through call centers with thousands of agents. I work on <b>LLM orchestration</b>, <b>agentic workflows</b> and tool integrations, with first-class <b>evaluation</b> and <b>observability</b>, for customers such as <b>TravelPerk</b>, <b>Kiwi.com</b> and <b>Lufthansa City Center</b>.',
      'My career has a common thread: getting to the next technology wave early and applying <b>distributed-systems</b> rigor to it. I was the <b>founding engineer</b> at <b>INCOM</b>, where I built the platform from scratch (APIs, payment gateways and infrastructure as code) and also took on the role of <b>Chief Product Officer</b>. At <b>BLOOCK</b> I led the backend when few engineers knew how to take blockchain to production; at <b>SEAT:CODE</b> I spent over three years helping define backend architecture, cost control and capacity planning; at <b>DEXMA</b> I worked on a high-throughput IoT ingestion engine with real-time calculations; and at <b>Wallapop</b>, on modernizing business-critical services.',
      `I'm comfortable working across <b>technology, product and business</b>, I've mentored fast-growing teams, and I champion the practices that make software last: <b>clear contracts</b>, <b>DDD</b>, <b>clean architecture</b> and <b>cost awareness</b> from day one. Outside of code, I'm a <b>curious reader</b> and an <b>amateur pianist</b>. If you're bringing AI into production or need to turn an idea into a solid platform, <a href="${linkedin}" target="_blank" rel="noopener noreferrer">let's talk</a>.`,
    ],
    downloadCV: 'Download CV',
    timeline: [
      {
        position: 'left',
        date: 'SSE · AI/ML <- [ Oct 2025 - Present ]',
        company: 'Acai Travel',
        description:
          'Agentic AI infrastructure for post-booking travel operations: fare rules, flight disruptions (IRROPS), refunds, and traveler communications. LLM orchestration, multi-step workflows, integration with external tools and APIs, evaluation, and observability. Customers include TravelPerk, Kiwi.com, and Lufthansa City Center.',
      },
      {
        position: 'right',
        date: '[ May 2025 - Aug 2025 ] -> SSE',
        company: 'Wallapop',
        description:
          'SELVA team: modernized business-critical backend services at one of Europe’s best-known marketplaces. Identified technical bottlenecks, proposed concrete architecture and process improvements to raise reliability, and spread engineering best practices.',
      },
      {
        position: 'left',
        date: 'SSE <- [ Dec 2021 - May 2025 ]',
        company: 'SEAT:CODE',
        description:
          'OVS backend team: architecture definition, cost control, and capacity and performance planning. Distributed caching and a migration to a more efficient service architecture, developer-experience improvements, and active participation in backend technical chapters.',
      },
      {
        position: 'right',
        date: '[ Mar 2022 - May 2024 ] -> Technical Lead · CPO',
        company: 'INCOM',
        description:
          'Founding engineer, working hand in hand with the board: platform and APIs from scratch, payment gateway integrations, and infrastructure as code, cutting costs without sacrificing performance. From November 2023, also Chief Product Officer: product vision, strategy, and roadmap across business, technology, and user experience.',
      },
      {
        position: 'left',
        date: 'Lead Backend Engineer <- [ Sep 2021 - Dec 2021 ]',
        company: 'BLOOCK',
        description:
          'Led the backend of a fast-growing blockchain startup, taking that technology into production: integration and optimization of the existing API, and mentoring a young, rapidly expanding team.',
      },
      {
        position: 'right',
        date: '[ Oct 2020 - Sept 2021 ] -> SSE',
        company: 'Dexma',
        description:
          'Platform team: stability and new features, IoT device integrations, and a high-throughput ingestion engine with real-time metric calculations, reliable at scale.',
      },
      {
        position: 'left',
        date: 'Backend Engineer <- [ Jan 2018 - Oct 2020 ]',
        company: 'VERYCHIC',
        description:
          'Sole backend engineer: API and data consolidation agents, a monolith built on SOLID principles and Hexagonal Architecture, AWS Lambdas for data collection, and Spring batch processes, plus the cloud infrastructure.',
      },
      {
        position: 'right',
        date: '[ Sep 2014 - Jan 2018 ] -> Software Developer',
        company: 'GFI Spain',
        description:
          'Consulting for multiple clients, growing from junior to increasingly complex responsibilities: API design and development, instrumentation tooling for Oracle, WebSphere, and Tomcat, and defining a private architecture for one client.',
      },
    ],
    languagesTitle: '- Languages',
    languages: [
      { name: 'Spanish', level: 'native' },
      { name: 'Catalan', level: 'native' },
      { name: 'English', level: 'B2 (upper-intermediate), preparing for C1' },
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
        date: 'Online',
        description:
          'Online degree in Computer Engineering, which I combine with full-time work. I especially enjoy the practical approach and flexibility of the UOC, which allows me to dive deeper into topics I am passionate about and connect theory with professional practice.',
      },
    ],
  },
};
