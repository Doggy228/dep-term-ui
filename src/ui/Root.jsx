import React from 'react'
import {Provider} from 'react-redux'
import PropTypes from 'prop-types'
import {ConnectedRouter} from 'connected-react-router'
import {Route, Switch} from 'react-router'
import NoWorkPageFunc from "../all/containers/NoWorkPageFunc";
import ClientHomePageFunc from "../all/containers/ClientHomePageFunc";
import SysSignInPageFunc from "../all/containers/SysSignInPageFunc";
import ClientOrderInputPageFunc from "../all/containers/ClientOrderInputPageFunc";



const Root = ({store, history}) => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Switch>
                    <Route render={(props) => {
                        if (props && props.location && props.location.search) {
                            if (props.location.search == '?go=client-home') {
                                return (<ClientHomePageFunc/>)
                            } else if (props.location.search == '?go=sys-signin') {
                                return (<SysSignInPageFunc/>)
                            } else if (props.location.search == '?go=client-orderinput') {
                                return (<ClientOrderInputPageFunc/>)
                            }
                        }
                        return (<NoWorkPageFunc/>)
                    }}/>
                </Switch>
            </div>
        </ConnectedRouter>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
}

export default Root;