import React, { useEffect, useState } from 'react';
import './Reviews.css';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Rating from 'react-rating';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Reviews = () => {
    let { isLoading } = useAuth();
    // var Rating = require('react-rating');


    // state declaration starts 
    const [reviews, setReviews] = useState([]);
    // state declaration ends 



    // data load from database/server starts 
    useEffect(() => {
        fetch('https://stark-sea-91201.herokuapp.com/allReviews')
            .then(res => res.json())
            .then(data => setReviews(data));

    }, []);
    // data load from database/server ends 



    if (reviews.length > 0) {
        isLoading = false;

    }

    if (reviews.length === 0) {
        isLoading = true;
    }




    // if loading then shows spinner 

    console.log(reviews);

    // if (isLoading === true) {
    //     return <Spinner animation="border" variant="danger" />
    // }

    return (

        // reviews section starts 
        <div id="reviews" className="container w-100 m-auto p-5 animate__animated animate__jello">

            {/* title starts */}
            <h1 className="service-title">Our Customer's Reviews</h1>

            <p style={{ color: "rgb(19, 113, 150)" }}>

                <small>Customer's satisfaction is our priority</small>


            </p>
            {/* title ends  */}


            {

                isLoading ?
                    <Spinner animation="border" variant="danger" />
                    :
                    ''

            }



            {/* showing all reviews after data loading starts  */}
            <div className="row">

                {reviews?.map((review) => (
                    <div key={review._id} className="col-md-6 col-lg-4 col-sm-12">
                        <div className="review cart service p-3 m-2 border border">


                            {/* reviews info starts  */}
                            <h4 className="mt-4 service-info">{review.name}</h4>

                            <h6 className="mt-4 service-info">Ratings: {review.rating}</h6>

                            <Rating
                                initialRating={review.rating}
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color"
                                readonly
                            />

                            <p className="mt-4 service-info">{review.reviews}</p>






                            {/* service info ends  */}


                        </div>
                    </div>
                ))}
            </div>
            {/* showing all reviews after data loading ends  */}

            <br />
            <br />



        </div>
        // reviews section ends 

    );
};

export default Reviews;