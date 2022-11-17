import React from "react";
import { useState } from "react";

function WatchInput(props) {
  const [formData, setformData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Comments: "",
    isFriendly: true,
    emplyment: "",
    favColor: "",
  });

  //   console.log(formData.favColor);

  function handleChange(event) {
    const {type, value, name, checked } = event.target;
    setformData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event){
    event.preventDefault()
    // submitToApi(formData)
    console.log(formData);
  }
  return (
    <div className="formFlex">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="FirstName"
          value={formData.FirstName}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          name="LastName"
          value={formData.LastName}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="Email"
          value={formData.Email}
        />
        <textarea
          placeholder="Comments"
          onChange={handleChange}
          name="Comments"
          value={formData.Comments}
        />
        <input
          type="checkbox"
          id="isFriendly"
          onChange={handleChange}
          name="isFriendly"
          checked={formData.isFriendly}
        />
        <label htmlFor="isFriendly">this is checkbox</label>

        <input
          type="radio"
          name="emplyment"
          id="Unemployed"
          value="Unemployed"
          onChange={handleChange}
          checked={formData.emplyment === "Unemployed"}
        />
        <label htmlFor="Unemployed">Unemployed</label>

        <input
          type="radio"
          id="part-time"
          name="emplyment"
          value="part-time"
          onChange={handleChange}
          checked={formData.emplyment === "part-time"}
        />
        <label htmlFor="part-time">Part-time</label>

        <input
          type="radio"
          id="full-time"
          name="emplyment"
          value="full-time"
          onChange={handleChange}
          checked={formData.emplyment === "full-time"}
        />
        <label htmlFor="full-time">Full-time</label>

        <select
          id="favColor"
          name="favColor"
          value="favColor"
          onChange={handleChange}
        >
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default WatchInput;
