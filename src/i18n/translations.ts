export type Lang = 'es' | 'en';

export const translations = {
  es: {
    // Header
    skipToContent: 'Saltar al contenido',
    aboutAndCV: 'About & CV',

    // PostTable
    tableTitle: 'título',
    tableSubtitle: 'subtítulo',
    tableTag: 'tag',

    // BlogPost
    lastUpdatedOn: 'Actualizado el',
  },
  en: {
    // Header
    skipToContent: 'Skip to content',
    aboutAndCV: 'About & CV',

    // PostTable
    tableTitle: 'title',
    tableSubtitle: 'subtitle',
    tableTag: 'tag',

    // BlogPost
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
