import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from "./../../../hooks/useAuth";
import Header from './../../Shared/Header/Header';
import Footer from './../../Shared/Footer/Footer';
import './Register.css';
import { Alert, Spinner } from 'react-bootstrap';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }


        // if password is less than 6 characters then it shows error 
        if (loginData.password.length < 6) {
            alert('Password must be at least 6 characters');
            return;

        }

        // // if password does not contain two uppercase it shows error using regex

        // if (!/(?=.*[A-Z].*[A-Z])/.test(loginData.password)) {
        //     alert('Password must contain two uppercase');
        //     return;

        // }


        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }

    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }


    return (

        <>

            {/* header section starts  */}
            <Header></Header>
            {/* header section ends  */}


            {/* Registration section starts  */}

            <div className="text-center login-form py-5">

                <div className="mx-5 my-cart">
                    <br />

                    <form onSubmit={handleLoginSubmit}>
                        <input type="text" name="name" onBlur={handleOnBlur} placeholder="name" required />
                        <br />
                        <input type="email" name="email" onBlur={handleOnBlur} placeholder="email" required />
                        <br />
                        <input type="password" name="password" onBlur={handleOnBlur} placeholder="password" required />
                        <br />
                        <input type="password" name="password2" onBlur={handleOnBlur} placeholder="confirm password" required />
                        <br />

                        <p style={{ color: 'red' }}>
                            {/* {error} */}
                        </p>
                        <br />


                        <input className="btn btn-primary" type="submit" placeholder="create" value="Sign Up" />
                        <br />
                    </form>



                    {user?.email && <Alert variant="success">User Created successfully!</Alert>}


                    {authError && <Alert variant="danger">{authError}</Alert>}

                    <br />
                    <br />

                    {/* <button onClick={handleGoogleLogin}>Google Sign In</button> */}

                    {/* Go to login page  */}
                    <p> Already Signed Up ?<Link to="/login">Please Login</Link ></p>



                </div>
            </div>

            {/* Registration section ends  */}


            {/* footer section starts  */}
            <Footer></Footer>
            {/* footer section ends  */}

        </>
    );
};

export default Register;