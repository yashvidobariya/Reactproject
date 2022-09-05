import React,{useEffect} from 'react'
import { Card } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import custom from "./custom.module.css";
import Single from './Single';


export default function Product(props) {
    
    return (
        <LinkContainer to={`product/${props.id}`}>
        <div className='col-md-4 mt-4 mb-4'>
            <Card style={{ width: "18rem" }}>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>
                        card subtitle
                    </Card.Subtitle>
                    <Card.Text>
                        some quick example text to build on the card
                    </Card.Text>
                    <Card.Link href='#'>card Link</Card.Link>
                    <Card.Link href='#'>onther link</Card.Link>
                </Card.Body>
            </Card>
        </div>
        </LinkContainer>
    );
}
