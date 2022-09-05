import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Header from './Header'

export default function Product1() {
    const [product, setProducts] = useState([])
    const[foundproducts,setFoundproducts] =useState(product)

    const handlesearch =(e) => {
        e.preventDefault()
      const search = e.target.value
      if(search){
        const  result = product.filter((item) =>{
            //return item.title.toLowerCase().startswitch(search.toLowerCase())
            return item.title.toLowerCase().includes(search.toLowerCase())
        })
        setFoundproducts(result)
    }
    else{
        console.log('ff')
        setFoundproducts(product)
    }
    }

    useEffect(() => {
        getproducts()
    }, [])
    const getproducts = () => {
        fetch('  http://localhost:3001/product')
            .then((Response) => Response.json())
            .then((json) => {
                setProducts(json)
                setFoundproducts(json)
            });
    }
    const handleDelete = (id) =>{
    fetch(`  http://localhost:3001/product/${id}`, {
        method: 'DELETE',
    });
    }
    return (
        <div className='container'>
            <div className='row mt-3'>
                <div className='col-md-12'>
                    <LinkContainer to="/addproduct">
                        <button className='btn btn-info mb-3 ml-3'>Add</button>
                    </LinkContainer>
                    <form className='row md-2 mt-6 mb-4 ' >
                        <input type="text" placeholder='search' onChange={handlesearch}/>
                    </form>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                foundproducts && foundproducts.map((p) =>
                                    <tr>
                                        <td>{p.id}</td>
                                        <td>{p.title}</td>
                                        <td>{p.price}</td>
                                        <td>{p.description}</td>
                                        <td>
                                            <LinkContainer to={`/update/${p.id}`}>
                                            <button className='btn btn-primary'>EDIT</button>
                                            </LinkContainer>
                                            <button className='btn  btn-danger ' onClick={() => handleDelete(p.id)}>DELETE</button>
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}