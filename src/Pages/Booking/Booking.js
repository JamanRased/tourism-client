import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import Footer from '../Footer/Footer';
import './Booking.css';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    
    const email = sessionStorage.getItem("email");
    useEffect(()=>{
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))
    })
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.email = email;
        data.status = "pending";

        fetch("http://localhost:5000/confirmOrder", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
            })
            .then((res) => res.json())
            .then((result) => console.log(result));
            console.log(data);
        };

    return (
        <div className='p-5'>
            <div className='d-flex '>
                <div className=''>
                    <img className='w-50 h-auto border border-danger' src= {service.imageurl} alt = ''/>
                    <h4>Detailes Of : {service.name}</h4>
                    <h3>Price Of : {service.Price} Tk</h3>
                    
                </div>    
                <div className='order-form'>
                    <h3>Please Submit Your Event</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name")} defaultValue={service?.name} />     
                        <input {...register("Description", { required: true })} placeholder="Description  "  />
                        <input type='date' {...register("Date", { required: true })} placeholder="Date"  />
                        <input type='number' {...register("Number", { required: true })} placeholder="Phone Number"  />
                
                        {errors && <span>This field is required</span>} 
                        <input className="bg-success mb-5" type="submit" value='Subimt Now'/>
                    </form> 
                </div>  
            </div>
            <Footer></Footer>
        </div> 
    );
};

export default Booking;