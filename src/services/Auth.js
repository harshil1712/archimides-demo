import axios from "axios";
import baseURL from "../baseURL";
import {Redirect} from 'react-router-dom'

const login = (admin, bodyObj)=> {
    if(!admin || null) {
        axios.post(baseURL+'login',{
            bodyObj
        })
        .then(res=>{
            localStorage.setItem("USERID", res.data.id)
        })
    }
    else{
        axios.post(baseURL+'admin-login',{
            bodyObj
        })
        .then(res=>{
            localStorage.setItem('USERID', 'admin')
        })
    }
}

const Auth = {
    isAuthenticated: false,
    role: '',
    authenticate(admin, body){
        login(admin,body)
        this.isAuthenticated = true
        // localStorage.setItem('AUTH', this.isAuthenticated)
    },

    signOut() {
        this.isAuthenticated = false
        localStorage.removeItem('USERID')
    },

    getRole() {
        this.role = localStorage.getItem("USERID")
        return this.role
    },

    getAuth() {
        this.isAuthenticated = localStorage.getItem("USERID")?true:false
        return this.isAuthenticated
    }
}

export default Auth