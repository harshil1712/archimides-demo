import React, { Component } from 'react'
import axios from 'axios'
import baseURL from '../baseURL'
import { Redirect } from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          admin: false,
          role: null
        };
    }

    redirect(role){
        if(role==='Admin'){
            return <Redirect to="/admin/getStories" />
        }
        return <Redirect to="/app/2/getStories" />
    }

    loginUser(e){
        e.preventDefault();
        if(this.state.admin){
            axios.post(baseURL+'admin-login', {
                email:'a@a.a',
                password:'a'
            })
            .then((res)=>{
                var a = JSON.stringify(res.data)
                console.log(typeof(JSON.parse(a)))
                this.setState({role:'Admin'})
                this.redirect(this.state.role)
            })
            .catch(err=>console.log(err))
        }
        else{
            axios.post(baseURL+'login',
            {
                email:'a@a.com',
                password:'abcd'
            })
            .then((res)=>{
                console.log(res)
                this.redirect(this.state.role)
            })
            .catch(err=>console.log(err))
        }
    }
    render() {
        return(
            <div>
                <h1>Login</h1>
                <form onSubmit={this.loginUser.bind(this)}>
                <input type="email" required/>
                <input type="password" required/>
                <input type="submit" value="submit" />
                <input type="checkbox" onInput={()=>{this.setState({admin:true})}}/>Admin
                </form>
            </div>
        )
    }
}
export default Login