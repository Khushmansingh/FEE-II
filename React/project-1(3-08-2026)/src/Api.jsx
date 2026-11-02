import { useEffect, useState } from 'react'

import './App.css'

function Api() {
  const [count, setCount] = useState(0)
const[products, setProducts] = useState([])
  function handleClick() {
    setCount(count + 1)
  }
  function handleSubtract() {
    setCount(count - 1)
  }
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setProducts(data.products))
  }, [])
  return (
    <>
    <ol>
      {products.map(product => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ol>
    <h1>App component</h1>
    <p>You clicked {count} times</p>
    <p>Products loaded: {products.length}</p>
    <button onClick={handleClick}>
      Click me
    </button>
   <br></br>
    <button onClick={handleSubtract}>
      Subtract
    </button>
    </>
  )
}

export default Api