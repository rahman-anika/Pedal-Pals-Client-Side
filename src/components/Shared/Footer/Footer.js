import React from 'react';
import { Card } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (

        // footer section starts 
        <div className="footer mt-3">
            <div className="container text-start pt-3">
                <div className="row ">

                    {/* website name and address starts */}
                    <div className="col-md-4">
                        <div className="col-md-12">

                            <span style={{ color: '#0D6EFB', fontWeight: 'bold' }}> <i class="fas fa-bicycle"></i>  PedalPals</span>

                            <br />
                            <small style={{ color: '#0D6EFB' }}>Ride & Enjoy!</small>
                            <br />
                            <small>Visit our shop or simply send us an email anytime you want. If you have any questions, please feel free to contact us.</small>
                            <br />


                        </div>

                    </div>
                    {/* website name and address ends */}


                    {/* footer link starts */}
                    <div className="col-md-7">
                        <div className="row">

                            <div className="col-md-3">


                                <ul>
                                    <Card.Link href="#">About Us</Card.Link>
                                    <br />
                                    <Card.Link href="#">Products</Card.Link>
                                    <br />
                                    <Card.Link href="#">Reviews</Card.Link>
                                    <br />
                                    <Card.Link href="#">Location</Card.Link>
                                    <br />
                                    <Card.Link href="#">Campaign</Card.Link>

                                </ul>
                            </div>

                            <div className="col-md-3">
                                <ul>

                                    <Card.Link href="#">Get help</Card.Link>
                                    <br />
                                    <Card.Link href="#">Read FAQs</Card.Link>
                                    <br />
                                    <Card.Link href="#">View Blogs</Card.Link>
                                    <br />
                                    <Card.Link href="#">Gallery</Card.Link>
                                    <br />
                                    <Card.Link href="#">Contact Us</Card.Link>
                                    <br />

                                </ul>
                            </div>



                            <div className="col-md-6">
                                <ul>
                                    <small>Address: 21/1 A Street, A Road, NewYork</small>
                                    <br />

                                    <small>Call us:
                                        443-997-6896,
                                        443-213-0237
                                    </small>

                                    <br />
                                    <small> Write us:
                                        office@pedalpals.com
                                    </small>

                                    <br /> <br />
                                    <h4 className="text-center">

                                        <i class="fab fa-facebook"></i>
                                        &nbsp;&nbsp;
                                        <i class="fab fa-twitter"></i>
                                        &nbsp;&nbsp;
                                        <i class="fab fa-instagram"></i>
                                        &nbsp;&nbsp;
                                        <i class="fas fa-envelope-open"></i>

                                    </h4>

                                </ul>
                            </div>

                        </div>
                    </div>
                    {/* footer link ends */}

                </div>

                {/* copyright starts  */}
                <div className="container text-start pt-3">
                    <div className="row">
                        <div className="col-md-4">
                            <small>&copy; IT DevTool, 2021 </small>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-6">

                            <Card.Link href="#">Privacy Policy</Card.Link>
                            <Card.Link href="#">Terms & Condition</Card.Link>


                        </div>
                    </div>

                </div>
                {/* copyright ends  */}

            </div>
        </div>
        // footer section ends 

    );
};

export default Footer;