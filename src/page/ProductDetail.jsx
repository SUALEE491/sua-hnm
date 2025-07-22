import React,{use, useEffect, useState} from 'react'
import { useParams } from 'react-router'
import { Container, Row, Col, Dropdown } from 'react-bootstrap'

const ProductDetail = () => {
  let{id} = useParams()
  const[products, setProducts] = useState(null);
  const getProductDetail= async()=>{
    let url = `https://my-json-server.typicode.com/SUALEE491/sua-hnm/products/${id}`
    let response = await fetch(url);
    let data = await response.json ();
    console.log(data);
    setProducts(data);


  }
  useEffect(()=>{
    getProductDetail()
  },[])
  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={products?.img} />
        </Col>
        <Col>
          <div>{products?.title}</div>
          <div>₩{products?.price}</div>
          <div>{products?.choice == true ? "Conscious Product" : ""}</div>
          <div>{products?.new == true ? "신제품" : ""}</div>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">S</Dropdown.Item>
              <Dropdown.Item href="#/action-2">M</Dropdown.Item>
              <Dropdown.Item href="#/action-3">L</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail
