import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { isTokenValid } from "../../helpers/AuthHelper";

const ProtectedRoutesLayout = () => {
    const navigate = useNavigate();

    //add JWT AUTH
    const { isAuthenticated } = {isAuthenticated: isTokenValid()};
    
    useEffect(()=>{
        if (!isAuthenticated) {
            navigate("/login?alert=comingFromCatalog");
        }        
    }, [isAuthenticated])

    return (
    //LAYOUT COMPONENTS
        <Outlet />
    //LAYOUT COMPONENTS
    );
  };

  export default ProtectedRoutesLayout