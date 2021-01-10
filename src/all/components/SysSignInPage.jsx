import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from "@material-ui/core/TextField";
import {FormattedMessage} from 'react-intl'

class SysSignInPage extends React.Component {
    componentDidMount() {

    }

    render() {
        const {} = this.props;
        return (
            <div>
                <FormattedMessage id="app.name" tagName="h1"/>
                <Button onClick={() => this.props.goCancel()}>Повернутися</Button>
                <img src="static/bg-client-home.png"/>
                <TextField/>
            </div>
        );
    }
}

SysSignInPage.propTypes = {};

export default SysSignInPage;