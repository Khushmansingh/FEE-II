import { useContext } from "react"
import { LoginContext } from "./Context/LoginContext"

function Login(){

    const {login,setlogin } = useContext(LoginContext);

    return(
        <>
        <h1>{login}</h1>

            {login === "Login Page" ? (
                <button onClick={setlogin}> Dont have a Account Click here </button>
            ) : (
                <button onClick={setlogin}> Already have a Account Click here </button>   
            )}
        
        </>
    )
}

export default Login