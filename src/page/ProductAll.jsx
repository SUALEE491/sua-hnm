import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router';

const ProductAll = () => {
  const [productList, setProductList]=useState([]);
  const [query, setQuery] = useSearchParams();
  
  const getProducts= async()=>{
    let searchQuery =query.get("q") || "";
    console.log("search",searchQuery);
    let url = `https://my-json-server.typicode.com/SUALEE491/sua-hnm/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  
  };
  useEffect(()=>{
    getProducts();
  },[query]);

  return (
    <div>
      <Container>
        <Row className="g-4">
          {productList.map((menu) => (
            <Col lg={3} className="mb-4" key={menu.id}>
              <div className="product-card">
                <ProductCard item={menu}/>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ProductAll