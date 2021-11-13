import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useFirebase from '../../../hooks/useFirebase';
const Menubar = () => {
    const {user,logOut } = useFirebase();
    return (
        <div>
           <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/home#home">Travel Support BD</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll></Nav>

                        <div className="d-flex">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            
                           
                            {user?.email ?
                            <Button onClick={logOut} variant="white">Logout</Button>:
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                            <Navbar.Text>Signed as - <a href="#login">{user?.displayName &&
                            <Nav.Link as={HashLink} to="/admin">Admin</Nav.Link>}
                            </a></Navbar.Text>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menubar;