import React from 'react'
import {connect} from 'react-redux'
import SysSignInPage from '../components/SysSignInPage'
import {push} from 'connected-react-router'
import {langSwitchToUK} from "../actions/LangChange";

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
    goCancel: () => {
        dispatch(langSwitchToUK());
        dispatch(push("?go=no-work"))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(SysSignInPage);

