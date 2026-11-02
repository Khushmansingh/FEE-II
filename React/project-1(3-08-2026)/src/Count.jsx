import { useState } from "react";
import "./Count.css"
function Count(){

    const [count,setCount]=useState(0);
    function handleClick(){
        setCount(prev=>prev+5);
    }
    const [name,setName] = useState("Aman");
    function handleName(){
        setName(name === "Aman" ? "Rahul" : "Aman");
    }

    const [theme,setTheme] = useState("light");
    function handleTheme(){
        setTheme(theme == "light" ? "dark" : "light");
    }

    function Clearclick(){
        setCount(0);
    }

    function reset(){
        setTheme("light");
        setCount(0);
        setName("Aman");
    }


    return(
        <>
        <div className={theme}>
        <p>Count:{count} </p>
        <button onClick={handleClick}>Add Count</button>
        <button onClick={Clearclick}>Clear</button>
        <p>Name : {name} </p>
        <button onClick={handleName}>Toggle</button>
        

        <p> Theme: {theme} </p>
        <button onClick={handleTheme}>Change Theme</button>
        </div>

        <button onClick={reset}>Reset</button>
        </>
    )
}

export default Count 