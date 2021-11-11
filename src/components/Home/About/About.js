import React from 'react';
import './About.css'
import about1 from '../../../images/about/about3.jpg';


const About = () => {
    return (

        // about section starts 

        <div id="about" className="container w-100 m-auto p-5 animate__animated animate__bounce">

            {/* Why choose section starts  */}

            <div className="col-md-12 ">
                <h3 className="about-title">Why Choose Us</h3>
                <small className="about-title">
                    Life is like riding a bicycle. To keep your balance you must keep moving
                </small>
            </div>

            {/* why choose us section ends  */}

            {/* three facilities section starts  */}

            <div className="row">

                <div className="col-md-7">
                    {/* value for money starts  */}
                    <div className="col-md-12 g-4">
                        <div className="d-flex mt-3 about-facilities">
                            <div className="about_us">
                                <i class="fas fa-dollar-sign"></i>
                            </div>
                            <div className="text-start">
                                <h5 className="about-title">Value For Money</h5>
                                <small>We provide our best effort to make your shopping smooth. Because we value for your money.</small><br />
                                {/* <a href="#">Show more </a><button className="showmore_btn"><i class="fas fa-arrow-right"></i></button> */}
                                <span className="text-primary fw-bold">Show more</span> <button className="showmore_btn"> <i class="fas fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                    {/* value for money ends  */}




                    {/* Easy Payment System starts  */}
                    <div className="col-md-12 g-4">
                        <div className="d-flex mt-3 about-facilities">
                            <div className="about_us">
                                <i class="fas fa-calendar-check"></i>

                            </div>
                            <div className="text-start">
                                <h5 className="about-title">Easy Payment System</h5>
                                <small>You can simply confirm your order from our website by paying cash on delivery and e-payment also. It's too easy.</small>

                                <br />

                                <span className="text-primary fw-bold">Show more</span> <button className="showmore_btn"> <i class="fas fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                    {/* Easy Payment System ends  */}




                    {/* Support Team starts  */}
                    <div className="col-md-12 g-4">
                        <div className="d-flex mt-3 about-facilities">
                            <div className="about_us">
                                <i class="fas fa-headset"></i>
                            </div>
                            <div className="text-start">
                                <h5 className="about-title">Support Team</h5>
                                <small>We provide our best mechanics so that your bicycle might be repaired. All our mechanics are well-trained.</small>

                                <br />

                                <span className="text-primary fw-bold">Show more</span> <button className="showmore_btn"> <i class="fas fa-arrow-right"></i></button>

                            </div>
                        </div>
                    </div>
                    {/*Support Team ends  */}

                </div>

                <div className="col-md-5">
                    <img src={about1} className="about-image w-100" alt="" />
                </div>








            </div>

            {/* three facilities section ends  */}

        </div>

        // about section ends 
    );
};

export default About;