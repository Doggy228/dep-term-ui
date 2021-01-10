import React from 'react'
import ReactDOM from 'react-dom'
import '../index.css'
import Root from './Root'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles'
import ConfigureStore from '../all/store/ConfigureStore'
import {createBrowserHistory} from 'history'
import IntlProviderWrapperFunc from './IntlProviderWrapperFunc'
import {langSwitchToUK} from '../all/actions/LangChange'

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#888888',
            //main: '#6b6b6b',
            main: '#00008B',
            dark: '#4a4a4a',
            contrastText: '#fff',
        },
        secondary: {
            light: '#888888',
            //main: '#6b6b6b',
            main: '#ff0000',
            dark: '#4a4a4a',
            contrastText: '#fff',
        },
    },
    typography: {
        useNextVariants: true,
    }
})

const history = createBrowserHistory()
const store = ConfigureStore(history);
store.dispatch(langSwitchToUK());

ReactDOM.render(
    <IntlProviderWrapperFunc store={store} history={history}>
        <MuiThemeProvider theme={theme}>
            <Root store={store} history={history}/>
        </MuiThemeProvider>
    </IntlProviderWrapperFunc>,
    document.getElementById('root')
)

