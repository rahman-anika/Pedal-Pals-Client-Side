import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './ManageAllOrders.css';

const ManageAllOrders = () => {
    // state declaration 
    const [orders, setOrders] = useState([]);
    // const [isDelete, setIsDelete] = useState(null);


    // all bookings load from database/server
    useEffect(() => {
        fetch("https://stark-sea-91201.herokuapp.com/allOrders")
            .then((response) => response.json())
            .then((data) => setOrders(data));
    }, []);




    // DELETE an order/booking 

    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `https://stark-sea-91201.herokuapp.com/deleteOrder/${id}`;
            fetch(url, {
                method: 'DELETE'


            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingUsers = orders.filter(order => order._id !== id);
                        setOrders(remainingUsers);



                    }
                })
        }

    };




    return (
        <div>





            {/* Manage all orders section starts  */}
            <h1 className="title animate__animated animate__lightSpeedInRight mt-5">Total Orders:  {orders.length}</h1>
            <br />

            <div className="all-products container m-auto">
                <div className="row container text-center">

                    {/* showing all orders  */}
                    {orders.map((order) => (
                        <div className="col-md-6 col-lg-4">
                            <div className="product border border p-2 m-2">
                                <h4>{order?.username}</h4>
                                <p className="fw-bold">{order?.email}</p>
                                <h5>{order?.productName.slice(0, 22)}</h5>
                                <h6>{order?.category}</h6>
                                <h6>Price: ${order?.price}</h6>
                                <h6>Status: {order?.status}</h6>
                                <h6>Payment: {order?.payment}</h6>
                                <p className="fw-bold">Order Date: {order?.order_date}</p>

                                {/* button for deleting order  */}
                                <button
                                    onClick={() => handleDeleteOrder(order._id)}
                                    className="btn btn-danger m-2"
                                >
                                    Delete
                                </button>


                                {/* button for updating order status  */}
                                <Link to={`/update/${order._id}`}>
                                    <button className="btn btn-success m-2">Update</button>
                                </Link>

                            </div>
                        </div>
                    ))}
                </div>
            </div>




        </div>

        // Manage all orders section ends 

    );

};

export default ManageAllOrders;