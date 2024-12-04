import axios from "axios";

interface User {
    Username:String,
    Password:String,
    email?:String,
    fullName?:String
    Name?:String
    Unidad?:number
    Rol?:number
    isActive?:boolean
    Permissions?:Array<number>
}

export const loginService = async (username:String, password:String)=>{
    const requestBody:User = {Username:username, Password: password}
    return await axios.post('http://localhost:8081/auth/login', requestBody, {headers: {
        'Content-Type': 'application/json', // Set default Content-Type for JSON
      },});
}

export const signupService = async (signupPayload:User)=>{
    //Admin user...
    const requestBody:User = {...signupPayload, isActive:true, Rol:1, Unidad:1, Permissions:[1,2,3,4,5,6,7,8,9,10]}
    console.log(requestBody)
    return await axios.post('http://localhost:8081/auth/signup', requestBody, {headers: {
        'Content-Type': 'application/json', // Set default Content-Type for JSON
      },});
}