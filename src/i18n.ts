import { createI18n } from "vue-i18n";
import enUS from "./locales/en-us.json";
import ptBR from "./locales/pt-br.json";
import deDE from './locales/de-de.json';
import ruRU from './locales/ru-ru.json'

export const i18n = createI18n({
  locale: 'English',
  fallbackLocale: 'Português',
  sync: true,
  messages: {
    English: enUS,
    Português: ptBR,
    Deutsch: deDE,
    Русский: ruRU
  },
})