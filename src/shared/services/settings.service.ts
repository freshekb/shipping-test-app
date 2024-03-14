import i18n, {Callback, TFunction} from 'i18next';
import {initReactI18next} from 'react-i18next';
import stringsRu from '../../../assets/i18n/ru-RU.json';
import stringsEn from '../../../assets/i18n/en.json';
import {SettingsModel} from "../models/SettingsModel";

/**
 * ---------------------------------------------------
 *  Setting Service contains settings set/get functions
 *  --------------------------------------------------
 */


/**
 * configure - set up app configs before use
 * @return: void
 */
const configure = () => {
    const resources = {
        en: {
            translation: stringsEn,
        },
        "ru-RU": {
            translation: stringsRu,
        },
    };

    i18n.use(initReactI18next).init({
        compatibilityJSON: 'v3',
        resources,
        lng: 'ru-RU',
        interpolation: {
            escapeValue: false,
        }
    });
}


/**
 * switchLanguage - Changes the language.  HINT: For easy testing - setting lng to 'cimode' will set t function to always return the key.
 * @param lang:string - language name,
 * @param callback function - The callback will be called as soon translations were loaded or an error occurs while loading.
 * @return Promise  - Returns function TFunction
 */
const switchLanguage = (lang: string, callback?: Callback): Promise<TFunction> => {
    //TODO: store lang value in storage
    return i18n.changeLanguage(lang, callback);
}


/**
 *  getSettings - get current  settings model
 *  @return: SettingsModel
 */
const getSettings = (): Promise<SettingsModel> => {
    const {language, changeLanguage} = i18n;
    return Promise.resolve({language});

}


export {
    configure,
    getSettings,
    switchLanguage
};
