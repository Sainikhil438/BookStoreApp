import { Outlet, Navigate } from "react-router-dom";
import React from "react";

const AuthRoute = ({ children }) => {

    if (localStorage.getItem("AccessToken") === undefined || localStorage.getItem("AccessToken") === null) {
        console.log("k")
        return children;
    }

return <Navigate to ="/dashboard"/>;
   console.log("1")
};
export default AuthRoute;