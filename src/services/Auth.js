import axios from "axios";
import baseURL from "../baseURL";
import {Redirect} from 'react-router-dom'

const login = (admin, bodyObj)=> {
    // let pathname= ''
    if(!admin || null) {
        axios.post(baseURL+'login',{
            bodyObj
        })
        .then(res=>{
            localStorage.setItem("USERID", res.data.id)
            return `/app/${res.data.id}/getStories`
        })
    }
    else{
        axios.post(baseURL+'admin-login',{
            bodyObj
        })
        .then(res=>{
            localStorage.setItem('USERID', 'admin')
            return `/admin/getStories`
        })
    }
}

const Auth = {
    isAuthenticated: false,
    pathname: '',
    authenticate(admin, body){
        this.pathname= login(admin,body)
        this.isAuthenticated = true
        // localStorage.setItem('AUTH', this.isAuthenticated)
    },

    signOut() {
        this.isAuthenticated = false
        localStorage.removeItem('USERID')
    },

    getPath() {
        return this.pathname
    },

    getAuth() {
        this.isAuthenticated = localStorage.getItem("USERID")?true:false
        return this.isAuthenticated
    }
}

export default Auth