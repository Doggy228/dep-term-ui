import React from 'react'
import {connect} from 'react-redux'
import NoWorkPage from '../components/NoWorkPage'
import {push} from 'connected-react-router'
import {termInit} from '../actions/TermInit'
import {langSwitchToEN} from "../actions/LangChange";


const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
    goSys: () => {
        dispatch(langSwitchToEN());
        dispatch(push("?go=sys-signin"))
    },
    goTermInit: () => dispatch(termInit()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NoWorkPage);

