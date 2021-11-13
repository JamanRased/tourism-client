import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddServices.css';

const AddServices = () => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/services', data)
        .then(res =>{
           if(res.data.insertedId){
               alert("Successfully added a Service")
               reset();
           }
        })
    }
  console.log(watch("example"));
    return (
        <div className="add-services">
            <h2>Add a Single Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <input {...register("name")} placeholder="Enter Your Full Name " />
                
                <input {...register("Description", { required: true })} placeholder="Description  "  />
                <input type="number" {...register("Price", { required: true })} placeholder="Price"  />
                <input {...register("imageurl", { required: true })} placeholder="image url"  />
        
                {errors && <span>This field is required</span>} 
                <input className="bg-info mb-5" type="submit" />
            </form>
        </div>
    );
};

export default AddServices;