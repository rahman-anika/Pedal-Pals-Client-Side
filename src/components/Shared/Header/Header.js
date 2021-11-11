import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {

    const { user, logout } = useAuth();
    // console.log(user);


    return (
        <>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg" >

                <Container>

                    {/* website name and icon starts */}
                    <Navbar.Brand href="#home">
                        <span style={{ color: '#0D6EFB', fontWeight: 'bold' }}> <i class="fas fa-bicycle"></i> PedalPals</span>
                    </Navbar.Brand>
                    {/* website name and icon ends */}


                    {/* routing hashlink starts */}
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        {/* homepage section starts */}
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        {/* homepage section ends */}

                        {/* services section starts */}
                        <Nav.Link as={HashLink} to="/home#products">Products</Nav.Link>
                        {/* services section ends */}

                        {/* reviews section starts */}
                        <Nav.Link as={HashLink} to="/home#reviews">Reviews</Nav.Link>
                        {/* reviews section ends */}



                        {/* about section starts */}
                        <Nav.Link as={HashLink} to="/home#about">About Us</Nav.Link>
                        {/* about section ends */}






                        {/* 
                        if logged in then Dashboard shows */}

                        {user?.email &&

                            < Nav.Link as={Link} className="item m-2 p-2" to="/dashboard">Dashboard</Nav.Link>

                        }


                        {/* if user logged in then shows logout button otherwise shows login button*/}

                        {user?.email ?
                            <Button onClick={logout} variant="light">Logout</Button>

                            :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}

                        {/* showing logged in user's display name  */}
                        <Navbar.Text>
                            Signed in as:
                            <a href="#login">
                                {user?.displayName}</a>
                        </Navbar.Text>


                    </Navbar.Collapse>
                    {/* routing hashlink ends */}

                </Container>
            </Navbar>
        </>
    );
};

export default Header;