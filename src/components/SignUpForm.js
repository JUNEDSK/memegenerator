import React from 'react';
import { useState } from "react";



function SignUpForm(props) {
    /**
*Challenge : Connect the form to Local state
*1. Create a state object to store the 4 va lues we need to save
*2. Create a s1ng le hand LeChange function that can
manage the state of alL the inputs and set it up
*
correct Ly
3. When the user clicks "Sign up", check if the
password & confi rmation match each other. If
so, log "Successfully signedup" to the conso le.
If not, log "passwo rds to not match" to the console .
*4. ALso when submitting the form, 1f the person checked
the "newsletter" checkbox, log "Thanks for signing
*
up for our news letter ! " to the conso le.
*
*/

    const [formData, setformData] = useState(
        {
            UserName: "John",
            PassWord: "",
            ConfirmPassword: "",
            newsLetter: false,
        }
    );

    function handleChange(event) {
        const { type, name, value, checked } = event.target;
        setformData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value,   
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault() 
        // console.log(formData);
        if(formData.PassWord === formData.ConfirmPassword){
            console.log("successfull password")
        }else{
            console.log("password do not match")
            return
        }


        if(formData.newsLetter){
            console.log("thanks for signin up newsletter")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='SignUp' >
                <div className="container">
                    <input type="text" placeholder="Enter Username" name="UserName" onChange={handleChange} value={formData.UserName} />
                    <input type="password" placeholder="Enter Password" name="PassWord" onChange={handleChange} value={formData.PassWord} />
                    <input type="password" placeholder="Confirm Password" name="ConfirmPassword" onChange={handleChange} value={formData.ConfirmPassword} />

                    <div>
                        <input type="checkbox" id="newsLetter" name="newsLetter" onChange={handleChange} checked={formData.newsLetter} /> I want to join the newsletter
                        <label htmlFor="newsLetter">this is checkbox</label>
                    </div>

                    <button type='Submit'>Submit</button>
                </div>
            </div>
        </form>
    );
}

export default SignUpForm;