import { useEffect, useRef, useState } from 'react'

import './App.css'

function Use() {
  const renderCountRef = useRef(0)
  const [renderCount, setRenderCount] = useState(0)

  const [count, setCount] = useState(0)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [skip, setSkip] = useState(0)

  useEffect(() => {
    renderCountRef.current += 1
    setRenderCount(renderCountRef.current)
  }, [count, skip])

  function handleNext() {
    setSkip((prevSkip) => prevSkip + 10)
  }

  function handleClick() {
    setCount((prevCount) => prevCount + 1)
  }

  function handleSubtract() {
    setCount((prevCount) => prevCount - 1)
  }
function handleMultiply() {
    setCount((prevCount) => prevCount * 2)
  }
  useEffect(() => {
    setLoading(true)
    fetch(`https://dummyjson.com/products?skip=${skip}&limit=10`)
      .then(response => response.json())
      .then(data => {
        setProducts(data.products)
        setLoading(false)
      })
  }, [skip])

  return (
    <>
    {loading ?<h1>Loading...</h1>:
    <ol>
      {products.map(product => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ol>}
    <h1>App component</h1>
    <p>You clicked {count} times</p>
    <p>Products loaded: {products.length}</p>
    <button onClick={handleClick}>
      Add
    </button>
  
    <button onClick={handleMultiply}>
      Multiply
    </button>
   <br></br>
    <button onClick={handleSubtract}>
      Subtract
    </button>
    <button onClick={handleNext}>
      Next
    </button>
    <h2>Render Count: {renderCount}</h2>
    </>
  )
}

export default Use