import { createI18n } from "vue-i18n";
import enUS from "./locales/en-us.json";
import ptBR from "./locales/pt-br.json";

export const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en: enUS,
        pt: ptBR
    }
})