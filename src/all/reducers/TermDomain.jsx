import {Map} from 'immutable';
import {ActionType} from '../actions/ActionType'

function TermDomain(state = Map(), action) {
    switch (action.type) {
        case ActionType.TERM_INIT:
            return state.set("term", action.term)
        default:
            return state
    }
}

export default TermDomain