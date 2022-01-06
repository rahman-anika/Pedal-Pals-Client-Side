//Pedal Pals Dashboard Responsiveness Updated

import React from "react";
import { Button } from "react-bootstrap";
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";


import useAuth from "../../../hooks/useAuth";
import AddReviews from "../AddReviews/AddReviews";
import DashboardHome from "../DashboardHome/DashboardHome";
import Pay from "../Pay/Pay";
import MyOrders from '../MyOrders/MyOrders';
import AdminRoute from './../../Login/AdminRoute/AdminRoute';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import AddProduct from './../AddProduct/AddProduct';
import { Row, Col } from 'react-bootstrap';
import "./Dashboard.css";
import MakeAdmin from "../MakeAdmin/MakeAdmin";



const Dashboard = () => {

    let { path, url } = useRouteMatch();
    const { admin, logout } = useAuth();


    return (
        <>
            <Row className="dashboard-container m-0 p-0 border-top border-bottom">
                <Col sm={2} className="bg-dark">
                    <Link to={`${url}`}>
                        <h4 className="dashboard-menu pt-5">Dashboard</h4>
                    </Link>





                     {!admin && <Link to={`${url}/pay`}>
                                <li className="dashboard-menu mt-5">Pay</li>
                            </Link>}

                            {!admin && <Link to={`${url}/myOrders`}>
                                <li className="dashboard-menu mt-5">My Orders</li>
                            </Link>}

                            {!admin && <Link to={`${url}/addReviews`}>
                                <li className="dashboard-menu mt-5">Reviews</li>
                            </Link>}






                            {admin && (
                                <Link to={`${url}/manageAllOrders`}>
                                    <li className="dashboard-menu mt-5">Manage All Orders</li>
                                </Link>
                            )}


                            {admin && (
                                <Link to={`${url}/addProduct`}>
                                    <li className="dashboard-menu mt-5">Add Product</li>
                                </Link>
                            )}

                            {admin && <Link to={`${url}/makeAdmin`}>
                                <li className="dashboard-menu mt-5">Make Admin</li>
                            </Link>}


                            {admin && <Link to={`${url}/manageProducts`}>
                                <li className="dashboard-menu mt-5">Manage Products</li>
                            </Link>}
                            <br />
                            <br />

                            <Link to="/">
                                <Button variant="light">Back To HomePage</Button>
                            </Link>

                            <br />
                            <br />

                            <Button onClick={logout} variant="light">Logout</Button>
                    <br />
                    <br />

                </Col>
                <Col sm={10}>
                    <div>
                        <Switch>
                            <Route exact path={path}>
                                <DashboardHome></DashboardHome>
                            </Route>





                            <Route exact path={`${path}/pay`}>
                                <Pay></Pay>
                            </Route>

                            <Route exact path={`${path}/myOrders`}>
                                <MyOrders></MyOrders>
                            </Route>

                            <Route exact path={`${path}/addReviews`}>
                                <AddReviews></AddReviews>
                            </Route>



                            <AdminRoute exact path={`${path}/manageAllOrders`}>
                                <ManageAllOrders></ManageAllOrders>
                            </AdminRoute>

                            <AdminRoute exact path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>
                            <AdminRoute exact path={`${path}/addProduct`}>
                                <AddProduct></AddProduct>
                            </AdminRoute>
                            <AdminRoute exact path={`${path}/manageProducts`}>
                                <ManageProducts></ManageProducts>
                            </AdminRoute>
							
                        </Switch>
                    </div>
                </Col>
            </Row>
        </>
		
    );
};

export default Dashboard;

