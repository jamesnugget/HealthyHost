import I18n from "i18n-js";
import * as RNLocalize from "react-native-localize";

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  I18n.locale = locales[0].languageTag;
}

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true;

// Define the supported translations
I18n.translations = {
  'en': require('./en.json'), //English text
  'hmn': require('./hmn.json'), //Hmong text
  'spa': require('./spa.json'), //Spanish text
};

export default I18n;