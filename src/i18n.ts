import { createI18n } from "vue-i18n";
import enUS from "./locales/en-us.json";
import ptBR from "./locales/pt-br.json";
import deDE from './locales/de-de.json';
import ruRU from './locales/ru-ru.json';

function getSystemLanguage() {
  const languageMap: Record<string,string> = {
    pt: 'Português',
    de: 'Deutsch',
    ru: 'Русский'
  };

  const browserLang = navigator.language || 'en';
  const shortLang = browserLang.substring(0, 2);

  return languageMap[shortLang] || 'English';
}

export const i18n = createI18n({
  locale: getSystemLanguage(),
  fallbackLocale: 'English',
  sync: true,
  messages: {
    English: enUS,
    Português: ptBR,
    Deutsch: deDE,
    Русский: ruRU
  },
});
