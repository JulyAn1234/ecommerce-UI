import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { isTokenValid } from "../../helpers/AuthHelper";

const AuthRoutesLayout = () => {
    const navigate = useNavigate();

    //add JWT AUTH
    const { isAuthenticated } = {isAuthenticated: isTokenValid()};
    
    useEffect(()=>{
        if (isAuthenticated) {
            navigate("/");
        }        
    }, [isAuthenticated])

    return (
    //LAYOUT COMPONENTS
        <Outlet />
    //LAYOUT COMPONENTS
    );
  };

export default AuthRoutesLayout