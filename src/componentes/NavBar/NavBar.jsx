import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Cartwidget from '../CartWidget/CartWidget';
import SignIn from '../signIn/signIn';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <NavLink to='/'>Ecommerce Tanky Soluciones</NavLink> <br/>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/category/ipad" className={({ isActive }) => isActive ? 'btn btn-primary' : 'btn btn-outline-primary'}>IPAD</NavLink>
                        <NavLink to="/category/iphone" className={({ isActive }) => isActive ? 'btn btn-primary' : 'btn btn-outline-primary'}>IPHONE</NavLink>

                    </Nav>
                    <Nav className='ms-auto'>
                        <Link to='/cart'> <Cartwidget/> </Link>
                        {/* <Link to='/'> <Cartwidget  /> </Link>
                        <button className="btn btn-dark">SIGN IN</button> */}
                        <Link to='/signin'> <button className="btn btn-dark">INICIAR SESION</button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
