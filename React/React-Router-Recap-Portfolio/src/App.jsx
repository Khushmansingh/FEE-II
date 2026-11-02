import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './Navbar'
import Skill from './Skill.jsx'
import Contact from './Contact.jsx'
import NonTechnicalSkill from './NonTechnicalSkill.jsx'
import TechnicalSkill from './TechnicalSkill.jsx'
import Project from './Project.jsx'
import ProjectDetails from './ProjectDetails.jsx'

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/Skill" element={<Skill />}>
          <Route path="/Skill/TechSkills" element={<TechnicalSkill />} />
          <Route path="/Skill/NonTechSkill" element={<NonTechnicalSkill />} />
          <Route path="/Skill/Projects" element={<Project />}>
            <Route path=":projectId" element={<ProjectDetails />} />
          </Route>
        </Route>
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
