import React, { Component } from "react";
import axios from "axios";
import baseURL from "../baseURL";
import {
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Switch
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { withStyles } from "@material-ui/core/styles";
import Auth from '../services/Auth'
// import { login } from './../services/user';

const styles = {
  paper: {
    marginTop: 32,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: 1
  },
  form: {
    width: "100%",
    marginTop: 8
  },
  submit: {
    marginTop: 3,
    marginBottom: 3
  }
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: false,
      email: "",
      password: ""
    };
  }

  submitHandle = e => {
    e.preventDefault();
    const { email, password, admin } = this.state;
    const bodyObj = {email, password}
    Auth.authenticate(admin, bodyObj)
    console.log(Auth.getPath())
    this.props.history.push(Auth.getPath())
    // let userId = localStorage.getItem("USERID")
    // if(userId !=null){
    //   await this.props.history.push(`/app/${userId}/getStories`)
    // }
    // if(localStorage.getItem("USERID") == 'admin'){
    //   await this.props.history.push(`/admin/getStories`)
    // }
  }

  // submitHandle = e => {
  //   e.preventDefault();
  //   const { email, password, admin } = this.state;
  //   if (admin) {
  //     axios
  //       .post(baseURL + "admin-login", {
  //         email: email,
  //         password: password
  //       })
  //       .then(res => {
  //         localStorage.setItem('ADMIN', this.state.admin)
  //         localStorage.setItem('USER', true)
  //         this.props.history.push("/admin/getStories");
  //       })
  //       .catch(e => console.log(e));
  //   } else {
  //     axios
  //       .post(baseURL + "login", {
  //         email,
  //         password
  //       })
  //       .then(res => {
  //         console.log(res.data.id);
  //         localStorage.setItem('USER', true)
  //         let id = res.data.id
  //         this.props.history.push(`/app/${id}/getStories`);
  //       })
  //       .catch(e => console.log(e));
  //   }
  // };

  render() {
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <LockOutlinedIcon fontSize="large" />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={this.submitHandle}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={email => {
                this.setState({ email: email.target.value });
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={password =>
                this.setState({ password: password.target.value })
              }
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.admin}
                  onChange={() => {
                    this.setState({ admin: !this.state.admin });
                  }}
                  value="checkedB"
                  color="primary"
                />
              }
              label="Admin"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}
export default withStyles(styles)(Login);
