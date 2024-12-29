import axios from "axios";

interface User {
    username:String,
    password:String,
    email?:String,
    fullName?:String
    Name?:String
}

export const loginService = async (username:String, password:String)=>{
    const requestBody:User = {username, password}
    return await axios.post('/ecommerce-auth/auth/login', requestBody, {headers: {
        'Content-Type': 'application/json', // Set default Content-Type for JSON
      },});
}

export const signupService = async (signupPayload:User)=>{
    //Admin user...
    const requestBody:User = signupPayload
    console.log(requestBody)
    return await axios.post('/ecommerce-auth/auth/signup', requestBody, {headers: {
        'Content-Type': 'application/json', // Set default Content-Type for JSON
      },});
}