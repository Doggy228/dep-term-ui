import {ActionType} from "./ActionType";
import axiosTermApi from "../axios/axiosTermApi"
import {push} from 'connected-react-router'

const _termState = (term) => ({
    type: ActionType.TERM_STATE,
    term
});

export const termState = () => {
    return (dispatch) => {
        return axiosTermApi.get('cdn/covid-19/cpa/1111')
            .then(result => {
                //dispatch(_termState(result.data))
                console.log("termState::OK")
            })
            .catch((error) => {
                console.log("termState::ERR::"+error)
                //dispatch(_termState(null))
                dispatch(push("?go=no-work"))
            })
    }
}