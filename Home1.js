
import React, { useEffect, useState } from 'react'
//import {Button,navbar,Nav,container,NavDropdown } Form "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import Header from './Header';
import custom from "./custom.module.css";
import Products from './Products';

export default function Home1() {

  // const [products, setProducts] = useState("")

  // useEffect(()=>{
  //   getProducts()
  //  }, [products])

  // const getProducts=() =>{
  //   fetch('  http://localhost:3000/product')
  //   .then((response)=>response.json())
  //   .then((json)=> setProducts(json));
  // }
  return (
   <section className={`${custom.home}`}>
    <div className={`${custom.content}`}>
      <h3>much and more<br/>than perfume</h3>
      <a href='#' className={`${custom.btn}`}>Get yours now</a>
    </div>
   </section> 
  );
}
