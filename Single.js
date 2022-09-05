import React, {  useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import Header from './Header';
import Product from './Product';

export default function Single() {
    let {id} = useParams();
    const [Product,setProducts] = useState("")

    useEffect(() => {
        fetch(`http://localhost:3001/product/${id}`)
        .then((Response) => Response.json())
        .then((json) => setProducts(json));

    },[Product])

    return (
      <div className='container'>
        <div className='row'>
            <div className='col-md-12 mt-4 mb-4'>
                <Card>
                <Card.Body>
                    <Card.Title>{Product.title}</Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>
                       {Product.price}
                    </Card.Subtitle>
                    <Card.Text>
                        some quick example text to build on the card
                    </Card.Text>
                    <Card.Link href='#'>card Link</Card.Link>
                    <Card.Link href='#'>onther link</Card.Link>
                </Card.Body>
                </Card>
            </div>
        </div>
      </div>
    )
}

