import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'

export default function AddProduct() {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [Product, setProduct] = useState("")
    const [isEdit, setEdit] = useState(false)
    const { id } = useParams()
    useEffect(() => {
        if (id != undefined) {
            fetch(`  http://localhost:3001/product/${id}`)
                .then((Response) => Response.json())
                .then((json) => {
                    setTitle(json.title)
                    setPrice(json.price)
                    setDescription(json.description)
                    setEdit(true)
                });
        }
    }, [])
    const handleUpdate = (e) => {
        e.preventDefault();

        fetch(`  http://localhost:3001/product/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, price, description }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = { title, price, description }
        fetch('   http://localhost:3001/product', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then((res) => res.json())
            .then((json) => {
                setTitle("")
                setPrice("")
                setDescription("")
            })
    }

    return (
        <div className='container'>
            <div className='row mt-4 justify-content-center'>
                <div className='col-md-4'>
                    <form onSubmit={isEdit ? handleUpdate : handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                            <input type="text" className="form-control" value={title} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setTitle(e.target.value)} />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
                            <input type="text" value={price} className="form-control" id="exampleInputPassword1" onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <div class="form-floating">
                                <textarea value={description} class="form-control" placeholder="Leave a comment here" id="floatingTextarea" onChange={(e) => setDescription(e.target.value)}></textarea>
                                <label for="floatingTextarea">Comments</label>
                            </div>
                        </div>
                        <div className='btn-block'>
                            <button type="submit" className="btn btn-primary btn-block">{isEdit ? 'UPDATE' :'SUBMIT'}</button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}