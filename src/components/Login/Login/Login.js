import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from "./../../../hooks/useAuth";
import Header from './../../Shared/Header/Header';
import Footer from './../../Shared/Footer/Footer';
import { Alert, Spinner } from 'react-bootstrap';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }

    return (

        <>
            {/* header section starts  */}
            <Header></Header>
            {/* header section ends  */}

            <div className="text-center login-form py-5">

                {/* login form starts  */}
                <div className="mx-5 my-cart">
                    <br />
                    <form onSubmit={handleLoginSubmit}>
                        <h3 className="text-primary">Please Login</h3>
                        <br />

                        {/* Email Input starts  */}
                        <input type="email" name="email" onChange={handleOnChange} placeholder="Email" />
                        <br />
                        {/* Email Input ends  */}

                        {/* Password Input starts  */}
                        <input type="password" name="password" onChange={handleOnChange} placeholder="Password" />
                        <br />
                        <br />
                        {/* Password Input ends  */}

                        {/* showing error starts   */}
                        <div className="row mb-3 text-danger">
                            {/* <p>{error}</p> */}
                        </div>
                        {/* showing error ends  */}

                        {/* login button starts  */}
                        <input type="submit" className="btn btn-primary" value="login" />
                        {/* login button ends  */}


                        {user?.email && <Alert variant="success">Login successfully!</Alert>}
                        {authError && <Alert variant="danger">{authError}</Alert>}

                    </form>

                    <div>
                        --------------------------------------------------
                    </div>

                    {/* Google login starts  */}
                    <h2 className="text-primary">Or</h2>

                    <button onClick={handleGoogleSignIn} className="btn btn-primary"> <i class="fab fa-google"></i> Google Sign In</button>

                    {/* toggle to register page starts  */}
                    <p> New User ?<Link to="/register">Please register</Link ></p>
                    {/* toggle to register page ends  */}

                </div>
            </div>

            {/* footer section starts  */}
            <Footer></Footer>
            {/* footer section ends  */}
        </>
    );
};

export default Login;