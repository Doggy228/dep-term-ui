import React from 'react'
import {connect} from 'react-redux'
import ClientHomePage from '../components/ClientHomePage'
import {push} from 'connected-react-router'
import {termState} from '../actions/TermState'


const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
    goSys: () => dispatch(push("/ui/sys/signin")),
    goTermState: () => dispatch(termState()),
    goOrderInput: () => dispatch(push("?go=client-orderinput"))
})

export default connect(mapStateToProps, mapDispatchToProps)(ClientHomePage);

