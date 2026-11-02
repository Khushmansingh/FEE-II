import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products || []))
  }, [])

  return (
    <>
      <h1>Products Components</h1>
      <ol>
        {products.map((product) => (
          <div key={product.id}>
            <li>{product.title}</li>
            <Link to={`/productdetails/${product.id}`}>view details</Link>
          </div>
        ))}
      </ol>
    </>
  )
}

export default Products