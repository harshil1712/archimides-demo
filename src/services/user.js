import axios from "axios";
import baseURL from "../baseURL";
import Auth from "./Auth";

export const login = (admin, bodyObj)=> {
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
            localStorage.setItem('ADMIN', true)
        })
    }
    Auth.authenticate()
}