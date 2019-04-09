import I18n from 'react-native-i18n';

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true;

// Define the supported translations
I18n.translations = {
  'en': require('./en.json'), //English text
  'hmn': require('./hmn.json'), //Hmong text
  'spa': require('./spa.json'), //Spanish text
};

export default I18n;