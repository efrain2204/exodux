import React, {useState} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";


// Obtener los valores de localstorage
const getProductsFromLS = () =>{
  const products = localStorage.getItem('products');
  if(products) return JSON.parse(products);
  else return [];
}

const Productos = () => {

  const [products,setProducts] = useState( getProductsFromLS() );

  return (
    <Container>
      <Row className='mt-5'>
        {
          products && products.map((e,i)=>(
            <Col key={e.name}  md={3}>
              <Card style={{ width: '18rem' }} className='text-center'>
                <Card.Img variant="top" style={{height:250}} src={e.url} />
                <Card.Body>
                  <Card.Title>{e.name}</Card.Title>
                  <Card.Text>
                    {e.marca} / {e.clasificacion}
                  </Card.Text>
                  <Card.Text>
                    <strong>Precio: S/. {e.precio}</strong>
                  </Card.Text>
                  <Button  variant="danger" size="lg"><i className="fa-solid fa-heart"></i></Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        }

      </Row>
    </Container>
  );
};

export default Productos;
