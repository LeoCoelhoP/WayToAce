import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from '../locales/en.json';
import translationPT from '../locales/pt.json';

const resources = {
	en: {
		translation: translationEN,
	},
	pt: {
		translation: translationPT,
	},
};

const autoTranslate = localStorage.getItem('autoTranslate') === 'true';
const lng = autoTranslate
	? localStorage.getItem('lng')
		? navigator.language || navigator.userLanguage
		: 'en'
	: 'en';

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'en',
		lng,
		debug: true,
		interpolation: {
			escapeValue: false,
		},
		resources,
	});

export default i18n;
