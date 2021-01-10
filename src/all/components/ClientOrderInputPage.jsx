import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {injectIntl} from 'react-intl'
import {styled} from '@material-ui/styles';

const MyButton = styled(Button)({
    width: '150px',
    height: '105px',
    color: '#FFFFFF',
    fontSize: '44px',
    letterSpacing: '2.75px',
    background: 'linear-gradient(180deg, #FFFFFF -76.95%, #000000 100%)',
    borderRadius: '23px'
});

const useStyles = makeStyles((theme) => ({


    paper: {
        marginTop: theme.spacing(15),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.dark,


    },


}));


class ClientOrderInputPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            orderId: ""
        }
    }

    componentDidMount() {
    }

    handleClickNum = (num) => {
        if (this.state.orderId.length < 10) {
            console.log("OSW=" + this.state.orderId)
            const newOrderId = this.state.orderId + num
            this.setState({
                orderId: newOrderId
            })
        }
    }

    handleClickClear() {
        console.log("OSW=" + this.state.orderId)
        const newOrderId = ""
        this.setState({
            orderId: newOrderId
        })


    }

    render() {
        const {classes} = this.props;


        return (
            <Container component="main" maxWidth="sm">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Grid item xs={10}>
                        <Typography component="h1" variant="h3">
                            Log in
                        </Typography>
                    </Grid>
                    <Grid item xs={11}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            InputProps={{
                                readOnly: true,
                            }}
                            fullWidth
                            id="code"
                            name="code"
                            autoFocus
                            value={this.state.orderId}

                        />
                    </Grid>


                    <Grid container
                          spacing={3}>
                        <Grid item xs={4}>
                            <MyButton variant="outlined" size="large" color="default"
                                      onClick={() => this.handleClickNum(1)}>
                                1
                            </MyButton>
                        </Grid>
                        <Grid item xs={4}>
                            <MyButton variant="outlined" size="large" color="default"
                                      onClick={() => this.handleClickNum(2)}>
                                2
                            </MyButton>
                        </Grid>
                        <Grid item xs={4}>
                            <MyButton variant="outlined" size="large" color="default"
                                      onClick={() => this.handleClickNum(3)}>
                                3
                            </MyButton>
                        </Grid>

                        <Grid item xs={4}>
                            <MyButton variant="outlined" size="large" color="default"
                                      onClick={() => this.handleClickNum(4)}>
                                4
                            </MyButton>
                        </Grid>
                        <Grid item xs={4}>
                            <MyButton variant="outlined" size="large" color="default"
                                      onClick={() => this.handleClickNum(5)}>
                                5
                            </MyButton>
                        </Grid>
                        <Grid item xs={4}>
                            <MyButton variant="outlined" size="large" color="default"
                                      onClick={() => this.handleClickNum(6)}>
                                6
                            </MyButton>

                        </Grid>
                        <Grid item xs={4}>
                            <MyButton variant="outlined" size="large" color="default"
                                      onClick={() => this.handleClickNum(7)}>
                                7
                            </MyButton>
                        </Grid>
                        <Grid item xs={4}>
                            <MyButton className={classes.button} variant="outlined" size="large" color="default"
                                      onClick={() => this.handleClickNum(8)}>
                                8
                            </MyButton>
                        </Grid>
                        <Grid item xs={4}>
                            <MyButton variant="outlined" size="large" color="default "
                                      onClick={() => this.handleClickNum(9)}>
                                9
                            </MyButton>
                        </Grid>

                        <Grid item xs={4}>
                            <MyButton variant="outlined" size="large" color="secondary"
                                      onClick={() => this.handleClickClear()}>
                                Clear
                            </MyButton>
                        </Grid>
                        <Grid item xs={4}>
                            <MyButton variant="outlined" size="large" color="default"
                                      onClick={() => this.handleClickNum(0)}>
                                0
                            </MyButton>
                        </Grid>
                        <Grid item xs={4}>
                            <MyButton variant="outlined" size="large" color="primary">
                                Enter
                            </MyButton>
                        </Grid>

                        <Grid item xs={4}>
                            <MyButton variant="outlined" size="large" color="primary"
                                      onClick={() => this.props.goClientHome()}>
                                Back
                            </MyButton>
                        </Grid>
                        <Grid item xs={4}>
                        </Grid>
                        <Grid item xs={4}>
                            <MyButton variant="outlined" size="large" color="primary"
                                      onClick={() => this.props.goSys()}>
                                Continue
                            </MyButton>
                        </Grid>
                    </Grid>


                </div>
            </Container>
        );
    }
}

ClientOrderInputPage.propTypes = {};

export default injectIntl(withStyles(useStyles)(ClientOrderInputPage));

