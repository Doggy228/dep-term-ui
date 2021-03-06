import {Map} from 'immutable';
import {ActionType} from '../actions/ActionType'

function LangDomain(state = Map(), action) {
    switch (action.type) {
        case ActionType.LANG_CHANGE:
            return state.set("lang", action.lang)
        default:
            return state
    }
}

export default LangDomain