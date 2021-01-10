import React from 'react'
import Button from '@material-ui/core/Button'
import {FormattedMessage} from 'react-intl'

class NoWorkPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
        console.log("NoWorkPage::constructor")
    }

    componentDidMount() {
        console.log("NoWorkPage::componentDidMount")
        this.timerID = setInterval(
            () => this.tick(),
            10000
        );
    }

    componentWillUnmount() {
        console.log("NoWorkPage::componentWillUnmount")
        clearInterval(this.timerID);
    }

    tick() {
        console.log("NoWorkPage::tick")
        this.props.goTermInit()
    }

    render() {
        const {} = this.props;
        return (
            <div>
                <FormattedMessage id="app.name" tagName="h1" />
                <Button onClick={()=>this.props.goSys()}>Інженерне меню</Button>
                <img src="static/bg-nowork.png"/>
            </div>
        );
    }
}

NoWorkPage.propTypes = {
};

export default NoWorkPage;