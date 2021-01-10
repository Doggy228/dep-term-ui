import React from 'react'
import {connect} from 'react-redux'
import {push} from 'connected-react-router'
import ClientOrderInputPage from '../components/ClientOrderInputPage'


const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
    goClientHome: () => dispatch(push("?go=client-home")),
    goSys: () => dispatch(push("/ui/sys/signin")),
})


export default connect(mapStateToProps, mapDispatchToProps)(ClientOrderInputPage);

