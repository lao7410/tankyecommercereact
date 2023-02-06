import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Cartwidget from '../CartWidget/CartWidget';
/* import Nav  from 'react-bootstrap/Nav';
import  Navbar  from 'react-bootstrap/Navbar'; */
/* import NavDropdown from 'react-bootstrap/NavDropdown'; */


const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <NavLink to='/'>Ecommerce Tanky Soluciones</NavLink>
                {/* {<Navbar.Brand href="#home">Ecommerce Tanky Soluciones</Navbar.Brand>} */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/category/ipad" className={({ isActive }) => isActive ? 'btn btn-primary' : 'btn btn-outline-primary'}>IPAD</NavLink>
                        <NavLink to="/category/iphone" className={({ isActive }) => isActive ? 'btn btn-primary' : 'btn btn-outline-primary'}>IPHONE</NavLink>
                        {/* <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#productos">Productos</Nav.Link> */}
                    </Nav>
                    <Nav className='ms-auto'>
                        <Link to='/cart'> <Cartwidget cartCounter={5} /> </Link>
                        <button className="btn btn-dark">SIGN IN</button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar