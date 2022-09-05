import React,{useEffect,useState} from 'react'
import Products from './Products'
import Single from './Single'
import Header from './Header'

export default function Product() {
  const [product, setProducts] = useState("")

  useEffect(() => {
    getProducts()
  }, [product])

  const getProducts = () => {
    fetch('  http://localhost:3001/product')
      .then((Response) => Response.json())
      .then((json) => setProducts(json));
  }
  return (
    <>
      <div className="container">
        <div className='row mt-5'>
          {
            product && product.map((p) =>
             <Products title = {p.title} id={p.id}/>
            )
          }
        </div>
      </div>
    </>
  )
}
