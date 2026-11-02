import { Link } from 'react-router-dom';
function NavBar(){

    return(
        <>
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/Skill"}>Skill</Link>
            <Link to={"/Contact"}>Contact</Link>
        </nav>
        </>
    )
}

export default NavBar