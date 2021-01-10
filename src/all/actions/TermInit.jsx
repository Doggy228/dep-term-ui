import {ActionType} from "./ActionType";
import axiosTermApi from "../axios/axiosTermApi"
import {push} from 'connected-react-router'

const _termInit = (term) => ({
    type: ActionType.TERM_INIT,
    term
});

export const termInit = () => {
    return (dispatch) => {
        return axiosTermApi.get('cdn/covid-19/cpa/')
            .then(result => {
                //dispatch(_termInit(result.data))
                console.log("termInit::OK")
                dispatch(push("?go=client-home"))
            })
            .catch((error) => {
                console.log("termInit::ERR::"+error)
                //dispatch(_termInit(null))
                //dispatch(push("/ui"))
            })
    }
}