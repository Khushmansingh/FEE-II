import { useParams } from 'react-router-dom'

const projects = {
    101: 'Discord Student Bot',
    102: 'Discord FoxieBox Bot',
    103: 'Expenso',
}

function ProjectDetails() {
    const { projectId } = useParams()
    const projectName = projects[projectId]

    return (
        <h1>Detailspage of {projectName}</h1>
    )
}

export default ProjectDetails
