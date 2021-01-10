import React from 'react'
import Button from "@material-ui/core/Button";


class ClientHomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
        console.log("ClientHomePage::constructor")
    }

    componentDidMount() {
        console.log("ClientHomePage::componentDidMount")
        this.timerID = setInterval(
            () => this.tick(),
            10000
        );
    }

    componentWillUnmount() {
        console.log("ClientHomePage::componentWillUnmount")
        clearInterval(this.timerID);
    }

    tick() {
        console.log("ClientHomePage::tick")
        this.props.goTermState()
    }

    render() {
        const {} = this.props;
        return (
            <div>
                <Button onClick={()=>this.props.goOrderInput()}><img src="static/bg-client-home.png"/></Button>


            </div>
        );
    }
}

ClientHomePage.propTypes = {
};

export default ClientHomePage;
