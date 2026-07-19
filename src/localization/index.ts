import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { I18nManager } from 'react-native';
import ar from './translations/ar';
import en from './translations/en';

export const setLanguageDirection = (language: string) => {
  const isRTL = language === 'ar';

  I18nManager.allowRTL(isRTL);
  I18nManager.forceRTL(isRTL);
};

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
  })
  .then(() => {
    setLanguageDirection(i18n.resolvedLanguage || i18n.language);
  });

i18n.on('languageChanged', (language) => {
  setLanguageDirection(language);
});

export default i18n;
