import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Home() {
    const {setAuth} = useAuth();
    return ( 
        <main>
            <h1>Clean React App with Routes</h1>

            <h2>Public Routes</h2>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/login"} >Login</Link></li>
            </ul>
            
            <h2>Protected Routes</h2>
            <ul>
                <li><Link to={"/user"} >User</Link></li>
                <li><Link to={"/editor"} >Editor</Link></li>
                <li><Link to={"/admin"} >Admin</Link></li>
                <li><Link to={"/lounge"} >Lounge</Link></li>
            </ul>
            
            <button onClick={() => {setAuth({})}}>Log out</button>
        </main>
     );
}

export default Home;