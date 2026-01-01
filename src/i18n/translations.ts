export type Lang = 'es' | 'en';

export const translations = {
  es: {
    skipToContent: 'Saltar al contenido',
    aboutAndCV: 'Perfil',
    tableTitle: 'título',
    tableSubtitle: 'subtítulo',
    tableTag: 'tag',
    lastUpdatedOn: 'Actualizado el',
  },
  en: {
    skipToContent: 'Skip to content',
    aboutAndCV: 'Profile',
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
