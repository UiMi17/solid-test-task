import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './en/en.json';
import translationUA from './ua/ua.json';
import getCurrentLanguage from "../utils/getCurrentLanguage.ts";

i18next.use(initReactI18next).init({
    lng: getCurrentLanguage(),
    debug: true,
    resources: {
        en: {
            translation: translationEN
        },
        ua: {
            translation: translationUA
        }
    },
    interpolation: {
        escapeValue: false,
    },
});