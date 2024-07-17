import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
  //States
  const auth = useSelector((x) => x.auth);
  const navigate = useNavigate();

  //Rendering
  useEffect(() => {
    console.log(auth)
    if (!auth.isAuth){
        navigate("/auth");
        console.log('mai chala')
    } 
  }, []);

  return <>{children}</>;
};

export default ProtectedRoute;
