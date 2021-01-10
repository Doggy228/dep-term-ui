import React from 'react'
import {connect} from 'react-redux'
import IntlProviderWrapper from "./IntlProviderWrapper";


const mapStateToProps = (state) => ({
    lang: state.LangDomain.get("lang")
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(IntlProviderWrapper);

