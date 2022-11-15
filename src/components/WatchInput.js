import React, { Component } from 'react';
import { useState } from 'react';

function WatchInput(props) {
    const [formData, setformData] = useState(
        {
            FirstName: "",
            LastName: "",
            Email: "",
        }
    );

    console.log(formData);


    function handleChange(event) {
        setformData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })

    }


    return (
        <div>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="FirstName"
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="LastName"
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="Email"
            />
        </div>
    );
}

export default WatchInput;