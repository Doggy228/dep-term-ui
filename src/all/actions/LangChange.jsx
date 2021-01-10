import {ActionType} from "./ActionType";
import ukTranslation from '../../i18n/locales/uk.json'
import enTranslation from '../../i18n/locales/en.json'

export function langSwitchToUK() {
    const lang = {
        locale: "uk",
        messages: ukTranslation
    }
    return {type: ActionType.LANG_CHANGE, lang}
}

export function langSwitchToEN() {
    const lang = {
        locale: "en",
        messages: enTranslation
    }
    return {type: ActionType.LANG_CHANGE, lang}
}