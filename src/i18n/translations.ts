export type Lang = 'es' | 'en';

export const translations = {
  es: {
    skipToContent: 'Saltar al contenido',
    aboutAndCV: 'Perfil',
    tagline: 'Senior Backend Engineer · IA y backend en producción',
    heroTitle: 'Llevo sistemas de IA y backend a producción.',
    heroIntro:
      'Soy Senior Backend Engineer y llevo más de 12 años construyendo sistemas distribuidos. Hoy, en Acai Travel, diseño y construyo sistemas de IA que funcionan en producción: LLMs, flujos agénticos y todo lo necesario para poder fiarse de ellos. Aquí comparto lo que construyo y lo que voy aprendiendo por el camino.',
    writing: 'Artículos',
    featured: 'Destacado',
    minRead: 'min de lectura',
    tableTitle: 'título',
    tableSubtitle: 'subtítulo',
    tableTag: 'tag',
    lastUpdatedOn: 'Actualizado el',
  },
  en: {
    skipToContent: 'Skip to content',
    aboutAndCV: 'Profile',
    tagline: 'Senior Backend Engineer · Production AI & backend systems',
    heroTitle: 'I bring AI and backend systems into production.',
    heroIntro:
      "I'm a Senior Backend Engineer and I've spent more than 12 years building distributed systems. Today, at Acai Travel, I design and build AI systems that run in production: LLMs, agentic workflows and everything you need to be able to trust them. Here I share what I build and what I learn along the way.",
    writing: 'Writing',
    featured: 'Featured',
    minRead: 'min read',
    tableTitle: 'title',
    tableSubtitle: 'subtitle',
    tableTag: 'tag',
    lastUpdatedOn: 'Last updated on',
  },
} as const;

export type TranslationKey = keyof (typeof translations)['es'];

export function t(lang: Lang, key: TranslationKey): string {
  return translations[lang][key];
}

export function useTranslations(lang: Lang) {
  return (key: TranslationKey) => t(lang, key);
}
