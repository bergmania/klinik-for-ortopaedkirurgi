import { da, type Translations, type Treatment, type TreatmentCategory, type PatientGuide } from './da';

// Default language
export const defaultLang = 'da';

// Available languages
export const languages = {
  da: 'Dansk',
} as const;

export type Lang = keyof typeof languages;

// Translations map
const translations: Record<Lang, Translations> = {
  da,
};

// Get translations for a specific language
export function t(lang: Lang = defaultLang): Translations {
  return translations[lang] || translations[defaultLang];
}

// Get current language from URL (for future multi-language support)
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) {
    return lang as Lang;
  }
  return defaultLang;
}

// Export default translations for convenience
export const i18n = t(defaultLang);

// Re-export types
export type { Translations, Treatment, TreatmentCategory, PatientGuide };
