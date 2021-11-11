import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import './ManageProducts.css';



const ManageProducts = () => {
    // state declaration 
    const [products, setProducts] = useState([]);
    // const [isDelete, setIsDelete] = useState(null);


    // all bookings load from database/server
    useEffect(() => {
        fetch("https://stark-sea-91201.herokuapp.com/allProducts")
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);




    // DELETE a product

    const handleDeleteProduct = id => {
        console.log(id);
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `https://stark-sea-91201.herokuapp.com/deleteProduct/${id}`;
            fetch(url, {
                method: 'DELETE'


            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingProducts = products.filter(product => product._id !== id);
                        setProducts(remainingProducts);



                    }
                })
        }

    };




    return (
        <div>

            {/* Manage all products section starts  */}
            <h1 className="title animate__animated animate__lightSpeedInRight mt-5">Total Products:  {products.length}</h1>
            <br />

            <div className="all-products container m-auto">
                <div className="row container text-center">

                    {/* showing all products  */}
                    {products.map((product) => (
                        <div className="col-md-6 col-lg-4">
                            <div className="product border border p-2 m-2">
                                <img className="manageProduct-image" src={product?.image} alt="" />
                                <h5>{product?.name.slice(0, 22)}</h5>
                                <h5>{product?.category}</h5>

                                <h6>Price: {product?.price}</h6>
                                <h6>{product?.description.slice(0, 70)}..</h6>


                                {/* button for deleting order  */}
                                <button
                                    onClick={() => handleDeleteProduct(product._id)}
                                    className="btn btn-danger m-2"
                                >
                                    Delete
                                </button>


                                {/* button for updating order status  */}
                                {/* <Link to={`/update/${product._id}`}>
                                    <button className="btn btn-success m-2">Update</button>
                                </Link> */}

                            </div>
                        </div>
                    ))}
                </div>
            </div>




        </div>

        // Manage all orders section ends 

    );

};

export default ManageProducts;