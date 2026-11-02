import { use, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import useCounter from './useCounter'

function Contact() {
  const[count,increment,decrement,reset] = useCounter(4);

  return (
    <>

    <h1>App Component</h1>

    <p>Count : {count}</p>

    <button onClick={increment}>Inc</button>
     
    <button onClick={decrement}>dec</button>
     
    <button onClick={reset}>Reset</button>
    </>
  )
}

export default Contact
