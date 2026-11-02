import { useState } from "react";
import './Login.css'
import { Link } from "react-router-dom";
function Login() {
    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");

    function handlesubmit() {
        if (mail === "admin@gmail.com" && pass === "1234") {
            alert("Login Done");
        } else {
            alert("Invalid Email or Password");
        }
    }

    return (
        <>
            <div>
                <h2>Login</h2>

                <input
                    type="email"
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                    placeholder="Enter your Email"/>

                <input
                    type="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    placeholder="Enter your Password"/>

                <button onClick={handlesubmit}>Submit</button>
            
                <p>Dont have a Account? Click <Link to="/Signup">here</Link></p>
            </div>
        </>
    );
}

export default Login;
