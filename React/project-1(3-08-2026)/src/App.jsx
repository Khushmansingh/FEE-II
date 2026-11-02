import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'
import Home from './Home'
import Count from "./Count"
import Table  from "./Table.jsx"
import About from "./About.jsx"
import Api from './Api.jsx'
import Use from './Use.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    {/* <Home/> */}
    <Count/>
    <br></br>
    <hr></hr>
    <br></br>
    <Table/>
    <br></br>
    <hr></hr>
    <br></br>
    <About/>
    <br></br>
    <hr></hr>
    <br></br>
    <Api/>
    <br></br>
    <hr></hr>
    <br></br>
    <Use/>

    </>
  )
}

export default App
