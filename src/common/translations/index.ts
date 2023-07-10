import i18next from "i18next";
import { initReactI18next } from "react-i18next"

import enTranslation from './lang/en.json';
import viTranslation from './lang/vi.json';

i18next.use(initReactI18next).init({
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    resources: {
        en: {
            translation: enTranslation,
        },
        vi: {
            translation: viTranslation,
        },
    },
});
