import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div className="contact">
            <div className="contact">
                <h1 className="contact-header" >Contact Us</h1>
        
            <div className="contact-form p-3">
                <div className="row  d-flex justify-content-center ">
                    <div className="mt-5">
                        <input
                        className="input-field"
                        type="text"
                        placeholder="Enter Your Name"
                        />
                        <br />
                        <input
                        className="input-field"
                        type="Email"
                        placeholder="Enter Your Email"
                        />
                        <br />
                        <input className="input-btn" type="submit" value="Submit" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Contact;