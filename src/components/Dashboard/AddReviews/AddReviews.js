import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const AddReviews = () => {
    const {
        register,
        handleSubmit,
        reset,

    } = useForm();

    const { user } = useAuth();

    const onSubmit = (data) => {
        fetch("https://stark-sea-91201.herokuapp.com/addReviews", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                // console.log(result);    
                alert('Review posted successfully');
                reset();
            });

        // console.log(data);
    };
    return (
        <div>
            <h1 className="my-5 text-success">Add Review</h1>
            <form onSubmit={handleSubmit(onSubmit)}>


                <span className="fw-bold">Name: </span>
                <input
                    className="input-field"
                    name="name"
                    label="name"
                    value={user?.displayName}
                    type="text"
                    {...register("name", { required: true })}
                />
                <br />

                <span className="fw-bold">Email: </span>
                <input
                    className="input-field"
                    name="email"
                    value={user?.email}
                    type="email"
                    {...register("email", { required: true })}
                />
                <br />




                <span className="fw-bold">Review: </span>
                <input
                    className="input-field"
                    name="reviews"
                    placeholder="Write your review"
                    {...register("reviews", { required: true })}
                />
                <br />


                <span className="fw-bold">Give us Rating: </span>
                <select
                    className="input-field"
                    name="rating"
                    {...register("rating")}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>

                </select>

                <br />



                <input
                    className="submit-btn btn btn-success mt-3"
                    type="submit"
                    value="Submit"
                />
            </form>
        </div>
    );
};

export default AddReviews;