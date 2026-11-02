import { useState } from "react"
function SignUp(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSignUp() {

        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        alert("SignUp Successful!");

        
    }


    return(
        <>
        <form>

            <h1>SignUp Page</h1>
            
            <div className="inn">
                <p>Entre your Email: </p>
                <input placeholder="Example@gmail.com" 
                onChange={(e) => setEmail(e.target.value)} value={email} type="email"></input>

                <p>Entre your Password: </p>
                <input placeholder="password" 
                onChange={(e) => setPassword(e.target.value)} value={password} type="password"></input>
                <br></br>

                <button onClick={handleSignUp}>SignUp</button>
            </div>

        </form>
        </>
    )

}

export default SignUp