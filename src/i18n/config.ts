import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en/en.json';
import ua from './ua/ua.json';

export const defaultNS = 'ns1';

i18next.use(initReactI18next).init({
    lng: 'en',
    debug: true,
    resources: {
        en,
        ua
    },
    defaultNS,
});