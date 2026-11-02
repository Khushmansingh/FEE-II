import { useState } from "react"

function Getname(){

    const [data, setData] = useState("");
    function handleChange(e){
        setData(e.target.value)
    }

    return(
        <>
        <hr></hr>
        <h1>Getname Component</h1>
        <input type="text" onChange={handleChange}></input>
        <h1>Data is {data}</h1>
        </>
    )

}

export default Getname