import React, { useEffect, useState } from 'react';

const MyOrder = () => {
    const email = sessionStorage.getItem("email");
    const [services, setServices] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${email}`)
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, [control]);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/booking/${id}`, {
        method: "DELETE",
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.deletedCount) {
            setControl(!control);
            }
        });
        console.log(id);
    };
    return (
        <div>
            <h1>My orders </h1>
            <div  className=' services bg-warning p-2'>
                <h2 className='p-3 m-3'>Event Manage</h2>
                <div className='bg-info p-5 m-0'>
                    {services.map((services) =>(
                        <div key = {services._id}className='row'>
                            <div className="col-md-12">
                                <div className="d-flex justify-content-between border shadow bg-white rounded m-2 p-2">
                                    <h6>{services?.name}</h6>
                                    <p>{services?.Description}</p>
                                    <h3 className="text-danger"> Price :{services?.Price}Tk</h3>

                                    <button
                                        onClick={() => handleDelete(services?._id)}
                                        className="btn btn-danger">Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyOrder;