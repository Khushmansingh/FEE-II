import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Productdetails() {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [id])

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1>Product Details Component</h1>

      <img src={product.thumbnail} alt={product.title} />
      <div className="product-details">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <strong>${product.price}</strong>
      </div>
    </>
  )
}

export default Productdetails