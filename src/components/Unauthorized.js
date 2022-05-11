import React from "react";
import { useNavigate } from "react-router-dom";
function Unauthorized() {
    const navigate = useNavigate();
    return (  
        <React.Fragment>
            <h1>Unauthorized</h1>
            <button onClick={() => {navigate(-1)}}>Go Back</button>
        </React.Fragment>
    );
}

export default Unauthorized;