import { useContext } from "react"
import { UserContext } from "./Context/UserContest"
import { ThemeContext } from './Context/ThemeContext.js'

function Profile(){

    const {name,age} = useContext(UserContext);

    //  2nd concept 

    const { theme, toogleTheme } = useContext(ThemeContext);

    return(

        <>

        <h1> this is Profile Component</h1>
        
        <h1>User Name is : {name}</h1>
        <h2>{name} is {age} years old </h2>

        {/*=======================*/}

        {/* 2nd concept */}

        <h2>{theme}</h2>

        <button onClick={toogleTheme}>Change the Theme</button>

        </>

    )

}

export default Profile