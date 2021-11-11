import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './ProductDetails.css';



const ProductDetails = () => {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    const { serviceId } = useParams();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    // for getting logged in user 
    const { user } = useAuth();

    // state declaration starts 
    const [data, setData] = useState([]);
    // state declaration ends 

    // data loading starts using Services.json file starts 
    useEffect(() => {
        fetch('https://stark-sea-91201.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    // data loading starts using Services.json file ends 



    // console.log(data[0].id);

    // try to match data 
    const service = data?.filter(sv => sv._id == serviceId);

    console.log(service);


    // handle submit form

    const onSubmit = (orderInfo) => {
        // const data = products[index];

        orderInfo.productName = service[0]?.name;
        orderInfo.price = service[0]?.price;
        orderInfo.category = service[0]?.category;

        // by default pending status 

        orderInfo.status = "pending";

        console.log(orderInfo);


        // Post/place new order

        fetch(`https://stark-sea-91201.herokuapp.com/addOrders`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(orderInfo),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                if (result.insertedId) {
                    alert("Order Confirmed Successfully ");
                } else {
                    alert("Order is not completed");
                }
                reset();
            });
    };



    return (
        <div>
            {/* header section starts */}
            <Header></Header>
            {/* header section ends */}

            <br />
            <br />

            {/* Service Details section starts  */}

            <Row>
                {/* <h1>This is service : {serviceId} </h1> */}

                {/* selected data's image showing starts */}
                <Col>
                    <img width="70%" src={service[0]?.image} alt="" />
                </Col>
                {/* selected data's image showing ends */}

                {/* selected data's details showing starts */}
                <Col className="p-3 mx-5">
                    <h3>Name : {service[0]?.name}</h3>
                    <h3>Price : ${service[0]?.price}</h3>
                    <h3>Category: {service[0]?.category}</h3>
                    <br />
                    <p>{service[0]?.description}</p>

                </Col>
                {/* selected data's details showing ends */}

            </Row>

            {/* Service details section ends  */}


            {/* Confirm booking section starts  */}

            <div className="row col-lg-12 text-center order-confirm-form py-5">
                <div className="my-cart">
                    <h2 className="text-primary">Please Fill Up The Form</h2>

                    <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                        <input defaultValue={user.displayName} {...register("username")} />



                        <input defaultValue={user.email} {...register("email", { required: true })} />

                        <br />

                        {/* <input type="text" value={service[0]?.price} {...register("price", { required: true })} />

                    <br /> */}
                        {errors.email && <span className="error">This field is required</span>}

                        <br />



                        <input placeholder="Address" defaultValue="" {...register("address", { required: true })} />

                        <input placeholder="City" defaultValue="" {...register("city", { required: true })} />

                        <input placeholder="phone number" defaultValue="" {...register("phone", { required: true })} />

                        <br />

                        <input type="text" placeholder="Deprature Date" value={today} {...register("order_date", { required: true })} />

                        <br />

                        <p className="p-2 m-2 w-100">Choose Payment Method</p>

                        <select placeholder="Payment Method" {...register("payment", { required: true })}
                            className="p-2 m-2 w-50"
                        >
                            <option value="cash on delivery">Cash On Delivery</option>

                        </select>
                        <br />



                        <input type="submit" className="btn btn-primary" value="Confirm Order" />
                    </form>
                </div>

            </div>

            {/* Confirm booking section ends  */}



            {/* footer section starts */}
            <Footer></Footer>
            {/* footer section ends */}

        </div >
    );
};

export default ProductDetails;