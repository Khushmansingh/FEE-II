import { Link, Outlet } from 'react-router-dom'

function Project(){
    const projects = [
        { id: 101, title: "Discord Student Bot" },
        { id: 102, title: "Discord FoxieBox Bot" },
        { id: 103, title: "Expenso" },
    ]

    return(
        <>
            <ol>
                {projects.map((project) => (
                    <li key={project.id}>
                        <Link to={String(project.id)}>{project.title}</Link>
                    </li>
                ))}
            </ol>
            <Outlet />
        </>
    )
}

export default Project