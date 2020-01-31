import React from 'react';
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Auth from '../services/Auth'

const styles = {
    title: {
        flexGrow:1
    }
}

class Nav extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            isLoggedIn: false
        }
    }

    componentDidMount(){
        this.setState({isLoggedIn:Auth.getAuth()})
        // let checkLoggedIn = localStorage.getItem('USER')
        // this.setState({isLoggedIn:checkLoggedIn})
    }

    render(){
        const { classes } = this.props
        return(
            <AppBar position='static' elevation={0}>
                <Toolbar>
                    <Typography variant="h4" className={classes.title}>Demo</Typography>
                    {
                        this.state.isLoggedIn ? <Button variant="outlined" component='Link' href='/' color="inherit" onClick={()=>{Auth.signOut()}}>Logout</Button> : <Button variant="outlined" component='Link' href='/login' color="inherit">Login</Button>
                    }
                    {/* <Button variant="outlined" component='Link' href='/login' color="inherit">Login</Button> */}

                </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles(styles)(Nav)