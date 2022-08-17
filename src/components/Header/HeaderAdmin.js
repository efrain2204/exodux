import React from 'react';
import {Navbar,Container,Nav ,NavDropdown } from "react-bootstrap";
import {Outlet, Link, useNavigate} from 'react-router-dom';

const HeaderAdmin = () => {
  const userLogged = JSON.parse(localStorage.getItem("user_logged"));
  let navigate = useNavigate();

  const closeSession = () =>{
    localStorage.setItem("user_logged", "");
    setTimeout(()=>{
      navigate("/", { replace: true });
    },2000);
  }

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to='/' >BenitoShop <i className="fa-brands fa-shopify"></i></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
            <Nav className='text-center'>
              <Nav.Link as={Link} to='./' >Administrar</Nav.Link>
              <Nav.Link as={Link} to='./crearusuario' >Crear Usuario</Nav.Link>
              <Navbar.Text>
                <strong>Usuario:</strong> {userLogged && userLogged[0].name}
              </Navbar.Text>
              <Nav.Link onClick={closeSession}>Salir</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
};

export default HeaderAdmin;
