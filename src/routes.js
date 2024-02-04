import React from "react"
import { Navigate } from "react-router-dom"

export const PrivateRoute = ({children}) => {
    const token = localStorage.getItem("usersToken");
    const tokenGoogle = localStorage.getItem("usersTokenGoogle");
    return token || tokenGoogle ? children : <Navigate to="/"/>
}

export const AuthLogin = ({ children }) => {
    const token = localStorage.getItem("usersToken");
    const tokenGoogle = localStorage.getItem("usersTokenGoogle");  
    return token || tokenGoogle ? <Navigate to="/myprojects"/> : children
}

export const AuthSignUp = ({ children }) => {
    const token = localStorage.getItem("usersToken");
    const tokenGoogle = localStorage.getItem("usersTokenGoogle");  
    return token || tokenGoogle ? <Navigate to="/discovery"/> : children
}