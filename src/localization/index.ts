import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ar from './translations/ar';
import en from './translations/en';

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v4',
    lng: 'ar',          
    fallbackLng: 'en',
    resources: {
      ar,
      en,
    },
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
