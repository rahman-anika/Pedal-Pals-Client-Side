import React from 'react';
import './AddProduct.css';
import { useForm } from "react-hook-form";
// import useAuth from '../../../hooks/useAuth';


const AddProduct = () => {

  // const { user } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://stark-sea-91201.herokuapp.com/addProducts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {

        console.log(result);
        alert('Product added successfully');
        reset();

      }

      );



    // console.log(data);
  };


  return (
    <div>
      <div>
        <h1 className="mt-5 text-center text-success">Add new product</h1>
        <div className=" w-25 m-auto mt-5">
          <div className=" ">
            <div className="">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("name")}
                  placeholder="Name"
                  className="p-2 m-2 w-100 input-field"
                />

                <input
                  {...register("description")}
                  placeholder="Description"
                  className="p-2 m-2 w-100 input-field"
                />

                <input
                  {...register("image", { required: true })}
                  placeholder="Image Link"
                  className="p-2 m-2 w-100 input-field"
                />

                <input
                  {...register("price", { required: true })}
                  placeholder="Price"
                  type="number"
                  className="p-2 m-2 w-100 input-field"
                />

                <select {...register("category")} className="p-2 m-2 w-100">
                  <option value="mountain_bikes">Mountain Bikes</option>
                  <option value="road-bikes">Road Bikes</option>
                  <option value="kids-bikes">Kids Bikes</option>
                  <option value="city-hybrid">City Hybrid</option>
                  <option value="electric-bikes">Electric Bikes</option>
                </select>
                <br />

                {errors.exampleRequired && <span>This field is required</span>}

                <input
                  type="submit"
                  value="Add"
                  className="btn btn-success w-50"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;