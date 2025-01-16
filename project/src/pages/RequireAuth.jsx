import React from "react";
import { getItem } from "../utils/storageUtils";
import { Navigate } from "react-router-dom";

const RequireAuth = ({children}) => {
    const accessToken = getItem("accessToken");
    if(!accessToken) {
        return <Navigate to={'/login'} replace={true}/>
    } else {
        return children
    }
}

export default RequireAuth