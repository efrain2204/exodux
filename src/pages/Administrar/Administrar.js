import React, {useState} from 'react';
import {Button, Col, Container, Form, Modal, Row, Table} from "react-bootstrap";

// Obtener los valores de localstorage
const getProductsFromLS = () =>{
  const products = localStorage.getItem('products');
  if(products) return JSON.parse(products);
  else return [];
}

const setFirstProductsManual= () =>{
  const prods = localStorage.getItem('products');
  let prod = [
    {
    name: "tomate",
    marca: "Sin marca",
    clasificacion: "Vegetales",
    precio: 0.50,
    url:'https://encolombia.com/wp-content/uploads/2021/11/Tomate-fruto-696x398.jpg',
    liked:false
  },
    {
      name: "Leche",
      marca: "Gloria",
      clasificacion: "Lacteos",
      precio: 1.50,
      url:'https://plazavea.vteximg.com.br/arquivos/ids/345002-1000-1000/949.jpg',
      liked:false
    }
  ]
  if(!prods) {
    localStorage.setItem('products',JSON.stringify(prod));
  }
}

const Administrar = () => {
  setFirstProductsManual();

  const [products,setProducts] = useState( getProductsFromLS() );

  // TODO: Agregar modal y agregar al array y localstorage
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleSaveProduct = () =>{

  }
  const handleShow = () => setShow(true);

  // TODO: CRUD completo en la tabla
  // TODO: Imprimir en tabla los productos con su key respectiva
  console.log(products);
  // TODO: En ventana de usuarios imprimir los pruductos guardados en localstorage

  return (
    <Container className='mt-5'>
      <Row>
        <Col>
          <Button className='btn btn-success' onClick={handleShow}>Agregar</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table responsive striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Marca</th>
                <th>Clasificación</th>
                <th>Precio</th>
                <th>Miniatura</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
            {
              products && products.map((e,i)=>(
                <tr key={e.name}>
                  <th>{i+1}</th>
                  <th>{e.name}</th>
                  <th>{e.marca}</th>
                  <th>{e.clasificacion}</th>
                  <th>{e.precio}</th>
                  <th><img style={{height:100}} src={e.url} alt=""/></th>
                  <td>
                    <Button className='btn btn-primary mx-2'><i className="fa-solid fa-eye"></i></Button>
                    <Button className='btn btn-primary mx-2'><i className="fa-solid fa-pen-to-square"></i></Button>
                    <Button className='btn btn-danger mx-2'><i className="fa-solid fa-trash"></i></Button>
                  </td>
                </tr>
              ))
            }
            </tbody>
          </Table>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="email"
                placeholder="Leche"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
              <Form.Label>Marca</Form.Label>
              <Form.Control
                type="text"
                placeholder="Gloria"
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
              <Form.Label>Clasificación</Form.Label>
              <Form.Control
                type="text"
                placeholder="Lacteos"
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
              <Form.Label>Clasificación</Form.Label>
              <Form.Control
                type="number"
                placeholder="S/."
              />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-1">
              <Form.Label>Subir foto de producto</Form.Label>
              <Form.Control type="file" />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>

    </Container>
  );
};

export default Administrar;
