import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROLE } from "../constants/ROLE";
import useAuth from "../hooks/useAuth";

function Login() {
    const {setAuth} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleLogin = (user, roles) => {
        setAuth({user, roles});
        navigate(from, {replace: true})
    }
    return ( 
        <main>
            <h1>Login as: </h1>
            <button onClick={() => {handleLogin("test@example.com", [ROLE.USER])}}>User</button>
            <button onClick={() => {handleLogin("test@example.com", [ROLE.EDITOR])}}>Editor</button>
            <button onClick={() => {handleLogin("test@example.com", [ROLE.ADMIN])}}>Admin</button>
        </main>
     );
}

export default Login;