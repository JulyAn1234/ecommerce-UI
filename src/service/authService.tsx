import axios from "axios";

interface User {
    username:String,
    password:String,
    email?:String,
    fullName?:String
}

export const loginService = async (username:String, password:String)=>{
    const requestBody:User = {username, password}
    return await axios.post('http://localhost:8081/auth/login', requestBody, {headers: {
        'Content-Type': 'application/json', // Set default Content-Type for JSON
      },});
}