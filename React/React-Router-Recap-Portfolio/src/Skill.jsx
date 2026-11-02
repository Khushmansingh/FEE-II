import { Link, Outlet } from 'react-router-dom'

function Skill(){
    return(
        <>
            <h1>Skill</h1>

            <ol>
                <li><Link to="TechSkills">Technical Skills</Link></li>
                <li><Link to="NonTechSkill">Non-Technical Skills</Link></li>
                <li><Link to="Projects">Projects</Link></li>
            </ol>
            <Outlet />
        </>
    )
}

export default Skill