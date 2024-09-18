import { jwtDecode } from "jwt-decode";

export const isTokenValid = ()=>{
    const token = localStorage.getItem("jwtToken")
    if(!token) return false
    try{
        console.log(jwtDecode(token))
        const {exp} = jwtDecode(token);
        const currentTIme = Date.now()/1000
        return exp? exp > currentTIme : false
    }catch{
        return false
    }
}

export const storeToken = (token:any)=>{
    console.log("storing token")
    localStorage.setItem("jwtToken", token)
}

export const getAuthHeader = ()=>{
    const token = localStorage.getItem("jwtToken")
    return {Authorization: `Bearer ${token}`}
}